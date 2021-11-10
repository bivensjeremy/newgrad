import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import PathtoRNCard from "./PathtoRNCard";

const useStyles = makeStyles({
    root:{
        backgroundColor: '#A4D65E',
        padding: 30,
        marginBottom: 60,
    }
})

const PathtoRN = () => {
    const classes = useStyles();

    return (
        <Box>
            <div className={classes.root}>
                <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                    Your Path to Becoming an RN
                </Typography>

                <Container>
                    <Grid container align="center" spacing={3}>
                        <PathtoRNCard
                            title="Registered Nurse"
                            image="/images/rn_image.jpeg"
                            imageTitle="registered_nurse_image"
                            description="An RN is a nurse employee who has graduated, has passed the NCLEX and has received their nursing license with no restrictions"
                            link="/jobdescriptions/registerednurse" 
                        />

                        <PathtoRNCard 
                            title="Graduate Nurse"
                            image="images/gradnurse_image.jpg"
                            imageTitle="grad_nurse_image"
                            description="A Graduate Nurse is a nurse employee who has graduated, but has not taken the NCLEX yet and still has a temporary license"
                            link="/jobdescriptions/graduatenurse"
                        />

                        <PathtoRNCard 
                            title="Personal Care Assistant"
                            image="images/pca_image.jpeg"
                            imageTitle="pca_image"
                            description="A Personal Care Assistant is a nurse employee who has graduated and taken, but did not pass, the NCLEX. This employee does not have an active nursing license"
                            link="/jobdescriptions/personalcareassistant"
                        />
                        
                    </Grid>
                </Container>
            </div>
        </Box>
    );
}

export default PathtoRN;