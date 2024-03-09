import React from "react";
import styled from "styled-components";

export default function Button({ detail }) {
  const { icon, title, btncolor, fcolor } = detail;
  return (
    <SingleButton>
      <button style={{ backgroundColor: btncolor, color: fcolor }}>
        <Icon>{icon}</Icon>
        {title}
      </button>
    </SingleButton>
  );
}

const SingleButton = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  & button {
    min-width: 300px;
    min-height: 50px;
    padding: 0.2rem 0rem;
    margin: 0.2rem 0rem;
    border-radius: 5px;
    border-color: #b38b22;
    border-width: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
    }
  }
`;
const Icon = styled.div`
  font-size: 1.5rem;
  padding: 0rem 1rem;
`;
