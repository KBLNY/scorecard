/**
 * A custom Button component for the App
 */

// Import
import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import SCText from "./SCText.js";
import Colors from "../assets/styles/Colors.js";

export default class Button extends Component {

    /* Rendering */

    render() {
        return(
            <View style={styles.challengeCardButton} >
                <SCText textType="h2" 
                        rightImage={this.props.rightImage}>
                    {this.props.children}
                </SCText>
            </View>
        );
    }

}


const styles = StyleSheet.create({
  
  challengeCardButton: {
    height: 43,
    borderRadius: 2,
    borderWidth: 2, 
    borderColor: Colors.yellow,
    alignItems: "center",
    justifyContent: "center"
  }

});
