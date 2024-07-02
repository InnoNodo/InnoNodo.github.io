import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../src/pages/Main';
import ComicsPage from '../src/pages/ComicsPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/comics" element={<ComicsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
