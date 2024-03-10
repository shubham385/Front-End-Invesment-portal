import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import "ag-grid-community/styles/ag-theme-quartz.css"; 
import AgGridInfo from '../Components/AgGridInfo';
import AgGridPagination from '../Components/AgGridPagination';
import { Link } from 'react-router-dom';
import TableSkeleton from '../Components/TableSkeleton';

export default function LocationTable() {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setTimeout(() => {
                setLoading(false);
            }, 200);
        };
        fetchData();
    }, []);

    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState([
        { No: "1", AssignedDate: "28/08/2020", ProductName: "Laptop", Category: 'Asset', ServiceTag: "DPANSK7F7010103", Employee: "Jennifer Harris", Assigner: 'Jennifer Harris', status: 'assigned' },
        { No: "2", AssignedDate: "28/08/2020", ProductName: "Laptop", Category: 'Asset', ServiceTag: "DPANSK7F7010103", Employee: "Jennifer Harris", Assigner: 'Jennifer Harris', status: 'repair' },
        { No: "3", AssignedDate: "28/08/2020", ProductName: "Laptop", Category: 'Asset', ServiceTag: "DPANSK7F7010103", Employee: "Jennifer Harris", Assigner: 'Jennifer Harris', status: 'replaced' },
        { No: "4", AssignedDate: "28/08/2020", ProductName: "Laptop", Category: 'Asset', ServiceTag: "DPANSK7F7010103", Employee: "Jennifer Harris", Assigner: 'Jennifer Harris', status: '' },
        { No: "5", AssignedDate: "28/08/2020", ProductName: "Laptop", Category: 'Asset', ServiceTag: "DPANSK7F7010103", Employee: "Jennifer Harris", Assigner: 'Jennifer Harris', status: 'replaced' },
        { No: "6", AssignedDate: "28/08/2020", ProductName: "Laptop", Category: 'Asset', ServiceTag: "DPANSK7F7010103", Employee: "Jennifer Harris", Assigner: 'Jennifer Harris', status: 'assigned' },
        { No: "7", AssignedDate: "28/08/2020", ProductName: "Laptop", Category: 'Asset', ServiceTag: "DPANSK7F7010103", Employee: "Jennifer Harris", Assigner: 'Jennifer Harris', status: '' },
        { No: "8", AssignedDate: "28/08/2020", ProductName: "Laptop", Category: 'Asset', ServiceTag: "DPANSK7F7010103", Employee: "Jennifer Harris", Assigner: 'Jennifer Harris', status: 'assigned' },
        { No: "5", AssignedDate: "28/08/2020", ProductName: "Laptop", Category: 'Asset', ServiceTag: "DPANSK7F7010103", Employee: "Jennifer Harris", Assigner: 'Jennifer Harris', status: 'replaced' },
        { No: "6", AssignedDate: "28/08/2020", ProductName: "Laptop", Category: 'Asset', ServiceTag: "DPANSK7F7010103", Employee: "Jennifer Harris", Assigner: 'Jennifer Harris', status: 'assigned' },
        { No: "7", AssignedDate: "28/08/2020", ProductName: "Laptop", Category: 'Asset', ServiceTag: "DPANSK7F7010103", Employee: "Jennifer Harris", Assigner: 'Jennifer Harris', status: '' },
        { No: "8", AssignedDate: "28/08/2020", ProductName: "Laptop", Category: 'Asset', ServiceTag: "DPANSK7F7010103", Employee: "Jennifer Harris", Assigner: 'Jennifer Harris', status: 'assigned' },
        { No: "6", AssignedDate: "28/08/2020", ProductName: "Laptop", Category: 'Asset', ServiceTag: "DPANSK7F7010103", Employee: "Jennifer Harris", Assigner: 'Jennifer Harris', status: 'assigned' },
        { No: "7", AssignedDate: "28/08/2020", ProductName: "Laptop", Category: 'Asset', ServiceTag: "DPANSK7F7010103", Employee: "Jennifer Harris", Assigner: 'Jennifer Harris', status: '' },
        { No: "8", AssignedDate: "28/08/2020", ProductName: "Laptop", Category: 'Asset', ServiceTag: "DPANSK7F7010103", Employee: "Jennifer Harris", Assigner: 'Jennifer Harris', status: 'assigned' },
        { No: "5", AssignedDate: "28/08/2020", ProductName: "Laptop", Category: 'Asset', ServiceTag: "DPANSK7F7010103", Employee: "Jennifer Harris", Assigner: 'Jennifer Harris', status: 'replaced' },
        { No: "6", AssignedDate: "28/08/2020", ProductName: "Laptop", Category: 'Asset', ServiceTag: "DPANSK7F7010103", Employee: "Jennifer Harris", Assigner: 'Jennifer Harris', status: 'assigned' },
        { No: "7", AssignedDate: "28/08/2020", ProductName: "Laptop", Category: 'Asset', ServiceTag: "DPANSK7F7010103", Employee: "Jennifer Harris", Assigner: 'Jennifer Harris', status: '' },
        { No: "8", AssignedDate: "28/08/2020", ProductName: "Laptop", Category: 'Asset', ServiceTag: "DPANSK7F7010103", Employee: "Jennifer Harris", Assigner: 'Jennifer Harris', status: 'assigned' },
    ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "No", minWidth: 70, maxWidth: 70, cellClass: 'al_right' },
        { field: "AssignedDate", minWidth: 100, cellClass: 'al_right' },
        { field: "ProductName", minWidth: 100 },
        { field: "Category", minWidth: 100 },
        { field: "ServiceTag", minWidth: 100, cellRenderer: () => <Link to="#">DPANSK7F7010103</Link>, cellClass: 'col2' },
        { field: "Employee", minWidth: 100 },
        { field: "Assigner", minWidth: 100 },
        // { field: "Status", minWidth: 100 },
        {
            headerName: 'Status', field: 'status', maxWidth: 100, minWidth: 100,
            cellRenderer: (params) => {
                const { status } = params.data;
                return (
                    <>
                        {status === 'assigned' ? (
                            <Box className='assign_btn'>
                                Assigned
                            </Box>
                        ) : status === 'repair' ? (
                            <Box className='repair_btn'>
                                In Repair
                            </Box>
                        ) : status === 'replaced' ? (
                            <Box className='replace_btn'>
                                Replaced
                            </Box>
                        ) : (
                            <Box className='retird_btn'>
                                Retired
                            </Box>
                        )
                        }
                    </>
                );
            },
        },
    ]);


    // Apply settings across all columns
    const defaultColDef = React.useMemo(() => ({
        filter: true,
        editable: false,
        flex: 1,
    }), []);

    const rowHeight = 26;
    const headerHeight = 28;

    // Container: Defines the grid's theme & dimensions.

    const rowStyle = { background: '#f2f2f2' };

    const getRowStyle = params => {
        if (params.node.rowIndex % 2 === 0) {
            return { background: '#fff' };
        }
    };

    return (
        <>
            <Box id='table'>

                <Box id="custom-pagination"
                    className={
                        "ag-theme-quartz"
                    }
                    style={{ width: '100%', height: '315px' }}
                >
                    {loading ? (
                        <Box>
                            <TableSkeleton />
                        </Box>
                    ) : (
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={colDefs}
                            defaultColDef={defaultColDef}
                            rowHeight={rowHeight}
                            headerHeight={headerHeight}
                            pagination={false}
                            getRowStyle={getRowStyle}
                            rowStyle={rowStyle}
                            rowSelection={false}
                        />
                    )}
                    <Box id='table-info' className='fx_sb' pt={1}>
                        <AgGridInfo />
                        <AgGridPagination />
                    </Box>
                </Box>
            </Box>

        </>
    )
}
