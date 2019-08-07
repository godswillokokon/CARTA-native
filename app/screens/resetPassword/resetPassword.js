import React, { Component } from 'react'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Input,
  Textarea,
  Form,
  Item,
  
  
} from "native-base";
import { Text, View, AppRegistry, StyleSheet, Platform, TouchableOpacity, Dimensions, Image,ImageBackground } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default class ContactUs extends Component {
    static navigationOptions = {
        header: null
    }
    
    render() {
      const device_width = Dimensions.get("window").width;
      const device_height = Dimensions.get("window").height;
        return <Container>
        <ImageBackground source={require("../../assets/resetPassword.jpg")} style={{ height: device_height, width: device_width }}>
            <Header style={styles.head}>
              <Left style={{ marginTop: 20 }}>
                <Button transparent onPress={() => this.props.navigation.navigate("signUp")}>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Body style={styles.body}>
                <Text style={styles.title}>Reset Password</Text>
              </Body>
              <Right>
                <FontAwesome name="home" size={30} color={"white"} />
              </Right>
            </Header>
            <Content>
              
              <Form>
                <Input placeholder="Please enter your email " type="email" returnKeyType="send" style={styles.textEmail} />
                <Button bordered style={styles.submitBtn}>
                  <Text> Reset Password</Text>
                </Button>
              </Form>
              
            </Content>
          </ImageBackground>
          </Container>;
    }
}

AppRegistry.registerComponent("CARTA-ContactUs", () => ContactUs);

const styles = StyleSheet.create({
  head: {
    ...Platform.select({
      android: { paddingTop: 60 },
      ios: { paddingTop: 25 }
    }),
    backgroundColor: "#7151e4",
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
  stars: {
    alignItems: "baseline",
    justifyContent: "space-evenly",
    alignSelf: "stretch",
    flexDirection: "row",
    marginTop: 10
  },
  textArea: {
    // backgroundColor: "grey",

    color: "black",
    height: 100,
    width: 300,
    alignSelf: "center",
    margin: 20,
    borderColor: "grey",
    borderWidth: 1
  },
  RateText: {
    alignSelf: "center",
    marginTop: 5,
    fontSize: 20
  },
  textEmail: {
    marginTop: 14,
    color: "white",
    borderColor: "grey",
    borderWidth: 1,
    width: 300,
    alignSelf: "center"
  },
  submitBtn: {
    backgroundColor: "#FF9501",
    width: 200,
    height: 50,
    alignSelf: "center",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  footerImage: {
    margin: 30
  }
});