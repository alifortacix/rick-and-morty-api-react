import { Route, Routes } from "react-router-dom";
import { customRoutes } from "./router/customRoutes";
import MainLayout from "./layout/MainLayout/MainLayout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <MainLayout className="App">
      <Routes>
        {
          customRoutes.map((route, index) => <Route key={index} {...route}></Route>)
        }
      </Routes>
    </MainLayout>
  );
}

export default App;
