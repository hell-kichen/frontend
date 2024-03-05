import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {tagsApi} from "./shared/api";
import Button from "./components/button";
import Icons from "./components/icons";

function App() {
  useEffect(() => {
    tagsApi.getTags().then((resp) => console.log(resp)).catch((e) => console.log("got error", e))
  }, []);

    const [[buttonState1, buttonState2, buttonState3], setButtonStates] = useState<boolean[]>([false, false, false]);

    const handleButtonClick = (index: number) => {
        setButtonStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

  return (
    <>
        <Button isPressed={buttonState1} btnStyle="btnLight" btnClick={() => handleButtonClick(0)}>
            {buttonState1 ? <Icons.DoneIcon /> : <Icons.PlusIcon/>}
            {buttonState1 ? "Рецепт добавлен" : "Добавить в покупки"}
        </Button>
        <Button isPressed={buttonState2} btnStyle="btnBlue" btnClick={() => handleButtonClick(1)}>
          {buttonState2 ? <Icons.DoneIcon/> : <Icons.PlusIcon stroke="#fff"/>}
          {buttonState2 ? "Рецепт добавлен" : "Добавить в покупки"}
        </Button>
        <Button href="#" btnStyle="btnBlue">Создать аккаунт</Button>
        <Button isPressed={buttonState3} btnStyle="btnLight" btnClick={() => handleButtonClick(2)}>
            {buttonState3 ? "Отписаться от автора" : "Подписаться на автора"}
        </Button>
        <Button btnStyle="btnLightUnsub">Отписаться</Button>
    </>
    );
}

export default App;
