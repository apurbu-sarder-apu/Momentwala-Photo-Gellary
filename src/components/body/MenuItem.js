import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const MenuItem = props => {

    return (
        <div>
            <Card style={{margin:"5px"}}>
                <CardBody>
                    <CardImg 
                    width="100%" 
                    alt={props.photo.name} 
                    src={props.photo.image} />
                        <CardTitle
                            style={{color: "#FF5733", cursor: "pointer", fontSize: "150%", fontWeight: "900"}} 
                            onClick={props.PhotoSelect}
                        >{props.photo.name}
                        </CardTitle>
                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;