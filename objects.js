var playlist = {
'Dean Martin': 'Everybody Loves Somebody',
'Elton John': 'I am still standing'
}
Function updatePlaylist (playlist, artistName, songTitle) {
  playlist [artistName] = songTitle
  return playlist
}
Function removeFromPlaylist (playlist,artistName) {
  delete playlist[artistName]
  return playlist
}