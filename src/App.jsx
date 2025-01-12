import { HashRouter as Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import LoginAdmin from './Login/LoginAdmin';
import Signup from './Signup/Signup';
import Home from './Homepage/Homes/Home.jsx';
import Comment from './Modals/comments.jsx';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/comments" element={<Comment/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
