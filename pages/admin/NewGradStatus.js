import { useSession } from "next-auth/client";
import { Box, makeStyles, CircularProgress, Typography, Switch, Paper, FormGroup, FormControlLabel, Grid } from "@material-ui/core";
import prisma from "../../config/prismaClient";
import Restricted from "../../comps/Admin/Restricted";
import { useState } from "react";
import React from 'react';
import OfferCardView from "../../comps/NewGradView/OfferCardView";
import OfferTableView from "../../comps/NewGradView/OfferTableView";


export async function getServerSideProps() {
    const offer = await prisma.offer.findMany()
    return { props: { newGradOffer: offer } }
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(12),
        marginBottom: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    grid: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    paperPad: {
        minWidth: 500,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));


const NewGradStatus = ({ newGradOffer }) => {
    const [session, loading] = useSession();
    const [view, changeView] = useState(true);
    const [viewLabel, setLabel] = useState("Card View")

    const switchView = (event, value) => {
        {value ? (changeView(false), setLabel("Grid View")) : (changeView(true), setLabel("Card View"))}
    }

    const classes = useStyles();

    if (loading) {
        return (
            <div className={classes.paper}>
                <Typography component="h4">Loading... <CircularProgress /></Typography>
            </div>
        )
    }

    return (
        <>
        {!session ? (
            <Restricted />
        ) : (
            <div>
                <Grid 
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <Typography variant="h4" className={classes.grid}>
                        <Box fontWeight="fontWeightBold">
                            Candidate Offer Status
                        </Box>
                    </Typography>

                    <Box border={2} borderRadius={16} borderColor="primary.main" className={classes.paperPad}>
                        
                        <Typography variant="h6" gutterBottom>
                            Change View
                        </Typography>

                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch 
                                        onChange={switchView}
                                        color="primary"
                                    />
                                }
                                label={viewLabel}
                            />
                        </FormGroup>
                    </Box>
                </Grid>
            {view ? (<OfferCardView offer={newGradOffer} />) : (<OfferTableView offer={newGradOffer} />)}

            </div>
        )}
        </>
    );
}

export default NewGradStatus;