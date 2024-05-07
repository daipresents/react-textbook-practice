/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {

  // scss style
  const containerStyle = css`
    border: solid 1px #aaa;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  // inline style
  const titleStyle = css({
    margin: 0,
    color: "#aaa"
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotionです</p>
      <SButton>ボタン</SButton>
    </div>
  );
};

// styled-components
const SButton = styled.button`
  background-color: #ddd;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }
`;
