import React from 'react';

const embedYouTube = id => {
    return 'https://www.youtube.com/embed/' + id + '?iv_load_policy=3&amp;modestbranding=1&amp;color=white&amp;autohide=1&amp;controls=1&amp;showinfo=0&amp;rel=0&amp;hd=1&amp;cc_load_policy=1&amp;autoplay=1';
}

const YouTube = ({ id }) => (
    <div className="youtube">
        <iframe width="560" height="315" src={embedYouTube(id)} frameBorder="0" allow="autoplay; encrypted-media" />
    </div>
);

export default YouTube;
