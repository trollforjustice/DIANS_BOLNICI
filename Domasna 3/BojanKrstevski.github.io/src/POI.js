export default class POI {
  constructor(props) {
    this.state = {
      name: props.name,
      coordinates: [props.coordinates],
      street: props["addr:street"],
      dist:props.dist,
    
    };
  }
  getName() {
    return this.state.name;
  }
  getCoordinates() {
    return this.state.coordinates;
  }
  getStreet() {
    return this.state.street;
  }
}
