import { Grid, Typography, Box } from "@material-ui/core"
import RecruiterCard from "./RecruiterCard";

function createRecruiterCard(recruiterInfo){
    return(
        <RecruiterCard 
            key={recruiterInfo.id}
            image={recruiterInfo.image}
            width={recruiterInfo.width}
            height={recruiterInfo.height}
            name={recruiterInfo.name}
            email={recruiterInfo.email}
            areas={recruiterInfo.areas}
        />
    )
}

const RecruiterSection = (props) => {
    const { recruiterInfo } = props;
    
    return (
        <Box>
            <Typography variant="h4" align="center" gutterBottom>
                Meet the Nurse Recruitment Team
            </Typography>
            <Box p={3}>
                <Grid container key={recruiterInfo.id}>
                    {recruiterInfo.map(createRecruiterCard)}
                </Grid>
            </Box>  
        </Box>
    );
}

export default RecruiterSection;