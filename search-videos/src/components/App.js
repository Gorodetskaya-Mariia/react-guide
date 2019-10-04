import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyDeHYdMhFoLMuAQWTlJy1mc03S-1nNzByo';

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onTermSubmit('buildings');
	}

	onTermSubmit = async term => {
		const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
			params: {
				part: 'snippet',
				key: KEY,
				maxResults: '5',
				q: term
			}
		});
		
		this.setState({ 
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		 });
	};

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	}

	render() {
		return (
			<div className="ui container" style={{marginTop: '30px'}}>
				<SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo}></VideoDetail>
						</div>
						<div className="five wide column">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={ this.state.videos }>									
							</VideoList>
						</div>
					</div>
				</div>				
			</div>
		)
	}
}

export default App;