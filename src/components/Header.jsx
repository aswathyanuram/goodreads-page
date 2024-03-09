import React from "react";
import Buttons from "./Buttons";
import { FaAmazon } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import styled from "styled-components";

export default function Header() {
  let icon_Amazon = <FaAmazon />;
  let icon_Apple = <FaApple />;
  let icon_Google = <FaGoogle />;

  const buttonDetails = {
    details: [
      {
        icon: icon_Amazon,
        title: "Continue with Amazon",
        btncolor: "#F5D47A",
      },
      {
        icon: icon_Apple,
        title: "Continue with Apple",
        btncolor: "white",
      },
      {
        icon: icon_Google,
        title: "Continue with Google",
        btncolor: "white",
      },
      {
        title: "Sign in with email",
        btncolor: "#382110",
        fcolor: "white",
      },
    ],
  };

  return (
    <HeaderContainer>
      <h1>Sign in to Goodreads</h1>
      <Buttons buttonDetails={buttonDetails}></Buttons>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;
