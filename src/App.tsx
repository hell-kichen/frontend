import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';
import {MainPage, SingleCard} from "./pages";
import {Footer, Header} from "./components";

function App() {
    // Пока как заглушка
    const loggedIn = false;
    const onSignOut = () => {
        console.log("Выход из системы")
    };

    return (
        <BrowserRouter>
            <Header loggedIn={true} onSignOut={onSignOut}></Header>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/recipes/:id" element={<SingleCard/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;