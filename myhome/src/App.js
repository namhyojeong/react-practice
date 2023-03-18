import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Home2 from './routes/Home2';
import Home3 from './routes/Home3';
import Home4 from './routes/Home4';
import Home5 from './routes/Home5';
import MainPage from './Pages/MainPage';
import Layout from './layouts/Layout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
        <Route index element={ <MainPage/> }/>
        <Route path="/Movie" element={ <Home/> }/>
        <Route path="/Movie2" element={ <Home2/> }/>
        <Route path="/Movie3" element={ <Home3/> }/>
        <Route path="/Movie4" element={ <Home4/> }/>
        <Route path="/Movie5" element={ <Home5/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;