import { Grow, Select, MenuItem, Button, Grid, Typography, TextField, Box, Container, makeStyles, FormControl, FormGroup, Switch, RadioGroup, FormControlLabel, Radio, FormLabel, Paper } from "@material-ui/core";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

const schools = [
  {
    value: "Albany State University",
    label: "ASU",
  },
  {
    value: "Valdosta State University",
    label: "VSU",
  },
  {
    value: "Albany Technical College",
    label: "ATC",
  },
  {
    value: "Abraham Baldwin Agricultural College",
    label: "ABAC",
  },
  {
    value: "Other",
    label: "Other"
  }
];

const graduationYR = [
  { value: "Spring 2022" },
  { value: "Summer 2022" },
  { value: "Fall 2022" },
  { value: "Winter 2022"}
];

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

const Step_04 = ({ formik, navigation }) => {
  const classes = useStyles();

  return (
    <Container align="center">
      <Box p={6}>
        <Grow in {...( { timeout: 500 } )}>
          <Typography variant="h4" gutterBottom>
            <Box fontSize={20}>
              Let's gather some school information.
            </Box>
          </Typography>
        </Grow>

        <Grow in {...( { timeout: 1000 } )}>
          <Typography variant="h4" gutterBottom>
            <Box>
              What school are you attending?
            </Box>
          </Typography>
        </Grow>
        <Box py={10}>
          <form noValidate autoComplete="off">
          <Grid container justifyContent="center" spacing={6}>
            <Grow in {...( { timeout: 1500 } )}>
              <Grid item xs={12} md={6}>
                <TextField
                  select
                  fullWidth
                  label="Select Your School"
                  value={formik.values.school}
                  onChange={formik.handleChange}
                  name="school"
                >
                  {schools.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grow>

            <Grow in {...( { timeout: 1000 } )}>
              <Grid item xs={12} md={6}>
                <TextField
                  select
                  fullWidth
                  label="Select Your Graduation Year"
                  value={formik.values.graduationYear}
                  onChange={formik.handleChange}
                  name="graduationYear"
                >
                  {graduationYR.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grow>
            
            <Grow in {...( { timeout: 2000 } )}>
              <Grid item xs={12} md={6}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Select Your Degree Program</FormLabel>
                      <RadioGroup aria-label="School Program" name="program" value={formik.values.program} onChange={formik.handleChange}>
                        <FormControlLabel value="ASN" control={<Radio />} label="Associate's in Nursing" />
                        <FormControlLabel value="BSN" control={<Radio />} label="Bachelor's in Nursing" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                      </RadioGroup>
                  </FormControl>
              </Grid>
            </Grow>

            <Grow in {...( { timeout: 2000 } )}>
              <Grid item xs={12} md={6}>
                <FormLabel row>
                  <FormControlLabel labelPlacement="top" control={<Switch onChange={formik.handleChange} value={formik.values.extern} name="extern" />} label="Check if you are an Extern" />
                </FormLabel>
              </Grid>
            </Grow>

          </Grid>
        </form>
        </Box>

        
      </Box>
      <div className={classes.root}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigation.previous()}
          >
            Back
          </Button>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={() => navigation.next()}
          >
            Next
          </Button>
        </div>
    </Container>
  );
};

export default Step_04;