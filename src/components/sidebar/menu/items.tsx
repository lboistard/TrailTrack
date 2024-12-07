import React from "react";

import { TfiPieChart } from "react-icons/tfi";
import { BsCalendar4Event } from "react-icons/bs";
import DashboardIcon from "../../../assets/icons/Dashboard.svg";


export type MenuItem = {
  title: string;
  path: string;
  icon: (color: string) => React.ReactElement;
};

export const items: MenuItem[] = [
  { title: "Dashboard", path: "/", icon: (color) => <DashboardIcon color={color} /> },
  { title: "Progress", path: "/progress", icon: () => <TfiPieChart /> },
  { title: "Schedule", path: "/schedule", icon: () => <BsCalendar4Event /> },
];