import React from 'react';
import { Grid, Typography, Button, Avatar, List, ListItem, ListItemAvatar, ListItemText, DialogTitle, Dialog } from "@material-ui/core"
import Image from "next/image";
import styles from '../../styles/Home.module.css'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { makeStyles } from '@material-ui/core/styles';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      }
    }
}));

function SimpleDialog(props) {
    const { onClose, selectedValue, open, recruiterAreas, recruiterName } = props;

    const handleClose = () => {
      onClose(selectedValue);
    };
  
    return (
      <Dialog onClose={handleClose} aria-labelledby="recruiter-supported-areas" open={open}>
        <DialogTitle id="recruiter-supported-areas">{recruiterName}'s Supported Areas</DialogTitle>
        <List>
        {recruiterAreas.map(areas => (
            <ListItem button key={areas}>
                <ListItemAvatar>
                    <Avatar>
                        <LocalHospitalIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={areas} />
            </ListItem>       
        ))}
        </List>
      </Dialog>
    );
  }

const RecruiterCard = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <Grid align="center" item xs={4} md={4}>
            <Image 
                className={styles.headshot} 
                src={props.image} 
                layout="intrinsic" 
                width={props.width} 
                height={props.height} 
                alt="Headshot" 
            />
            <Typography variant="body1" align="center">
                {props.name}
            </Typography>
            <a href="mailto:nurserecruitment@phoebehealth.com" className={classes.root}>
                <EmailIcon color="primary" />
            </a>
            <a href="mailto:nurserecruitment@phoebehealth.com" className={classes.root}>
                <PhoneIphoneIcon color="secondary" /> 
            </a>
            <div>
                <Button variant="contained" onClick={handleClickOpen}>
                    Supported Areas
                </Button>

                <SimpleDialog 
                    open={open} 
                    onClose={handleClose} 
                    recruiterAreas={props.areas}
                    recruiterName={props.name}  
                />
            </div>  
        </Grid>   
    );
}

export default RecruiterCard;
