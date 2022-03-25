import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Timer } from '../Components/Timer';

export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Timer/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
