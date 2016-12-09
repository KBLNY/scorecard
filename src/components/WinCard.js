/**
 * WinCard represents the challenge itself
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
import Team from "../components/Team.js";
import Button from "../components/Button.js";
import Challenge from "../models/Challenge.js";
import Localization from "../i18n/Localization.js";
import Colors from "../assets/styles/Colors.js";


export default class WinCard extends Component {
    
    static propTypes = {
        // title: PropTypes.string.isRequired
        // challenge : Challenge
    }

    render() {
      const {challenge} = this.props;
      const collectButtonText = `${Localization.winNotification.collectButton} ${challenge.coinGained}`;

        return (
            <View style={styles.container} >
                
                <View style={styles.compLogoContainer} >
                    <Image source={require("../assets/img/complogo.png")} resizeMode="contain" style={styles.compLogo} />
                </View>
                
                <View style={styles.teamContainer} >
                    <Team backgroundColor={Colors.blue} team={challenge.homeTeam} align="left" />
                    <Team backgroundColor={Colors.red} team={challenge.awayTeam} align="right" />
                </View>

                <View style={styles.challengeCard}>
                    <View style={styles.challengeCardWinner} >
                        <Image source={{uri: challenge.homeTeam.logo}} resizeMode="contain" style={styles.winnerLogo} />
                    </View>
                    <Button rightImage={require("../assets/img/iconotblackcoin.png")}>{collectButtonText}</Button>
                </View>
                <View style={styles.challengeCardBottom} />

            </View>
        );
    }
}



const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 10,
  },

  teamContainer: {
      flexDirection: "row",
      height: 30,
  },

  compLogoContainer: {
      flex: 1,
      position: "absolute",
      top: 7.5,
      left: 0,
      right: 0,
      alignItems: "center",
      zIndex: 10, // 10 in order to juggle with other layers later
  },

  compLogo: {
      height: 35,
      width: 35,
      backgroundColor: "white",
  },

  challengeCard: {
      flex: 1,
      backgroundColor: Colors.darkGray,
      padding: 10,
  },

  challengeCardWinner: {
      flex: 1,
      backgroundColor: Colors.blue,
  },

  winnerLogo: {
      flex: 1, 
      margin: 10,
  },

  challengeCardButton: {
    height: 43,
    borderRadius: 2,
    borderWidth: 2, 
    borderColor: Colors.yellow,
    alignItems: "center",
    justifyContent: "center"
  },

  challengeCardBottom: {
    width: 20,
    height: 20,
    alignSelf: "center",
    borderTopWidth: 20,
    borderRightWidth: 15,
    borderBottomWidth: 0,
    borderLeftWidth: 15,
    borderTopColor: Colors.darkGray,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  }

});
