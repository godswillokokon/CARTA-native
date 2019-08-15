import React, { Component } from "react";
import { View, StyleSheet, Platform, Dimensions, ImageBackground, Image, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Container,
  Content,
  Thumbnail,
  Form,
  Item,
  Label,
  Input,
} from "native-base";
import { login, resetFailureAction, refreshAuthentication, GetUserData, logout } from "../../redux/actions/UserActions";
import Session from "../../utils/Session";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import FooterComponet from "../footer";


class Profile extends Component {
  async componentDidMount() { 
    this.loadAsync().then(data => {
      console.log(data)
     })
  }
  loadAsync = async () => {
    //load all required info
    //user info, auth state..etc
    const getToken = await Session.getData("token");
    if (getToken) {
      const data = this.props.getUser(getToken);
      return data;
    }
    
  };
  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;
    
    return (
      <Container>
        <Header style={styles.head}>
          <Left style={{ marginTop: 5 }}>
            <Button transparent onPress={() => this.props.navigation.navigate("signUp")}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.title} />
          </Body>
          <Right style={{ marginRight: 10 }}>
            <FontAwesome name="ellipsis-v" size={20} color={"white"} />
          </Right>
        </Header>
        <Content>
          <View style={styles.image}>
            <Thumbnail
              large
              source={{ uri: "https://res.cloudinary.com/ogcodes/image/upload/v1565462608/tdghephwnr5z5jl0d2ul.jpg" }}
            />
          </View>
          <View>
            <Form>
              <Item floatingLabel>
                <Label>Name</Label>
                <Input disabled value="Cyril Uket" />
              </Item>
              <Item floatingLabel last>
                <Label>Email Address</Label>
                <Input disabled value="user@gmail.com" />
              </Item>
              <Item floatingLabel>
                <Label>Phobe Number</Label>
                <Input disabled value="09096531575" />
              </Item>
              <Item floatingLabel last>
                <Label>Address</Label>
                <Input disabled value="%25system" />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input disabled value="**********" />
              </Item>
            </Form>
          </View>
        </Content>
        <FooterComponet name="profile" props={this.props} />
      </Container>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  auth: user
});

const mapDispatchToProps = dispatch => ({
  // onLogin: data => dispatch(login(data)),
  // onLogout: () => dispatch(logout()),
  // onSignUp: data => dispatch(createAccount(data)),
  resetFailureAction: () => dispatch(resetFailureAction()),
  getUser: token => dispatch(GetUserData(token)),
  refreshAuthentication: token => dispatch(refreshAuthentication(token))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
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
  image: {
    alignContent: "center",
    alignItems: "center",
    marginTop: 40
  },
  detail: {
    flex: 2
  },
  footer: {
    backgroundColor: "#652d90"
  },
  footerActive: {
    paddingTop: 100,
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
  space: {
    marginBottom: 300
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
