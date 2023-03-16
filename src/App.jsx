import './App.css';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./pages/Home"
import Results from "./pages/Results"
import Dashboard from "./pages/Dashboard"
import Questions from "./pages/Quiz"
import useStore from "./store/store"
// import ErrorPage from "./pages/Error"
import eruda from "eruda"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { useEffect } from "react"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
]);
function App() {
  useEffect(()=>{
    eruda.init();
  },[])
  return (
  <div className="p-2">
       <Header />
       <RouterProvider router={router}/>
       <Footer />
    </div>
  );
}

export default App;
