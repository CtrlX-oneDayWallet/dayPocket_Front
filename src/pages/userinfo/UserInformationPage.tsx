import * as S from "@/styles/userinfo/UserInformationPageStyle";
import { ReactComponent as BackIcon } from "@/assets/icons/arrow-back.svg";
import { ReactComponent as UserIcon } from "@/assets/icons/user.svg";
import { ReactComponent as DownIcon } from "@/assets/icons/arrow-down.svg";
import { ReactComponent as KoreaIcon } from "@/assets/icons/Asia.svg";
import { ReactComponent as BankIcon } from "@/assets/icons/BankIcon.svg";

const UserInformationPage = ({ setActiveTab }: { setActiveTab: (tab: string) => void }) => {
    return (
        <>
            <S.Header>
                <S.BackButton onClick={() => setActiveTab?.("settings")}>
                    <BackIcon />
                </S.BackButton>
            </S.Header>

            <S.Container>
                <S.Card>
                    <S.Label>이름</S.Label>
                    <S.InfoBox>
                        <UserIcon />
                        <S.InfoText>홍길동</S.InfoText>
                    </S.InfoBox>

                    <S.Label>전화번호</S.Label>
                    <S.InfoBox>
                        <KoreaIcon />
                        <DownIcon />
                        <S.InfoText>(+82) 10-1234-5678</S.InfoText>
                    </S.InfoBox>

                    <S.Label>저장된 계좌정보</S.Label>
                    <S.InfoBox>
                        <BankIcon />
                        <DownIcon />
                        <S.InfoText>110-****-123456</S.InfoText>
                    </S.InfoBox>
                </S.Card>
            </S.Container>
        </>
    );
};

export default UserInformationPage;