import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FAFAFA;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 40%;
    min-height: 350px;
`;

export const Row = styled.div `
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;

export const Column = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`;
