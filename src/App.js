import MiniDrawer from "./components/MiniDrawer";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import { Home } from "./pages/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<MiniDrawer/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
