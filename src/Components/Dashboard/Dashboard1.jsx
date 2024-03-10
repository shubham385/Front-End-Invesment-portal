import { Autocomplete, Box, Button, Divider, Grid, Tab, Tabs, TextField, Typography } from '@mui/material'
import React from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import up from '../Dashboard/Asset/Images/up.svg'
import down from '../Dashboard/Asset/Images/down.svg'
import Detailed from './Dashboard1/Detailed';
import Statistics from './Dashboard1/Statistics';
import ActivityLog from './Dashboard1/ActivityLog';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from 'react-router-dom';
import '../Dashboard/Root.css'
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';


const Dashboard1 = () => {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  }


  return (
    <>
      <Box id='heading' className='fx_sb'>
        <Grid container spacing={1} alignItems='center' justifyContent='space-between'>
          <Grid item lg={8} md={6} sm={4} xs={12}>
            <Box>
              <Typography variant='h3' className='col1 fw5'>Dashboard</Typography>
            </Box>
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Box>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={city}
                sx={{ width: '100%' }}
                renderInput={(params) => <TextField  {...params} variant='outlined' label="Branch" size='small' />}
              />
            </Box>
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Box>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={months}
                sx={{ width: '100%' }}
                renderInput={(params) => <TextField  {...params} variant='outlined' label="Duration" size='small' />}
              />
            </Box>
          </Grid>
        </Grid>

        <Box style={{ marginLeft: '8px' }} className='fx_fe'>
          <Button fullWidth variant="contained" startIcon={<FileUploadIcon />} size='small' className='main_btn'>Data</Button>
        </Box>
      </Box>

      <Box className='whitebx bxsh3' mt={2}>
        <Box className="tb_head">
          <Box className='fx_sb'>
            <Grid container spacing={1} alignItems='center' justifyContent='space-between'>
              <Grid item lg={9} md={9} sm={9} xs={12}>
                <Box>
                  <Typography variant='h4' className='fw5 content'>Portfolio Summary</Typography>
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={12}>
                <Box className='fx_sb'>
                  <Autocomplete fullWidth
                    disablePortal
                    id="combo-box-demo"
                    options={options}
                    sx={{ width: '100%' }}
                    renderInput={(params) => <TextField fullWidth {...params} variant='outlined' label="Assets" size='small' />}
                  />
                </Box>
              </Grid>
            </Grid>


            <Box style={{ minWidth: '120px', marginLeft: '8px' }}>
              <Link to='/Dashboard'>
                <Button fullWidth variant="contained" size='small' className='main_btn' endIcon={<KeyboardDoubleArrowRightIcon />}>View Details</Button>
              </Link>
            </Box>
          </Box>
        </Box>

        <Box mt={2} mb={1}>
          <Grid container spacing={2}>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Box className='whitebx bxsh2 fx_sb'>
                <Box p={1}>
                  <Typography variant='h6' className='content fw'>
                   Current Profit
                  </Typography>
                  <Typography variant='h2' className='col2 fw6' py={1}>
                    23,000
                  </Typography>
                  <Button variant='text' startIcon={<img src={up} className='up' alt='UP' />} disableRipple disabled className='txt_btn grn fw5' >
                    5.39%
                  </Button>
                </Box>
                <Box className='ex_icon'>
                  <CandlestickChartIcon fontSize='large' />
                </Box>
              </Box>
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Box className='whitebx bxsh2 fx_sb'>
                <Box p={1}>
                  <Typography variant='h6' className='content fw'>
                    Realised Profit
                  </Typography>
                  <Typography variant='h2' className='col2 fw6' py={1}>
                    35,700
                  </Typography>
                  <Button variant='text' startIcon={<img src={up} className='up' alt='UP' />} disableRipple disabled className='txt_btn grn fw5' >
                    2.39%
                  </Button>
                </Box>
                <Box className='ex_icon'>
                  <LocalAtmIcon fontSize='large' />
                </Box>
              </Box>
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Box className='whitebx bxsh2 fx_sb'>
                <Box p={1}>
                  <Typography variant='h6' className='content fw'>
                    Max Individual loss
                  </Typography>
                  <Typography variant='h2' className='col2 fw6' py={1}>
                    05,689
                  </Typography>
                  <Button variant='text' startIcon={<img src={down} className='up' alt='Down' />} disableRipple disabled className='txt_btn rd fw5' >
                    4.58%
                  </Button>
                </Box>
                <Box className='ex_icon'>
                  <MoneyOffIcon fontSize='large' />
                </Box>
              </Box>
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Box className='whitebx bxsh2 fx_sb'>
                <Box p={1}>
                  <Typography variant='h6' className='content fw'>
                    Total P/L
                  </Typography>
                  <Typography variant='h2' className='col2 fw6' py={1}>
                    12,562
                  </Typography>
                  <Button variant='text' startIcon={<img src={up} className='up' alt='UP' />} disableRipple disabled className='txt_btn grn fw5' >
                    2.98%
                  </Button>
                </Box>
                <Box className='ex_icon'>
                  <PriceCheckIcon fontSize='large' />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box mb={2}>
        <Detailed />
      </Box>

      <Box mb={2}>
        <Statistics />
      </Box>

      {/* <Box mb={2}>
        <ActivityLog />
      </Box> */}


    </>
  )
}

export default Dashboard1;

const city = [
  { label: 'Mumbai' },
  { label: 'Nashik' },
  { label: 'Pune' },
]

const months = [
  { label: 'Last 3 months' },
  { label: 'Last 6 months' },
  { label: 'Last year' },
]

const options = [
  { label: 'Option 1' },
  { label: 'Option 2' },
  { label: 'Option 3' },
]
