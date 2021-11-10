import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from "@material-ui/core";
import React, {useState, useEffect} from 'react'

const OfferTableView = ({offer}) => {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        setTableData(offer)
    })

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'lastName', headerName: 'Last Name', flex: 1 },
        { field: 'firstName', headerName: 'First Name', flex: 1 },
        { field: 'department', headerName: 'Departments', flex: 1 },
        { field: 'offerStatus', headerName: 'Offer Status', flex: 1 }
    ];

    return (
        <div align="center">
            <Box p={2}>
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
    );
}

export default OfferTableView;