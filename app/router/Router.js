import React from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator } from "react-navigation";
import Home from "../screens/home/home";
import Login from "../screens/signUp/signUp";
<<<<<<< HEAD
import Single from "../screens/singleCar/singleCar";
// import ResetPassword from "./components/resetPassword/resetPassword";
// import UserGuide from "./components/userGuide/userGuide";
// import ContactUs from "./components/contactUs/contactUs";
// import AboutUs from "./components/aboutUs/aboutUs";
// import Garage from "./components/garage";
// import Single from "./components/singleCar"
=======
import Garage from "../screens/garage"
import Register from "../screens/register/register"
>>>>>>> a417b050d325aaeb761eb88084b6c5f22b61b945
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
  // Main: {
  //   screen: Home,
  //   navigationOptions: { header: null }
  // },
  // Login: {
  //   screen: Login,
  //   navigationOptions: { header: null }
  // },
  Single: {
    screen: Single,
    navigationOptions: { header: null }
  },
  Register: {
    screen: Register,
    navigationOptions: { header: null }
  },
  Garage: {
    screen: Garage,
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
