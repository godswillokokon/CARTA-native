import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
import { FontAwesome } from '@expo/vector-icons';

export default class Swipe extends Component {
  constructor() {
    super();
    this.state = {
      but: false
    }
  }
  render() {
    return <Swiper style={styles.wrapper}
      showsButtons={false}
      autoplay autoplayTimeout={10.0}
      loop={false}
      activeDotColor={'#652d90'}
      onIndexChanged={index => {
        if (index == 3) {
          this.props.onChange(true);
        }

      }}>
      <View style={styles.slide}>
        <View style={styles.circle}>
          <Text style={styles.text}>
            <FontAwesome name="user-secret" size={40} color={"#652d90"} />
          </Text>
        </View>
        <Text style={styles.text}>Police Alert</Text>
        <Text style={styles.textP}>
          Quick Reports of Stolen Vehicles To The Police.
          </Text>
      </View>
      <View style={styles.slide}>
        <View style={styles.circle}>
          <Text style={styles.text}>
            <FontAwesome name="chain-broken" size={40} color={"#652d90"} />
          </Text>
        </View>
        <Text style={styles.text}>Kill Switch</Text>
        <Text style={styles.textP}>
          Kill Stolen Vehicle's Engine With A Button.
          </Text>
      </View>

      <View style={styles.slide}>
        <View style={styles.circle}>
          <Text style={styles.text}>
            <FontAwesome name="map-marker" size={40} color={"#652d90"} />
          </Text>
        </View>
        <Text style={styles.text}>Map Tracking </Text>
        <Text style={styles.textP}>
          Keep Track of Your Vehicle's Location.
          </Text>
      </View>
      <View style={styles.slide}>
        <View style={styles.circle}>
          <Text style={styles.text}>
            <FontAwesome name="feed" size={40} color={"#652d90"} />
          </Text>
        </View>
        <Text style={styles.text}> Dial *090*Vehicle-ID# </Text>
        <Text style={styles.textP}>
          Report To The Police And Kill The Vehicle's Engine When Your
          Vehicle is Stolen Using USSD.
          </Text>
      </View>
    </Swiper>;
  }
}
AppRegistry.registerComponent('swiper', () => Swiper);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5
  },
  circle: {
    borderRadius: 500,
    backgroundColor: 'whitesmoke',
    height: 130,
    width: 130,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
    alignItems: 'center'
  },
  textP: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 50,
    width: 300,
    marginLeft: 75,
  }

})