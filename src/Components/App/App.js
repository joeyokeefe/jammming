import "./App.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/Playlist";
import SearchResults from "../SearchResults/SearchResults";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Evil Woman",
          artist: "ELO",
          album: "Face the Music",
          id: 1,
        },
        {
          name: "Peace of Mind",
          artist: "Boston",
          album: "Boston",
          id: 2,
        },
        {
          name: "Reptilia",
          artist: "The Strokes",
          album: "Room on Fire",
          id: 3,
        },
      ],
      playlistName: "Rock Mix",
      playlistTracks: [
        {
          name: "Evil Woman",
          artist: "ELO",
          album: "Face the Music",
          id: 1,
        },
        {
          name: "Peace of Mind",
          artist: "Boston",
          album: "Boston",
          id: 2,
        },
        {
          name: "Reptilia",
          artist: "The Strokes",
          album: "Room on Fire",
          id: 3,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }
  addTrack(track) {
    if (
      this.props.playlistTracks.find((savedTrack) => savedTrack.id === track.id)
    ) {
      return;
    }
    this.setState({ playlistTracks: [...this.state.playlistTracks, track] });
  }
  removeTrack(track) {
    const newPlaylist = this.props.playlistTracks.filter(
      (songs) => songs.id !== track.id
    );
    this.setState({ playlistTracks: newPlaylist });
  }
  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
