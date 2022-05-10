import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Card from './components/service1/Service1';
import Service1Results from './components/service1/Service1Results';



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/service1' element={<Card />} />
                <Route path='/service1/results' element={<Service1Results />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;