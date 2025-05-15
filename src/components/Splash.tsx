import styled from "styled-components";
import { useEffect, useState } from "react";
import First from "@/assets/splash/192x192.png";
import Second from "@/assets/splash/192x192-korean.png";

const SplashContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #cddffc 0%, #ffffff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Logo = styled.img<{ $visible: boolean; $first: boolean }>`
  width: ${(props) => (props.$first ? "54px" : "217px")};
  position: absolute;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
`;

export default function Splash() {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecond(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SplashContainer>
      <Logo
        src={First}
        alt="하루지갑 로고"
        $visible={!showSecond}
        $first={true}
      />
      <Logo
        src={Second}
        alt="하루지갑 로고"
        $visible={showSecond}
        $first={false}
      />
    </SplashContainer>
  );
}
