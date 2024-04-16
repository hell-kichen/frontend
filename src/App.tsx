import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {tagsApi} from "./shared/api";
import Button from "./ui/button";
import Icons from "./ui/icons";
import Checkbox from "./ui/checkbox";
import Input from "./ui/input";
import Textarea from "./ui/textarea";
import Container from "./components/container"
import FileInput from "./ui/file-input";

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

    const [breakfastChecked, setBreakfastChecked] = useState(false);
    const [lunchChecked, setLunchChecked] = useState(false);
    const [dinnerChecked, setDinnerChecked] = useState(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log('Textarea value changed:', e.target.value);
    };

    const handleFileChange = (file: string | ArrayBuffer | null) => {
        console.log('Selected file:', file);
    };

    return (
        <>
            <Checkbox
                name="Завтрак"
                id="breakfast"
                color="orange"
                value={breakfastChecked}
                onChange={(id) => setBreakfastChecked(prevState => !prevState)}
            />
            <Checkbox
                name="Обед"
                id="lunch"
                color="green"
                value={lunchChecked}
                onChange={(id) => setLunchChecked(prevState => !prevState)}
            />
            <Checkbox
                name="Ужин"
                id="dinner"
                color="purple"
                value={dinnerChecked}
                onChange={(id) => setDinnerChecked(prevState => !prevState)}
            />

            <Button isPressed={buttonState1} btnStyle="btnLight" btnClick={() => handleButtonClick(0)}>
                {buttonState1 ? <Icons.DoneIcon/> : <Icons.PlusIcon/>}
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

            <Container>
                <Input
                    onChange={handleChange}
                    label="Введите что-нибудь"
                    value=""
                />
                <Textarea label="Введите что-нибудь" onChange={handleChangeTextarea}></Textarea>
            </Container>
            <div>
                <FileInput
                    label="Выберите файл:"
                    onChange={handleFileChange}
                />
            </div>
        </>
    );
}

export default App;