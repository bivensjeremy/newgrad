import { Box, Card, CardContent, Container, ListItem, Typography, List, Grid } from "@material-ui/core";
import Image from 'next/image'



const PersonalCareAssistant = () => {
    
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <Container>
                        <Box p={5}>
                            <Card elevation={4}>
                                <CardContent>
                                    <Typography variant="h2" align="center">
                                        Personal Care Assistant
                                    </Typography>
                                    
                                    <Typography variant="h4" color="textSecondary">
                                        Scope of Practice
                                    </Typography>
                                    
                                    <Typography variant="body1" align="justify" gutterBottom>
                                        <List>
                                            <ListItem>
                                                Taking/recording vital signs and vital signs parameters
                                            </ListItem>
                                            <ListItem>
                                                Measuring and recording height and weight
                                            </ListItem>
                                            <ListItem>
                                                Obtaining/recording FSBS 
                                            </ListItem>
                                            <ListItem>
                                                Caring for the patient’s environment
                                            </ListItem>
                                            <ListItem>
                                                Purposeful rounding
                                            </ListItem>
                                            <ListItem>
                                                Providing foley care and maintenance 
                                            </ListItem>
                                            <ListItem>
                                                Recognizing abnormal changes in body function and the importance of reporting such changes to a supervisor. 
                                            </ListItem>
                                            <ListItem>
                                                Providing post mortem care
                                            </ListItem>
                                        </List>
                                        </Typography>
                                        
                                        <Typography variant="h4" color="textSecondary">
                                            Personal Care Skills, including but not limited to, the following
                                    </Typography>
                                    <Typography variant="body1" align="justify" gutterBottom>
                                        <List>
                                            <ListItem>
                                                Bathing (to include observation for pressure ulcers) 
                                            </ListItem>
                                            <ListItem>
                                                Grooming, including mouth care 
                                            </ListItem>
                                            <ListItem>
                                                Dressing 
                                            </ListItem>
                                            <ListItem>
                                                Toileting 
                                            </ListItem>
                                            <ListItem>
                                                Assisting with eating and hydration 
                                            </ListItem>
                                            <ListItem>
                                                Proper feeding techniques 
                                            </ListItem>
                                            <ListItem>
                                                Skin-care including observation for pressure ulcers and skin tears 
                                            </ListItem>
                                            <ListItem>
                                                Transfers, positioning and turning (to include observation for pressure ulcers) 
                                            </ListItem>
                                        </List>
                                    </Typography>

                                    <Typography variant="h4" color="textSecondary">
                                        Mental Health and Social Service Needs as follows: 
                                    </Typography>

                                    <Typography variant="body1" align="justify" gutterBottom>
                                        <List>
                                            <ListItem>
                                                Modifying behavior in response to patient’s behavior including depression  
                                            </ListItem>
                                            <ListItem>
                                                Awareness of developmental tasks associated with the aging process 
                                            </ListItem>
                                            <ListItem>
                                                How to respond to patient’s behavior including depression  
                                            </ListItem>
                                            <ListItem>
                                                Allowing residents to make personal choices, providing and reinforcing other behavior consistent with the patient’s dignity  
                                            </ListItem>
                                            <ListItem>
                                                Emotional and mental health needs of the patients 
                                            </ListItem>
                                            <ListItem>
                                                Spiritual and cultural needs of the patients 
                                            </ListItem>                                         
                                        </List>
                                    </Typography>

                                    <Typography variant="h4" color="textSecondary">
                                        Care of Cognitively Impaired Patients as follows: 
                                    </Typography>

                                    <Typography variant="body1" align="justify" gutterBottom>
                                        <List>
                                            <ListItem>
                                                Techniques for addressing the unique needs and behaviors of individuals with dementia (Alzheimer’s and others) 
                                            </ListItem>
                                            <ListItem>
                                                Communicating with cognitively impaired patients process 
                                            </ListItem>
                                            <ListItem>
                                                Understanding the behavior of cognitively impaired patients  
                                            </ListItem>
                                            <ListItem>
                                                Appropriate responses to the behavior of cognitively impaired patients
                                            </ListItem>
                                            <ListItem>
                                                Methods of reducing the effects of cognitive impairments 
                                            </ListItem>
                                            <ListItem>
                                                Spiritual and cultural health
                                            </ListItem>
                                            <ListItem>
                                                Monitoring patients 1:1 / patient safety partner 
                                            </ListItem>                                      
                                        </List>
                                    </Typography>

                                    <Typography variant="h4" color="textSecondary">
                                        Basic Restorative Services – The patient care assistant should be able to demonstrate skills which incorporate principles of restorative nursing, including but not limited to:  
                                    </Typography>

                                    <Typography variant="body1" align="justify" gutterBottom>
                                        <List>
                                            <ListItem>
                                                Training the patient in self-care according to the patient’s abilities 
                                            </ListItem>
                                            <ListItem>
                                                Ambulation with/without a gait belt 
                                            </ListItem>
                                            <ListItem>
                                                The use of assistive devices in transferring, ambulation, eating and dressing patients  
                                            </ListItem>
                                            <ListItem>
                                                Maintenance of range of motion 
                                            </ListItem>
                                            <ListItem>
                                                Proper turning and positioning in bed and chair 
                                            </ListItem>
                                            <ListItem>
                                                Bowel and bladder training 
                                            </ListItem>
                                            <ListItem>
                                                Care and use of prosthetic/orthotic devices and eyeglasses 
                                            </ListItem>                                        
                                        </List>
                                    </Typography>

                                    <Typography variant="h4" color="textSecondary">
                                        Patients Rights – The patient care assistant should be able to demonstrate behavior which maintains patients’ rights, including but not limited to:  
                                    </Typography>

                                    <Typography variant="body1" align="justify" gutterBottom>
                                        <List>
                                            <ListItem>
                                                Providing privacy and maintenance of confidentiality 
                                            </ListItem>
                                            <ListItem>
                                                Promoting the patients’ right to make personal choices to accommodate their needs 
                                            </ListItem>
                                            <ListItem>
                                                Providing needed assistance in transporting patients   
                                            </ListItem>
                                            <ListItem>
                                                Maintaining care and security of patient’s personal possessions 
                                            </ListItem>
                                            <ListItem>
                                                Providing care which maintains the patient free from abuse, mistreatment and neglect and reporting any instances of such treatment to appropriate facility staff 
                                            </ListItem>
                                            <ListItem>
                                                Avoiding the need for restraints in accordance with current professional standard
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
                                    <Image src="/images/pca_image.jpeg" width={600} height={400} alt="Grad_nurse_image" />
                                </Grid>

                                <Grid item xs={6} md={12}>
                                    <Image src="/images/pca_image2.jpeg" width={2559} height={1279} alt="registered nurse image" /> 
                                </Grid>
                            </Grid>
                        </Box>    
                    </Grid> 
                
                     
            </Grid>
       
        </div>
    );
}

export default PersonalCareAssistant;