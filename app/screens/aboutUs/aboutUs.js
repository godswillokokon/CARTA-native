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
  Footer,
  Form,
  Item,
  Card,
  CardItem
} from "native-base";
import { Text, Image, AppRegistry, StyleSheet, Platform, TouchableOpacity, View } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default class AboutUs extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
  }
  render() {
    return <Container>
        <Header style={styles.head}>
          <Left style={{ marginTop: 20 }}>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.title}>About us</Text>
          </Body>
          <Right>
            <FontAwesome name="home" size={30} color={"white"} />
          </Right>
        </Header>
        <Content>
          <Text style={styles.photo}>
            <Image source={require("../../assets/Carta.png")} style={{ width: 452, height: 250 }} />
          </Text>
          <Text style={styles.version}>v1.0.0</Text>
          <Text style={styles.tagLine}>
            Now you have a car alert system.
          </Text>
          <Card>
            <TouchableOpacity>
              <CardItem>
                <Left>
                  <FontAwesome active name="hand-peace-o" size={25} />
                </Left>
                <Text>Special Thanks</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity>
              <CardItem>
                <Left>
                  <FontAwesome active name="handshake-o" size={25} />
                </Left>
                <Text>User Agreement</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity>
              <CardItem>
                <Left>
                  <FontAwesome active name="briefcase" size={25} />
                </Left>
                <Text>Private Policy</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity>
              <CardItem>
                <Left>
                  <FontAwesome active name="comments-o" size={25} />
                </Left>
                <Text>Contact us</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity>
              <CardItem>
                <Left>
                  <FontAwesome active name="arrow-circle-o-up" size={25} />
                </Left>
                <Text>Check Update</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </TouchableOpacity>
          </Card>
          <View style={styles.socials}>
            <TouchableOpacity style={styles.fb}>
              <FontAwesome active name="facebook-square" size={35} color={"black"} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tweep}>
              <FontAwesome active name="twitter-square" size={35} color={"black"} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ig}>
              <FontAwesome active name="instagram" size={35} color={"black"} />
            </TouchableOpacity>
          </View>
          <Footer style={styles.footer}>
            <Text>copyright@2019 CARTA. All Rights Reserved</Text>
          </Footer>
        </Content>
      </Container>;
  }
}
AppRegistry.registerComponent("CARTA-AboutUs", () => AboutUs);

const styles = StyleSheet.create({
  head: {
    ...Platform.select({
      android: { paddingTop: 60 },
      ios: { paddingTop: 25 }
    }),
    backgroundColor: "#7151e4",
    paddingBottom: 40
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold"
  },
  body: {
    marginTop: 20,
    marginLeft: 41
  },
  photo: {
    alignSelf: "center",
    margin: 10
  },
  version: {
    left: 220,
    bottom: 100,
    color: "#7151e4"
  },
  tagLine: {
    alignSelf: "center",
    color: "black",
    bottom: 50,
    fontSize: 20,
    fontWeight: "200"
  },
  footer: {
    backgroundColor: "transparent",
    marginTop: -20
  },
  socials: {
    alignItems: "center"
  },
  fb: {
    left: 150,
    top: 3
  },
  ig: {
    right: 150,
    bottom: 66
  },
  tweep: {
    bottom: 30
  }
});