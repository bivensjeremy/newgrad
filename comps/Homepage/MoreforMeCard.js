import { Box, Card, CardContent, CardHeader, Grid, Paper, Typography } from "@material-ui/core"


const MoreforMeCard = (props) => {
    return (
        <Box>
           <Grid>
                <Paper elevation={4} style={{padding: 30}}>
                    <CardHeader title={props.header} />
                    
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                        </Typography>           
                    </CardContent>
                </Paper> 
            </Grid> 
        </Box>  
    );
}

export default MoreforMeCard;