import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SpotlightMission = props => {

    //TODO: this could be moved to the screen part!
    const picture = props.computePicture(props.type);

    return (
        <TouchableOpacity
            style={styles.missionButton}
            onPress={() => {
                if (props.type == 'environment')
                    props.onEnvironment(props.name, props.description)

                if (props.type == "location")
                    props.onLocation(props.name, props.description)

                if (props.type == 'restaurant')
                    props.onRestaurant(props.mission, props.description)
            }
            }
        >

            <Ionicons name={picture} size={50} color={'#417110'}/>

            <Text style={styles.titleMission}>{props.name}</Text>
            <Text>{props.points}</Text>
        </TouchableOpacity>


    )


};

export default SpotlightMission;
