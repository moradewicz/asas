// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import Search from "views/Search/Search.jsx";
import Settings from "views/Settings/Settings.jsx";
import Logout from "views/Logout/Logout.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Customer Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },

  {
    path: "/search",
    sidebarName: "Search",
    navbarName: "Search",
    icon: "search",
    component: Search
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/settings",
    sidebarName: "Settings",
    navbarName: "Settings",
    icon: "settings",
    component: Settings
  },
  {
    path: "/logout",
    sidebarName: "Logout",
    navbarName: "Logout",
    icon: "exit_to_app",
    component: Logout
  },

  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
