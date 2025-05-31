import React from "react";
import * as S from "@/styles/main/settings/SettingsCardStyle";
import { ReactElement } from "react";

interface Props {
    icon: ReactElement;
    label: string;
    onClick?: () => void;
}

const SettingsCard = ({ icon, label, onClick }: Props) => {
    return (
        <S.Card onClick={onClick}>
            <S.Left>
                <S.IconWrapper>{icon}</S.IconWrapper>
                <S.Label>{label}</S.Label>
            </S.Left>
        </S.Card>
    );
};

export default SettingsCard;