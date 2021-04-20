"use strict";

class Cell {
    constructor(x, y, state, element) {
        this._x = x;
        this._y = y;
        this._state = state;
        this._element = element;
    }
    get state() { 
        return `${this._state}`;
    }

    set state(value) {
        this._state = value;
    }

    /*
    for (let s = 0; s <20; s++){
            this._state[s] = Math.random();
        }
    element - HTML class=cell
    */

}


function update(cells) {
    const neighbours = cells.filter((item) => {
        if (Math.abs(item.x - this.x) <= 1 && Math.abs(item.y - this.y) <= 1) {
            if (item.x == this.x && item.y == this.y) {
                return false;
            } else {
                if (item.state == 1) {
                    return true;
                }
            }
        }
        return false;
    });

    if (neighbours.length == 3 || neighbours.length == 2) {
        this.state = 1;
    }
    if (neighbours.length < 2 || neighbours.length > 3) {
        this.state = 0;
    }
}

function render(cells) {
    if (this.state == 1) {
        // wit
    } else {
        //zwart
    }
    //toevoegen aan container
}

export default Cell;