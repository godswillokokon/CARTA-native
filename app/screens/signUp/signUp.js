import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, Dimensions, AppRegistry, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { Container, Content, Form, Item, Input, Left, Button, Text, CheckBox, Body, ListItem } from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { login, resetFailureAction, refreshAuthentication, GetUserData, logout } from "../../redux/actions/UserActions";
import styles from "./sigupStyle";



 class SignUp extends Component {
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
  _simulateLogin = (email, password) => {
    // console.log(email, password);
    console.log(this.state.password);
    // this.setState({ isLoading: true });
    // this.props.onLogin({ mobile, password });
  };

  render() {
    const { email, password } = this.state;
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;
    // console.log("your phone height is ",device_height);
    // console.log("your phone width is ",device_width);

    return (
      <Container style={styles.container}>
        <ImageBackground source={require("../../../assets/cartaba.png")} style={{ height: device_height, width: device_width }}>
          <Text style={styles.logo}>
            <Image source={require("../../../assets/Carta.png")} style={{ width: 352, height: 150 }} />
          </Text>
          <Content style={{ top: 30 }}>
            <Form>
              <Item style={[styles.loginMidLine]}>
                <FontAwesome name="user" size={25} color={"grey"} style={styles.icons} />
                <Input
                  ref={ref => (this.textInputRef = ref)}
                  placeholder="Email"
                  name={"email"}
                  type="email"
                  returnKeyType="next"
                  onChangeText={(value) => this.setState({ email: value })}
                />
              </Item>

              <Item style={[styles.logins]}>
                <FontAwesome name="lock" size={25} color={"grey"} style={styles.icons} />
                <Input
                  ref={ref => (this.passwordInputRef = ref)}
                  name={"password"}
                  type="password"
                  secureTextEntry={true}
                  returnKeyType="done"
                  placeholder="Password"
                  onChangeText={(value) => this.setState({ password: value })}
                />
              </Item>
              <ListItem style={styles.remBtn}>
                <CheckBox checked={this.state.checked} color={"#7151e4"} onPress={this.Clicked.bind(this)} />
                <Body>
                  <Text style={{ color: "grey" }} onPress={this.Clicked.bind(this)}>
                    Remember Login
                  </Text>
                </Body>
              </ListItem>
              <Button
                rounded
                style={styles.loginBtn}
                onPress={() => this._simulateLogin(this.state.email, this.state.password)}
              >
                <FontAwesome name="sign-in" size={45} color={"white"} />
              </Button>
            </Form>
            <View>
              <ListItem icon style={styles.lowerBody} onPress={() => this.props.navigation.navigate("register")}>
                <Left>
                  <Button disabled style={{ backgroundColor: "#FF9501" }}>
                    <FontAwesome active name="unlock" />
                  </Button>
                </Left>
                <Body style={styles.whiteBorder}>
                  <Text>Sign Up</Text>
                </Body>
              </ListItem>
              <ListItem icon style={styles.lowerBody} onPress={() => this.props.navigation.navigate("resetPassword")}>
                <Left>
                  <Button disabled style={{ backgroundColor: "#7151e4" }}>
                    <Ionicons active name="ios-redo" />
                  </Button>
                </Left>
                <Body style={styles.whiteBorder}>
                  <Text>Reset password</Text>
                </Body>
              </ListItem>
              <ListItem icon style={styles.lowerBody} onPress={() => this.props.navigation.navigate("userGuide")}>
                <Left>
                  <Button disabled style={{ backgroundColor: "#FF4551" }}>
                    <FontAwesome active name="question" />
                  </Button>
                </Left>
                <Body style={styles.whiteBorder}>
                  <Text>User Guide</Text>
                </Body>
              </ListItem>
              <ListItem icon style={styles.lowerBody} onPress={() => this.props.navigation.navigate("contactUs")}>
                <Left>
                  <Button disabled style={{ backgroundColor: "#007AFF" }}>
                    <FontAwesome active name="comments" />
                  </Button>
                </Left>
                <Body style={styles.whiteBorder}>
                  <Text>Feedback</Text>
                </Body>
              </ListItem>
            </View>
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
  onLogin: data => dispatch(login(data)),
  onLogout: () => dispatch(logout()),
  // onSignUp: data => dispatch(createAccount(data)),
  resetFailureAction: () => dispatch(resetFailureAction()),
  getUser: token => dispatch(GetUserData(token)),
  refreshAuthentication: token => dispatch(refreshAuthentication(token))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
// AppRegistry.registerComponent("CARTA-SignUp", () => SignUp);
