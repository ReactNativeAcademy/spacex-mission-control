import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  async componentDidMount() {
    const response = await fetch(
      'https://api.spacexdata.com/v2/launches/latest'
    );
    const data = await response.json()
    this.setState({
      missionPatch: data.links.mission_patch,
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode='contain'
          source={{ uri: this.state.missionPatch}}
          style={styles.patch}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEF5FC',
  },
  patch: { 
    width: 200,
    height:200,
  }
})

export default Home