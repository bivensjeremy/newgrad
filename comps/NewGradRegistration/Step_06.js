import React from 'react';
import { Grow, Button, Typography, Paper, RadioGroup, Grid, FormControlLabel, TextField, Box, Container, makeStyles } from "@material-ui/core";
import TakenNCLEX, { PassedNCLEX, NCLEXPassOrFail, NCLEXScheduled, NCLEXDate, TakenExitExam, ExitExamScheduled, ExitExamDate, ExitExamScores, ExitExamTest, NoExitExamScheduled } from "./Nclexfunctions";


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
    },
    inputStyles: {
        border: 1,
        borderRadius: 8
    },
    stepperStyles: {
        maxWidth: 400,
        flexGrow: 1,
    }
}));


const Step_06 = ({ navigation, formik }) => {
    const props = {navigation, formik}
    const classes = useStyles()
    const today = new Date()

    function convertDate(inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat)
        return [d.getFullYear(),pad(d.getMonth()+1),pad(d.getDate())].join('-')
      }
      
    //   if (convertDate(today) == formik.nclexDate){
    //       console.log('true')
    //   } else {
    //       console.log('false')
    //   }
      

    const takenNCLEXWorkflow = () => {
        if (formik.values.takenNCLEX === 'Yes') {
            return <PassedNCLEX {...props} />
        } else if (formik.values.takenNCLEX === 'No') {
            return <NCLEXScheduled {...props} />
        } 
    }
    
    const NCLEXPassedWorkflow = () => {
        return (
            <NCLEXPassOrFail {...props} />
        )
    }
    
    const NCLEXScheduledWorkflow = () => {
        if (formik.values.nclexScheduled === 'Yes') {
            return <NCLEXDate {...props} />
        } else if (formik.values.nclexScheduled === 'No') {
            return <TakenExitExam {...props} />
        }
    }

    const exitExamWorkflow = () => {
        if (convertDate(today) < formik.values.nclexDate) {
            return <TakenExitExam {...props}/>
        } 
    }

    const takenExitExamWorkflow = () => {
        if (formik.values.takenExitExam === 'Yes'){
            return (
            <div>
                <ExitExamTest {...props} /> 
                <ExitExamScores {...props} />
            </div>
            )} else if (formik.values.takenExitExam === 'No' ) {
            return <ExitExamScheduled {...props} />
        }
    }

    const exitExamScheduledWorkflow = () => {
        if (formik.values.exitExamScheduled === 'Yes') {
            return(
                <div>
                    <ExitExamTest {...props} />
                    <ExitExamDate {...props} />
                </div>
        )} else if (formik.values.exitExamScheduled === 'No') {
        return <NoExitExamScheduled />
        }
    }

    return (
        <Container align="center">
            <Box p={6} >
            
            <Grow in {...( { timeout: 500 } )}>
                <Typography variant="body1" gutterBottom>
                    <Box fontSize={20}>
                        Almost finished.
                    </Box>
                </Typography>
            </Grow>

            <Grow in {...( { timeout: 1000 } )}>
                <Typography variant="h4" gutterBottom>
                    <Box>
                    Let's talk about exam scores.
                    </Box>
                </Typography>
            </Grow>
            <Box py={1}>
                <Grow in style={{ transformOrigin: '' }} {...( { timeout: 1500 } )}>
                    <div>
                        <TakenNCLEX {...props} /> 
                        
                        {takenNCLEXWorkflow()}
                        {NCLEXScheduledWorkflow()}
                        {exitExamWorkflow()}
                        {takenExitExamWorkflow()}
                        {exitExamScheduledWorkflow()}
                        {NCLEXPassedWorkflow()}
                    </div>
                </Grow>
            </Box>
            </Box>
            <div className={classes.root}>
                <Button variant="contained" size="large" onClick={() => navigation.previous()}>Back</Button>
                <Button variant="contained" size="large" color="primary" onClick={() => navigation.next()}>Next</Button>
            </div>
            
        </Container>
        
    );
}

export default Step_06;