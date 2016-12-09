/**
 * This class represents the Challenge a user made to another
 */

// Import
import StatsHelpers from "../helpers/StatsHelper.js";
import Team from "../models/Team.js";

export default class Challenge {

  constructor(json) {
    this.id = json.fixture && json.fixture.id;
    this.homeTeam = json.fixture && new Team(json.fixture.homeTeam);
    this.awayTeam = json.fixture && new Team(json.fixture.awayTeam);
  }

  get expGained() {
    // Simulate experience gained
    const expGained = StatsHelpers.getRandomIntInclusive(1, 1000);
    return `+${expGained} `;
  }

  get coinGained() {
    // Simulate coins gained
    const coinsGained = StatsHelpers.getRandomIntInclusive(1, 10000);
    return `+${coinsGained} `;
  }

}