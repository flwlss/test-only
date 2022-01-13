import React from "react";
import { Routes, Route } from "react-router-dom";
import PATHS from './paths'
import { LoginScreen } from "../screens/LoginScreen";
import { ProfileScreen } from "../screens/ProfileScreen";

const CustomRouter = () => {
  return (
    <Routes>
      <Route path={PATHS.LOGIN} element={<LoginScreen />} />
      <Route path={PATHS.PROFILE} element={<ProfileScreen />} />
    </Routes>
  )
}

export default CustomRouter
