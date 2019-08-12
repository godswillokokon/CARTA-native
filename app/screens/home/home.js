import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  AppRegistry,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import { Button } from 'native-base';
import Swipe from './swiper';
import renderIf from '../renderIf';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor() {
    super();
    this.state = {
      data: false,
    };
  }
  onChange = data => {
    this.setState({ data: data });
  };
  render() {
    const device_width = Dimensions.get('window').width;
    const device_height = Dimensions.get('window').height;
    const { data } = this.state;
    return (
      <ImageBackground
        source={require('../../../assets/carta3.jpeg')}
        style={{
          height: device_height,
          width: device_width,
        }}
      >
        <View style={styles.container}>

          <Swipe data={data} onChange={this.onChange} />

          <View style={styles.button}>
            {renderIf(
              this.state.data,
              <Button
                bordered
                info
                style={styles.but}
                rounded
                onPress={() => this.props.navigation.navigate('Login')}
              >
                <Text style={styles.butText}>Sign in</Text>
              </Button>
            )}

          </View>

        </View>

      </ImageBackground>
    );
  }
}
AppRegistry.registerComponent('CARTA-Home', () => Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    borderRadius: 500,
    backgroundColor: 'whitesmoke',
    height: 130,
    width: 130,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
  button: {
    height: 80,
    width: 130,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  but: {
    width: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    borderColor: '#652d90',
  },
  butText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  photo: {
    // alignSelf: "flex-start",
    right: -29,
  },
});
