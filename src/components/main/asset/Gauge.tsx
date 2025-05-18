// components/main/asset/Gauge.tsx
import React from "react";

const Gauge = ({ percentage = 50 }: { percentage: number }) => {
    const radius = 50;
    const circumference = Math.PI * radius;
    const offset = circumference * (1 - percentage / 100);

    return (
        <svg width="305" height="210" viewBox="0 0 175 120">
            <path
                d="M10,80 A75,70 0 0 1 150,80"
                stroke="#eee"
                strokeWidth="16"
                fill="none"
                strokeLinecap="round"
            />
            <path
                d="M10,80 A75,70 0 0 1 150,80"
                stroke="#7079F6"
                strokeWidth="16"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 0.3s ease" }}
            />
            <text
                x="50%"
                y="65%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="18"
                fontWeight="bold"
                fill="#7079F6"
            >
                {percentage}%
            </text>
        </svg>
    );
};

export default Gauge;
