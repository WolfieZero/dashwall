import React from 'react';

const sizeStyle = (sizeReference = '') => {
    if (sizeReference === '') {
        return;
    }
    const size = sizeReference.split(',');

    const colSize = (101 - size[0]) / size[0];
    const rowSize = (101 - size[1]) / size[1];

    return {
        gridTemplateColumns: 'repeat(' + size[0] + ', ' + colSize + '%)',
        gridTemplateRows: 'repeat(' + size[1] + ', ' + rowSize + '%)',
    }
}

const Wall = ({ children, size }) => (
    <main className="wall" style={ sizeStyle(size) }>
        {children}
    </main>
);

export default Wall;
