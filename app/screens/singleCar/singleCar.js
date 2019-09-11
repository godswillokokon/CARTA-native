import React, { Component } from "react";
// import styled from "styled-components";
import FooterComponet from "../footer";
import { View, StyleSheet, Platform, Dimensions, Image, Text, TouchableOpacity } from "react-native";
import ImageEditor from "@react-native-community/image-editor";
import { ImagePicker } from 'expo';
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

export default class Single extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    // image: 'https://res.cloudinary.com/ogcodes/image/upload/v1565462608/tdghephwnr5z5jl0d2ul.jpg',
    image: null,

  };
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (result.cancelled) {
      console.log('got here');
      return;
    }

    let resizedUri = await new Promise((resolve, reject) => {
      ImageEditor.cropImage(result.uri,
        {
          offset: { x: 0, y: 0 },
          size: { width: result.width, height: result.height },
          displaySize: { width: 200, height: 200 },
          resizeMode: 'contain',
        },
        (uri) => resolve(uri),
        () => reject(),
      );
    });

    // this gives you a rct-image-store URI or a base64 image tag that
    // you can use from ImageStore

    this.setState({ image: resizedUri });
  };



  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;
    let { image } = this.state;
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
            <Button transparent onPress={() => this.props.navigation.navigate("Garage")}>
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
          <Card>
            <CardItem>
            </CardItem>
            <CardItem cardBody>
              <Button onPress={() => this._pickImage}>Pick an image from camera roll</Button>


              />
              {
                <Image source={{ uri: image }} style={{ width: 200, height: 200, resizeMode: 'contain' }} />}
            </CardItem>

          </Card>
          <View style={styles.space}>
            <Form >
              <Item floatingLabel >
                <Label>Company*</Label>
                <Input />
              </Item>
              <Item floatingLabel >
                <Label>Model*</Label>
                <Input />
              </Item>
              <Item floatingLabel >
                <Label>Chassis Number*</Label>
                <Input />
              </Item>
              <Item floatingLabel >
                <Label>Car Color*</Label>
                <Input />
              </Item>
              <Item floatingLabel >
                <Label>Plate Number*</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Any dent?</Label>
                <Input />
              </Item>

            </Form>
            <TouchableOpacity style={styles.edit} >
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.report} onPress={() => this.props.navigation.navigate("Report")}>
              <Text style={styles.whiteText}>Report</Text>
            </TouchableOpacity>
          </View>

        </Content>
        <FooterComponet name="garage" props={this.props} />
      </Container>
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
  editText: {
    color: "white",
  },
  edit: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#652d90",
    padding: 20,
    margin: 10,
    width: 100,
    alignItems: "center",
    borderRadius: 39

  },
  report: {
    alignSelf: "center",
    backgroundColor: "red",
    padding: 20,
    margin: 10,
    width: 200,
    alignItems: "center",
    borderRadius: 39,
  },


});
