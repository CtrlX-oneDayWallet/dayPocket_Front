import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2vh 5vw;
    gap: 4vh;
    background: linear-gradient(to bottom, #CDDFFC, ${({ theme }) => theme.gray.white});
`;

export const Logo = styled.div`
    text-align: center;
    margin-top: 6vh;

    svg {
        width: 30%;
        height: auto;
    }
`;

export const Card = styled.div`
    background: ${({ theme }) => theme.gray.white};
    width: 105%;
    border-radius: 12px;
    padding: 1.5rem;
    text-align: left;
    min-height: 600px;
`;

export const Title = styled.h2`
    font-size: 1.7rem;
    font-weight: 700;
    margin-top: 0.8vh;
`;

export const SubTitle = styled.div`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.gray.gy4};
    margin-bottom: 20px;
`;

export const LinkText = styled.a`
    margin-left: 1vw;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.primary.pu1};
    text-decoration: underline;
`;

export const Form = styled.form`
    margin-top: 4vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5vw;
    
    label {
        font-size: 3vw;;
        color: ${({ theme }) => theme.gray.gy4};
        font-weight: 600;
        text-align: left;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    min-width: 0;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 0.1rem 0.8rem;
    background-color: ${({ theme }) => theme.gray.white};
    position: relative;
`;

export const FlexRow = styled.div`
    display: flex;
    gap: 4vw;
    margin-bottom: 1.3rem;
`;

export const PhoneWrapper = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    min-width: 0;
    border: 1px solid #ddd;
    border-radius: 12px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.gray.white};
`;

export const Input = styled.input`
    flex: 1;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 0;
    outline: none;
    font-size: 1rem;
    background-color: transparent;
    box-sizing: border-box;
`;

export const Select = styled.select`
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 0;
    background-color: transparent;
    font-size: 1rem;
    outline: none;
    appearance: none;
    border-right: 1px solid #ddd;
`;

export const RequestButton = styled.p`
    min-width: 0;
    padding: 0.75rem 1rem;
    padding: 1.5vh;
    font-size: 0.95rem;
    background-color: transparent;
    color: #ACB5BB;
    border: 1px solid ${({ theme }) => theme.gray.gy3};
    border-radius: 0.625rem;
    white-space: nowrap;
    flex-shrink: 0;
    height: 100%;
`;

export const SubmitButton = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.primary.pu1};
    color: ${({ theme }) => theme.gray.white};
    padding: 1rem;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    cursor: pointer;
    margin-top: 0.5vh;
`;

export const ErrorText = styled.p`
    color: #FF4D4F;
    font-size: 0.7rem;
    margin-top: -3vh;
`;

export const CodeConfirmText = styled.p<{ $valid: boolean | null }>`
    font-size: 0.7rem;
    margin: -5.5vw 0 0;
    color: ${({ $valid, theme }) =>
        $valid === true
        ? "#2e7d32"
        : "#FF4D4F"};
`;

export const PasswordConfirmText = styled.p<{ $valid: boolean | null }>`
    font-size: 0.7rem;
    margin: -0.5vw 0 0;
    color: ${({ $valid, theme }) =>
        $valid === true
        ? "#2e7d32"
        : "#FF4D4F"};
`;