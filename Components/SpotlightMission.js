import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SpotlightMission extends React.Component {
    render() {

        return (
            <TouchableOpacity
                style={styles.missionButton}
                onPress={() => {
                    if (this.props.type == 'environment')
                        this.props.onEnvironment(this.props.name, this.props.description, this.props.points);

                    if (this.props.type == "location")
                        this.props.onLocation(this.props.mission)

                    if (this.props.type == 'restaurant')
                        this.props.onRestaurant(this.props.mission, this.props.description)
                }
                }
            >

                <Ionicons name={this.props.picture(this.props.type)} size={50} color={'#417110'}/>

                <Text style={styles.titleMission}>{this.props.name}</Text>
                <Text>{this.props.points}</Text>
            </TouchableOpacity>


        )
    }


};

