import "./App.css";
import React, { useContext } from "react";
import { UserContext } from "./Services/UserContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./screens/main/MainPage.jsx";
import LoginPage from "./screens/auth/LoginPage.jsx";
import LandingPage from "./screens/main/LandingPage.jsx";
import SignUp from "./screens/auth/SignUp.jsx";
import ForgotPasswordForm from "./screens/auth/ForgotPassword.jsx";
import ResetPassword from "./screens/auth/ResetPassword.jsx";
import ChangePassword from "./screens/Profile/ChangePassword.jsx";
import Profile from "./screens/Profile/Profile.jsx";
import EditProfile from "./screens/Profile/EditProfile.jsx";
import Adminpost from "./screens/post/Adminpost.jsx";
import UserPostForm from "./screens/post/Userpostform.jsx";
import UserProfile from "./screens/main/Userprofile.jsx";
import UserPostContainer from "./screens/post/UserPost.jsx";
import CodePage from "./screens/mainPageCompo/CodePage.jsx";
import Page404 from "./screens/other/Page404.jsx";
import UserFilteredPost from "./screens/post/UserFilteredPosts.jsx";
import ProtectedRoutes from "./Utiles/ProtectedRoutes.jsx";

function App() {
  const { user, AdminEmail } = useContext(UserContext);
  let userEmail = "";
  if (user) {
    userEmail = user.provider === "JWT" ? user.email : user.user.email;

  }

  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes  */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotPassword" element={<ForgotPasswordForm />} />
          <Route path="/reset/:id/:token" element={<ResetPassword />} />
          <Route path="/" element={<LandingPage />} />



          {/* Protected Routed  */}
          <Route element= {<ProtectedRoutes/>}>
            <Route path="/home" element={<MainPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/profile/changepassword" element={<ChangePassword />} />
            <Route path="/loggedUser" element={<UserProfile />} />
            <Route path="/codepage" element={<CodePage />} />
            <Route path="/code/user/post" element={<UserPostForm />} />
            <Route path="/code/user/uploads" element={<UserPostContainer />} />
            <Route path="/profile/uploads" element={<UserFilteredPost />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/code/user/post/edit" element={<UserPostForm />} />
          </Route>

          {/* Admin Routes */}
          {user && userEmail === AdminEmail && (
            <>
              <Route path="/code/admin/post" element={<Adminpost />} />
            </>
          )}

        </Routes>
      </Router>
    </>
  );
}

export default App;



