import { Box, Card, Container, Grid, Paper } from "@material-ui/core"
import MoreforMeCard from "./MoreforMeCard";
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    containerMargin: {
        marginBottom: 30
    }
}));

function createMoreForMeCard(moreForMeInfo){
    return(
        <MoreforMeCard
            key={moreForMeInfo.id}
            header={moreForMeInfo.header}
            description={moreForMeInfo.description}
        />
    )
}
  
const MoreforMeSection = (props) => {
    const classes = useStyles()
    return (
      <Container maxWidth="xl" className={classes.containerMargin}>
          <Box align="center">
            <Grid container>
                    <Grid container item xs={12} spacing={6}>
                        <Grid container item xs={12} md={4}>
                            {props.moreForMeInfo.slice(0,2).map(createMoreForMeCard)}
                        </Grid>

                        <Grid item xs={12} md={4} className={classes.root}>
                            <Card>
                                <Image src="/images/hospital_image.jpeg" layout="responsive" width={814} height={458} alt="Hospital Image" />
                            </Card>
                            <Card>
                                <Image src="/images/nurse_image.jpeg" layout="responsive" width={1200} height={882} alt="Nurse Image 1" />
                            </Card>
                            <Card>
                                <Image src="/images/nurse_image2.jpg" layout="responsive" width={1024} height={682} alt="Nurse Image 2" /> 
                            </Card>
                            
                        </Grid>

                        <Grid container item xs={12} md={4}>
                            {props.moreForMeInfo.slice(2,4).map(createMoreForMeCard)}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
      </Container>
    
  );
}

export default MoreforMeSection;