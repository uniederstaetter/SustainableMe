import React from 'react';
import {View } from 'react-native';
import MissionTransport from "../Components/MissionTransport";
import {Subscribe} from "unstated";
import TransportationContainer from '../Container/TransportationContainer';
import PointsContainer from "../Container/PointsContainer";

const MissionTransportScreen = props => {
  return (
    <View>
      <Subscribe to={[TransportationContainer, PointsContainer]}>
        {(transportcontainer, pointscontainer) => (
            <MissionTransport
              fermate={(origin, destination)=>transportcontainer.calculateRoute(origin, destination)}
              onQR={(code)=>props.navigation.navigate('QR_CODE', {code:code})}
              onCalculate={kilometer=>pointscontainer.addPointsfromDistance(kilometer)}
            />
        )}
      </Subscribe>

    </View>
  )
};
MissionTransportScreen.navigationOptions = {
    title: 'Transport Mission',
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#417110'
    }
};

export default MissionTransportScreen;
