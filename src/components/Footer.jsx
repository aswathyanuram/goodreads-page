import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <a>Get help with signing in</a>
      </div>
      <div>
        Not a member?
        <a>Sign up</a>
      </div>
      <div>
        By creating an account, you agree to the Goodreads
        <a>Terms of Service </a> and <a> Privacy Policy</a>.
      </div>
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;

  & a {
    color: #00635d;
    margin-left: 0.5rem;
  }
  & div {
    margin-bottom: 1rem;
  }
`;
