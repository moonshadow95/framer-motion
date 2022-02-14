import React, {useEffect, useState} from 'react';
import {Link, RouteObject, useLocation, useParams} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  font-size: 48px;
  color: ${props => props.theme.accentColor};
`

const Loader = styled.span`
  font-size: 32px;
  color: ${props => props.theme.accentColor};
`

interface RouteParams {
    coinId?: string
}

interface RouteState {
    state: {
        name: string
    }
}


const Coin = () => {
    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState({})
    const [price, setPrice] = useState({})
    const {coinId} = useParams() as RouteParams
    const {state} = useLocation() as RouteState

    useEffect(() => {
        (async () => {
            const infoData = await (
                (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`))
            ).json()
            const priceData = await (
                await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
            ).json()
            setInfo(infoData)
            setPrice(priceData)
        })()
    }, []);
    return (
        <Container>
            <Header>
                <Title>{state?.name || "Loading..."}</Title>
            </Header>
            {loading ?
                <Loader>Loading...</Loader> : null
            }
        </Container>
    )
}
export default Coin;
