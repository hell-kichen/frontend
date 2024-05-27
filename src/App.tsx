import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import './App.css';
import styles from "./styles.module.css";
import {MainPage, SingleCard} from "./pages";
import {Footer, Header} from "./components";
import {authApi, recipesApi, usersApi} from "./shared/api";
import {SignupResponse} from "./shared/api/users/models";
import {AuthContext, UserContext} from "./contexts";

function App() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<SignupResponse | null>(null)
    const [orders, setOrders] = useState<number>(0)

    const navigate = useNavigate();

    const onSignOut = () => {
        authApi.logout()
            .then(res => {
                localStorage.removeItem('token')
                setLoggedIn(false)
            })
            .catch(err => {
                const errors = Object.values(err)
                if (errors) {
                    alert(errors.join(', '))
                }
            })
    }
    const registration = (
        {
            email,
            password,
            username,
            first_name,
            last_name
        }: usersApi.SignUpRequest) => {
        usersApi.signUp({email, password, username, first_name, last_name})
            .then(res => {
                navigate('/signin')
            })
            .catch(err => {
                const errors = Object.values(err)
                if (errors) {
                    alert(errors.join(', '))
                }
                setLoggedIn(false);
            })
    }

    const getOrders = () => {
        recipesApi
            .getRecipes({
                is_in_shopping_cart: Number(true),
            })
            .then(res => {
                const {count} = res
                setOrders(count)
            })
    }
    useEffect(() => {
        if (loggedIn) {
            navigate('/recipes')
        }
    }, [loggedIn])

    const authorization = (
        {
            email, password
        }: authApi.LoginRequest) => {
        authApi.login({
            email, password
        }).then(res => {
            if (res.auth_token) {
                localStorage.setItem('token', res.auth_token)
                usersApi.getMe()
                    .then(res => {
                        setUser(res)
                        setLoggedIn(true)
                        getOrders()
                    })
                    .catch(err => {
                        setLoggedIn(false)
                        navigate('/signin')
                    })
            } else {
                setLoggedIn(false)
            }
        })
            .catch(err => {
                const errors = Object.values(err)
                if (errors) {
                    alert(errors.join(', '))
                }
                setLoggedIn(false)
            })
    }

    const updateOrders = (add: boolean) => {
        if (!add && orders <= 0) {
            return
        }
        if (add) {
            setOrders(orders + 1)
        } else {
            setOrders(orders - 1)
        }
    }

    useEffect((): any => {
        const token = localStorage.getItem('token')
        if (token) {
            return usersApi.getMe()
                .then(res => {
                    setUser(res)
                    setLoggedIn(true)
                    getOrders()
                })
                .catch(err => {
                    setLoggedIn(false)
                    navigate('/signin')
                })
        }
        setLoggedIn(false)
    }, [])

    return (
        <AuthContext.Provider value={loggedIn}>
            <UserContext.Provider value={user}>
                <BrowserRouter>
                    <Header loggedIn={loggedIn} onSignOut={onSignOut}/>
                    <Routes>
                        <Route path="/" element={<MainPage updateOrders={updateOrders}/>}/>
                        <Route
                            path='/recipes/:id'
                        >
                            <SingleCard
                                updateOrders={updateOrders}
                            />
                        </Route>

                        <Route path='/recipes'>
                            <MainPage
                                updateOrders={updateOrders}
                            />
                        </Route>
                        {/*<Route path='/signin'>*/}
                        {/*    <SignIn*/}
                        {/*        onSignIn={authorization}*/}
                        {/*    />*/}
                        {/*</Route>*/}
                        {/*<Route path='/signup'>*/}
                        {/*    <SignUp*/}
                        {/*        onSignUp={registration}*/}
                        {/*    />*/}
                        {/*</Route>*/}
                        <Route path='/'>
                            {/*{loggedIn ? <MainPage*/}
                            {/*    updateOrders={updateOrders}*/}
                            {/*/> : <SignIn*/}
                            {/*    onSignIn={authorization}*/}
                            {/*/>}*/}
                            <MainPage
                                updateOrders={updateOrders}
                            />
                        </Route>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </UserContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;