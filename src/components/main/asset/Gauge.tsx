// components/main/asset/Gauge.tsx
import React from "react";
import { useTheme } from "styled-components";
import { ThemeType } from "@/styles/theme";

const Gauge = ({ percentage = 50 }: { percentage: number }) => {
    const radius = 66;
    const circumference = Math.PI * radius;
    const offset = circumference * (1 - percentage / 100);
    const theme = useTheme() as ThemeType;
    const numDots = 3;
    const centerX = 86;
    const centerY = 80;
    const arcRadius = 40;
    const startAngle = -2.72;
    const endAngle = -0.45;
    const dotElements = [];
    
    for (let i = 0; i < numDots; i++) {
        const angle = startAngle + ((endAngle - startAngle) * i) / (numDots - 1);
        const x = centerX + arcRadius * Math.cos(angle);
        const y = centerY + arcRadius * Math.sin(angle);

        let fillColor = theme.primary.pu2;
        if (percentage >= 75 && i <= 2) fillColor = theme.primary.pu1;
        else if (percentage >= 50 && i <= 1) fillColor = theme.primary.pu1;
        else if (percentage >= 25 && i <= 0) fillColor = theme.primary.pu1;

        dotElements.push(
            <circle key={i} cx={x} cy={y} r="4" fill={fillColor} />
        );
    }

    return (
        <svg 
            viewBox="0 0 175 120" 
            preserveAspectRatio="xMidYMid meet" 
            style={{ width: '100%', height: 'auto' }}
        >
            <path
                d="M12,80 A75,70 0 0 1 160,80"
                stroke={theme.gray.gy1}
                strokeWidth="18"
                fill="none"
                strokeLinecap = "round"
            />
            <path
                d="M12,80 A75,70 0 0 1 160,80"
                stroke= {theme.primary.pu1}
                strokeWidth="18"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 0.3s ease" }}
            />

            {dotElements}

            <g transform="translate(86, 74)">
                <circle 
                    r="22" 
                    fill={theme.gray.gy1} 
                    strokeWidth="2"
                />
                <text
                    x="0"
                    y="4"
                    fontSize="12"
                    textAnchor="middle"
                    fontWeight="bold"
                    fill={theme.gray.black}
                >
                    {percentage}%
                </text>
            </g>
        </svg>
    );
};

export default Gauge;
