import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button, Footer, FooterTab, Badge } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
// import console = require("console");
export default class FooterComponet extends Component {
  render() {
    const { name, props } = this.props;
    console.log(props);
    switch (name) {
      case "garage": {
        return (
          <Footer style={styles.footer}>
            <FooterTab style={styles.footer}>
              <Button badge vertical style={styles.border} onPress={() => props.navigation.navigate("Dashboard")}>
                <View style={styles.row}>
                  <FontAwesome name="align-left" size={15} color={"white"} />
                  <Text style={styles.whiteText}>Overview</Text>
                </View>
              </Button>
              <Button vertical style={styles.border} onPress={() => props.navigation.navigate("Profile")}>
                <View style={styles.row}>
                  <FontAwesome name="address-card" size={15} color={"white"} />
                  <Text style={styles.whiteText}>Profile</Text>
                </View>
              </Button>
              <Button active badge vertical style={[styles.footerActive, styles.border]}>
                {/* <Badge>
                  <Text style={styles.badge}>10</Text>
                </Badge> */}
                <View style={styles.row}>
                  <FontAwesome name="car" size={15} color={"#652d90"} />
                  <Text style={styles.active}>Garage</Text>
                </View>
              </Button>
            </FooterTab>
          </Footer>
        );
        break;
      }
      case "overview": {
        return (
          <Footer style={styles.footer}>
            <FooterTab style={styles.footer}>
              <Button active badge vertical style={[styles.footerActive, styles.border]}>
                <View style={styles.row}>
                  <FontAwesome name="align-left" size={15} color={"#652d90"} />
                  <Text style={styles.active}>Overview</Text>
                </View>
              </Button>
              <Button vertical style={styles.border} onPress={() => props.navigation.navigate("Profile")}>
                <View style={styles.row}>
                  <FontAwesome name="address-card" size={15} color={"white"} />
                  <Text style={styles.whiteText}>Profile</Text>
                </View>
              </Button>
              <Button badge vertical style={styles.border} onPress={() => props.navigation.navigate("Garage")}>
                <View style={styles.row}>
                  {/* <Badge>
                    <Text style={styles.badge}>10</Text>
                  </Badge> */}
                  <View style={styles.row}>
                    <FontAwesome name="car" size={15} color={"white"} />
                    <Text style={styles.whiteText}>Garage</Text>
                  </View>
                </View>
              </Button>
            </FooterTab>
          </Footer>
        );
        break;
      }
      case "profile": {
        return (
          <Footer style={styles.footer}>
            <FooterTab style={styles.footer}>
              <Button badge vertical style={styles.border} onPress={() => props.navigation.navigate("Dashboard")}>
                <FontAwesome name="align-left" size={15} color={"white"} />
                <Text style={styles.whiteText}>Overview</Text>
              </Button>
              <Button active badge vertical style={[styles.footerActive, styles.border]}>
                <View style={styles.row}>
                  <FontAwesome name="address-card" size={15} color={"#652d90"} />
                  <Text style={styles.active}>Profile</Text>
                  {/* <Badge>
                    <Text style={styles.badge}>10</Text>
                  </Badge> */}
                </View>
              </Button>
              <Button badge vertical style={styles.border} onPress={() => props.navigation.navigate("Garage")}>
                {/* <Badge>
                  <Text style={styles.badge}>10</Text>
                </Badge> */}
                <View style={styles.row}>
                  <FontAwesome name="car" size={15} color={"white"} />
                  <Text style={styles.whiteText}>Garage</Text>
                </View>
              </Button>
            </FooterTab>
          </Footer>
        );
        break;
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footer: {
    backgroundColor: "#652d90"
  },
  footerActive: {
    backgroundColor: "white",
    height: 100
  },
  active: {
    color: "#652d90"
  },
  badge: {
    borderRadius: 300,
    height: 14,
    width: 15
  },
  whiteText: {
    color: "white"
  },
  border: {
    borderWidth: 1,
    borderLeftColor: "#652d90",
    // borderColor: "#652d90",
    borderRightColor: "#7438a2",
    borderBottomColor: "#652d90",
    borderTopColor: "#652d90"
  },
  row: {
    alignContent: "center",
    alignItems: "center"
    // flexDirection: "row"
  }
});
