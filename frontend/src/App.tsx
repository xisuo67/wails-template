import { useState } from 'react'
import logo from './assets/images/logo-universal.png'
import './App.css'
import { Greet } from '../wailsjs/go/main/App'

import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import HomeIcon from '@mui/icons-material/Home'
import PhoneIcon from '@mui/icons-material/Phone'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import ImportExportIcon from '@mui/icons-material/ImportExport'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList'
import TokenIcon from '@mui/icons-material/Token'
import SearchIcon from '@mui/icons-material/Search'
import SettingsIcon from '@mui/icons-material/Settings'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// services
import PageHome from './Home'
import PageSearch from './Search'
import PageInterest from './Interest'
import PageBatchImport from './BatchImport'
import PageCollectionList from './CollectionList'
import PageAuthorizationManager from './AuthorizationManager'

import PageSettings from './Settings'
import { ColorModeContext } from './services/theme'

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

function MyApp() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: '100%',
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="主 页" icon={<HomeIcon />} {...a11yProps(0)} />
        <Tab label="搜 索" icon={<SearchIcon />} {...a11yProps(1)} />
        <Tab label="关 注" icon={<FavoriteIcon />} {...a11yProps(2)} />
        <Tab label="批量导入" icon={<ImportExportIcon />} {...a11yProps(3)} />
        <Tab
          label="采集列表"
          icon={<FeaturedPlayListIcon />}
          {...a11yProps(4)}
        />
        <Tab label="授权管理" icon={<TokenIcon />} {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <PageHome />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PageSearch />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PageInterest />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PageBatchImport />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <PageCollectionList />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <PageAuthorizationManager />
      </TabPanel>
    </Box>
  )
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ flex: '1', overflowY: 'auto' }}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}
