import React, { Component } from "react";
import { View, TextInput } from "react-native";
import styles from "./sigupStyle";
import { Form, Item, Input, Button, Text, CheckBox, Body, ListItem } from "native-base";

export default class signupForm extends Component {
  state = {
    email: "",
    password: ""
  };
  focus = () => this.textInputRef.focus();
  render() {
    const { mobile, password } = this.state;
    const { isLoading, onSignupLinkPress, onLoginPress } = this.props;
    const isValid = mobile !== "" && password !== "";
    return (
      <View>
        <Form>
          <Item style={[styles.loginMidLine]}>
            <FontAwesome name="user" size={25} color={"grey"} style={styles.icons} />
            <TextInput
              ref={ref => (this.textInputRef = ref)}
              placeholder="Email"
              name={"email"}
              returnKeyType="next"
              onChange={value => this.setState({ email: value })}
            />
          </Item>

          <Item style={[styles.logins]}>
            <FontAwesome name="lock" size={25} color={"grey"} style={styles.icons} />
            <TextInput
              ref={ref => (this.passwordInputRef = ref)}
              name={"password"}
              secureTextEntry={true}
              returnKeyType="done"
              placeholder="Password"
              onChange={value => this.setState({ pasword: value })}
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
          <Button rounded style={styles.loginBtn} onPress={() => console.log("Pressed Sign In")}>
            <FontAwesome name="sign-in" size={45} color={"white"} />
          </Button>
        </Form>
      </View>
    );
  }
}
