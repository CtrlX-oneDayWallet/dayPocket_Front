import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as S from "@/styles/login/SignUpPageStyle";
import { ReactComponent as UserSvg } from "@/assets/icons/user.svg";
import { ReactComponent as EyeOffSvg } from "@/assets/icons/eye-off.svg";
import { ReactComponent as VisibleSvg } from "@/assets/icons/visibility.svg";
import axiosInstance from "@/lib/axionsInstance";

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
    const [isPhoneValid, setIsPhoneValid] = useState<boolean | null>(null);
    const [isCodeValid, setIsCodeValid] = useState<boolean | null>(null);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean | null>(null);
    const navigate = useNavigate();

    const validatePhone = (phone: string) => {
        const cleaned = phone.replace(/-/g, "");
        const phoneRegex = /^[0-9]{10,11}$/;
        if (!phoneRegex.test(cleaned)) {
            setPhoneError("전화번호가 올바르지 않습니다");
            setIsPhoneValid(false);
            return false;
        }

        if (cleaned === "01012345678") {
            setPhoneError("이미 사용 중인 전화번호입니다");
            setIsPhoneValid(false);
            return false;
        }

        setPhoneError("가입 가능한 전화번호입니다");
        setIsPhoneValid(true);
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

    const formatPhoneNumberWithHyphen = (phone: string): string => {
        if (phone.length === 11) {
            return `${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(7, 11)}`;
        }
        else if (phone.length === 10) {
            return `${phone.slice(0, 2)}-${phone.slice(2, 6)}-${phone.slice(6, 10)}`;
        }
        else {
            return phone;
        }
    }

    const handleRequestVerify = async () => {
        const formattedPhone = formatPhoneNumberWithHyphen(phone);
        try {
            const response = await axiosInstance.post("/auth/phoneNumber", null, {
                params: {
                    phoneNumber: formattedPhone,
                }
            });

            if (response.status === 200 || response.data === "Verification Code Sent") {
                setPhoneError("인증번호가 전송되었습니다");
                setIsPhoneValid(true);
            }
            else {
                setPhoneError("알 수 없는 오류 입니다");
                setIsPhoneValid(false);
            }
        }
        catch (error: any) {
            console.error("응답 오류: ", error.response?.data);
            setPhoneError(error.response?.data?.message || "인증번호 전송에 실패했습니다");
            setIsPhoneValid(false);
        }
    };


    const handleCheckCode = async () => {
        const formattedPhone = formatPhoneNumberWithHyphen(phone);

        if (isCodeValid === true) return;

        try {
            const response = await axiosInstance.get("/auth/auth-code", {
                params: {
                    authCode: code.trim(),
                    phoneNumber: formattedPhone,
                },
            });

            if (response.status === 200 || response.data === "Auth Code is Verified!") {
                setCodeMessage("인증 완료");
                setIsCodeValid(true);
            }
            else {
                setCodeMessage("인증번호가 일치하지 않습니다");
                setIsCodeValid(false);
            }
        }
        catch (error) {
            setCodeMessage("인증번호가 일치하지 않거나 유효하지 않습니다");
            setIsCodeValid(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const isPhoneValidNow = validatePhone(phone);
        const isPasswordValidNow = validatePassword(password);
        const formattedPhone = formatPhoneNumberWithHyphen(phone);

        if (!isPhoneValidNow || !isPasswordValidNow || !isCodeValid) return;

        try {
            await axiosInstance.post("/auth/signup", {
                name,
                phoneNumber: formattedPhone,
                password,
            });

            alert("회원가입 성공! 로그인 페이지로 이동합니다.");
            navigate("/login");
        }
        catch (error: any) {
            if (error.response) {
                // 서버가 응답을 준 경우 (500, 400, 403 등)
                console.error("🛠️ 서버 응답 에러:", error.response.status, error.response.data);
            } else if (error.request) {
                // 서버에 요청은 보냈으나 응답을 못 받은 경우
                console.error("📡 응답 없음. 요청 객체:", error.request);
            } else {
                // 요청 자체가 잘못된 경우 (코드 오류 등)
                console.error("❗ 요청 생성 중 오류:", error.message);
            }
        alert("서버 오류로 회원가입에 실패했습니다.");
        }
    };

    return (
        <S.Form onSubmit={handleSubmit}>
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
                        <S.Input value={phone} onChange={(e) => {
                            const value = e.target.value;
                            setPhone(value);
                            validatePhone(value);
                            }} 
                        />
                    </S.PhoneWrapper>
                    <S.RequestButton onClick={handleRequestVerify}>인증</S.RequestButton>
                </S.FlexRow>
                <S.CodeConfirmText $valid={isPhoneValid}>
                    {phoneError}
                </S.CodeConfirmText>


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

            <S.SubmitButton type="submit">
                확인
            </S.SubmitButton>
        </S.Form>
    )
}

export default SignUpForm