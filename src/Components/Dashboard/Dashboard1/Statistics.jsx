import { Autocomplete, Box, Button, Grid, Tab, Tabs, TextField, Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
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

export default function Statistics() {


    // tabs
    const [value, setValue] = React.useState(0);

    const handleChangeT = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box className='whitebx bxsh3' mt={2}>
                <Box className="tb_head">

                    <Box className="fx_sb">
                        <Box>
                            <Typography variant='h4' className='fw5 content'>Statistics</Typography>
                        </Box>

                        <Box textAlign='right'>
                            <Link to='/inventory-management'>
                                <Button variant="contained" size='small' className='main_btn' endIcon={<KeyboardDoubleArrowRightIcon />}>View Details</Button>
                            </Link>
                        </Box>
                    </Box>

                </Box>

                <Box py={1}>
                    <Box sx={{ width: '100%' }} pb={1}>
                        <Grid container spacing={2} justifyContent='flex-end'>
                            <Grid item lg={10} md={6} sm={6} xs={12}>
                                <Tabs value={value} onChange={handleChangeT} aria-label="basic tabs example">
                                    <Tab label="Equity" {...a11yProps(0)} disableRipple />
                                    <Tab label="Commodity" {...a11yProps(1)} disableRipple />
                                </Tabs>
                            </Grid>
                            <Grid item lg={2} md={6} sm={6} xs={12}>
                                <Box>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={options}
                                        sx={{ width: '100%' }}
                                        renderInput={(params) => <TextField  {...params} variant='outlined' label="Assets" size='small' />}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <Box >
                            <Grid container spacing={1}>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <Box className='whitebx bx_brd' >
                                        <Box style={{ height: '250px', overflow: 'auto' }}>

                                        </Box>
                                    </Box>

                                </Grid>
                            </Grid>
                        </Box>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <Box >
                            <Grid container spacing={1}>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <Box className='whitebx bx_brd' >
                                        <Box style={{ height: '250px', overflow: 'auto' }}>

                                        </Box>
                                    </Box>

                                </Grid>
                            </Grid>
                        </Box>
                    </CustomTabPanel>
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
