import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import AgGridInfo from '../Components/AgGridInfo';
import AgGridPagination from '../Components/AgGridPagination';
import TableSkeleton from '../Components/TableSkeleton';

export default function DetailTable() {

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
    
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "SrNo", minWidth: 60, cellClass: 'al_right' },
    { field: "Name", minWidth: 100 },
    { field: "Available", minWidth: 100, cellClass: 'al_right' },
    { field: "InUse", minWidth: 100, cellClass: 'al_right' },
    { field: "InRepair", minWidth: 100, cellClass: 'al_right' },
    { field: "Retired", minWidth: 100, cellClass: 'al_right' },
    { field: "Total", minWidth: 100, cellClass: 'al_right' },
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

        <Box id="custom-pagination" className={
          "ag-theme-quartz"
        }
          style={{ width: '100%', height: '300px', }}
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
