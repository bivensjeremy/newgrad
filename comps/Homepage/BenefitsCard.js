import { Grid, Paper, Typography } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const BenefitsCard = (props) => {
    return (
        <Grid container item md={4}>
            <Paper elevation={0} style={{backgroundColor: "transparent"}}>
                <Typography variant="h5" align="center" color="textSecondary">
                    {props.header}
                </Typography>
                
                <Typography variant="body1" color="textPrimary">
                    <span>
                        {props.data.map(data => <li key={data}> <span><CheckCircleIcon /></span> {data} </li>)}
                    </span>
                </Typography>
            </Paper>
        </Grid>            
    );
}

export default BenefitsCard;