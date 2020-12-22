import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

function Topbar(props) {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={props.menuButton} color="inherit" aria-label="menu">
                    </IconButton>
                    <Typography variant="h6" className={props.title}>
                        {props.title}
                </Typography>
                    <Button color="inherit">{props.menuButton}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Topbar