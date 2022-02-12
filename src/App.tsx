import React, {useState} from 'react';
import styled from "styled-components";


function App() {
    const Container = styled.div`
      background-color: ${props => props.theme.bgColor}
    `
    const H1 = styled.h1`
    color: ${props => props.theme.textColor};
    `
    return (
        <Container>
            <H1> Hello, Styled Component Theme? </H1>
        </Container>
    );
}

export default App;
