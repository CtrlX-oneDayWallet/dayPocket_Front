import React from "react";
import { useNavigate } from "react-router-dom";

const UserInformationPage = () => {
    const navigate = useNavigate();

    const userInfo = {
        name: "홍길동",
        phone: "(+82) 10-1234-5678",
        account: "110-123-123456",
    };

    return (
        <div>
            <button onClick={() => navigate(-1)}>←</button>
            <h3>이름</h3>
            <p>{userInfo.name}</p>
            <h3>전화번호</h3>
            <p>{userInfo.phone}</p>
            <h3>계좌번호</h3>
            <p>{userInfo.account}</p>
        </div>
    );
};

export default UserInformationPage;