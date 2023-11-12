import{BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/Home.jsx";
import Employee from "./pages/Employee.jsx";




function App(){

    return(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route index element={<Employee />}/>
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
}

export default App
