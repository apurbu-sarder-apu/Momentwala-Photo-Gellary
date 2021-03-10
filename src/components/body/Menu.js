import React, { Component } from 'react';
import PHOTOS from '../../data/photos.js';
import MenuItem from './MenuItem';


class Menu extends Component {
    state = {
        photos: PHOTOS
    }

    render() {
        const menu = this.state.photos.map(item => {
            return (
                <MenuItem photo={item} key={item.id}/>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;