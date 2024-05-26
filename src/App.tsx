import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';
import {MainPage, SignUp, SingleCard} from "./pages";
import {Footer, Header} from "./components";


function App() {
    const onSignOut = () => {
        console.log("Выход из системы")
    };

    return (
        <BrowserRouter>
            <Header loggedIn={false} onSignOut={onSignOut}></Header>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/recipes/:id" element={<SingleCard/>}/>
                <Route path="/signup" element={<SignUp/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;