import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: 70px 1fr;
    grid-template-areas:
      'header'
      'content';
`;

export const CSSDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 30px 1fr;
  grid-template-areas:
    'back back'
    'thumbnail details';
  grid-gap: 10px;
  width: 100%;
  padding: 25px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #def;

  .btn-back {
    grid-area: back;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #fff;

      svg {
        margin-right: 10px;
      }
    } 
  }

  .thumbnail {
    grid-area: thumbnail;

    img {
      border-radius: 6px;
      width: 100%;
      height: 100%;
    }
  }

  .details-movie {
    grid-area: details;
    font-size: 18px;
    display: flex;
    padding: 20px;
    flex-direction: column;
    position: relative;

    .genres {
      color: #eee;
      font-size: 16px;
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

      .circle-progress {
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 18px;

        .progress {
          width: 100px;
          height: 70px;
          margin-right: 10px;
        }
      }
    }
  }

  .details-movie::after {
    content: "";
    background-image: url(${props => props.imgBg});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.7;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 6px;
  }
`;
