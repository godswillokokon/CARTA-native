import React, { Component } from "react";
import FooterComponet from "../footer";
// import styled from "styled-components";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground
} from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  CardItem,
  Card,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Input,
  Textarea,
  Form,
  Item
} from "native-base";
import { AppLoading } from "expo";
import { connect } from "react-redux";
import get from "lodash/get";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Session from "../../utils/Session";
import { resetFailureAction, refreshAuthentication, GetUserData, logout, GetUserCar } from "../../redux/actions/UserActions";
import Head from "../header";

class Garage extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      username: "",
      email: "",
      password: "",
      isLoggedIn: false,
      isLoading: false,
      isAppReady: false,
      authError: null,
      authReady: false,
      tokenValidity: null,
      data: {},
    };
  }
  // _simulateAdd = (email, password) => {
  _simulateAdd = () => {
    this.setState({ isLoading: true });
    // this.props.add({ email, password });
    this.props.navigation.navigate("Add");
  };
  render() {
    const { cars } = this.props;
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;
    let cards = [];
    for (let i = 0; i < 2; i++) {
      cards.push(
        <View style={styles.card} key={i}>
          <View style={styles.car}>
            <ImageBackground
              source={require("../../../assets/resetPassword.jpg")}
              style={{ height: "100%", width: "100%", borderRadius: 100 }}
            />
          </View>
          {}
          <View style={styles.details}>
            <Text style={styles.carName}>Honda 2018 X</Text>
            <Text style={styles.carModel}>Plate Number: AJQ124 CAL</Text>

            <TouchableOpacity style={styles.viewCar} onPress={() => this.props.navigation.navigate("Single")}>
              <Text>View</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return (
      <Container style={{ height: device_height, width: device_width }}>
        <Head navigation={this.props.navigation} />

        <Content>{cards}</Content>
        <Button
          rounded
          style={styles.add}
          // onPress={() => this._simulateAdd(this.state.email, this.state.password)}
          onPress={() => this._simulateAdd()}

        >
          {this.state.isLoading ? (
            <ActivityIndicator style={styles.spinner} size="large" color={"white"} />
          ) : (
              <FontAwesome name="plus" size={45} color={"white"} />
            )}
        </Button>
        <FooterComponet name="garage" props={this.props} />
      </Container>
    );
  }
}
const mapStateToProps = ({ cars }) => ({
  // const { cars } = state;

  // return { cars: cars };
});

const mapDispatchToProps = dispatch => ({
  // onLogin: data => dispatch(login(data)),
  onLogout: () => dispatch(logout()),
  // onSignUp: data => dispatch(createAccount(data)),
  resetFailureAction: () => dispatch(resetFailureAction()),
  getCar: token => dispatch(GetUserCar(token)),
  getUser: token => dispatch(GetUserData(token)),
  refreshAuthentication: token => dispatch(refreshAuthentication(token))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Garage);

const styles = StyleSheet.create({
  card: {
    // width: "98%",
    // height: "18%",
    flex: 1,
    backgroundColor: "#E5E5E5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 3,
    margin: 5,
    flexDirection: "row"
  },
  add: {
    left: 275,
    bottom: 140,
    padding: 15,
    backgroundColor: "#652d90",
    borderRadius: 300,
    height: 70,
    width: 70
  },
  head: {
    ...Platform.select({
      android: { paddingTop: 60 },
      ios: { paddingTop: 25 }
    }),
    backgroundColor: "#652d90",
    paddingBottom: 40
  },
  body: {
    // marginTop: 20,
    // marginLeft: 41
    flex: 1
  },
  title: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold"
  },
  car: {
    flex: 2,
    width: "50%"
    // borderRadius: 40
  },
  details: {
    flex: 3,
    margin: 10
    // marginTop: 10,
    // marginBottom: 20,
  },
  carName: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 25,
    marginTop: -10,
    color: "#383838"
  },
  carModel: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 15,
    color: "#383838",
    marginTop: 25
  },
  footer: {
    backgroundColor: "#652d90"
  },
  footerActive: {
    backgroundColor: "white"
  },
  badge: {
    borderRadius: 300,
    height: 14,
    width: 15
  },
  border: {
    borderWidth: 1,
    borderLeftColor: "#652d90",
    // borderColor: "#652d90",
    borderRightColor: "#7438a2",
    borderBottomColor: "#652d90",
    borderTopColor: "#652d90"
  },
  whiteText: {
    color: "white"
  },
  viewCar: {
    margin: 0,
    paddingTop: 30,
    left: 150
    // top: -30,
  }
});
