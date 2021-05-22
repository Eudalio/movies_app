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