import { useState } from 'react';
import { TextField, Button, Container, makeStyles, CircularProgress } from '@material-ui/core';
import SupportFormSuccess from './SupportFormSuccess';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
        }
    }
}));

const SupportForm = ({formik}) => {
    const classes = useStyles()
    const [Processing, setProcessing] = useState('');
    const [Succeeded, setSucceeded] = useState(false);

    return (
        <Container>
            <form onSubmit={formik.handleSubmit} className={classes.root}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    onBlur={formik.handleBlur}
                />

                <TextField
                    fullWidth
                    variant="outlined"
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    onBlur={formik.handleBlur}
                />

                <TextField
                    fullWidth
                    multiline
                    minRows={6}
                    variant="outlined"
                    id="message"
                    name="message"
                    label="Message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                    onBlur={formik.handleBlur}
                />

                <Button 
                    color="primary" 
                    variant="contained" 
                    fullWidth 
                    type="submit" 
                    disabled={formik.isSubmitting}
                > 
                    {formik.isSubmitting ? ( <CircularProgress />  ) : ( "Submit"  )}
                </Button>
            </form>
        </Container>
        
    );
}

export default SupportForm;