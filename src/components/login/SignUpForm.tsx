import React, { useState } from "react";
import styled from "styled-components";
import * as S from "@/styles/login/SignUpPageStyle";
import { ReactComponent as UserSvg } from "@/assets/icons/user.svg";
import { ReactComponent as EyeOffSvg } from "@/assets/icons/eye-off.svg";
import { ReactComponent as VisibleSvg } from "@/assets/icons/visibility.svg";

export const UserIcon = styled(UserSvg)`
    width: 1.2rem;
    height: 1.2rem;
    flex-shrink: 0;
    display: block;
    vertical-align: middle;
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

const countryOptions = ["+82", "+1", "+81", "+86"];

const SignUpForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [countryCode, setCountryCode] = useState("+82");
    const [phoneError, setPhoneError] = useState("");
    const [codeMessage, setCodeMessage] = useState("");
    const [isCodeValid, setIsCodeValid] = useState<boolean | null>(null);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean | null>(null);

    const validatePhone = (phone: string) => {
        const phoneRegex = /^[0-9]{10, 11}$/;
        if (!phoneRegex.test(phone)) {
            setPhoneError("전화번호가 올바르지 않습니다");
            return false;
        }

        if (phone === "01012345678") {
            setPhoneError("이미 사용 중인 전화번호입니다");
            return false;
        }

        setPhoneError("");
        return true;
    };

    const validateCode = (code: string) => {
        const CORRECT_CODE = "123456"; //예시

        if (code !== CORRECT_CODE) {
            setCodeMessage("인증번호가 일치하지 않습니다");
            setIsCodeValid(false);
            return false;
        }

        const isExpired = false;
        if (isExpired) {
            setCodeMessage("인증번호의 유효기간이 만료되었습니다");
            setIsCodeValid(false);
            return false;
        }

        setCodeMessage("인증 완료");
        setIsCodeValid(true);
        return true;
    };

    const validatePassword = (password: string) => {
        const lengthValid = password.length >= 8;
        const hasLetter = /[a-zA-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[^a-zA-Z0-9]/.test(password);

        const count = [hasLetter, hasNumber, hasSymbol].filter(Boolean).length;

        const valid = lengthValid && count >= 2;
        setIsPasswordValid(valid);

        return valid;
    };

    const handleRequestVerify = () => {
        validatePhone(phone);
    };

    const handleCheckCode = () => {
        validateCode(code);
    };

    return (
        <S.Form>
            <S.InputGroup>
                <label>이름</label>
                <S.InputWrapper>
                    <UserIcon className="input-icon" />
                    <S.Input value={name} onChange={(e) => setName(e.target.value)} />
                </S.InputWrapper>

                <label>전화번호</label>
                <S.FlexRow>
                    <S.PhoneWrapper>
                        <S.Select
                            value={countryCode}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCountryCode(e.target.value)}
                        >
                            {countryOptions.map((code) => (
                                <option key={code} value={code}>{code}</option>
                            ))}
                        </S.Select>
                        <S.Input value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </S.PhoneWrapper>
                    <S.RequestButton onClick={handleRequestVerify}>인증</S.RequestButton>
                </S.FlexRow>
                {phoneError && <S.ErrorText>{phoneError}</S.ErrorText>}


                <label>인증번호</label>
                <S.FlexRow>
                    <S.InputWrapper>
                        <S.Input value={code} onChange={(e) => setCode(e.target.value)} />
                    </S.InputWrapper>
                    <S.RequestButton onClick={handleCheckCode}>인증번호 확인</S.RequestButton>
                </S.FlexRow>
                <S.CodeConfirmText $valid={isCodeValid}>
                    {codeMessage}
                </S.CodeConfirmText>

                <label>비밀번호</label>
                <S.InputWrapper>
                    <S.Input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => {
                            const pw = e.target.value;
                            setPassword(pw);
                            validatePassword(pw);
                        }}
                    />
                    {showPassword ? (
                        <VisibleIcon className="input-icon clickable" onClick={() => setShowPassword(false)} />
                    ) : (
                        <EyeOffIcon className="input-icon clickable" onClick={() => setShowPassword(true)} />
                    )}
                </S.InputWrapper>
                <S.PasswordConfirmText $valid={isPasswordValid}>
                    {isPasswordValid === true
                        ? "사용 가능한 비밀번호입니다"
                        : "비밀번호는 8자 이상에 영문, 숫자, 기호 중 2개 이상을 섞어야 합니다"}
                </S.PasswordConfirmText>
            </S.InputGroup>

            <S.SubmitButton>확인</S.SubmitButton>
        </S.Form>
    )
}

export default SignUpForm