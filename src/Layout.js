import {
    Link,
    Outlet,
  } from "react-router-dom";
  import "./App.css";
  import AuthStatus from "./AuthStatus";
  
  
  function Layout() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
  
  export default Layout;
  