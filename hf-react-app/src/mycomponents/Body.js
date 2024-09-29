import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Home from './Home';
import Register from './Register';
import Transactions from './Transactions';

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tablabel = {
    fontFamily: 'copperplate',
    fontSize: '18px'
  }

  return (
    <div style={{ width: '100%', height: '84vh', overflowY: 'auto' }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs

            TabIndicatorProps={{
              style: {
                backgroundColor: '#ff5722', // Underline (indicator) color
              },
            }}

            sx={{
              '& .MuiTab-root': {
                color: 'gray', // Unselected tab color
              },
              '& .Mui-selected': {
                color: '#ff5722', // Selected tab color
              },
            }} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab style={tablabel} label="Home" {...a11yProps(0)} />
            <Tab style={tablabel} label="Register" {...a11yProps(1)} />
            <Tab style={tablabel} label="Transactions" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Home />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Register />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Transactions />
        </CustomTabPanel>
      </Box>
    </div>
  );
}