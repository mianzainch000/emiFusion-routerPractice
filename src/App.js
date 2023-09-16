import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import { Contact } from "./component/Contact";
import NavBar from "./component/NavBar";
import { Page404 } from "./component/Page404";
import { User } from "./component/User";
import { Filter } from "./component/Filter";
import { Compnay } from "./component/Compnay";
import Channel from "./component/Channel";
import Other from "./component/Other";
import { Login } from "./component/Login";
// import { Logout } from "./component/Logout";
import { Protected } from "./component/Protected";
import { AppLogin } from "./Redux/Slice/authSlice";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <h1>React Routers</h1>
      <Routes>
        <Route
          path="/home"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/about"
          element={
            <Protected>
              <About />
            </Protected>
          }
        />
        {/* nested routing */}
        <Route
          path="/contact/"
          element={
            <Protected>
              {" "}
              <Contact />
            </Protected>
          }
        >
          <Route path="compnay" element={<Compnay />} />
          <Route path="channel" element={<Channel />} />
          <Route path="other" element={<Other />} />
        </Route>
        <Route
          path="/filter"
          element={
            <Protected>
              <Filter />
            </Protected>
          }
        />
        <Route
          path="/user/:name"
          element={
            <Protected>
              <User />
            </Protected>
          }
        />

        {/* Params */}

        {/* <Route path="/*" element={<Page404 />} /> */}
        {/* path="/*" it means the pages does not exist in thi app */}
        <Route path="/*" element={<Navigate to="/home"></Navigate>} />
        {/* Navigate is used to redirect the pages */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
