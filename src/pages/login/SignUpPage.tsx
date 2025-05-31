import React from "react";
import SignUpForm from "@/components/login/SignUpForm";
import * as S from "@/styles/login/SignUpPageStyle";
import { ReactComponent as LogoT } from "@/assets/images/logoT.svg";
import { ReactComponent as BackArrow } from "@/assets/icons/arrow-back.svg";
import { Link } from "react-router-dom";

const SignUpPage = () => {
    return (
        <S.Container>
            <S.Logo><LogoT /></S.Logo>
            <S.Card>
                <Link to="/login">
                    <BackArrow style={{ cursor: "pointer", width: "2rem", height: "2rem" }} />
                </Link>
                <S.Title>회원가입</S.Title>
                <S.SubTitle>
                    <span>이미 계정이 있으신가요?</span>
                    <S.LinkText href="/login">로그인</S.LinkText>
                </S.SubTitle>
                <SignUpForm />
            </S.Card>
        </S.Container>
    );
};

export default SignUpPage;