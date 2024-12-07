import React from "react";

import { RxDashboard } from "react-icons/rx";
import { TfiPieChart } from "react-icons/tfi";
import { BsCalendar4Event } from "react-icons/bs";


export type MenuItem = {
  title: string;
  path: string;
  icon: React.ReactElement;
};

export const items: MenuItem[] = [
  { title: "Dashboard", path: "/", icon: <RxDashboard /> },
  { title: "Progress", path: "/progress", icon: <TfiPieChart /> },
  { title: "Schedule", path: "/schedule", icon: <BsCalendar4Event /> },
];
