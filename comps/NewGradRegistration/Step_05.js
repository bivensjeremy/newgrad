import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { Container } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Grow } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FormControl } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },   
  }));

  
  const Step_05 = ({ formik, navigation, nursingAreas }) => {
      const classes = useStyles();
      return (
        <Container align="center">
            <Box p={6}>
                <Grow in {...( { timeout: 500 } )}>
                    <Typography variant="h4" gutterBottom>
                    Which areas are you most interested in working?
                    </Typography>
                </Grow>

                <Grow in {...( { timeout: 1000 } )}>
                    <Typography variant="body1" color="error" gutterBottom>
                        Please Note: Not all areas are able to accept new grads.
                    </Typography>
                </Grow>
          
              <form noValidate autoComplete="off">
                <Grid container xs={12} spacing={6}>
                    <Grow in {...( { timeout: 1500 } )}>
                        <Grid item xs={12} md={6}>
                            <FormControl required component="fieldset">
                                <div>
                                {nursingAreas.slice(0,8).map((nursingAreas, index) => (
                                    <Accordion key={index}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-label="Expand"
                                            aria-controls="additional-actions1-content"
                                            id="additional-actions1-header"
                                        >
                                       <FormControlLabel
                                            aria-label="Acknowledge"
                                            onClick={(event) => event.stopPropagation()}
                                            onFocus={(event) => event.stopPropagation()}
                                            value={nursingAreas.department}
                                            name={`department`}
                                            onChange={formik.handleChange}
                                            control={ <Checkbox /> }
                                            label={nursingAreas.department}
                                            error={formik.touched.department && Boolean(formik.errors.department)}
                                            helperText={formik.touched.department && formik.errors.department}
                                            onBlur={formik.handleBlur}
                                       />
                                        </AccordionSummary>
                                    <AccordionDetails>
                                       <Typography color="textSecondary" align="justify">
                                           {nursingAreas.description}
                                       </Typography>
                                   </AccordionDetails>
                               </Accordion>
                               ))}
                                </div>
                           </FormControl>
                        </Grid>
                    </Grow> 

                    <Grow in {...( { timeout: 1500 } )}>
                       <Grid item xs={12} md={6}>
                        <div>
                            {nursingAreas.slice(8,16).map((nursingAreas, index) => (
                                <Accordion key={index}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-label="Expand"
                                        aria-controls="additional-actions1-content"
                                        id="additional-actions1-header"
                                    >
                                    <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={(event) => event.stopPropagation()}
                                        onFocus={(event) => event.stopPropagation()}
                                        value={nursingAreas.department}
                                        name={`department`}
                                        onChange={formik.handleChange}
                                        control={ <Checkbox /> }
                                        label={nursingAreas.department}
                                        error={formik.touched.department && Boolean(formik.errors.department)}
                                        helperText={formik.touched.department && formik.errors.department}
                                        onBlur={formik.handleBlur}
                                       />
                                   </AccordionSummary>
                                   <AccordionDetails>
                                       <Typography color="textSecondary" align="justify">
                                           {nursingAreas.description}
                                       </Typography>
                                   </AccordionDetails>
                               </Accordion>
                               )) }
                           </div>
                        </Grid>
                    </Grow> 
                </Grid>
            </form>
            
        </Box>

        <div>
            <div className={classes.root}>
                <Button variant="contained" size="large" onClick={() => navigation.previous()}>Back</Button>
                <Button variant="contained" size="large" color="primary" onClick={() => navigation.next()}>Next</Button>
            </div>
        </div>
        </Container>
    );
}

export default Step_05;