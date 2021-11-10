import { Box, Grid } from "@material-ui/core";
import StatusCard from "../../comps/Status/StatusCard";


function createStatusCard(offerInfo){
    return(
        <StatusCard
            key={offerInfo.id}
            id={offerInfo.id}
            firstName={offerInfo.firstName}
            lastName={offerInfo.lastName}
            department={offerInfo.department}
            offerStatus={offerInfo.offerStatus}
        />
    )
}

const OfferCardView = ({ offer }) => {
    return (
        <div>
            <Grid>
                <Box p={2}>
                    <Grid container>
                        {offer.map(createStatusCard)}
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
}

export default OfferCardView;