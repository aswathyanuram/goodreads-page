import React from "react";
import Button from "./Button";
import styled from "styled-components";

export default function Buttons({ buttonDetails }) {
  const { details } = buttonDetails;
  return (
    <Container>
      {details.map((detail) => {
        return <Button detail={detail} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;
