import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Coins from "./Coins";
import Coin from "./Coin";

interface IRouterProps {
}

const Router = ({}: IRouterProps) => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path='/' element={<Coins />}/>
            <Route path='/:coinId' element={<Coin />} />
        </Routes>
    </BrowserRouter>
);

export default Router;