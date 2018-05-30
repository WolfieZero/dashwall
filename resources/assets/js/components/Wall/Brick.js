import React from 'react';

const positionStyle = (position) => {
    const coords = position.split(':');
    const number = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
        j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16,
        q: 17, r: 18, s: 19, t: 20, u: 21, v: 22,
        w: 23, x: 24, y: 25, z: 26
    }
    let gridColumnStart, gridRowStart, gridColumnEnd, gridRowEnd;

    coords.forEach(coord => {
        const x = number[coord.replace(/[0-9]/g, '')];
        const y = parseInt(coord.replace(/[a-z]/g, ''), 10);

        if (! gridColumnStart) {
            // start position
            gridColumnStart = x;
            gridRowStart = y;
        } else {
            // end position
            gridColumnEnd = x + 1;
            gridRowEnd = y + 1;
        }

    });

    return {
        gridColumnStart,
        gridRowStart,
        gridColumnEnd,
        gridRowEnd,
    };
};

const classNames = noStyle => {
    let classNames = 'brick';
    if (noStyle) {
        classNames += ' brick--no-style';
    }
    return classNames;
}

const Brick = ({ children, position, noStyle = false }) => (
    <section className={classNames(noStyle)} style={ positionStyle(position) }>
        { children }
    </section>
)

export default Brick;
