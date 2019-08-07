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
import { Text, View, AppRegistry, StyleSheet, Platform, TouchableOpacity, Image } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default class ContactUs extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = { 
          star1Color: "grey",
          star2Color: "grey",
          star3Color: "grey",
          star4Color: "grey",
          star5Color: "grey",
         username: "", 
         email: "", 
         password: "" };

    }

     star1 = ()=>{
       this.setState({
         star1Color: "#FF9501",
         star2Color: "grey",
         star3Color: "grey",
         star4Color: "grey",
         star4Color: "grey",
         star5Color: "grey"

        })
     } 
     star2 = ()=>{
      this.setState({
        star1Color: "#FF9501",
        star2Color: "#FF9501",
        star3Color: "grey",
        star4Color: "grey",
        star5Color: "grey"

       })
    }
    
    star3 = ()=>{
      this.setState({
        star1Color: "#FF9501",
        star2Color: "#FF9501",
        star3Color: "#FF9501",
        star4Color: "grey",
        star5Color: "grey",
      

       })
    }
    star4 = ()=>{
      this.setState({
        star1Color: "#FF9501",
        star2Color: "#FF9501",
        star3Color: "#FF9501",
        star4Color: "#FF9501",
        star5Color: "grey",
        

       })
    }
    star5 = ()=>{
      this.setState({
        star1Color: "#FF9501",
        star2Color: "#FF9501",
        star3Color: "#FF9501",
        star4Color: "#FF9501",
        star5Color: "#FF9501"

       })
    }
    render() {
        return <Container>
            <Header style={styles.head}>
              <Left style={{ marginTop: 20 }}>
                <Button transparent onPress={() => this.props.navigation.navigate("signUp")}>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Body style={styles.body}>
                <Text style={styles.title}>Feedback</Text>
              </Body>
              <Right>
                <FontAwesome name="home" size={30} color={"white"} />
              </Right>
            </Header>
            <Content>
              <Text style={styles.RateText}>
                User Experience Rating
              </Text>
              <View style={styles.stars}>
                <TouchableOpacity onPress={this.star1}>
                  <FontAwesome name="star" size={40} color={this.state.star1Color} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.star2}>
                  <FontAwesome name="star" size={40} color={this.state.star2Color} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.star3}>
                  <FontAwesome name="star" size={40} color={this.state.star3Color} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.star4}>
                  <FontAwesome name="star" size={40} color={this.state.star4Color} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.star5}>
                  <FontAwesome name="star" size={40} color={this.state.star5Color} />
                </TouchableOpacity>
              </View>
              <Form>
                <Input placeholder="Your feedbacks are welcomed..." returnKeyType="next" style={styles.textArea} />
                <Input placeholder="Please enter your email " type="email" returnKeyType="send" style={styles.textEmail} />
                <Button bordered style={styles.submitBtn}>
                  <Text>Submit Feedback</Text>
                </Button>
              </Form>
              <Image style={styles.footerImage} source={require("../../assets/feedback.jpg")} style={{ width: 3216 / 10, height: 2136 / 13, margin: 20 }} />
            </Content>
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
    fontSize: 22,
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
    color: "black",
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