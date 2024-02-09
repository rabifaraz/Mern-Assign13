import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "./config/firebase";
import Dashboard from "./pages/Dashboard";
import OrderList from "./pages/OrderList";
import OrderDetails from "./pages/OrderDetails";
import Customers from "./pages/Customers";
import Analytics from "./pages/Analytics";
import Reviews from "./pages/Reviews";
import Food from "./pages/food";
import FoodDetails from "./pages/FoodDetails";
import CustomerDetails from "./pages/CustomerDetails";
import Calendar from "./pages/Calendar";
import Chat from "./pages/Chat";
import Wallet from "./pages/Wallet";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (!user) return setUser(null);

      setUser(user.uid);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard user={user} />} />
        <Route path="/orderlist" element={<OrderList user={user} />} />
        <Route path="/orderdetails" element={<OrderDetails user={user} />} />
        <Route path="/customers" element={<Customers user={user} />} />
        <Route path="/analytics" element={<Analytics user={user} />} />
        <Route path="/reviews" element={<Reviews user={user} />} />
        <Route path="/food" element={<Food user={user} />} />
        <Route path="/fooddetails" element={<FoodDetails user={user} />} />
        <Route
          path="/customerdetails"
          element={<CustomerDetails user={user} />}
        />
        <Route path="/calendar" element={<Calendar user={user} />} />
        <Route path="/chat" element={<Chat user={user} />} />
        <Route path="/wallet" element={<Wallet user={user} />} />
        <Route path="/signin" element={<SignIn user={user} />} />
        <Route path="/signup" element={<SignUp user={user} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
