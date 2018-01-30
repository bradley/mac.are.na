import React, { Component } from 'react'
import { onlySongs } from '../lib/helpers'

import SongItem from '../components/SongItem'

class Playlist extends Component {
  componentDidMount() {
    // get slug from router params and return it to <Main />
    const playlistSlug = this.props.match.params.playlistSlug
    this.props.returnSelectedPlaylist(playlistSlug)
  }

  makeSongList = (playlist) => {
    if (playlist) {
      return onlySongs(playlist.contents).map((song, index) => {
        return (
          <SongItem
            key={song.id}
            song={song}
            handleSelection={() => this.props.handleSongSelection(song, index)} />
        )
      })
    }
  }

  render () {
    return (
      <div className='w-100 min-vh-100'>
        {this.makeSongList(this.props.currentOpenPlaylist)}
      </div>
    )
  }
}

export default Playlist
