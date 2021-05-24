import styled from 'styled-components';

export const CSSHeader = styled.header`
  grid-area: header;
  background-color: #F0131E;
  display: flex;
  flex-wrap: 'wrap';
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 0px 20px;

  img {
    max-height: 75%;
    max-width: 150px;
  }

  input {
    width: 200px;
    height: 30px;
    padding: 10px;
    border-radius: 3px;
    border: none;
    font-size: 16px;
  }
`;
