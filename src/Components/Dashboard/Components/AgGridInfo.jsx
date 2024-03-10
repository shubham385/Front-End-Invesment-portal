import React from 'react'
import { Box, Typography } from '@mui/material'

const AgGridInfo = () => {
    return (
        <>

            <Box id="table-info">
                <Typography variant='h6' className='txt fw5'>Showing 1 to 50 of <span className='total-entries'>1000 entries</span></Typography>
            </Box>

        </>
    )
}

export default AgGridInfo