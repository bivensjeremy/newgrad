import React from "react";
import { TextField, Grow, Container, Paper, Radio, RadioGroup, Grid, FormControlLabel, MenuItem, FormControl, FormLabel, makeStyles } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    field: {
        marginTop: 20,
        marginBottom: 20,
        spacing: 20,
        display: 'block'
    }
}));

const TakenNCLEX = ({formik}) => {
    const classes = useStyles()
    if (formik.values.takenNCLEX === 'Yes'|| formik.values.takenNCLEX === 'No' ){
        return <div></div>
    }
    return (
        <Grow in style={{ transformOrigin: '' }} {...( { timeout: 1500 } )}>
            <Container maxWidth="xs" className={classes.field}>
                <Paper style={{padding: 20}}>
                    <FormLabel component="legend">Have you taken the NCLEX yet?</FormLabel>
                    <FormControl component="fieldset">
                        
                            <RadioGroup aria-label="takenNCLEX" name="takenNCLEX" value={formik.values.takenNCLEX} onChange={formik.handleChange} row>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" labelPlacement="bottom" />
                                <FormControlLabel value="No" control={<Radio />} label="No" labelPlacement="bottom" />
                            </RadioGroup>
                    </FormControl>
                </Paper>
            </Container> 
        </Grow> 
    );
}

const PassedNCLEX = ({formik}) => {
    const classes = useStyles()
    if (formik.values.passedNCLEX === 'Yes'|| formik.values.passedNCLEX === 'No' ){
        return <div></div>
    }
    return (
        <Grow in style={{ transformOrigin: '' }} {...( { timeout: 1500 } )}>
            <Container maxWidth="xs" className={classes.field}>
                <Paper style={{padding: 20}}>
                    <FormControl component="fieldset">
                        <FormLabel>Did you pass?</FormLabel>
                        <RadioGroup aria-label="nclex" name="passedNCLEX" value={formik.values.passedNCLEX} onChange={formik.handleChange} >
                            <Grid container>
                                <Grid item>
                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" labelPlacement="bottom" />
                                </Grid>
                                <Grid item>
                                    <FormControlLabel value="No" control={<Radio />} label="No" labelPlacement="bottom" />
                                </Grid>
                            </Grid>
                        </RadioGroup>
                    </FormControl>
                </Paper>
            </Container> 
        </Grow>
    );
}

const NCLEXScheduled = ({formik}) => {
    const classes = useStyles()
    if (formik.values.nclexScheduled === 'Yes'|| formik.values.nclexScheduled === 'No'){
        return <div></div>
    }
    return (
        <Grow in style={{ transformOrigin: '' }} {...( { timeout: 1500 } )}>
            <Container maxWidth="xs" className={classes.field}>
                <Paper style={{padding: 20}}>
                    <FormControl component="fieldset">
                        <FormLabel>Have you scheduled it yet?</FormLabel>
                        <RadioGroup aria-label="nclex" name="nclexScheduled" value={formik.values.nclexScheduled} onChange={formik.handleChange} >
                            <Grid container>
                                <Grid item>
                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" labelPlacement="bottom" />
                                </Grid>
                                <Grid item>
                                    <FormControlLabel value="No" control={<Radio />} label="No" labelPlacement="bottom" />
                                </Grid>
                            </Grid>
                        </RadioGroup>
                    </FormControl>
                </Paper>
            </Container> 
        </Grow>
    );
}

const NCLEXPassOrFail = ({formik}) => {
    const classes = useStyles()
    return (
        <div>
            {(() => {
                if (formik.values.takenNCLEX === 'No'){
                    return <div></div>
                } else if (formik.values.passedNCLEX === 'Yes') {
                    formik.values.position = 'RN'
                    return (
                    <div align="center">
                        <Alert severity="success">Congratulations! You are ready to start your career as a fully licensed Registered Nurse. Proceed to the next page to submit the form!</Alert>
                    </div>)
                } else if (formik.values.passedNCLEX === 'No') {
                    formik.values.position = 'PCA'
                    return (
                    <div>
                    <Alert severity="error">You can be considered for a Patient Care Assistant role. Please be aware, because you have taken, and did not pass the NCLEX, your temporary license has been revoked. As a result, you are eligible for a PCA position with this cohort. Please refer to the PCA job description for more information.</Alert>
                    </div>)
                }
            })()}
        </div>
    );
}

const NCLEXDate = ({formik}) => {
    const classes = useStyles()
    return (
        <Grow in style={{ transformOrigin: '' }} {...( { timeout: 1500 } )}>
            <Container maxWidth="xs" className={classes.field}>
                <TextField
                    label="Nclex Test Date"
                    type="date"
                    margin="normal"
                    fullWidth
                    name="nclexDate"
                    onChange={formik.handleChange}
                    variant="outlined"
                    InputLabelProps={{
                    shrink: true,
                    }}
                /> 
            </Container> 
        </Grow>
    );
}

const TakenExitExam = ({formik}) => {
    const classes = useStyles()
    if (formik.values.takenExitExam === 'Yes'|| formik.values.takenExitExam === 'No'){
        return <div></div>
    }
    return ( 
        <Grow in style={{ transformOrigin: '' }} {...( { timeout: 1500 } )}>
            <Container maxWidth="xs" className={classes.field}>
                <Paper style={{padding: 20}}>
                    <FormControl component="fieldset">
                        <FormLabel>Have you taken your Exit Exam?</FormLabel>
                        <RadioGroup aria-label="nclex" name="takenExitExam" value={formik.values.takenExitExam} onChange={formik.handleChange} >
                            <Grid container>
                                <Grid item>
                                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" labelPlacement="bottom" />
                                </Grid>
                                <Grid item>
                                    <FormControlLabel value="No" control={<Radio />} label="No" labelPlacement="bottom" />
                                </Grid>
                            </Grid>
                        </RadioGroup>
                    </FormControl>
                </Paper>
            </Container> 
        </Grow>
    );
}

const ExitExamScheduled = ({formik}) => {
    const classes = useStyles()
    if (formik.values.exitExamScheduled === 'Yes'|| formik.values.exitExamScheduled === 'No' ){
        return <div></div>
    }
    return (
        <Grow in style={{ transformOrigin: '' }} {...( { timeout: 1500 } )}>
            <Container maxWidth="xs" className={classes.field}>
                <Paper style={{padding: 20}}>
                    <FormControl component="fieldset">
                        <FormLabel>Have you scheduled it yet?</FormLabel>
                        <RadioGroup aria-label="nclex" name="exitExamScheduled" value={formik.values.exitExamScheduled} onChange={formik.handleChange} >
                            <Grid container>
                                <Grid item>
                                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" labelPlacement="bottom" />
                                </Grid>
                                <Grid item>
                                    <FormControlLabel value="No" control={<Radio />} label="No" labelPlacement="bottom" />
                                </Grid>
                            </Grid>
                        </RadioGroup>
                    </FormControl>
                </Paper>
            </Container> 
        </Grow>
    );
}

const ExitExamDate = ({formik}) => {
    const classes = useStyles()
    return (
        <Grow in style={{ transformOrigin: '' }} {...( { timeout: 1500 } )}>
            <Container maxWidth="xs" className={classes.field}>
                <TextField
                    label="Exit Exam Test Date"
                    type="date"
                    margin="normal"
                    fullWidth
                    name="exitExamDate"
                    onChange={formik.handleChange}
                    variant="outlined"
                    InputLabelProps={{
                    shrink: true,
                    }}
                /> 
            </Container> 
        </Grow>
    );
}

const ExitExamTest = ({formik}) => {
    const classes = useStyles()
    return (
        <Grow in style={{ transformOrigin: '' }} {...( { timeout: 1500 } )}>
            <Container maxWidth="xs" className={classes.field}>
                <TextField
                    select
                    fullWidth
                    variant="outlined"
                    label="ATI or Kaplan?"
                    value={formik.values.exitExamTest}
                    onChange={formik.handleChange}
                    name="exitExamTest"
                >
                    <MenuItem value="ATI">ATI</MenuItem>
                    <MenuItem value="Kaplan">Kaplan</MenuItem>
                </TextField>
            </Container>
        </Grow>
    );
}

const ExitExamScores = ({formik}) => {
    const classes = useStyles()
    return (
        <Grow in style={{ transformOrigin: '' }} {...( { timeout: 1500 } )}>
            <Container maxWidth="xs" className={classes.field}>
                <TextField
                    label="What was your score?"
                    name="exitExamScores"
                    value={formik.values.exitExamScores}
                    onChange={formik.handleChange}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                />
            </Container>
        </Grow>
    );
}

const NoExitExamScheduled = () => {
    return (
        <div align="center">
            <Alert severity="Warning">Please schedule your exit exam as soon as possible to remain in consideration for a position with us!</Alert>
        </div>
    );
}

export default TakenNCLEX;
export {PassedNCLEX, NCLEXPassOrFail, NCLEXScheduled, NCLEXDate, TakenExitExam, ExitExamScheduled, ExitExamTest, ExitExamDate, ExitExamScores, NoExitExamScheduled}
