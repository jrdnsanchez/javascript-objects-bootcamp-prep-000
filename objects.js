var playlist = {
'Dean Martin': 'Everybody Loves Somebody',
'Elton John': 'I am still standing'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
