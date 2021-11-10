import { Button, Dialog, DialogTitle, Grid, TextField, CircularProgress, makeStyles, Container, InputAdornment, MenuItem } from "@material-ui/core";
import { useState } from "react";
import { useFormik } from 'formik'
import { validationSchema } from "../../Validations/takeactionvalidation";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import PanToolIcon from '@material-ui/icons/PanTool';
import { GridCheckCircleIcon } from "@mui/x-data-grid";
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
          }
    },
    buttonGreen: {
        backgroundColor: '#43a047'
    },
    buttonYellow: {
        backgroundColor: '#fdd835'
    },
    buttonRed: {
        backgroundColor: '#e53935'
    },
    colorWhite: {
        color: '#fff'
    },
    colorGreen: {
        color: '#43a047'
    }
}));

const departments = ["Cardiac Step Down", "CCU", "MICU", "Oncology", "Peds", "Wound Care", "Rehab", "Cancer Center", "Ortho/Neuro", "Acute Care", "Behavioral Health", "Gen/Surg", "L&D", "Mother/Baby", "NICU"]

const TakeAction = (props) => {
    const classes = useStyles()
    const { onClose, rowData, open } = props;
    
    const [apiroute, setApiRoute] = useState('')

    const [InterviewProcessing, setInterviewProcessing] = useState('');
    const [InterviewSucceeded, setInterviewSucceeded] = useState(false);

    const [OfferProcessing, setOfferProcessing] = useState('');
    const [OfferSucceeded, setOfferSucceeded] = useState(false);

    const [DeclineProcessing, setDeclineProcessing] = useState('');
    const [DeclineSucceeded, setDeclineSucceeded] = useState(false);

    const formik = useFormik({
        initialValues: {
            manager: '',
            department: '',
            candidateFirstName: '',
            candidateLastName: '',
            position: '',
        },
        validationSchema: validationSchema, 
        onSubmit: async(values) => {
            await new Promise((r) => setTimeout(r, 500));
            const response = await fetch(`/api/${apiroute}`, { 
                method: 'POST', 
                headers: { 
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(values) 
            });
            const resData = await response.json();
            if (resData.status === 'Offer Success'){
                setOfferSucceeded(true);
            } else if (resData.status === 'Decline Success'){
                setDeclineSucceeded(true)
            } else if (resData.status === 'Interview Success'){
                setInterviewSucceeded(true)
            } else if(resData.status === 'fail'){
                alert("Message failed to send.")
            }
        },
    });
    
    const handleClose = () => {
      onClose(rowData);
      formik.resetForm();
      setDeclineProcessing('');
      setOfferProcessing('');
      setInterviewProcessing('');
      setOfferSucceeded(false)
      setDeclineSucceeded(false)
      setInterviewSucceeded(false)
    };

    const offerConfirm = () => {
        setOfferProcessing(true);
        setApiRoute('offerapi');
        formik.setFieldValue('candidateFirstName', rowData.firstName);
        formik.setFieldValue('candidateLastName', rowData.lastName);
        formik.setFieldValue('position', rowData.position);
        formik.handleSubmit();
    };

    const interviewConfirm = () => {
        setInterviewProcessing(true);
        setApiRoute('interviewapi')
        formik.setFieldValue('candidateFirstName', rowData.firstName);
        formik.setFieldValue('candidateLastName', rowData.lastName);
        formik.handleSubmit();
    };

    const declineConfirm = () => {
        setDeclineProcessing(true);
        setApiRoute('declineapi')
        formik.setFieldValue('candidateFirstName', rowData.firstName);
        formik.setFieldValue('candidateLastName', rowData.lastName);
        formik.handleSubmit();
    };

    return (
        <div>  
            <Dialog fullWidth="true" maxWidth="sm" onClose={handleClose} aria-labelledby="candidate-action" open={open}rowData={rowData}>
    
            <Container align="center">
                <DialogTitle id="candidate-action">Take Action</DialogTitle>

                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                disabled
                                defaultValue={rowData.firstName}
                                helperText="Candidate First Name"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                        <AccountCircle color="primary" />
                                    </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                disabled
                                defaultValue={rowData.lastName}
                                helperText="Candidate Last Name"
                                name="candidateLastName"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                        <AccountCircle color="secondary" />
                                    </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                value={formik.values.manager}
                                onChange={formik.handleChange}
                                label="Manager Name"
                                name="manager"
                                variant="outlined"
                                error={formik.touched.manager && Boolean(formik.errors.manager)}
                                helperText={formik.touched.manager && formik.errors.manager}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField 
                                fullWidth
                                select
                                value={formik.values.department}
                                onChange={formik.handleChange}
                                label="Department"
                                name="department"
                                variant="outlined"
                                error={formik.touched.department && Boolean(formik.errors.department)}
                                helperText={formik.touched.department && formik.errors.department}
                            >
                                {departments.map(selectedDepartment => (
                                    <MenuItem key={selectedDepartment} value={selectedDepartment}>
                                        {selectedDepartment}
                                    </MenuItem>
                                ))}
                            </TextField>  
                        </Grid>
                    </Grid> 
 
                    <Container align="center">
                        <Grid container>
                            <Grid item className={classes.root}>
                                {OfferSucceeded ? 
                                    <Button 
                                        variant="contained" 
                                        size="large"
                                        className={classes.buttonGreen}
                                    ><GridCheckCircleIcon className={classes.colorWhite} /></Button> 
                                    : 
                                    <Button 
                                        variant="contained"
                                        size="large"
                                        disabled={InterviewSucceeded || DeclineSucceeded || OfferSucceeded}
                                        startIcon={OfferProcessing ? <></> : <ThumbUpIcon />}
                                        onClick={() => {offerConfirm(rowData)}}
                                        className={classes.buttonGreen} 
                                    >
                                    {OfferProcessing && formik.isSubmitting ? ( <CircularProgress className={classes.colorWhite} /> ) : "Offer" }
                                    </Button>
                                }
                            </Grid>

                            <Grid item className={classes.root}>
                                {InterviewSucceeded ? 
                                    <Button 
                                        variant="contained" 
                                        size="large"
                                        className={classes.buttonYellow}
                                    ><GridCheckCircleIcon className={classes.colorWhite} /></Button> 
                                    : 
                                    <Button 
                                        variant="contained"
                                        size="large"
                                        disabled={OfferSucceeded || DeclineSucceeded || InterviewSucceeded}
                                        startIcon={InterviewProcessing ? <></> : <PanToolIcon />}
                                        onClick={() => {interviewConfirm(rowData)}}
                                        className={classes.buttonYellow}
                                    >
                                    {InterviewProcessing && formik.isSubmitting ? ( <CircularProgress className={classes.colorWhite} /> ) : "Interview" }
                                    </Button>
                                }
                            </Grid>

                            <Grid item className={classes.root}>
                                {DeclineSucceeded ? 
                                    <Button 
                                        variant="contained"
                                        size="large"
                                        className={classes.buttonRed}
                                    ><GridCheckCircleIcon className={classes.colorWhite} /></Button> 
                                    : 
                                    <Button 
                                        variant="contained"
                                        size="large"
                                        disabled={InterviewSucceeded || OfferSucceeded || DeclineSucceeded}
                                        startIcon={DeclineProcessing ? <></> : <ThumbDownIcon />}
                                        onClick={() => {declineConfirm(rowData)}}
                                        className={classes.buttonRed} 
                                    >
                                    {DeclineProcessing && formik.isSubmitting ? ( <CircularProgress className={classes.colorWhite} /> ) : "Decline" }
                                    </Button>
                                }
                            </Grid>
                        </Grid>
                    </Container>    
                </form>
            </Container>
                    
            </Dialog>    
        </div>
      );
    }

export default TakeAction;