import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">

          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="user" >
            <Route index element={<List title='User' button='Add new ' icon=" PersonIcon" user="user" />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New title='User' />} />
          </Route>

          <Route path="product" >
            <Route index element={<List title='Product' button='Add new ' icon="ProductionQuantityLimitsIcon" user='product' />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New title='Products' />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
