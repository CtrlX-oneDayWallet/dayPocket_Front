import styled from "styled-components";

export const Container = styled.div`
    padding: 16px;
    min-height: 100vh;
    background: linear-gradient(to bottom, #CDDFFC, ${({ theme }) => theme.gray.white});
`;

export const Logo = styled.div`
    text-align: center;
    margin-top: 48px;
    margin-bottom: 24px;

    svg {
        width: 81px;
        height: auto;
    }
`;

export const Card = styled.div`
    background: ${({ theme }) => theme.gray.white};
    border-radius: 12px;
    padding: 24px;
    text-align: left;
    min-height: 600px;
`;

export const Title = styled.h2`
    font-size: 27px;
    font-weight: 700;
    margin-top: 4px;
`;

export const SubTitle = styled.div`
    font-size: 12px;
    color: ${({ theme }) => theme.gray.gy4};
    margin-bottom: 20px;
`;

export const LinkText = styled.a`
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.primary.pu1};
    text-decoration: underline;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

    label {
        font-size: 14px;
        color: ${({ theme }) => theme.gray.gy6};
    }
`;

export const Input = styled.input`
    padding: 12px 16px;
    border: 1px solid #ddd;
    border-radius: 12px;
    font-size: 16px;
`;

export const PhoneRow = styled.div`
    display: flex;
    gap: 12px;
`;

export const RequestButton = styled.button`
    padding: 0 12px;
    font-size: 14px;
    background-color: ${({ theme }) => theme.primary.pu1};
    color: white;
    border: none;
    border-radius: 8px;
    white-space: nowrap;
`;

export const SubmitButton = styled.button`
    margin-top: 12px;
    padding: 14px;
    font-size: 16px;
    background-color: ${({ theme }) => theme.primary.pu1};
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 600;
`;
