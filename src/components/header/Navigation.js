import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar dark color="dark">
                <div className="container">
                    <NavbarBrand href="/">Momentwala</NavbarBrand>
                </div>
                {/* <NavbarBrand href="/">Momentwala</NavbarBrand> */}
            </Navbar>
        </div>
    )
}
export default Navigation;