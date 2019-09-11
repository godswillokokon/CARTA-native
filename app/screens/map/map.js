import React from 'react';
import { View, StyleSheet, Platform, Dimensions, ImageBackground, Image, Text, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from 'react-native-maps';
import Expo from "expo";

export default class Maps extends React.Component {
  state = {
    location: null
  };

  _getLocationAsync = async () => {
    let { status } = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);
    if (status !== "granted") {
      console.error("Location permission not granted!");
      return;
    }

    let location = await Expo.Location.getCurrentPositionAsync({});

    const cy = (await Expo.Location.geocodeAsync("12 Yellow duke lane"))[0];
    const deGuyNext = (await Expo.Location.geocodeAsync(
      "14 Bassey duke St."
    ))[0];
    const betShop = (await Expo.Location.geocodeAsync("watt market"))[0];

    let where = (await Expo.Location.reverseGeocodeAsync(location.coords))[0];
    console.log(where);


    this.setState({
      location,
      places: {
        cy,
        deGuyNext,
        betShop
      },
      where
    });
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  render() {
    if (!this.state.location) {
      console.log("no location found");
      return <View />;

    } else {
      console.log("location found");
    }

    return (
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: 0.3,
            longitudeDelta: 0.3
          }}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          showsCompass={true}
          showsMyLocationButton={true}

          mapType={"hybrid"}
        >
          <MapView.Marker
            coordinate={this.state.location.coords}
            title="You dey here"
            description="Current Location"
            pinColor="green"
          />
          <Polyline
            coordinates={[
              { latitude: 4.9768934, longitude: 8.33432 },
              { latitude: 4.9768506, longitude: 8.3417014 },
              { latitude: 4.9768506, longitude: 8.3343629 },
              { latitude: 4.9768506, longitude: 8.3343629 },

            ]}
            strokeColor="#ff0000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
              '#7F0000',
              '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
              '#B24112',
              '#E5845C',
              '#238C23',
              '#7F0000'
            ]}
            strokeWidth={5}
          />
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});