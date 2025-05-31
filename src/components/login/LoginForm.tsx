import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as S from "@/styles/login/LoginPageStyle";
import { ReactComponent as UserSvg } from "@/assets/icons/user.svg";
import { ReactComponent as EyeOffSvg } from "@/assets/icons/eye-off.svg";
import { ReactComponent as VisibleSvg } from "@/assets/icons/visibility.svg";
import axiosInstance from "@/lib/axionsInstance";

export const UserIcon = styled(UserSvg)`
    width: 1.2rem;
    height: 1.2rem;
    flex-shrink: 0;
`;

export const EyeOffIcon = styled(EyeOffSvg)`
    width: 1.2rem;
    height: 1.2rem;
    flex-shrink: 0;
`;

export const VisibleIcon = styled(VisibleSvg)`
    width: 1.2rem;
    height: 1.2rem;
    flex-shrink: 0;
`;

const LoginForm = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [keepLogin, setKeepLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const formatPhoneNumber = (value: string) => {
        const digitsOnly = value.replace(/\D/g, "");

        if (digitsOnly.length <= 3) return digitsOnly;
        if (digitsOnly.length <= 7) {
            return `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3)}`;
        }
        return `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3, 7)}-${digitsOnly.slice(7, 11)}`;
    };


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post("/auth/login", {
                phoneNumber: phone,
                password: password,
            }, {
                withCredentials: true
            });

            const token = response.headers['authorization']?.split(" ")[1];

            console.log("🔐 응답 전체:", response);
            console.log("📦 Authorization 헤더:", response.headers['authorization']);
            console.log("✅ 추출된 토큰:", token);
            
            if (token) {
                localStorage.setItem("token", token);
            }

            setError("");
            navigate("/main");
        }
        catch (error: any) {
            setError("전화번호 또는 비밀번호가 잘못되었습니다.");
        }
    };

    return (
        <S.Form onSubmit={handleLogin}>
            <S.InputGroup>
                <label>전화번호</label>
                <S.InputWrapper>
                    <UserIcon className="input-icon" />
                    <S.Input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                    />
                </S.InputWrapper>
            </S.InputGroup>
            <S.InputGroup>
                <label>비밀번호</label>
                <S.InputWrapper>
                    <UserIcon className="input-icon" />
                    <S.Input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {showPassword ? (
                        <VisibleIcon className="input-icon clickable" onClick={() => setShowPassword(false)} />
                    ) : (
                        <EyeOffIcon className="input-icon clickable" onClick={() => setShowPassword(true)} />
                    )}
                </S.InputWrapper>
            </S.InputGroup>

            <S.CheckboxWrapper>
                <label>
                    <input
                        type="checkbox"
                        checked={keepLogin}
                        onChange={() => setKeepLogin(!keepLogin)}
                    />
                    로그인 상태 유지
                </label>
                <S.LinkText href="#">비밀번호 찾기</S.LinkText>
            </S.CheckboxWrapper>

            {error && <S.ErrorText>{error}</S.ErrorText>}
            <S.LoginButton type="submit">로그인</S.LoginButton>
        </S.Form>
    )
}

export default LoginForm;