import {
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import ProtectedPage from "./ProtectedPage";
import PublicPage from "./PublicPage";
import AuthProvider from "./AuthProvider";
import RequireAuth from "./RequireAuth";
import Layout from "./Layout";
import LoginPage from "./LoginPage";

function App() {
  return (
    <AuthProvider>
      <h1>Auth Example</h1>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
