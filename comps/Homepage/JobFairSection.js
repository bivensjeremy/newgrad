import { Grid, Box, Container, Typography, makeStyles } from "@material-ui/core";
import JobFairCard from "./JobFairCard";

function createJobFairCard(jobFairData){
    return(
        <JobFairCard
            key={jobFairData.id}
            image={jobFairData.image}
            width={jobFairData.width}
            height={jobFairData.height}
            description={jobFairData.description}
        />
    )
}

const useStyles = makeStyles({
    root:{
        padding: 30,
        marginBottom: 60,
        backgroundColor: '#3EB1C8',
    }
})

const JobFairSection = (props) => {
    const classes = useStyles();    
    return (
        <Box className={classes.root}>
            <Typography variant="h3" align="center">
                New Graduate Job Fair 
            </Typography>
            <Container>
                <Box py={4}>
                    <Grid container>
                        {props.jobFairData.map(createJobFairCard)}
                    </Grid>
                </Box>
                
                <Typography variant="h5" align="center">
                    The Job Fair will be your best opportunity to view our departments and meet some of the staff. We encourage leaders to conduct interviews and potentially extend offers! Register now to be among the first to hear about out next job fair!
                </Typography> 
            </Container>    
        </Box>
    );
}

export default JobFairSection;