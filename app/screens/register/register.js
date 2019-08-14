import React, { Component } from "react";
import { View, StyleSheet, Platform, Image, Dimensions, ActivityIndicator, TouchableOpacity, ImageBackground } from "react-native";
import { Container, Content, Form, Item, Input, Left, Button, Text, CheckBox, Body, ListItem } from "native-base";
import { connect } from "react-redux";
import { createAccount, resetFailureAction, refreshAuthentication, GetUserData, logout } from "../../redux/actions/UserActions";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

class Register extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      c_password: "",
      isLoggedIn: false,
      isLoading: false,
      isAppReady: false,
      authError: null,
      authReady: false,
      tokenValidity: null
    };
  }
  UnCheckBox() {
    this.setState({
      checked: false
    });
  }
  CheckBox() {
    this.setState({
      checked: true
    });
  }
  Clicked() {
    this.state.checked ? this.UnCheckBox() : this.CheckBox();
    // if (this.state.checked) return console.log("checked");
    // if (!this.state.checked) return console.log("unchecked");
  }
  _simulateSignup = (first_name, last_name, email, password, c_password) => {
    this.setState({ isLoading: true });
    this.props.onSignUp({ first_name, email, last_name, password, c_password });
  };

  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;
    // console.log("your phone height is ",device_height);
    // console.log("your phone width is ",device_width);

    return (
      <Container style={styles.container} style={{ height: device_height, width: device_width }}>
        <ImageBackground source={require("../../../assets/cartaba.png")} style={{ height: device_height, width: device_width }}>
          <Text style={styles.logo}>
            <Image source={require("../../../assets/Carta.png")} style={{ width: 352, height: 150 }} />
          </Text>
          <Content style={{ top: 30 }}>
            <Form>
              <Item style={[styles.loginMidLine]}>
                <FontAwesome name="user" size={25} color={"grey"} style={styles.icons} />
                <Input
                  placeholder="First Name"
                  type="email"
                  onChangeText={value => this.setState({ first_name: value })}
                  returnKeyType="next"
                  maxLength={15}
                />
              </Item>
              <Item style={[styles.loginMidLine]}>
                <FontAwesome name="user" size={25} color={"grey"} style={styles.icons} />
                <Input
                  placeholder="Last Name"
                  type="email"
                  onChangeText={value => this.setState({ last_name: value })}
                  returnKeyType="next"
                  maxLength={15}
                />
              </Item>
              <Item style={[styles.loginMidLine]}>
                <Ionicons name="ios-mail" size={25} color={"grey"} style={styles.icons} />
                <Input
                  placeholder="Email"
                  type="email"
                  onChangeText={value => this.setState({ email: value })}
                  returnKeyType="next"
                />
              </Item>

              <Item style={[styles.loginMidLine]}>
                <FontAwesome name="lock" size={25} color={"grey"} style={styles.icons} />
                <Input
                  secureTextEntry={true}
                  returnKeyType="done"
                  onChangeText={value => this.setState({ password: value })}
                  placeholder="Password"
                  underline={true}
                />
              </Item>
              <Item style={[styles.logins]}>
                <FontAwesome name="lock" size={25} color={"grey"} style={styles.icons} />
                <Input
                  secureTextEntry={true}
                  returnKeyType="done"
                  onChangeText={value => this.setState({ c_password: value })}
                  placeholder="Confirm Password"
                  underline={true}
                />
              </Item>
              <ListItem style={styles.remBtn}>
                <CheckBox checked={this.state.checked} color={"#7151e4"} onPress={this.Clicked.bind(this)} />
                <Body>
                  <Text style={{ color: "grey", fontSize: 15 }} onPress={this.Clicked.bind(this)}>
                    I Agree to Terms & Conditions
                  </Text>
                </Body>
              </ListItem>
              <Button
                rounded
                style={styles.loginBtn}
                onPress={() =>
                  this._simulateSignup(
                    this.state.first_name,
                    this.state.last_name,
                    this.state.email,
                    this.state.password,
                    this.state.c_password
                  )
                }
              >
                {this.state.isLoading ? (
                  <ActivityIndicator style={styles.spinner} size="large" color={"white"} />
                ) : (
                    <FontAwesome name="sign-in" size={45} color={"white"} />
                  )}
              </Button>
            </Form>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("signUp")} style={[styles.login]}>
              <Text style={{ color: "#7151e4" }}>Already Have An Account? Sign In</Text>
            </TouchableOpacity>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  auth: user
});

const mapDispatchToProps = dispatch => ({
  // onLogin: data => dispatch(login(data)),
  onLogout: () => dispatch(logout()),
  onSignUp: data => dispatch(createAccount(data)),
  resetFailureAction: () => dispatch(resetFailureAction()),
  getUser: token => dispatch(GetUserData(token)),
  refreshAuthentication: token => dispatch(refreshAuthentication(token))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
// AppRegistry.registerComponent("CARTA-SignUp", () => SignUp);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    ...Platform.select({
      android: { paddingTop: 30 },
      ios: { paddingTop: 35 }
    }),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 0
  },
  logins: {
    width: 250,
    marginLeft: 20,
    borderColor: "white"
  },
  icons: {
    marginRight: 20
  },
  loginBtn: {
    left: 260,
    bottom: 200,
    padding: 15,
    backgroundColor: "#7151e4",
    borderRadius: 300,
    height: 80,
    width: 80
  },
  loginMidLine: {
    width: 250,
    marginLeft: 20
  },
  remBtn: {
    top: -7,
    width: 300,
    borderColor: "white"
  },
  whiteBorder: {
    borderColor: "transparent"
  },
  login: {
    bottom: 60,
    alignSelf: "center"
  },
  footerImage: {
    margin: 5,
    opacity: 0.61,
    alignItems: "center",
    justifyContent: "center"
  },
  spinner: {
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  showPassword: {
    // borderColor: "black",
    backgroundColor: "whitesmoke",
    // borderWidth: 3,
    borderRadius: 200,
    height: 25,
    width: 50
  }
});
