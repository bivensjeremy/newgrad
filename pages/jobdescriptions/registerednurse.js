import { Box, Card, CardContent, Container, ListItem, Typography, List, Grid, CardHeader } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'

const useStyles = makeStyles({
    root: {
    //   minWidth: 275,
    },
  });


const RegisteredNurse = () => {
    const classes = useStyles();
    
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <Container>
                        <Box p={5}>
                            <Card elevation={4}>
                                <CardContent>
                                    <Typography variant="h2" align="center">
                                        Registered Nurse
                                    </Typography>
                                    
                                    <Typography variant="h3" color="textSecondary">
                                        Job Summary
                                    </Typography>

                                    <Typography variant="body1" align="justify" gutterBottom>
                                        Provide professional nursing care for patient(s) and respective family according to established standards and practices. All activities will be performed in support of the strategy, vision, and values of Phoebe. Nothing in this job description restricts management&apos;s right to assign or reassign duties and responsibilities to this job at any time. All activities must be in compliance with Equal Employment Opportunity laws, HIPAA, ERISA, and other regulations, as appropriate.
                                    </Typography>

                                    <Typography variant="h4" color="textSecondary">
                                        General Requirements
                                    </Typography>
                                    
                                    <Typography variant="body1" align="justify" gutterBottom>
                                        <List>
                                            <ListItem>
                                                Performs all job responsibilities in alignment with the core values, mission and vision of the organization
                                            </ListItem>
                                            <ListItem>
                                                Performs other duties as required and completes all job functions as per departmental policies and procedures
                                            </ListItem>
                                            <ListItem>
                                                Maintains current knowledge in present areas of responsibility (i.e., self education, attends ongoing educational programs)
                                            </ListItem>
                                            <ListItem>
                                                Attends staff meetings and completes mandatory in-services and requirements and competency evaluations on time.
                                            </ListItem>
                                            <ListItem>
                                                Demonstrates competency at all levels in providing care to all patients based on age, sex, weight, and demonstrated needs. For non-clinical areas, has attended training and demonstrates usage of age- specific customer service skills.
                                            </ListItem>
                                            <ListItem>
                                                Wears protective clothing and equipment as appropriate.
                                            </ListItem>
                                            <ListItem>
                                                Adheres to the hospital and departmental attendance and punctuality guidelines
                                            </ListItem>
                                        </List>
                                    </Typography>

                                    {/* <Typography variant="h3" color="textSecondary">
                                        Qualifications
                                    </Typography> */}

                                    <Typography variant="h4" color="textSecondary">
                                        Education Requirements
                                    </Typography>

                                    <Typography variant="body1" align="justify" gutterBottom>
                                        <List>
                                            <ListItem>
                                                2 year / Associate Degree in Nursing (Required)
                                            </ListItem>
                                            <ListItem>
                                                4 year / Bachelor&apos;s Degree in Nursing (Preferred)
                                            </ListItem>
                                        </List>
                                    </Typography>

                                    <Typography variant="h4" color="textSecondary">
                                        Certifications and Licensure
                                    </Typography>

                                    <Typography variant="body1" align="justify" gutterBottom>
                                        <List>
                                            <ListItem>
                                                Required Certifications/Licensure: AHA BLS, Registered Nurse (RN) with current Georgia license.
                                            </ListItem>
                                        </List>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Container>
                </Grid>

                
                    <Grid item xs={12} md={4}>
                        <Box p={5}>
                            <Grid container>
                                <Grid item xs={6} md={12}>
                                    <Image src="/images/rn_image.jpeg" width={2175} height={1607} alt="registered nurse image" />
                                </Grid>

                                <Grid item xs={6} md={12}>
                                    <Image src="/images/rn_image2.jpeg" width={2175} height={1607} alt="registered nurse image" /> 
                                </Grid>
                            </Grid>
                        </Box>    
                    </Grid> 
                
                     
            </Grid>
            
        </div>      
    );
}

export default RegisteredNurse;