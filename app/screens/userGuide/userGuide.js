import React, { Component } from 'react'
import {
  Text,
  View,
  WebView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  AppRegistry
} from "react-native";
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
  Card,
  CardItem
} from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default class UserGuide extends Component {
  static navigationOptions = {
    header: null
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
            <Text style={styles.title}>User Guide</Text>
          </Body>
          <Right>
            <FontAwesome name="home" size={30} color={"white"} />
          </Right>
        </Header>
        <Content padder>
          <Card>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("quickGuide")}>
            <CardItem>
              <Left>
                <Text>Quick Guide</Text>
              </Left>
              <Right>
                <FontAwesome name="chevron-circle-right" size={25} color={"black"} />
              </Right>
            </CardItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("userAgreement")}>
              <CardItem>
                <Left>
                  <Text>User Agreement</Text>
                </Left>
                <Right>
                  <FontAwesome name="chevron-circle-right" size={25} color={"black"} />
                </Right>
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("privatePolicy")}>
              <CardItem>
                <Left>
                  <Text>Private Policy</Text>
                </Left>
                <Right>
                  <FontAwesome name="chevron-circle-right" size={25} color={"black"} />
                </Right>
              </CardItem>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => this.props.navigation.navigate("aboutUs")}>
              <CardItem >
                <Left>
                  <Text>About Us</Text>
                </Left>
                <Right>
                  <FontAwesome name="chevron-circle-right" size={25} color={"black"} />
                </Right>
              </CardItem>
          </TouchableOpacity>
          </Card>
        </Content>
      </Container>;
  }
}
AppRegistry.registerComponent("CARTA-UserGuide", () => UserGuide);

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
  }
});
// <WebView
      //   source={{uri: 'https://github.com'}}
      //   style={{marginTop: 20}}
      // />