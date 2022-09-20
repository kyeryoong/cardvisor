import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';

import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Main from './components/main/Main';
import Service1 from './components/service/service1/Service1';
import Service1Results from './components/service/service1/Service1Results';
import Service1ResultsMore from './components/service/service1/Service1ResultsMore';
import Service2 from './components/service/service2/Service2';
import Service2Analysis from './components/service/service2/Service2Analysis';
import List from './components/list/List';
import MyPage from './components/mypage/MyPage';
import CardInfo from './components/cardinfo/CardInfo';
import NotFound from './components/notfound/NotFound';
import Unauthorized from "./components/Unauthorized";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout";
import PersistLogin from "./components/PersistLogin";

const ROLES = {
    'User' : 'ROLE_USER',
    'Admin' : 'ROLE_ADMIN'
}



function App() {
    // const [isLogined, setIsLogined] = useState(window.localStorage.getItem("accessToken"));

    return (
        <main className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Layout />}>

                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login  />} />
                    <Route path="register" element={<Register />} />
                    <Route path="unauthorized" element={<Unauthorized />} />

                    <Route element={<PersistLogin />}>
                        <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin]} />}>
                            <Route path="main" element={<Main />} />
                            <Route path="service1" element={<Service1 />} />
                            <Route path="service1/results" element={<Service1Results />} />
                            <Route path="service1/results/more" element={<Service1ResultsMore />} />
                            <Route path="service2" element={<Service2 />} />
                            <Route path="service2/analysis" element={<Service2Analysis />} />
                            <Route path="list" element={<List />} />
                            <Route path="cardinfo/:card_code" element={<CardInfo />} />
                            <Route path="mypage" element={<MyPage />} />
                        </Route>
                    </Route>


                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>

            <ScrollToTop />
        </main>
    );
}

export default App;