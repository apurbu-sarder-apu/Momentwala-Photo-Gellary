import React, { Component } from 'react';
import PHOTOS from '../../data/photos.js';
import MenuItem from './MenuItem';
import PhotoDetail from './PhotoDetail';
import { CardColumns, Modal, ModalBody, } from 'reactstrap';


class Menu extends Component {
    state = {
        photos: PHOTOS,
        selectedPhoto: null
    }

    onPhotoSelect = photo => {
        console.log(photo);
        this.setState({ selectedPhoto: photo });
    }

    render() {
        const menu = this.state.photos.map(item => {
            return (
                <MenuItem 
                    photo={item} 
                    key={item.id}
                    PhotoSelect={() => this.onPhotoSelect(item)}
                    />
            );
        })
        let photoDetail = null;
        if(this.state.selectedPhoto!=null) {
            photoDetail = <PhotoDetail photo={this.state.selectedPhoto} />
        }
        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <ModalBody>
                        {photoDetail}
                    </ModalBody>

                </div>
            </div>
        )
    }
}

export default Menu;