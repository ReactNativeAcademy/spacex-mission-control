import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

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
      details: data.details,
      success: data.launch_success,
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
        <Text
          style={{ backgroundColor: this.state.success ? '#C1F5D7' : 'red'}}
        >
          {this.state.details}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEF5FC',
    alignItems: 'center',
    justifyContent: 'center'
  },
  patch: { 
    width: 200,
    height:200,
    marginBottom: 50,
  }
})

export default Home