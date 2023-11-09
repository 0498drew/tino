import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TripDetails from "../pages/TripDetails";
import Trip from "../pages/Trip";
import SearchResultsList from "../pages/SearchResultsList"; 
import ThankYou from "../pages/ThankYou";
const Routers = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Navigate to='/home' />} />
            <Route path="/home" element={<Home />} />
            <Route path="/trip" element={<Trip />} />
            <Route path="/trip/:id" element={<TripDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/trip/search" element={<SearchResultsList />} />
        </Routes>
     )
}

export default Routers;
