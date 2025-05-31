import React from "react";
import LoginForm from "@/components/login/LoginForm";
import * as S from "@/styles/login/LoginPageStyle";
import { ReactComponent as LogoT } from "@/assets/images/logoT.svg";

const LoginPage = () => {

    return (
        <S.Container>
            <S.Logo><LogoT /></S.Logo>
            <S.Card>
                <S.Title>
                    로그인
                </S.Title>
                <S.SubTitle>
                    <span>아직 회원이 아니신가요?</span>
                    <S.LinkText href="/signup">회원가입</S.LinkText>
                </S.SubTitle>
                <LoginForm />
            </S.Card>
        </S.Container>
    );
};

export default LoginPage;