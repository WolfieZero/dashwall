import React from 'react';

class CurrentTrack extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentTrack: {},
            intervalId: 0,
        }
    }

    async load() {
        const url = '/api/spotify/current-track';
        try {
            const response = await fetch(url);
            const currentTrack = await response.json();
            this.setState({currentTrack});
        } catch (error) {
            console.error(error.message);
        }
    };

    componentWillMount() {
        this.load();
    }

    componentDidMount() {
        const intervalId = setInterval(this.load.bind(this), 1000);
        this.setState({intervalId});
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    };

    render() {
        const currentTrack = this.state.currentTrack.item;
        if (! currentTrack) {
            return null;
        }

        const name = currentTrack.name;
        const artist = currentTrack.artists[0].name;
        const album = currentTrack.album.name;
        const albumArtwork = currentTrack.album.images[0].url;

        const style = {
            backgroundImage: 'url(' + albumArtwork + ')',
        };

        return (
            <div className="spotify">
                <div style={style} className="spotify__background" />
                <div className="spotify__content">
                    <span className="spotify__artist">{artist}</span>
                    <span className="spotify__name">{name}</span>
                </div>
            </div>
        );
    }
}

export default CurrentTrack;
