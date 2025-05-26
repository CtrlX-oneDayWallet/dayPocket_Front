import styled from "styled-components";


export const PageWrapper = styled.div`
    padding: 6vh 5vw;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4vh
`;

export const Title = styled.h2`
    font-size: clamp(1.2rem, 5vw, 2.0rem);
    font-weight: 600;
    color: ${({ theme }) => theme.gray.gy6};
    text-align: left;
    font-family: 'Inter';
    padding: 32px 20px 0;
    line-height: 1.5;
`;

export const Phone = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.gray.gy6};
    text-align: left;
    font-family: 'Inter';
    padding: 0px 20px 0;
`;

export const Left = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 0.2rem;
`;

export const CardBox = styled.div`
    width: 111%;
    background-color: ${({ theme }) => theme.gray.white};
    border-radius: 22px;
    padding: 4vh 4vh;
    display: flex;
    flex-direction: column;
    gap: 3vh;
`;

export const ProfileWrapper = styled.div`
    width: 179px;
    height: 187px;
    margin: 24px auto;
    width: fit-content;
    margin-top: 24px;
    margin-bottom: 12px;
    & > svg {
        width: 179px;
        height: 187px;
    }
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background color: rgba(100, 100, 100, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

export const ModalContent = styled.div`
    background-color: white;
    padding: 2rem 1.5rem;
    border-radius: 16px;
    width: 80%;
    max-width: 320px;
    bow-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

export const ModalTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.75rem;
`;

export const ModalText = styled.p`
    font-size: 0.95rem;
    color: #444;
    margin-bottom: 1.5rem;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const CancelButton = styled.button`
    flex: 1;
    padding: 0.75rem 0;
    background-color: ${({ theme }) => theme.gray.gy1};
    color: #888;
    border: none;
    border-radius: 8px;
    font-weight: bold;
`;

export const ConfirmButton= styled.button`
    flex: 1;
    padding: 0.75rem 0;
    background-color: ${({ theme }) => theme.primary.pu1};
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
`;