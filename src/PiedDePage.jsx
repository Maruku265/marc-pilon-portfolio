import './PiedDePage.scss';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    link: {
      display: 'flex',
      color: 'white',
      fontSize: '1.5em',
      padding: '8px'
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 25,
      height: 25,
    },
  }));
  
  function handleClick(event) {
    event.preventDefault();
  }
  

export default function PiedDePage() {
    const classes = useStyles();

    return(
        <footer className="PiedDePage" id="Contact">
            <Breadcrumbs aria-label="breadcrumb" color="inherit" >
                
                <Typography color="inherit" className={classes.link}>
                    Contact
                </Typography>
                <Typography color="inherit" className={classes.link}>
                    Courriel : marcp265@gmail.com
                </Typography>
                <Link color="inherit" href="https://www.linkedin.com/in/marc-pilon-6620931bb/" onClick={handleClick} className={classes.link}>
                    <LinkedInIcon className={classes.icon} />
                    LinkedIn
                </Link>
            </Breadcrumbs>
        </footer>
    );
}