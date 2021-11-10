import { Box, Grid, Paper, Typography, Container, Link } from "@material-ui/core";
import { server } from "../../config";
import Image from "next/image"
import styles from "../../styles/Home.module.css"
import EmailIcon from '@material-ui/icons/Email';

const RecruiterProfileCard = (recruiter) => {
    return (
        <Box p={3}>
            <Paper elevation={3}>
                <Grid container>
                    <Grid item md={6} align="center">
                        <Box py={1}>
                            <Image src={recruiter.image} className={styles.headshot} layout="intrinsic" width={recruiter.width} height={recruiter.height} alt="Headshot" />
                        </Box>
                        <Box>
                            <a href="mailto:nurserecruitment@phoebehealth.com"><EmailIcon fontSize="large" /></a>
                        </Box>
                    </Grid>

                    <Grid item md={6}>
                        <Box py={3}>
                            <Typography variant="h3" gutterBottom align="center">
                                {recruiter.name}
                            </Typography>
                        </Box>
                        
                        <Container>
                            <Grid container>
                                {recruiter.areas.map(areas => (
                                    <Grid item md={4} key={recruiter.id}>
                                        <Paper>
                                            <Typography variant="h6">
                                                {areas}
                                            </Typography>
                                        </Paper>
                                        
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Paper>
            
        </Box>
    );
}

export default RecruiterProfileCard;