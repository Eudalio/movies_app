import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: 70px 1fr;
    grid-template-areas:
      'header'
      'content';
    grid-row-gap: 10px;
    background-color: whitesmoke;
`;

export const CSSDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    'thumbnail details';
  grid-gap: 10px;
  max-width: 80%;
  /* background-color: violet; */

  .thumbnail {
    grid-area: thumbnail;

    img {
      border-radius: 6px;
      width: 100%;
      max-height: 420px;
    }
  }

  .details-movie {
    grid-area: details;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    /* background-color: wheat; */

    h3 {
      margin-top: 15px;
    }

    span {
      text-align: justify;
      /* font-weight: bold */
    }
  }

  .circle-progress {
    text {
      font-size: 16;
    }
  }
`;
