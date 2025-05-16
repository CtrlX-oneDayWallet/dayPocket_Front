import styled from "styled-components";

export const Container = styled.div`
    padding: 24px;
`;

export const Greeting = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 24px;
`;

export const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const MenuItem = styled.button<{ danger?: boolean }>`
    background: ${({ danger }) => (danger ? "#ffecec" : "#f9f9f9")};
    color: ${({ danger }) => (danger ? "#e74c3c" : "#333")};
    border: none;
    border-radius: 12px;
    padding: 14px 18px;
    font-size: 15px;
    text-align: left;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
        background: ${({ danger }) => (danger ? "#ffdcdc" : "#eee")};
    }
`;
