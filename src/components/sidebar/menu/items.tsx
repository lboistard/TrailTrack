import React from "react";

import DashboardIcon from "../../../assets/icons/Dashboard.svg";
import ProgressIcon from "../../../assets/icons/Progress.svg";
import ScheduleIcon from "../../../assets/icons/Schedule.svg";
import MessageIcon from "../../../assets/icons/Message.svg";
import CommunityIcon from "../../../assets/icons/Community.svg";
import AchievementsIcon from "../../../assets/icons/Achievements.svg";
import WorkoutPlanIcon from "../../../assets/icons/WorkoutPlan.svg";
import SettingsIcon from "../../../assets/icons/Settings.svg";
import HelpIcon from "../../../assets/icons/Help.svg";


export type MenuItem = {
  title: string;
  path: string;
  icon: (color: string) => React.ReactElement;
};

export const items: MenuItem[] = [
  { title: "Dashboard", path: "/", icon: (color) => <DashboardIcon color={color} /> },
  { title: "Progress", path: "/progress", icon: (color) => <ProgressIcon color={color} /> },
  { title: "Schedule", path: "/schedule", icon: (color) => <ScheduleIcon color={color} /> },
  { title: "Messages", path: "/messages", icon: (color) => <MessageIcon color={color} /> },
  { title: "Community", path: "/community", icon: (color) => <CommunityIcon color={color} /> },
  { title: "Achievements", path: "/achievements", icon: (color) => <AchievementsIcon color={color} /> },
  { title: "Workout Plan", path: "/workout-plan", icon: (color) => <WorkoutPlanIcon color={color} /> },
];

export const manageMenuItems: MenuItem[] = [
  { title: "Settings", path: "/settings", icon: (color) => <SettingsIcon color={color} /> },
  { title: "Help", path: "/help", icon: (color) => <HelpIcon color={color} /> },
]
