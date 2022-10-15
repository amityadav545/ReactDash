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
          <Route index element={<Login placeholder="Email Address" password="Password" linkvalue1="Change Password" linkvalue2="Forgot Password?" link1="/changePassword" link2="/forgotPassword" buttonvalue="Sign In" Display='none' />} />
          <Route path="dashbord" element={<Home />} />

          <Route path="forgotPassword" element={<Login placeholder="Email Address" password="enter otp" linkvalue1="Sign In" linkvalue2="Change password" link1="/" link2="/changePassword" buttonvalue="Save" Display='block' buttonvalue2="Generate OTP" />} />
          <Route path="changePassword" element={<Login placeholder="Old Password" password="New password" linkvalue1="Sign In" linkvalue2="Forgot password?" link1="/" link2="/forgotPassword" buttonvalue="Change" Display='none' />} />
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
