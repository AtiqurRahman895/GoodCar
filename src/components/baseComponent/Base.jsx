// import React from 'react';
// import PropTypes from 'prop-types';

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import { TransferLists } from "../../Contexts/TransferLists";
import NavSideBar from "./NavSidebar";
import useAxios from "../../Hooks/useAxios";
const Base = () => {
  const {normalAxios}= useAxios()

  const [users, setUsers] = useState([]);
  const [lightTheme, setLightTheme]=useState(false)
  const [searchQuery, setSearchQuery] = useState("All");
  const additionalServices=[
    "Transmission Repair & Service",
    "Break Repair & Service",
    "Engine Repair & Service",
    "Tyre & Wheels Repair",
    "Painting & Denting Repair",
    "Air Conditioner Repair & Service",
    "General Auto Repair & Maintenance",
    "Transmission Repair & Replacement",
    "Tire Repair and Replacement",
    "State Emissions Inspection",
    "Break Job / Break Services",
    "Electrical Diagnostics",
    "Fuel System Repairs",
    "Starting and Charging Repair",
    "Steering and Suspension Work",
    "Emission Repair Facility",
    "Wheel Alignment",
    "Computer Diagaonstic Testing",
    "Fuel System Repair",
    "Exhaust System Repair",]

  const [mainServices, setMainServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

    useEffect(() => {
  
      setLoading(true);
  
      normalAxios.get("/mainServices")
        .then((res) => {
          if (res.data.length === 0) {
            setMainServices([])
            setNotFound(true);
          } else {
            setMainServices(res.data);
            setNotFound(false);
          }
        })
        .catch((error) => {
          console.error("Error finding main services:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);

  const value={
    users, setUsers,
    lightTheme, setLightTheme,
    searchQuery, setSearchQuery,
    mainServices, setMainServices,
    loading, setLoading,
    notFound, setNotFound,
  }

  return (
    <>
      <TransferLists.Provider value={value}>
          <NavSideBar>

            {/* Navbar */}
            <Header />
            {/* Page content here */}
            <Outlet />
            <Footer />
            
          </NavSideBar>

      </TransferLists.Provider>

    </>
  );
};

// Base.propTypes = {

// };

export default Base;
