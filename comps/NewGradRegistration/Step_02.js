import { Grow, Select, MenuItem, Button, Grid, Typography, TextField, Box, Container, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: 20,
    marginBottom: 20,
    spacing: 20,
    display: "block",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Step_02 = ({ formik, navigation }) => {
    const classes = useStyles()
    return (
        <Container align="center">
          <Box p={6}>
            <Grow in {...( { timeout: 500 } )}>
              <Typography variant="body1" gutterBottom>
                <Box fontSize={20}>
                  Email will be our primary form of communication...
                </Box>
              </Typography>
            </Grow>

            <Grow in {...( { timeout: 1000 } )}>
              <Typography variant="h4" gutterBottom>
                <Box>
                  What is you preferred email address?
                </Box>
                
              </Typography>
            </Grow>

            <Grow in style={{ transformOrigin: '' }} {...( { timeout: 1500 } )}>
                <Box py={10}>
                    <Grid container justifyContent="center" spacing={6}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Email Address"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                margin="normal"
                                fullWidth
                                required
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
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
};

export default Step_02;
