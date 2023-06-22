import './App.css'
import { Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import CoffeeList from './pages/CoffeeList';
import NavBar from './components/nav-bar';
import Coffee from './pages/Coffee';
import NotFound from './pages/not-found';
import Layout from './components/Layout';
import './nav-bar.css'


function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="coffees" element={ <CoffeeList /> } />
          <Route path="coffees/:coffee" element={ <Coffee /> } />
        </Route>
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App
