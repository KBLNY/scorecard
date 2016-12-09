/**
 * WinNotification represents the view when a user won a challenge
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
  Alert,
} from 'react-native';
import ChallengeApiManager from "../apis/challengeApiManager.js";
import WinEarning from "../components/WinEarning.js";
import WinCard from "../components/WinCard.js";
import SCText from "../components/SCText.js";
import Localization from "../i18n/Localization.js";

export default class WinNotification extends Component {

    // propTypes belongs to the class, and thus it is static
    static propTypes = {
        // title: PropTypes.string.isRequired
    }

    state = {
        // TODO the 'challenge' would be better passed as a property, because it would probably come from another component 
        challenge: null
    }

    constructor(props) {
        super(props);
    }


    /* Component Lifecycle */

    componentDidMount() {
        // Get the challenge from the API
        ChallengeApiManager.getWinNotification()
            .then(challenge => {
                // We got a challenge, set the state 
                this.setState({
                    challenge: challenge
                });
            })
            .catch(error => {
                // TODO handle the error with an error handler
            });
    }


    /* Rendering */

    render() {
        if (this.state.challenge == null) {
            return (
                <View />
            )
        }

        return (
            <Image 
                style={styles.container}
                source={require("../assets/img/backgroundeffect.png")}
                resizeMode="cover" >
                <View style={styles.topContainer}>
                    <SCText textType="h1" >{Localization.winNotification.youWonTitle}</SCText>
                    <SCText textType="h2" leftImage={require("../assets/img/icoallchallengecard.png")} >{Localization.winNotification.wonTypeChallenges}</SCText>
                </View>

                <View style={styles.middleContainer}>
                    <WinCard challenge={this.state.challenge} />
                </View>
                
                <View style={styles.bottomContainer}>
                    <WinEarning challenge={this.state.challenge} />
                </View>
            </Image>
        );
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
  },

  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },

  middleContainer: {
    flex: 1.2,
  },

  bottomContainer: {
    flex: 1,
  }

});
