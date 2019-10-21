const songsReducer =() =>{
	return [
		{ title: 'No Scrubs', duration: '6:09' },
		{ title: 'Macarena', duration: '4:34' },
		{ title: 'All Star', duration: '2:56' },
		{ title: 'I Want it That Way', duration: '3:45' }
	]
};

const SelectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED'){
		return action.payload;
	}

	return selectedSong;
}