import React from 'react';
import { FaTv, FaDownload, FaMobileAlt, FaChild } from "react-icons/fa";

const MoreReasonData = [
  {
    id: 1,
    Feature: "Enjoy on your TV",
    reason:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: <FaTv/>
  },
  {
    id: 2,
    Feature: "Download your shows to watch offline",
    reason:
      "Save your favourites easily and always have something to watch.",
    icon: <FaDownload />
  },
  {
    id: 3,
    Feature: "Watch everywhere",
    reason:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    icon: <FaMobileAlt/>
  },
  {
    id: 4,
    Feature: "Create profiles for kids",
    reason:
      "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
    icon: <FaChild /> 
  }
];

export default MoreReasonData;
