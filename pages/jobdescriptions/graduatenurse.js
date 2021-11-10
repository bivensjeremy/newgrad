import { Box, Card, CardContent, Container, ListItem, Typography, List, Grid } from "@material-ui/core";
import Image from 'next/image'

const GraduateNurse = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <Container>
                        <Box p={5}>
                            <Card elevation={4}>
                                <CardContent>
                                    <Typography variant="h2" align="center">
                                        Graduate Nurse
                                    </Typography>
                                    
                                    <Typography variant="h3" color="textSecondary">
                                        Job Summary
                                    </Typography>

                                    <Typography variant="body1" align="justify" gutterBottom>
                                    Assist professional nursing personnel in providing patient care in assigned areas to patients of ages per assigned unit scope. Provides direct and indirect patient care duties under the guidance and direction of the Licensed Nurse. Participates in unit activities that enhance and promote quality patient care outcomes in accordance with the mission, vision, and values of Patient Care Services of Phoebe Putney Memorial Hospital. All activities will be performed in support of the strategy, vision, and values of Phoebe. Nothing in this job description restricts management&apos;s right to assign or reassign duties and responsibilities to this job at any time. All activities must be in compliance with Equal Employment Opportunity laws, HIPAA, ERISA, and other regulations, as appropriate.
                                    </Typography>

                                    <Typography variant="h4" color="textSecondary">
                                        General Requirements
                                    </Typography>
                                    
                                    <Typography variant="body1" align="justify" gutterBottom>
                                        <List>
                                            <ListItem>
                                            Adheres to the hospital and departmental attendance and punctuality guidelines
                                            </ListItem>
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
                                            Demonstrates knowledge and application of basic patient care, to include activities of daily living, vital signs and intake and output.
                                            </ListItem>
                                            <ListItem>
                                            Demonstrates knowledge and respect of patient rights to privacy and protection of patient confidentiality.
                                            </ListItem>
                                            <ListItem>
                                            Monitors and documents information regarding patient activities, as directed by the Registered Nurse.
                                            </ListItem>
                                            <ListItem>
                                            Organizes and communicates patient care activities to the patient and to the Registered Nurse.
                                            </ListItem>
                                            <ListItem>
                                            Communicates, interacts and participates in teamwork on the unit.
                                            </ListItem>
                                            <ListItem>
                                            Promotes and displays positive and customer oriented demeanor to patients, visitors, staff and physicians.
                                            </ListItem>
                                            <ListItem>
                                            Seeks ways to control costs without compromising patient safety, quality of care or the services delivered.
                                            </ListItem>
                                            <ListItem>
                                            Demonstrates knowledge of the occurrence reporting system. Uses system to report potential patient safety issues.
                                            </ListItem>
                                            <ListItem>
                                            Follows established guidelines for reporting a significant medical error or unanticipated outcome in the patient’s care which results in patient harm.
                                            </ListItem>
                                            <ListItem>
                                            Uses Performance Improvement Plan to improve patient safety.
                                            </ListItem>
                                            <ListItem>
                                            Other duties as assigned.
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
                                                 High School Diploma or GED (Required)
                                            </ListItem>
                                            <ListItem>
                                                2 year / Associate Degree in Nursing (Required)
                                            </ListItem>
                                            <ListItem>
                                                Non Degree Program in NSTEP (Nursing Simulation and Training Education Program) active participation (Required)
                                            </ListItem>
                                            <ListItem>
                                                Other Degree in Completion of the course requirements for graduation from an Associate&apos;s Degree, Diploma or Bachelor of Science program in nursing. (Required)
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
                                            Required Certifications/Licensures: Cardiopulmonary Resuscitation (CPR), If post graduation must obtain nursing license within 3 months of graduation
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
                                    <Image src="/images/gradnurse_image.jpg" width={2175} height={1607} alt="Grad_nurse_image" />
                                </Grid>

                                <Grid item xs={6} md={12}>
                                    <Image src="/images/gradnurse_image2.jpeg" width={724} height={483} alt="registered nurse image" /> 
                                </Grid>
                            </Grid>
                        </Box>    
                    </Grid> 
                
                     
            </Grid>
       
        </div>
    );
}

export default GraduateNurse;