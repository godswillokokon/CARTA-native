import React, { Component } from "react";
import FooterComponet from "../footer";
// import styled from "styled-components";
import { View, StyleSheet, Platform, Dimensions, ImageBackground, Image, Text, TouchableOpacity } from "react-native";
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Container,
  Content,
  CardItem,
  Thumbnail,
  Card,
  Footer,
  FooterTab,
  Badge,
  Form,
  Item,
  Label,
  Input,
  Textarea
} from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Head from "../header";

export default class Dashboard extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;
    let cards = [];
    // for (let i = 0; i < 4; i++) {
    //     cards.push(
    //         <View style={styles.card} key={i}>
    //             <View style={styles.car}>
    //                 <ImageBackground
    //                     source={require("../../assets/resetPassword.jpg")}
    //                     style={{ height: "100%", width: "100%", borderRadius: 100 }}
    //                 />
    //             </View>
    //             {}
    //             <View style={styles.details}>
    //                 <Text style={styles.carName}>Honda</Text>
    //                 <Text style={styles.carModel}>Model: 2018 Model Plate Number: 34ODU47</Text>
    //             </View>
    //         </View>
    //     );
    // }
    return (
      <Container style={{ height: device_height, width: device_width }}>
        <Head navigation={this.props.navigation} />

        <Content>


        </Content>
        <FooterComponet name="overview" props={this.props} />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  card: {},
  head: {
    ...Platform.select({
      android: { paddingTop: 50 },
      ios: { paddingTop: 25 }
    }),
    backgroundColor: "#652d90",
    paddingBottom: 40
  },
  body: {
    marginTop: 20,
    marginLeft: 41
  },
  title: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold"
  },
  car: {
    flex: 2
  },
  detail: {
    flex: 2
  },
  footer: {
    backgroundColor: "#652d90",

  },
  footerActive: {
    backgroundColor: "white",
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
  space: {
    marginBottom: 300,
  },
  whiteText: {
    color: "white"
  },
  edit: {
    alignSelf: "center",
    backgroundColor: "#652d90",
    padding: 5,
    margin: 10,
    width: 60,
    alignItems: "center"

  }

});
