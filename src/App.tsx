import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';
import {MainPage, RecipeCreate, SignIn, SignUp, SingleCard} from "./pages";
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
                <Route path="/recipes/create" element={<RecipeCreate/>}></Route>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signin" element={<SignIn/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;