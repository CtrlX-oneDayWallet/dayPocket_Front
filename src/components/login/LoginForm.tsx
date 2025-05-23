import React, { useState } from "react";
import styled from "styled-components";
import * as S from "@/styles/login/LoginPageStyle";
import { ReactComponent as UserSvg } from "@/assets/icons/user.svg";
import { ReactComponent as EyeOffSvg } from "@/assets/icons/eye-off.svg";
import { ReactComponent as VisibleSvg } from "@/assets/icons/visibility.svg";

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
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [keepLogin, setKeepLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <S.Form>
            <S.InputGroup>
                <label>전화번호</label>
                <S.InputWrapper>
                    <UserIcon className="input-icon" />
                    <S.Input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
            <S.LoginButton>로그인</S.LoginButton>
        </S.Form>
    )
}

export default LoginForm;