import { Typography, Button, Box, Grid, Paper, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      maxWidth: 300
    },
    recruitBar:{
        marginTop: 50,
        marginBottom: 20,
        padding: 10,
        maxWidth: 600,
        backgroundColor: "#3EB1C8"
    }
}));


const Welcome = () => {
    const classes = useStyles();

    return (
        <Box p={5}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box py={1} align="center">
                        <Typography variant="h1" gutterBottom>
                            <Box fontWeight="fontWeightBold" fontSize={60}>
                                New Grad <br />Recruitment Portal
                            </Box>
                        </Typography>
                        
                        <div className={classes.root} >
                            <Button variant="contained" size="large" color="secondary" fullWidth href="/registernewgrad">
                                Register
                            </Button>
                            
                            {/* <Button variant="contained" size="large" color="secondary" href="/admin/signin">
                                Sign In
                            </Button> */}
                        </div> 
                        
                        <Paper elevation={5} className={classes.recruitBar}>
                            <Typography variant="h4">
                                Now recruiting for Winter 2021!
                            </Typography>
                        </Paper>


                        <Paper elevation={0} style={{padding: 20, maxWidth: 700}}>
                            <Typography variant="body1" >
                                We are excited to open the portal and have begun actively recruiting for upcoming Winter 2021 graduates to start their careers with us! You can use this portal to log your information and assist in navigating interviews and upcoming communications. Register today!
                            </Typography>  
                        </Paper>
                          
                    </Box>  
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <Image src="/images/smiling_nurse.jpeg" width={1200} height={675} layout="responsive" alt="smiling nurse" priority />  
                    </Card>
                </Grid>      
            </Grid>
        </Box>
        
    );
}

export default Welcome;