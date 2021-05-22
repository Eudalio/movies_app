import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: 70px 1fr;
    grid-template-areas:
      'header'
      'content';
    /* grid-row-gap: 10px; */
    /* background-color: whitesmoke; */
    /* background-color: rgba(0, 0, 0, 0.6); */

`;

export const CSSDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    'thumbnail details';
  grid-gap: 10px;
  width: 100%;
  /* max-width: 80%; */
  /* max-height: 400px; */
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #def;

  .btn-back a{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
  }

  .thumbnail {
    grid-area: thumbnail;

    img {
      border-radius: 6px;
      width: 100%;
      height: 100%;
      /* max-height: 380px; */
    }
  }

  .details-movie::after {
    content: "";
    background-image: url(${props => props.imgBg});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.8;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 7px;
  }

  .details-movie {
    grid-area: details;
    font-size: 16px;
    display: flex;
    padding: 20px;
    flex-direction: column;
    position: relative;

    .genres {
      color: #eee;
      font-size: 14px;
    }

    .year {
      font-size: 28px;
    }

    h3 {
      margin-top: 15px;
      margin-bottom: 7px;
    }

    span {
      text-align: justify;
    }

    .infos {
      width: 100%;
      margin-top: 15px;
      /* background-color: teal; */

      .circle-progress {
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;

        .progress {
          width: 100px;
          height: 70px;
          margin-right: 10px;
        }
        
      }
    }
  }

`;
