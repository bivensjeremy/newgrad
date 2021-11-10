import { Grid, Box, Typography } from "@material-ui/core";
import BenefitsCard from "./BenefitsCard";

function createBenefitsCard(benefitsInfo){
    return(
        <BenefitsCard
            key={benefitsInfo.id}
            header={benefitsInfo.header}
            data={benefitsInfo.data}
        />
    )
}

const BenefitsSection = (props) => {
    return (
        <Box py={3}>
            <Grid>
                <Typography variant="h3" align="center" gutterBottom>
                    There's More!
                </Typography>
                <Box p={3}>
                    <Grid container spacing={3}>
                        {props.benefitsInfo.map(createBenefitsCard)}
                    </Grid>
                </Box>
            </Grid> 
        </Box>
    );
}

export default BenefitsSection;