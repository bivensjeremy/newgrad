import React from 'react';
import { Card, Collapse, Typography, Grid, makeStyles } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
          }
    },
    cardStyle: {
        minHeight: 200,
        minWidth: 200,
        backgroundColor: '#3EB1C8'
    }
}));

const JobFairCard = (props) => {
    const classes = useStyles()
    const [checked, setChecked] = React.useState(false);
    const [outChecked, setOutChecked] = React.useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
    setOutChecked((prev) => !prev);
  };

    return (
        <Grid item xs={6} md={3} className={classes.root}>
            <Card onMouseEnter={handleChange} onMouseLeave={handleChange} className={classes.cardStyle} elevation={0}> 
                <Collapse in={outChecked}>
                    <Image
                        src={props.image} 
                        layout="responsive" 
                        width={props.width} 
                        height={props.height}
                        alt="Headshot"    
                    />
                </Collapse>
                
                <Collapse in={checked}>
                    <Typography variant="h4">
                        {props.description}
                    </Typography>
                </Collapse>
            </Card> 
        </Grid>
    );
}

export default JobFairCard;