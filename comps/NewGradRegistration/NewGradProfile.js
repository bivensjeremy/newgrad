import { Card, Grow, Box, Grid, makeStyles, Container, Typography, Button, Accordion, AccordionSummary, AccordionDetails, IconButton, AccordionActions } from "@material-ui/core";
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          maxWidth: 500,
        }
    }
}));

const NewGradProfile = ({formik, navigation}) => {
    const interestedDepartments = formik.values.department
    const classes = useStyles()

    const clickStep5 = () => {
        navigation.go('step_05')
        formik.values.department.length = 0
    }

    const handleReset = () => {
        navigation.go('step_00');
        formik.resetForm()
    }

    const submitData = (e) => {
        e.preventDefault();
        formik.handleSubmit()
    }
    
    return (
        <Container align="center">
            
            <Box p={6} className={classes.root}>
                <Grow in {...( { timeout: 500 } )}>
                    <Typography variant="h4">
                        Great! Now let's review.
                    </Typography>
                </Grow>

                <Grow in {...( { timeout: 1000 } )}>
                    <form onSubmit={submitData}>
                        <Card elevation={4}>
                            <div className={classes.header}>
                                <PersonPinIcon color="secondary" style={{ fontSize: 80 }}/>
                            </div>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="name-content"
                                    id="name"
                                >
                                    {formik.errors.firstName || formik.errors.lastName ? <Typography variant="overline" color="error">Name is required</Typography> : <Typography variant="overline" color="primary">
                                        Name
                                    </Typography>}
                                </AccordionSummary>

                                <AccordionDetails>
                                    <div>
                                        <Typography variant="overline" color="primary">
                                            My Name is
                                        </Typography> 
                                        <Typography variant="h6" color="textSecondary">
                                            {formik.values.firstName} {formik.values.lastName} {formik.values.extern ? <NewReleasesIcon color="secondary" fontSize="small" /> : <></>}
                                        </Typography>
                                    </div>
                                </AccordionDetails>
                                
                                <AccordionActions> 
                                    <Typography variant="overline">
                                        <NewReleasesIcon color="secondary" fontSize="small" /> Denotes an Extern
                                    </Typography>
                                    
                                    <Fab size="medium" onClick={() => navigation.go('step_01')}>
                                        <EditIcon color="primary" />
                                    </Fab>                                    
                                </AccordionActions>  
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="email-content"
                                    id="email"
                                >
                                    {formik.errors.email ? <Typography variant="overline" color="error">{formik.errors.email}</Typography> : <Typography variant="overline" color="primary">Email</Typography>}
                                </AccordionSummary>

                                <AccordionDetails>
                                    <div>
                                        <Typography variant="overline" color="primary">
                                            Email Address
                                        </Typography> 
                                        <Typography variant="h6" color="textSecondary">
                                            {formik.values.email}
                                        </Typography>
                                    </div>
                                </AccordionDetails>
                                
                                <AccordionActions>
                                    <Fab size="medium" onClick={() => navigation.go('step_02')}>
                                        <EditIcon color="primary" />
                                    </Fab> 
                                </AccordionActions>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="phone-content"
                                    id="phone"
                                >
                                    {formik.errors.phone ? <Typography variant="overline" color="error">{formik.errors.phone}</Typography> : <Typography variant="overline" color="primary">Phone</Typography>}
                                </AccordionSummary>

                                <AccordionDetails>
                                    <div>
                                        <Typography variant="overline" color="primary">
                                            my Phone Number is
                                        </Typography> 
                                        <Typography variant="h6" color="textSecondary">
                                            {formik.values.phone}
                                        </Typography>
                                    </div>
                                </AccordionDetails>
                                
                                <AccordionActions>
                                    <Fab size="medium" onClick={() => navigation.go('step_03')}>
                                        <EditIcon color="primary" />
                                    </Fab>  
                                </AccordionActions>
                            </Accordion>
                            
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="school-content"
                                    id="school"
                                >
                                    <Typography variant="overline" color="primary">
                                        School Information
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Grid container>
                                        <Grid item xs>
                                            <Typography variant="overline" color="primary">
                                                School
                                            </Typography>
                                            <Typography variant="h6" color="textSecondary">
                                                {formik.values.school}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs>
                                            <Typography variant="overline" color="primary">
                                                Graduation Year
                                            </Typography>
                                            <Typography variant="h6" color="textSecondary">
                                                {formik.values.graduationYear}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs>
                                            <Typography variant="overline" color="primary">
                                                Degree Program
                                            </Typography>
                                            <Typography variant="h6" color="textSecondary">
                                                {formik.values.program}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>

                                <AccordionActions>
                                    <Fab size="medium" onClick={() => navigation.go('step_04')}>
                                        <EditIcon color="primary" />
                                    </Fab>  
                                </AccordionActions>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="department-content"
                                    id="department"
                                >
                                {formik.errors.department ? <Typography variant="overline" color="error">Please select at least one department</Typography> : <Typography variant="overline" color="primary">
                                    Departments I am interested in
                                </Typography>}

                                    
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Typography className={classes.root} variant="h6" color="textSecondary"> 
                                    {interestedDepartments.length > 0 ? interestedDepartments.map(depts => 
                                            <span> <ArrowRightIcon color="primary" />{depts} </span> 
                                        ) : <i>None Selected</i>}
                                    </Typography>
                                </AccordionDetails>
                                
                                <AccordionActions>
                                    <Fab size="medium" onClick={() => clickStep5()}>
                                        <EditIcon color="primary" />
                                    </Fab>
                                </AccordionActions>
                            </Accordion> 
                            
                        </Card>

                        <div className={classes.root}>
                            <Typography variant="body1" color="primary">
                                Ready to submit?
                            </Typography>
                            
                            <Button
                                variant="contained"
                                size="large"
                                endIcon={<DeleteIcon />}
                                onClick={() => handleReset()}
                            >
                                Reset
                            </Button>
                            <Button 
                                variant="contained" 
                                color="secondary" 
                                size="large" 
                                type='submit'
                                endIcon={<SendIcon />}
                            >
                                Submit
                            </Button>

                            
                        </div>


                    </form>
                        
                </Grow>
            </Box> 

            
        </Container>
        
    );
}

export default NewGradProfile;