import { Grow, Button, Grid, Typography, Box, Container, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    field: {
        marginTop: 20,
        marginBottom: 20,
        spacing: 20,
        display: 'block'
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
        }
    }
}));

const Step_01 = ({ navigation, formik }) => {
    const classes = useStyles()
    
    return (
        <Container align="center">
            <Box p={6}>
            
            <Grow in {...( { timeout: 500 } )}>
                <Typography variant="body1" gutterBottom>
                    <Box fontSize={20}>
                        Let's start here!
                    </Box>
                </Typography>
            </Grow>

            <Grow in {...( { timeout: 1000 } )}>
                <Typography variant="h4" gutterBottom>
                    <Box>
                        What is your name?
                    </Box>
                </Typography>
            </Grow>  
   
            <Grow in style={{ transformOrigin: '' }} {...( { timeout: 1500 } )}>
                <Box py={10}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>                            
                            <TextField
                                label="First Name"
                                name="firstName"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                margin="normal"
                                fullWidth
                                required
                                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                helperText={formik.touched.firstName && formik.errors.firstName}
                                onBlur={formik.handleBlur}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField 
                                label="Last Name" 
                                name="lastName" 
                                value={formik.values.lastName} 
                                onChange={formik.handleChange} 
                                margin="normal" 
                                fullWidth 
                                required
                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                helperText={formik.touched.lastName && formik.errors.lastName}
                                onBlur={formik.handleBlur}
                            />
                        </Grid>
                    </Grid> 
                </Box>
            </Grow>
        </Box>
            <div className={classes.root}>
                <Button variant="contained" size="large" onClick={() => navigation.previous()}>Back</Button>
                
                <Button variant="contained" size="large" color="primary" onClick={() => navigation.next()}>Next</Button>
                
            </div>
        </Container>
        
    );
}

export default Step_01;