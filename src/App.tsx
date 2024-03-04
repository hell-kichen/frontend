import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {tagsApi} from "./shared/api";
import Button from "./components/button";

function App() {
  useEffect(() => {
    tagsApi.getTags().then((resp) => console.log(resp)).catch((e) => console.log("got error", e))
  }, []);

  const [buttonStates, setButtonStates] = useState([false, false]);

  const handleButtonClick = (index: number) => {
    setButtonStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <>
      <Button isPressed={buttonStates[0]} btnStyle="btnLight" btnClick={() => handleButtonClick(0)}>
        {buttonStates[0] ? "Рецепт добавлен" : "Добавить в покупки"}
      </Button>
      <Button isPressed={buttonStates[1]} btnStyle="btnBlue" btnClick={() => handleButtonClick(1)}>
        {buttonStates[1] ? "Рецепт добавлен" : "Добавить в покупки"}
      </Button>
      <Button btnStyle="btnBlue">Создать аккаунт</Button>
      <Button btnStyle="btnLight">Подписаться на автора</Button>
      <Button btnStyle="btnLight">Отписаться</Button>
      <Button btnStyle="btnBlue">Скачать список</Button>
    </>
    );
}

export default App;
