import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {styles} from '../styles.js';
import SpotlightMission from './SpotlightMission'

export default class MissionList extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
          missions: []
      }
  }

  async componentDidMount() {
      const missions = await this.props.computeList();
      this.setState({missions: missions})
  }


render () {
        return (
            <View>
            {this.state.missions.map(mission =>
              <SpotlightMission
              name={mission.name}
              points={mission.points}
              type={mission.type}
              computePicture={this.props.computePicture}
              onEnvironment={this.props.onEnvironment}
              onTransport={this.props.onTransport}
              onLocation={this.props.onLocation}
              onRestaurant={this.props.onRestaurant}
              />
            )}
            </View>
        )
}

}