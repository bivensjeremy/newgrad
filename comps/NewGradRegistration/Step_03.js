import { Grow, Select, MenuItem, Button, Grid, Typography, TextField, Box, Container, makeStyles } from "@material-ui/core";
import NumberFormat from 'react-number-format';


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

const Step_03 = ({ formik, navigation }) => {
    const classes = useStyles()
    return (
        <Container align="center">
            <Box p={6}>
            <Grow in {...( { timeout: 500 } )}>
                <Typography variant="body1" gutterBottom>
                    <Box fontSize={20}>
                        ...but sometimes we'll need to call.
                    </Box>
                </Typography>
            </Grow>
            <Grow in {...( { timeout: 1000 } )}>
                <Typography variant="h4" gutterBottom>
                    <Box>
                        What is a good contact number?
                    </Box>
                    
                </Typography>
            </Grow>

            <Grow in {...( { timeout: 1500 } )}>
                <Box py={10}>
                    <Grid container justifyContent="center"  alignItems="flex-end">      
                        <Grid item xs={12} md={6} >
                            <NumberFormat 
                                customInput={TextField} 
                                format="(###) ###-####"
                                mask=" " 
                                label="Phone Number" 
                                name="phone" 
                                value={formik.values.phone} 
                                onChange={formik.handleChange} 
                                margin="normal" 
                                fullWidth 
                                required
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
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

export default Step_03;
