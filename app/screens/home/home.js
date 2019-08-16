import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  AppRegistry,
  ImageBackground,
  Dimensions,
  Image,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import { AppLoading } from "expo";
import { connect } from "react-redux";
import get from "lodash/get";
import DropdownAlert from "react-native-dropdownalert";
import Axios from "@utils/Axios";
import jwt_decode from "jwt-decode";
import { Button } from "native-base";
import Swipe from "./swiper";
import renderIf from "../renderIf";
import Session from "../../utils/Session";
import { resetFailureAction, refreshAuthentication, GetUserData, logout } from "../../redux/actions/UserActions";

class Home extends Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
    this.state = {
      data: false,
      isLoggedIn: false,
      isLoading: false,
      isAppReady: false,
      authError: null,
      authReady: false,
      tokenValidity: null
    };
  }
  async componentDidMount() {
    const checkForToken = await AsyncStorage.getItem("token");
    this.loadAsync().then(token => {
      // this.setState({ isLoggedIn: true, isLoading: false })
      if (token) {
        // Decode token and get user info and exp
        const decoded = jwt_decode(token);
        const currentTime = Date.now() / 1000; // to get in milliseconds
        if (decoded.exp < currentTime) {
          // Logout user
          this.logout();
          return;
        }

        this.props.refreshAuthentication(token);
      }
    });
  }
  loadAsync = async () => {
    //load all required info
    //user info, auth state..etc
    const getToken = await Session.getData("token");
    if (getToken) {
       this.props.getUser(getToken);
    }
    return getToken;
  };
  async componentDidUpdate(prevProps, prevState) {
    if (get(prevProps.auth, "token") !== get(this.props.auth, "token")) {
      return this.props.navigation.navigate("Dashboard");
    } else if (prevProps.auth.authError !== this.props.auth.authError) {
      this._onError(this.props.auth.authError);
      this.setState({ isLoading: false });
    }
  }
  getTokenValidity = async () => {
    try {
      const multiGetKeys = await AsyncStorage.multiGet(["token", "user"]);
      // const user = multiGetKeys[1][1] ? parse(multiGetKeys[1][1]) : null;
      // const response = await Axios.get(`/users/${user.id}/verifyUser`);
      return this.setState({
        // tokenValidity: response.status
      });
    } catch (e) {
      // console.log(e, e.response);
    }
  };
  routeToRightView(data) {
    if (this.state.tokenValidity === 200 || this.state.tokenValidity === 201) {
      this.props.navigation.navigate("Garage");
    } else {
      this.setState({ authReady: true });
    }
  }
  _onError = error => {
    if (error) {
      this.dropdown.alertWithType("error", "Error", error);
    }
  };
  onChange = data => {
    this.setState({ data: data });
  };
  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;
    const { data } = this.state;
    if (this.state.authReady) {
      return (
        <ImageBackground
          source={require("../../../assets/carta3.jpeg")}
          style={{
            height: device_height,
            width: device_width
          }}
        >
          <View style={styles.container}>
            <Swipe data={data} onChange={this.onChange} />

            <View style={styles.button}>
              {renderIf(
                this.state.data,
                <Button bordered info style={styles.but} rounded onPress={() => this.props.navigation.navigate("Login")}>
                  <Text style={styles.butText}>Sign in</Text>
                </Button>
              )}
            </View>
          </View>
          <DropdownAlert ref={ref => (this.dropdown = ref)} onClose={data => this.onAlertClose(data)} />
        </ImageBackground>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <AppLoading
            startAsync={() => this.getTokenValidity()}
            onFinish={() => this.routeToRightView()}
            onError={console.warn}
          />
          <DropdownAlert ref={ref => (this.dropdown = ref)} onClose={data => this.onAlertClose(data)} />
          <ActivityIndicator size={"large"} />
        </View>
      );
    }
  }
}
const mapStateToProps = ({ user }) => ({
  auth: user
});

const mapDispatchToProps = dispatch => ({
  // onLogin: data => dispatch(login(data)),
  onLogout: () => dispatch(logout()),
  // onSignUp: data => dispatch(createAccount(data)),
  resetFailureAction: () => dispatch(resetFailureAction()),
  getUser: token => dispatch(GetUserData(token)),
  refreshAuthentication: token => dispatch(refreshAuthentication(token))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
// AppRegistry.registerComponent('CARTA-Home', () => Home);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  circle: {
    borderRadius: 500,
    backgroundColor: "whitesmoke",
    height: 130,
    width: 130,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 50
  },
  button: {
    height: 80,
    width: 130,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center"
  },
  but: {
    width: 100,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 30,
    borderColor: "#652d90"
  },
  butText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  photo: {
    // alignSelf: "flex-start",
    right: -29
  }
});
