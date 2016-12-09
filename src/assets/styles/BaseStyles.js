/**
 * This defines the base style used in the whole app
 */

// Import
import {
  StyleSheet
} from 'react-native';
import Colors from "./Colors.js";

export default StyleSheet.create({

  /* Text Style */

  baseText : {
    fontFamily: "BebasNeue",
    backgroundColor : "transparent",
  },

  h1: {
    fontSize: 57.7,
    fontWeight: "900",
    color: Colors.lightGray,
  },

 h2: {
    fontSize: 26.8,
    fontWeight: "900",
    color: Colors.lightGray,
  },

 h3: {
    fontSize: 20.1,
    fontWeight: "900",
    color: Colors.lightGray,
  },

  text: {
    fontSize: 16,
    color: "white",
  },

  goldBig: {
    fontSize: 46.7,
    fontWeight: "900",
    color: "white",
  },

  gold: {
    fontSize: 25.9,
    fontWeight: "900",
    color: Colors.lightGray,
  },

  team: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.lightGray,
  },

  textWithImages: {
    flexDirection: "row",
    alignItems: "center"
  }

});
