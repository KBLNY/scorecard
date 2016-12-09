/**
 * This API class is used to handle REST calls
 * NOTE: For this demo purpose, REST calls are replaced by hard-coded JSON value 
 */

// Import
import Challenge from '../models/Challenge.js'


export default class ChallengeApiManager {

  /**
   * Get a Challenge Win Notification 
   */
  static getWinNotification() {
    // TODO This should be done, at least, using 'fetch' 
    const promise = new Promise(function(resolve, reject) {
      const json = {
        "id": 588,
        "fixture": {
          "homeTeam": {
            "id": 100,
            "name": "Chelsea FC",
            "logo": "https://s3.amazonaws.com/playabl/assets/teams/1097/clublogo.png",
          },
          "awayTeam": {
            "id": 2,
            "name": "Everton FC",
            "logo": "https://s3.amazonaws.com/playabl/assets/teams/209/clublogo.png"
          },
          "id": 111
        },
        "status": 1,
        "stake": 75,
        "currentPot": 150,
        "thumbUpCount": 1,
        "thumbDownCount": 1,
        "backgroundColor": "#c21b2c",
        "predictions": [
          {
            "type": "teamDraw",
            "data": {
              "type": "team",
              "id": 100,
              "value": 1,
              "name": "Chelsea FC"
            }
          },
          {
            "type": "teamGoal",
            "data": {
              "type": "team",
              "id": 100,
              "value": 2,
              "name": "Chelsea FC"
            }
          },
          {
            "type": "teamGoal",
            "data": {
              "type": "team",
              "id": 91,
              "value": 2,
              "name": "Everton FC"
            }
          }
        ],
        "isJoined": true,
        "joinChoice": true
      }

      // Build a Model from the JSON
      const challenge = new Challenge(json)

      resolve(challenge);
    });

    return promise;
  }

}
