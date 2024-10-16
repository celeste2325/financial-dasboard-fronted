import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import {
  AppBarProps,
  Right,
  Left,
  NameFieldProps,
  LogFieldProps,
  ImgWrapper
} from '../styles/Navbar';
import { MenuItem } from '@mui/material';
import logo from '/assets/logo.png';

const NavBar = () => {
  return (
    <AppBar {...AppBarProps}>
      <Left>
        <ImgWrapper src={logo} alt="logo" />
      </Left>
      <Right>
        <MenuItem {...NameFieldProps}>UserName</MenuItem>
        <MenuItem {...LogFieldProps}>Logout</MenuItem>
        <MenuItem {...LogFieldProps}><a href="https://github.com/celeste2325/financial-dashboard-fronted/tree/main">Github</a></MenuItem>
        <MenuItem {...LogFieldProps}><a href="https://www.youtube.com/watch?v=spAvPOXSUeo">YT Video</a></MenuItem>
      </Right>
    </AppBar>
  )
}
export default NavBar;