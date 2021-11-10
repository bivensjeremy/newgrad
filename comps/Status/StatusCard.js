import { Grid, Paper, Typography, Box, makeStyles } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import PanToolIcon from '@material-ui/icons/PanTool';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 350,
        // marginTop: theme.spacing(4),
        // marginBottom: theme.spacing(2),
        margin: theme.spacing(1)
    },
    colorGreen: {
        color: '#43a047'
    },
    colorYellow: {
        color: '#fdd835'
    },
    colorRed: {
        color: '#e53935'
    },
}));

function StatusColor({props}) {
    const classes = useStyles()
    switch (props){
        case 'Offer':
            return (  
                <Typography variant="h5" align="center" >
                    <Box fontWeight="fontWeightBold">
                        <ThumbUpIcon className={classes.colorGreen} />{' '}
                        Make an Offer
                    </Box>
                </Typography>
            )
        case "Interview":
            return (
                <Typography variant="h5" align="center">
                    <Box fontWeight="fontWeightBold">
                        <PanToolIcon className={classes.colorYellow} />{' '}
                        Send to Interview
                    </Box>
                </Typography>
            )
        case "Decline":
            return (
                <Typography variant="h5" align="center">
                    <Box fontWeight="fontWeightBold">
                        <ThumbDownIcon className={classes.colorRed} />{' '}
                        Candidate Declined
                    </Box>
                </Typography>
            )
      }
}

const StatusCard = (props) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={4} lg={3} align="center">
            <Paper elevation={2} className={classes.card}>
                <Box p={3} align="center">
                    <Typography variant="overline">
                        Candidate ID: {props.id}
                    </Typography>
                

                    <Typography variant="h6" color="textSecondary">
                        Candidate Name: 
                    </Typography>

                    <Typography variant="h4">
                        {props.firstName} {props.lastName}
                    </Typography>

                    <hr/> 

                    <Typography variant="h6" color="textSecondary">
                        Department:
                    </Typography>

                    <Typography variant="h5">
                        {props.department}
                    </Typography>

                    <Typography variant="h6" align="center" color="textSecondary">
                        Offer Status:
                    </Typography>

                    <StatusColor props={props.offerStatus} />
                </Box>

            </Paper>
        </Grid>            
    );
}

export default StatusCard;