import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker, ProviderPropType } from './lib';
import flagBlueImg from './assets/flag-blue.png';
import flagPinkImg from './assets/flag-pink.png';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

const icons = {
  blue: {
    image: flagBlueImg,
    centerOffset: { x: -18, y: -60 },
    anchor: { x: 0.69, y: 1 },
  },
  pink: {
    image: flagPinkImg,
    centerOffset: { x: -42, y: -60 },
    anchor: { x: 0.84, y: 1 },
  },
}

class MarkerTypes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marker1: true,
      marker2: true,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}>
          <Marker
            onPress={() => this.setState({ marker1: !this.state.marker1 })}
            coordinate={{
              latitude: LATITUDE + SPACE,
              longitude: LONGITUDE + SPACE,
            }}
            {...(this.state.marker1 ? icons.blue : icons.pink)}>
            <Text style={styles.marker}>X</Text>
          </Marker>
          <Marker
            onPress={() => this.setState({ marker2: !this.state.marker2 })}
            coordinate={{
              latitude: LATITUDE - SPACE,
              longitude: LONGITUDE - SPACE,
            }}
            {...(this.state.marker2 ? icons.pink : icons.blue)}
          />
          <Marker
            onPress={() => this.setState({ marker2: !this.state.marker2 })}
            coordinate={{
              latitude: LATITUDE + SPACE,
              longitude: LONGITUDE - SPACE,
            }}
            opacity={0.6}
            {...(this.state.marker2 ? icons.pink : icons.blue)}
          />
        </MapView>
      </View>
    );
  }
}

MarkerTypes.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    marginLeft: 46,
    marginTop: 33,
    fontWeight: 'bold',
  },
});

export default MarkerTypes;
