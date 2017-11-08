import React, { Component } from 'react';
import './css/PlayList.css';
import { TrackList } from '../TrackList/TrackList';

export class PlayList extends Component {
  render() {
    return (
      <div className="Playlist">
        <input value="New Playlist"/>
          <TrackList />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}
