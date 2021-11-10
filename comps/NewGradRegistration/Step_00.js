import { MenuItem, Button, Grid, Typography, Box, Container, makeStyles, List, ListItem, ListItemIcon, ListItemText, StepLabel, Paper } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';


const useStyles = makeStyles({
    spacing: {
        marginTop: 30,
        marginBottom: 30
    },
    tighthWidth: {
        maxWidth: 800
    },
    colorSecondary:{
        color: '#3EB1C8'
    }
})
const Step_00 = ({ navigation }) => {
   
    const classes = useStyles()
    
    return (
        <Container align="center">
            <Box p={6}>
                <Typography variant="h4" gutterBottom>
                    <Box fontWeight="fontWeightBold">
                        Welcome to the Registration Form!
                    </Box>
                </Typography>

                <Typography variant="body1" className={classes.tighthWidth} gutterBottom>
                    This process will guide you through collecting all the information we need to start your career with our organization. 

                    Information we will collect includes: 
                </Typography>
                
                <Grid container justifyContent="center" >
                    <Paper elevation={3} className={classes.spacing}>
                        <List component="ul">
                            <ListItem m="auto">
                                <ListItemIcon>
                                    <PersonIcon className={classes.colorSecondary} />
                                </ListItemIcon>
                                <ListItemText primary="Contact Information" />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <SchoolIcon className={classes.colorSecondary} />
                                </ListItemIcon>
                                <ListItemText primary="Your School Information" />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <LocalHospitalIcon className={classes.colorSecondary} />
                                </ListItemIcon>
                                <ListItemText primary="Areas that interest you" />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <ImportContactsIcon className={classes.colorSecondary} />
                                </ListItemIcon>
                                <ListItemText primary="Applicable test scores" />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
                

                <Typography variant="body1" gutterBottom>
                    Are you ready?
                </Typography>   
                <Button variant="contained" size="large" color="primary" onClick={() => navigation.next()}>Let's Get Started!</Button>  
            </Box>
            
            
        </Container>
        
    );
}

export default Step_00;