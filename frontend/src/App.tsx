import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import HomePage from "./Pages/HomePage/HomePage";
import CreatePage from "./Pages/CreatePage/CreatePage";
import UpdatePage from "./Pages/UpdatePage/UpdatePage";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/employee/create" element={<CreatePage />}></Route>
          <Route path="/employee/:id" element={<UpdatePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
