/**
 * WinEarning represents the coins and exp a user gained when he won a challenge
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
import Challenge from "../models/Challenge.js";
import Localization from "../i18n/Localization.js";


export default class WinEarning extends Component {
    
    static propTypes = {
        // title: PropTypes.string.isRequired
        // challenge : Challenge
    }

    render() {
      const {challenge} = this.props;

        return (
            <View style={styles.container} >
                    <SCText textType="h3" >{Localization.winNotification.totalWonTitle}</SCText>
            
                    <SCText textType="goldBig" 
                            rightImage={require("../assets/img/iconotcoin.png")}>
                        {challenge.coinGained}
                    </SCText>
                    <SCText textType="gold" 
                            rightImage={require("../assets/img/iconotexp.png")}>
                        {challenge.expGained}
                    </SCText>
            </View>
        );
    }
}



const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },

});
