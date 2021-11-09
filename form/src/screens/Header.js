import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory, } from "react-router-dom";

const useStyles = makeStyles((theme) => ({ 
    appBar: {
        position: "relative",
    },  
    btn: {
        position: "absolute",
        right: "10px",
    }
}));

function Header() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div>
            <AppBar position="absolute" color="default" className={classes.appBar}>
                <Toolbar>
                {
                history.location.pathname =="/resume" &&
                    <Typography variant="h6" color="inherit">
                        <Link to="/">
                            {'HOME  '}
                        </Link>
                    </Typography>
                }
                {
                    history.location.pathname =="/resume/download" &&
                    <Typography variant="h6" color="inherit">
                        <Link to="/resume">
                            {'  CREATE'}
                        </Link>
                    </Typography>
                }
                {
                    history.location.pathname !=="/resume/download" && 
                    <Button className={classes.btn}  >  <Link to="/resume/download">  DOWNLOAD RESUME    </Link></Button>
                }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header