import React from "react";
import * as S from "@/styles/main/settings/SettingsCardStyle";
import { ReactElement } from "react";

interface Props {
    icon: ReactElement;
    label: string;
}

const SettingsCard = ({ icon, label }: Props) => {
    return (
        <S.Card>
            <S.Left>
                <S.IconWrapper>{icon}</S.IconWrapper>
                <S.Label>{label}</S.Label>
            </S.Left>
        </S.Card>
    );
};

export default SettingsCard;