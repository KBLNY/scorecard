/**
 * This defines all the translation used for the app
 * Translations are grouped by functional features, like Generic, Navigation, Errors, Challenges Won, etc.
 */

// Import
import Localization from 'react-native-localization';


const winNotification = new Localization({
  en: {
    youWonTitle : "YOU WON",
    wonTypeChallenges : "CHALLENGES",
    win : "WIN",
    collectButton : "COLLECT",
    totalWonTitle : "TOTAL WON",
  },
  fr: {
    youWonTitle : "GAGNÉ",
    wonTypeChallenges : "DÉFIS",
    win : "VAINQUEUR",
    collectButton : "RÉCUPÉRER",
    totalWonTitle : "TOTAL GAGNÉ",
  },
});


export default {
  winNotification : winNotification
};