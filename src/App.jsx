import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Car from './pages/car';
import Other from './pages/other';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Car />} />
                <Route path='/other' element={<Other />} />
                <Route path='/contact' element={<h2>Contact page in progress...</h2>} />
                <Route path='*' element={<h2>404 not found</h2>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;