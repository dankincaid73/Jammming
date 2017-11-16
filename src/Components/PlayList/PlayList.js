import React, { Component } from 'react';
import './css/PlayList.css';
import { TrackList } from '../TrackList/TrackList';

export class PlayList extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input value={this.props.name} onChange={this.handleNameChange} />
        <TrackList tracks={this.props.tracks} onRemove={this.props.onRemove} />
        <a className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </a>
      </div>
    );
  }
}
