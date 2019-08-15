import React, { Component } from 'react'
import { View, StyleSheet, Platform, Dimensions, ImageBackground, Image, Text, TouchableOpacity } from "react-native";
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
    Textarea
} from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import FooterComponet from "../footer";

export default class componentName extends Component {
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
                    <Text style={styles.title}></Text>
                </Body>
                <Right style={{ marginRight: 10 }}>
                    <FontAwesome name="ellipsis-v" size={20} color={"white"} />
                </Right>
            </Header>
            <Content>

            </Content>
            <FooterComponet name="profile" />
      </Container>
    )
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
        paddingTop: 100,
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
    edit: {
        alignSelf: "center",
        backgroundColor: "#652d90",
        padding: 5,
        margin: 10,
        width: 60,
        alignItems: "center"

    }

});
