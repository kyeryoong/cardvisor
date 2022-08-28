import { BrowserRouter, Routes, Route } from 'react-router-dom';
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



function App() {
    const [isLogined, setIsLogined] = useState(window.localStorage.getItem("accessToken"));

    return (
        <div>
            <BrowserRouter>
                <Header isLogined={isLogined} setIsLogined={setIsLogined} />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={!isLogined && <Login isLogined={isLogined} setIsLogined={setIsLogined} />} />
                    <Route path="/register" element={!isLogined && <Register />} />
                    <Route path="/main" element={isLogined ? <Main /> : <Login isLogined={isLogined} setIsLogined={setIsLogined} />} />
                    <Route path="/service1" element={isLogined ? <Service1 /> : <Login isLogined={isLogined} setIsLogined={setIsLogined} />} />
                    <Route path="/service1/results" element={isLogined ? <Service1Results /> : <Login isLogined={isLogined} setIsLogined={setIsLogined} />} />
                    <Route path="/service1/results/more" element={isLogined ? <Service1ResultsMore /> : <Login isLogined={isLogined} setIsLogined={setIsLogined} />} />
                    <Route path="/service2" element={isLogined ? <Service2 /> : <Login isLogined={isLogined} setIsLogined={setIsLogined} />} />
                    <Route path="/service2/analysis" element={isLogined ? <Service2Analysis /> : <Login isLogined={isLogined} setIsLogined={setIsLogined} />} />
                    <Route path="/list" element={isLogined ? <List /> : <Login isLogined={isLogined} setIsLogined={setIsLogined} />} />
                    <Route path="/mypage" element={isLogined ? <MyPage /> : <Login isLogined={isLogined} setIsLogined={setIsLogined} />} />
                    <Route path="/cardinfo/:card_code" element={isLogined ? <CardInfo /> : <Login isLogined={isLogined} setIsLogined={setIsLogined} />} />
                    <Route path="*" element={isLogined && <NotFound />} />

                    {/* <Route path="/" element={<Home />} />
                    <Route path="/login" element={!isLogined && <Login isLogined={isLogined} setIsLogined={setIsLogined} />} />
                    <Route path="/register" element={!isLogined && <Register />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/service1" element={<Service1 />} />
                    <Route path="/service1/results" element={<Service1Results />} />
                    <Route path="/service1/results/more" element={<Service1ResultsMore />} />
                    <Route path="/service2" element={<Service2 />} />
                    <Route path="/service2/analysis" element={<Service2Analysis />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/cardinfo/:card_code" element={<CardInfo />} />
                    <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </BrowserRouter>

            <ScrollToTop />

            {/* <Footer /> */}
        </div>
    );
}

export default App;