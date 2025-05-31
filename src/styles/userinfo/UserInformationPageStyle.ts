import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
`;

export const Header = styled.div`
    background-color: trasparent;
    padding: 1.2rem 1.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 3vh;
`;

export const Card = styled.div`
    background-color: ${({ theme }) => theme.gray.white};
    width: 100%;
    border-radius: 22px;
    padding: 3vh 3vh;
    height: 80vh;
    display: flex;
    flex-direction: column;
    gap: 1vh;
`;

export const BackButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
`;

export const Label = styled.p`
    font-size: 0.9rem;
    color: #888;
    margin: 1.2rem 0 0.4rem 0;
`;

export const InfoBox = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 12px;
    background: white;
    gap: 0.75rem;
`;

export const InfoText = styled.p`
    font-size: 1rem;
    color: #333;
`;