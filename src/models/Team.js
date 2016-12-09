/**
 * This class represents the Challenge a user made to another
 */

export default class Team {

  constructor(json) {
    this.id = json.id;
    this.name = json.name;
    this.logo = json.logo;
  }

}