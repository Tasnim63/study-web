
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './pages/Authentication/Banner';
import Blogs from './pages/Blogs/Blogs';
import Courses from './pages/Courses/Courses';
import Home from './pages/Home/Home';
import Pages from './pages/Page/Pages';
function App() {
  return (
    <>
    <Navbar></Navbar> 
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/courses' element={<Courses></Courses>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/pages' element={<Pages></Pages>}></Route>
      <Route path='/login' element={<Banner></Banner>}></Route>
   
    </Routes>
    </>
  );
}

export default App;
