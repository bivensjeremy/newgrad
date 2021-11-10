import { useSession } from "next-auth/client";
import prisma from "../../config/prismaClient";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React, {useState, useEffect} from 'react'
import { Box, Typography, Button, makeStyles, CircularProgress } from "@material-ui/core";
import TakeAction from "../../comps/NewGradView/TakeAction";
import Restricted from "../../comps/Admin/Restricted";


export async function getServerSideProps() {
    
    const student = await prisma.student.findMany()
    return { 
        props: { 
            returnStudents: student 
        } 
    }
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(12),
        marginBottom: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

const NewGradView = ({ returnStudents }) => {
    const [session, loading] = useSession();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [tableData, setTableData] = useState([])
    const [rowData, setRowData]=useState({})

    useEffect(() => {
        setTableData(returnStudents)
    })

    const handleClose = () => {
        setOpen(false);
        setRowData({})
    };

    const handleClick = (rowData) => {
        setOpen(true);
        setRowData(rowData.row)
    }
    
    const renderDetailsButton = (rowData) => {
        return (
            <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={ () => {handleClick(rowData)} }
            >
                Take Action
            </Button>
        )
    }

    const columns = [
        { field: 'action', headerName: 'Action', flex: 1, renderCell: renderDetailsButton},
        { field: 'id', headerName: 'ID' },
        { field: 'lastName', headerName: 'Last Name', flex: 1 },
        { field: 'firstName', headerName: 'First Name', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'phone', headerName: 'Phone Number', flex: 1 },
        { field: 'school', headerName: 'School', flex: 1, hide: true },
        { field: 'graduationYear', headerName: 'Graduation Year', flex: 1, hide: true },
        { field: 'program', headerName: 'Program', flex: 1, hide: true },
        { field: 'extern', headerName: 'Extern', flex: 1 },
        { field: 'department', headerName: 'Departments', flex: 1 },
        { field: 'position', headerName: 'Eligible Position', flex: 1 }
    ];

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
            <div align="center">
                <TakeAction open={open} onClose={handleClose} rowData={rowData} />
                <Box p={2}>
                    <Typography variant="h4" gutterBottom>
                        <Box fontWeight="fontWeightBold">
                            New Grad Master List
                        </Box>
                    </Typography>

                    <DataGrid 
                        rows={ tableData } 
                        columns={columns}
                        pageSize={25}
                        autoHeight
                        autoPageSize 
                        components={{
                            Toolbar: GridToolbar,
                        }}
                    />
                </Box>    
            </div>
        )};
    </>
    )
}

export default NewGradView;