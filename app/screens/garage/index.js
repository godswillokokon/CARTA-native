import React, { Component } from "react";
import FooterComponet from "../footer";
// import styled from "styled-components";
import {
  Text,
  View,
  AppRegistry,
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
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default class Garage extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
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
        <Header style={styles.head}>
          {console.log(this.props)}
          <Left style={{ marginTop: 5 }}>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.title}></Text>
          </Body>
          <Right style={{ marginRight: 10 }}>
            <FontAwesome name="ellipsis-v" size={20} color={"white"} />
          </Right>
        </Header>
        <Content>{cards}</Content>
        <FooterComponet name="garage" props={this.props} />
      </Container>
    );
  }
}

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
