import { Container, Box, Typography, Grid, Paper, Button } from "@material-ui/core";
import { signIn } from "next-auth/client"

const Restricted = () => {
    return (
        <Container align="center">
            <Box p={4}>
                <Typography variant="h4">
                    <Box fontWeight="fontWeightBold">
                        You must be signed in to access this page.
                    </Box>
                </Typography>
                
                <Grid container justifyContent="center" >                        
                    <Grid item>
                        <Paper elevation={3}>                                
                            <Button variant="contained" size="large" color="secondary" onClick={signIn}>Sign In </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Restricted;