import * as S from "./Button.styles";
import { ButtonProps } from "./Button.types";

export default function Button({
  label,
  icon,
  onClick,
  disabled,
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onClick?.(e);
  };
  return (
    <S.ButtonContainer onClick={(e) => handleClick(e)} disabled={disabled}>
      {icon && <S.IconWrap>{icon}</S.IconWrap>}
      <S.ButtonText>{label}</S.ButtonText>
    </S.ButtonContainer>
  );
}
