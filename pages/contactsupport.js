import { Box, Grid, Typography } from '@material-ui/core';
import Head from 'next/head'
import SupportForm from '../comps/ContactSupport/SupportForm';
import SupportFormHeader from '../comps/ContactSupport/SupportFormHeader';
import { useFormik } from 'formik';
import { validationSchema } from '../Validations/contactsupportvalidation';
import { useState } from 'react';
import SupportFormSuccess from '../comps/ContactSupport/SupportFormSuccess';


const ContactSupport = () => {
    const [Succeeded, setSucceeded] = useState(false);
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: async(values) => {
            // alert(JSON.stringify(values, null, 2));
            await new Promise((r) => setTimeout(r, 500));
            const response = await fetch("/api/contactsupportapi", { 
                method: 'POST', 
                headers: { 
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                }, 
                body: JSON.stringify(values) 
            });
            const resData = await response.json();
            if (resData.status === 'success'){
                setSucceeded(true)
            }else if(resData.status === 'fail'){
                alert("Message failed to send.")
            }
        },
    })

    return (
        <div>
            <Head>
                <title>Contact Support</title>
            </Head>

            <Box p={5}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <SupportFormHeader />
                        {Succeeded ? (<SupportFormSuccess />) : (<SupportForm formik={formik}/>) }
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                        <Box py={7}>    
                            <Typography variant="h4" gutterBottom>
                                Tell me what&apos;s wrong
                            </Typography>

                            <Typography variant="h5" gutterBottom>
                                Use this form to report any bugs or for technical support. We may need to follow up with you for more information so please don&apos;t forget to include your email address!
                            </Typography>

                            <Typography variant="h5" gutterBottom>
                            Thank you for the feedback!
                            </Typography>

                            <Typography align="right">
                                -System Administrator
                            </Typography>
                        </Box>   
                    </Grid>   
                </Grid>
            </Box>
        </div>
    );
}

export default ContactSupport;