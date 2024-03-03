import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import React from 'react'
import { blue } from '@mui/material/colors'
import { ColorModeContext } from './services/theme'
import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import styled from '@emotion/styled'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import QrCode2Icon from '@mui/icons-material/QrCode2'
import SearchIcon from '@mui/icons-material/Search'
import LanguageIcon from '@mui/icons-material/Language'
import TokenIcon from '@mui/icons-material/Token'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner'
import { BrowserOpenURL } from '../wailsjs/runtime'

const menus = [
  {
    name: 'ScanQrCode',
    desc: '扫码登陆集成平台',
    icon: QrCode2Icon,
    onclick: () => {
      BrowserOpenURL('https://www.baidu.com')
    },
  },
  {
    name: 'Search',
    desc: '搜索小红书',
    icon: SearchIcon,
    onclick: () => {
      console.log('dddd')
    },
  },
  {
    name: '官网',
    desc: '官方网站',
    icon: LanguageIcon,
    onclick: () => {},
  },
  {
    name: '授权管理',
    desc: '管理授权文件',
    icon: TokenIcon,
    onclick: () => {},
  },
  {
    name: '小红书账号登陆',
    desc: '手机扫码登陆',
    icon: DocumentScannerIcon,
    onclick: () => {},
  },
]

const Item = styled(Paper)(({ theme }: any) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

function Home() {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)

  console.log('home')
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
        flexWrap: 'wrap',
      }}
    >
      <Typography variant="h1" gutterBottom>
        SPIDER
      </Typography>
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
      <Box sx={{ flexGrow: 1, width: '100%' }}>
        <Grid container spacing={2}>
          {menus.map((ele, index) => (
            <Grid xs={3} key={index}>
              <Item>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                      <ArrowForwardIosIcon />
                    </IconButton>
                  }
                  disablePadding
                  onClick={ele.onclick}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: blue[500] }}>
                      {React.createElement(ele.icon, { key: index })}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={ele.name} secondary={ele.desc} />
                </ListItem>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
URLSearchParams
export default Home
