import React, { Component } from "react";
// import styled from "styled-components";
import { View, StyleSheet, Platform, Dimensions, ImageBackground, Image, Text, TouchableOpacity, Switch } from "react-native";
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
  DatePicker
} from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
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
        <Header style={styles.head}>
          <Left style={{ marginTop: 5 }}>
            <Button transparent >
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

        <Content>

          <Text style={{ alignSelf: "center", fontSize: 20, fontWeight: "bold", }}>Fill out this form</Text>

          <View style={styles.space}>
            <Form >
              <Item floatingLabel >
                <Label>Name*</Label>
                <Input name={"name"} type="text" />
              </Item>
              <Item floatingLabel >
                <Label>Email Address*</Label>
                <Input name={"email"} type="email" />
              </Item>
              <Item floatingLabel >
                <Label>Engine Chassis Number*</Label>
                <Input name={"chassis"} type="text" />
              </Item>
              <Item floatingLabel >
                <Label>Car Color*</Label>
                <Input name={"color"} type="text" />
              </Item>
              <Item floatingLabel >
                <Label>Plate Number*</Label>
                <Input name={"plate"} type="text" />
              </Item>
              <Item floatingLabel>
                <Label>Any dent?</Label>
                <Input name={"dent"} type="text" />
              </Item>
              <Item>
                <DatePicker
                  defaultDate={new Date(2019, 1, 1)}
                  minimumDate={new Date(2018, 1, 1)}
                  maximumDate={new Date(2050, 12, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={true}
                  animationType={"fade"}
                  androidMode={"calendar"}
                  placeHolderText="Select date of theft"
                  textStyle={{ color: "black" }}
                  placeHolderTextStyle={{ color: "black" }}
                  onDateChange={this.setDate}
                  disabled={false}
                />
                <Text>
                  Date: {this.state.chosenDate.toString().substr(4, 12)}
                </Text>
              </Item>
              <Item floatingLabel>
                <Label>Last location seen*</Label>
                <Input name={"lastLoc"} type="text" />
              </Item>
              <Item floatingLabel>
                <Label>Addition Info </Label>
                <Input name={"info"} type="text" />
              </Item>

            </Form>
            <TouchableOpacity style={styles.submit}>
              <Text style={styles.whiteText}>Submit</Text>
            </TouchableOpacity>
            <View styles={styles.toggle}>
              <Switch

              />

            </View>
          </View>

        </Content>
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>
            <Button badge vertical style={styles.border} onPress={() => this.props.navigation.navigate("Dashboard")}>

              <FontAwesome name="align-left" size={15} color={"white"} />
              <Text style={styles.whiteText}>Overview</Text>
            </Button>
            <Button vertical style={styles.border}>
              <FontAwesome name="address-card" size={15} color={"white"} />
              <Text style={styles.whiteText}>Profile</Text>
            </Button>
            <Button active badge vertical style={[styles.footerActive, styles.border]} onPress={() => this.props.navigation.navigate("Garage")}>
              <Badge ><Text style={styles.badge}>10</Text></Badge>
              <FontAwesome active name="car" size={15} color={"#652d90"} />
              <Text>Garage</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container >
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
  submit: {
    alignSelf: "center",
    backgroundColor: "#652d90",
    padding: 20,
    margin: 10,
    width: 200,
    alignItems: "center",
    borderRadius: 39,
  },
  toggle: {
    flex: 1,
    alignItems: 'center',
    marginTop: 5
  }

});
