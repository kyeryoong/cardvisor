import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.css'

import Header from './Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Main from './components/main/Main';
import Service1 from './components/service/service1/Service1';
import Service1Results from './components/service/service1/Service1Results';
import Service1ResultsMore from './components/service/service1/Service1ResultsMore';
import Service2 from './components/service/service2/Service2';
import List from './components/list/List';
import MyPage from './components/mypage/MyPage';
import CardInfo from './components/cardinfo/CardInfo';
import NotFound from './components/notfound/NotFound'




function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={
                    <div>
                        <Header logined={false} />
                        <Home />
                    </div>}
                />

                <Route exact path='/login' element={
                    <div>
                        <Header logined={false} />
                        <Login />
                    </div>}
                />

                <Route exact path='/main' element={
                    <div>
                        <Header logined={true} />
                        <Main />
                    </div>}
                />

                <Route exact path='/service1' element={
                    <div>
                        <Header logined={true} />
                        <Service1 />
                    </div>}
                />

                <Route exact path='/service1/results' element={
                    <div>
                        <Header logined={true} />
                        <Service1Results />
                    </div>}
                />

                <Route exact path='/service1/results/more' element={
                    <div>
                        <Header logined={true} />
                        <Service1ResultsMore />
                    </div>}
                />

                <Route exact path='/service2' element={
                    <div>
                        <Header logined={true} />
                        <Service2 />
                    </div>}
                />

                <Route exact path='/list' element={
                    <div>
                        <Header logined={true} />
                        <List />
                    </div>}
                />

                <Route exact path='/mypage' element={
                    <div>
                        <Header logined={true} />
                        <MyPage />
                    </div>}
                />

                <Route exact path='/cardinfo/:card_code' element={
                    <div>
                        <Header logined={true} />
                        <CardInfo />
                    </div>}
                />

                <Route path="*" element={
                    <div>
                        <Header logined={false} />
                        <NotFound />
                    </div>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;