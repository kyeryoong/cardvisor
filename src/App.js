import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Main from './components/main/Main';
import Service1 from './components/service1/Service1';
import Service1Results from './components/service1/Service1Results';
import Service2 from './components/service2/Service2';
import List from './components/list/List';
import MyPage from './components/mypage/MyPage';



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home headertype='home' />} />
                <Route path='/main' element={<Main headertype='main' />} />
                <Route path='/service1' element={<Service1 headertype='service1'/>} />
                <Route path='/service1/results' element={<Service1Results headertype='service1results'/>} />
                <Route path='/service2' element={<Service2 headertype='service2'/>} />
                <Route path='/list' element={<List />} headertype='list'/>
                <Route path='/mypage' element={<MyPage />} headertype='mypage'/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;