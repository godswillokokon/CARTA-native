import React from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator } from "react-navigation";
import Home from "../screens/home/home";
import Login from "../screens/signUp/signUp";
import Garage from "../screens/garage";
import Profile from "../screens/profile";
import Single from "../screens/singleCar/singleCar";

// import ResetPassword from "./components/resetPassword/resetPassword";
// import UserGuide from "./components/userGuide/userGuide";
// import ContactUs from "./components/contactUs/contactUs";
// import AboutUs from "./components/aboutUs/aboutUs";
import Dashboard from "../screens/dashboard/dashboard";
import Register from "../screens/register/register";
import Report from "../screens/report/report";
import Maps from "../screens/map/map";
// import MainScreen from 'app/screens/home/home.js'
// const homeNavigator = createStackNavigator ({
//   Home: {
//     screen: Home,
//     navigationOptions: ({navigation}) => ({
//       title: `Tranzact`,
//       headerTintColor: 'white',
//       headerStyle: {backgroundColor: theme.colors.darkFusion},
//       headerTitleStyle: {
//         fontSize: 18,
//       },
//       headerLeft: <Menu navigation={navigation} />,
//     }),
//   },
// });
const MainNavigator = createStackNavigator({
  Main: {
    screen: Home,
    navigationOptions: { header: null }
  },
  Login: {
    screen: Login,
    navigationOptions: { header: null }
  },
  Profile: {
    screen: Profile,
    navigationOptions: { header: null }
  },
  Garage: {
    screen: Garage,
    navigationOptions: { header: null }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: { header: null }
  },
  Single: {
    screen: Single,
    navigationOptions: { header: null }
  },
  Register: {
    screen: Register,
    navigationOptions: { header: null }
  },
  Report: {
    screen: Report,
    navigationOptions: { header: null }
  },
  Maps: {
    screen: Maps,
    navigationOptions: { header: null }
  }
});

const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;
// export default createDrawerNavigator(
//   {
//     // TabNavigator: { screen: tabNavigator },
//     // TransactionHistory: {
//     //     screen: transactionHistoryNavigator
//     // },
//     Main: {
//       screen: MainNavigator
//     }
//   },
//   {
//     // contentComponent: SideMenu,
//     initialRouteName: "Main"
//   }
// );
