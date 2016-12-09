/**
 * Team represents the view of a Team name & logo 
 */

// Import
import React, {Component, PropTypes} from 'react';
import {
  StyleSheet,
  View,
  ListView,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import SCText from "../components/SCText.js";
import Team from "../models/Team.js";


export default class TeamView extends Component {
    
    static propTypes = {
        backgroundColor: PropTypes.string,
        team : PropTypes.object, // Team,
        align : PropTypes.string
    }

    get backgroundColor() {
        return (typeof(this.props.backgroundColor) !== "undefined") ? {backgroundColor: this.props.backgroundColor} : null
    }

    render() {
      const {team, align} = this.props;

        return (
            <View style={[styles.container, this.backgroundColor]} >
                {
                    (align === "left") ?
                        this.renderTeamLeft()
                        :
                        this.renderTeamRight()
                }
            </View>
        );
    }

    renderTeamLeft() {
        return (
            <SCText textType="team" 
                    rightImage={{uri: this.props.team.logo}}>
                {this.props.team.name}
            </SCText>
        )
    }
    
    renderTeamRight() {
        return (
            <SCText textType="team" 
                    leftImage={{uri: this.props.team.logo}}>
                {this.props.team.name}
            </SCText>
        )
    }

}



const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

});
