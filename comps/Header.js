import { signIn, signOut, useSession } from "next-auth/client"
import Head from 'next/head';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link'
import React from 'react';
import Popover from '@material-ui/core/Popover';
import { server } from '../config'

const useStyles = makeStyles({
    typography: {
        margin: 10,
        maxWidth: 500
    },
    login: {
        flexGrow: 1,
    },
});
const Header = () => {
    const [session] = useSession();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
        <Head>
            {/* Metadata */}
            <meta name="description" content="Bivens Blueprint New Graduate Employment Portal" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link rel="canonical" href="https//newgrad.bivensblueprint.com" />
                <meta name="robots" content="index, follow" />
        </Head>
        <div>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <div className={classes.login}>
                            <Button variant="body1" variant="outlined" onClick={handleClick} aria-describedby={id}>
                                [Disclaimer]
                            </Button>
                            <Popover
                                id={id}
                                open={open}
                                onClose={handleClose}
                                anchorReference="anchorPosition"
                                anchorPosition={{ top: 30, left: 50 }} 
                            >
                                <Typography className={classes.typography} >
                                    This website is not officially supported nor endorsed by the Phoebe Putney Health System. 
                                </Typography>
                            </Popover>
                        </div>
                        
                        <div className={classes.login}>
                            <Link href='/'><a>
                            <Typography variant="button">
                                    Return
                                </Typography>
                                <IconButton color="inherit">
                                    <HomeIcon />
                                </IconButton>
                                <Typography variant="button">
                                    Home
                                </Typography>
                            </a></Link>
                        </div>
                   
                        {!session ? (
                            <>
                            <a onClick={() => signIn(null, {callbackUrl: `${server}/admin/Administration`})}>
                                <Typography variant="button" className={classes.login}>
                                    Admin
                                </Typography>
                                <IconButton aria-label="account of current user" color="inherit">
                                    <AccountCircle />
                                </IconButton>
                                <Typography variant="button" className={classes.login}>
                                    Portal
                                </Typography>
                            </a>
                            </>
                        ) : (
                            <>
                            <Link href='/admin/Administration'><a>
                                <Typography variant="button" className={classes.login}>
                                    Admin Portal
                                </Typography>
                            </a></Link>
                            
                                <IconButton aria-label="account of current user" disabled color="inherit">
                                    <AccountCircle />
                                </IconButton>
                                
                            <Link href='/'><a onClick={() => signOut({callbackUrl: `${server}`})}>
                                <Typography variant="button" className={classes.login}>
                                    Sign Out
                                </Typography>
                            </a></Link>

                            
                        </>
                        )}                    
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    </>
    );
}

export default Header;