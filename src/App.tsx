import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {tagsApi, ingredientsApi} from "./shared/api";
import SignIn from "./pages/signin"


function App() {
    useEffect(() => {


        tagsApi.getTags().then((resp) => console.log(resp)).catch((e) => console.log("got error", e))

        ingredientsApi.getIngredients({}).then((resp) => console.log(resp)).catch((e) => console.log("got error", e))
    }, []);


    return (

        <>
            <SignIn/>

        </>

    );
}

export default App;