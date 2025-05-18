import React, { useState } from "react";
import * as S from "@/styles/login/SignUpPageStyle";

const SignUpForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");

    return (
        <S.Form>
            <S.InputGroup>
                <label>이름</label>
                <S.Input value={name} onChange={(e) => setName(e.target.value)} />
            </S.InputGroup>

            <S.InputGroup>
                <label>전화번호</label>
                <S.PhoneRow>
                    <S.Input value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <S.RequestButton>인증</S.RequestButton>
                </S.PhoneRow>
            </S.InputGroup>

            <S.InputGroup>
                <label>인증번호</label>
                <S.Input value={code} onChange={(e) => setCode(e.target.value)} />
            </S.InputGroup>

            <S.InputGroup>
                <label>비밀번호</label>
                <S.Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </S.InputGroup>

            <S.SubmitButton>확인</S.SubmitButton>
        </S.Form>
    )
}

export default SignUpForm