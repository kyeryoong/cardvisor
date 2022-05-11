import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
                <Route path='/main' element={<Main />} />
                <Route path='/service1' element={<Service1 />} />
                <Route path='/service1/results' element={<Service1Results />} />
                <Route path='/service2' element={<Service2 />} />
                <Route path='/list' element={<List />} />
                <Route path='/mypage' element={<MyPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;