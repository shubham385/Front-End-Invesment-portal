import { Box, Button, Collapse, Grid, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LocationTable from './LocationTable';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';



function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ActivityLog() {


    // tabs
    const [value, setValue] = React.useState(0);

    const handleChangeT = (event, newValue) => {
        setValue(newValue);
    };

    // table
    const [isTableOpen, setIsTableOpen] = useState(true);
    const [isTableOpen2, setIsTableOpen2] = useState(false);
    const [isTableOpen3, setIsTableOpen3] = useState(false);

    const handleTableShow = () => {
        setIsTableOpen(!isTableOpen);
        setIsTableOpen2(false);
        setIsTableOpen3(false);
    };

    const handleTableShow2 = () => {
        setIsTableOpen2(!isTableOpen2);
        setIsTableOpen(false);
        setIsTableOpen3(false);
    };

    const handleTableShow3 = () => {
        setIsTableOpen3(!isTableOpen3);
        setIsTableOpen(false);
        setIsTableOpen2(false);
    };
    return (
        <>
            <Box className='whitebx bxsh3' mt={2}>
                <Box className="tb_head">

                    <Box className='fx_sb'>
                        <Box>
                            <Typography variant='h4' className='fw5 content'>Activity Log Insights</Typography>
                        </Box>
                        <Box textAlign='right'>
                            <Link to='/inventory-management '>
                                <Button variant="contained" size='small' className='main_btn' endIcon={<KeyboardDoubleArrowRightIcon />}>View Details</Button>
                            </Link>
                        </Box>
                    </Box>

                </Box>

                <Box py={1}>

                    <Box>
                        <Grid container spacing={1}>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <Box className='whitebx bx_brd' >
                                    <Box className=''>
                                        <Grid container spacing={2} justifyContent='flex-start'>
                                            <Grid item lg={12} md={12} sm={6} xs={12}>
                                                <Button className={isTableOpen ? 'act_btn_active' : 'act_btn'} onClick={handleTableShow} variant='text' startIcon={isTableOpen ? <KeyboardArrowUpIcon fontSize='small' /> : <KeyboardArrowDownIcon fontSize='small' />} disableRipple disableTouchRipple>
                                                    Mumbai
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Collapse in={isTableOpen}>
                                        <Box pt={1}>
                                            <LocationTable />
                                        </Box>
                                    </Collapse>
                                </Box>
                            </Grid>


                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <Box className='whitebx bx_brd' >
                                    <Box className=''>
                                        <Grid container spacing={2} justifyContent='flex-start'>
                                            <Grid item lg={12} md={12} sm={6} xs={12}>
                                                <Button className={isTableOpen2 ? 'act_btn_active' : 'act_btn'} onClick={handleTableShow2} variant='text' startIcon={isTableOpen2 ? <KeyboardArrowUpIcon fontSize='small' /> : <KeyboardArrowDownIcon fontSize='small' />} disableRipple disableTouchRipple>
                                                    Nashik
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Collapse in={isTableOpen2}>
                                        <Box pt={1}>
                                            <LocationTable />
                                        </Box>
                                    </Collapse>
                                </Box>
                            </Grid>



                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <Box className='whitebx bx_brd' >
                                    <Box className=''>
                                        <Grid container spacing={2} justifyContent='flex-start'>
                                            <Grid item lg={12} md={12} sm={6} xs={12}>
                                                <Button className={isTableOpen3 ? 'act_btn_active' : 'act_btn'} onClick={handleTableShow3} variant='text' startIcon={isTableOpen3 ? <KeyboardArrowUpIcon fontSize='small' /> : <KeyboardArrowDownIcon fontSize='small' />} disableRipple disableTouchRipple>
                                                    GiftCity
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Collapse in={isTableOpen3}>
                                        <Box pt={1}>
                                            <LocationTable />
                                        </Box>
                                    </Collapse>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>

            </Box>
        </>
    )
}

const options = [
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' },
]
