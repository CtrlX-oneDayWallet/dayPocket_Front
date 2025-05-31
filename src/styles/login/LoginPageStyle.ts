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
    text-align: center;
    height: 75vh;
`;

export const Title = styled.h2`
    font-size: 1.7rem;
    font-weight: 700;
    margin-top: 0.3rem;
`;

export const SubTitle = styled.div`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.gray.gy4};
    margin-bottom: 20px;
    text-align: center;
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
    gap: 2.5vw;
    
    label {
        font-size: 3vw;;
        color: ${({ theme }) => theme.gray.gy4};
        font-weight: 600;
        text-align: left;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 2.5vw 2vh;
    background-color: ${({ theme }) => theme.gray.white};
    position: relative;
    gap: 2vw;
`;


export const Input = styled.input`
    flex: 1;
    padding: 0.1rem;
    border: none;
    font-size: 1rem;
    background: transparent;
    margin-left: -2vw;
`;

export const CheckboxWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    label {
        font-size: 0.75rem;
        font-weight: 500;
        color: ${({ theme }) => theme.gray.gy4};
    }
`;

export const LoginButton = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.primary.pu1};
    color: ${({ theme }) => theme.gray.white};
    padding: 1rem;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    cursor: pointer;
    margin-top: 6px;
`;

export const ErrorText = styled.p`
    color: #FF4D4F;
    font-size: 0.7rem;
    margin-top: -3vh;
`;