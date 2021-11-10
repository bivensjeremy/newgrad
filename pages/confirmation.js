import { MenuItem, Button, Grid, Typography, Box, Container, makeStyles, List, ListItem, ListItemIcon, ListItemText, Paper } from "@material-ui/core";
import Link from 'next/link'


const useStyles = makeStyles({
    spacing: {
        marginTop: 30,
        marginBottom: 30
    },
    tighthWidth: {
        maxWidth: 800
    }
})
const Confirmation = () => {
    const classes = useStyles()
    return (
        <Container align="center" className={classes.spacing}>
            <Box p={6}>
                <Typography variant="h4" gutterBottom>
                    <Box fontWeight="fontWeightBold">
                        Submission Sent!
                    </Box>
                </Typography>

                <Typography variant="body1" className={classes.tighthWidth} gutterBottom>
                    Thank you! Your submission was successfully sent. We will use this list to communicate with new grads throughout their journey.
                </Typography>
                
                <Link href='/'><a>
                    <Button variant="contained" size="large" color="primary" className={classes.spacing} >Return Home</Button>
                </a></Link>  
            </Box>
        </Container>
    );
}

export default Confirmation;