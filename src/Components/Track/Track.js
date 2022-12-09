import React from "react";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  addTrack() {
    this.props.onAdd(this.props.track);
  }
  removeTrack() {
    this.props.onRemove(this.props.track);
  }
  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onClick={this.addTrack}>
          +
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={this.removeTrack}>
          -
        </button>
      );
    }
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {/* <button className="Track-action"><!-- + or - will go here --></button> */}
      </div>
    );
  }
}

export default Track;
