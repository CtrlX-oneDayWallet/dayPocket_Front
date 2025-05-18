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
    text-align: center;
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
    text-align: center;
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
    gap: 26px;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    
    label {
        font-size: 12px;
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
    padding: 12px 16px;
    background-color: ${({ theme }) => theme.gray.white};
    position: relative;
    
    svg.input-icon {
        width: 20px;
        height: 20px;
        fill: #aaa;
        margin-right: 12px;
    }
    
    svg.clickable {
        cursor: pointer;
        margin-left: auto;
    }
`;

export const Icon = styled.svg`
    width: 20px;
    height: 20px;
    margin-right: 12px;
`;

export const Input = styled.input`
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    background: transparent;
`;

export const CheckboxWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    label {
        font-size: 12px;
        font-weight: 500;
        color: ${({ theme }) => theme.gray.gy4};
    }
`;

export const LoginButton = styled.button`
    background-color: ${({ theme }) => theme.primary.pu1};
    color: ${({ theme }) => theme.gray.white};
    padding: 14px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    margin-top: 6px;
`;