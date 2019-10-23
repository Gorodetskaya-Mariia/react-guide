export const selectSong = (song) => { //named export
	return {
		type: 'SONG_SELECTED',
		payload: song
	}
};
