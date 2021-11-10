import { Typography, Box } from "@material-ui/core";

const SupportFormSuccess = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                <Box fontWeight="fontWeightBold" py={4}>
                    Thank you, your message has been sent.
                </Box>
            </Typography>
        </div>
    );
}

export default SupportFormSuccess;