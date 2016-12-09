/**
 * A custom Text component for the App
 */

// Import
import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import BaseStyles from "../assets/styles/BaseStyles.js";
import Localization from "../i18n/Localization.js";

export default class SCText extends Component {

    // propTypes belongs to the class, and thus it is static
    static propTypes = {
        textType: React.PropTypes.string,
        // leftImage: (React.PropTypes.number || React.PropTypes.object),
        // rightImage: (React.PropTypes.number || React.PropTypes.object)
    }

    constructor(props) {
        super(props);
    }


    get textStyle() {
        return (typeof(this.props.textType) !== "undefined") ? BaseStyles[this.props.textType] : BaseStyles.text;
    }


    /* Rendering */

    render() {
        return(
            <View style={BaseStyles.textWithImages}>
                { this.renderImage(this.props.leftImage) }
                <Text style={[BaseStyles.baseText, this.textStyle, this.props.style]}  >
                    {this.props.children}
                </Text>
                { this.renderImage(this.props.rightImage) }
            </View>
        );
    }

    renderImage(imageSource) {
        if (typeof(imageSource) === "undefined") {
            return;
        } 

        return (
            <Image 
                source={imageSource} 
                resizeMode="contain"
            />
        )
    }

}
