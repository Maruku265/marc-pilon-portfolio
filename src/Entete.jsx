import './Entete.scss';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';

export default function Entete() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const styleBtnMenu = {
        width: 80,
        height: 80,
        color: 'white',
        position: 'absolute',
        right: 5,
        top: 5,
        padding: '10px'
    }

    const styleIcon = {
        fontSize: '2em'
    }

    return(
        <header className="Entete">
            <h1>Marc Pilon</h1>
            <h2>Intégrateur Multimédia</h2>
            <IconButton aria-controls="menu" aria-haspopup="true" style={styleBtnMenu} onClick={handleClick}>
                <MenuIcon style={styleIcon} />
            </IconButton>
            <Menu
                id="menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>
                <Link href="#APropos" >
                    À Propos
                </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Link href="#Projets" >
                    Projets
                </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Link href="#Contact">
                    Contact
                </Link>
            </MenuItem>
            </Menu>
        </header>
    );
}