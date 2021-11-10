import { useSession } from "next-auth/client";
import { Button, Grid, Typography, Box, Container, makeStyles, Paper, CircularProgress } from "@material-ui/core";
import Restricted from "../../comps/Admin/Restricted";

const useStyles = makeStyles((theme) => ({
    cardDesign: {
        minWidth: 200,
        // minHeight: 200,
        margin: theme.spacing(6),
        padding: 80,
    },
    paper: {
        marginTop: theme.spacing(12),
        marginBottom: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

const Administration = () => {
    const [session, loading] = useSession();
    const classes = useStyles()

    if (loading) {
        return (
            <div className={classes.paper}>
                <Typography component="h4">Loading... <CircularProgress /></Typography>
            </div>
        )
    }
    return (
        <>
            {!session ? (
                <Restricted />
            ) : (
                <Container align="center">
                 <Box p={4}>
                     <Typography variant="h4">
                         <Box fontWeight="fontWeightBold">
                             Administration
                         </Box>
                     </Typography>
                    
                     <Grid container justifyContent="center" >
                         <Grid item>
                             <Paper elevation={3} className={classes.cardDesign}>
                                 <Button variant="contained" size="large" color="primary" href="/admin/NewGradView">Database</Button>
                             </Paper>
                         </Grid>
                        
                        <Grid item>
                             <Paper elevation={3} className={classes.cardDesign}>
                                 <Button variant="contained" size="large" color="secondary" href="/admin/NewGradStatus">Offer Status</Button>
                             </Paper>
                         </Grid>
                     </Grid>
                 </Box>
             </Container>
            )}
        </>
    );
}
    


export default Administration;