import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Grid, makeStyles } from "@material-ui/core";
import Link from 'next/link'

const useStyles = makeStyles({
    button:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    media: {
      height: 200,
    },
})

const PathtoRNCard = (props) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={4}>
            <Card>
                <Link href={props.link}><a>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={props.image}
                            title={props.imageTitle}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                                {props.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions className={classes.button}>
                        <Button variant="contained" size="large">Learn More</Button>
                    </CardActions>   
                </a></Link>
            </Card>
        </Grid>
    );
}

export default PathtoRNCard;