import './App.css';
import Main from "./components/Main";
import About from "./components/About";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Main/>}/>
                    <Route exact path="/about" element={<About/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;


