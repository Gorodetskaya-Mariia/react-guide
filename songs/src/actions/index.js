export const selectSong =() => { //named export
	return {
		type: 'SONG_SELECTED',
		payload: song
	}
};
