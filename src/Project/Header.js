import { AppBar,Toolbar,Typography,makeStyles } from '@material-ui/core'
import ArrowForwardIosTwoToneIcon from '@material-ui/icons/ArrowForwardIosTwoTone';
import AppsIcon from '@material-ui/icons/Apps';
import OpenWithTwoToneIcon from '@material-ui/icons/OpenWithTwoTone';
import React from 'react'
import Selector from "./Project/Selector";

const useStyle=makeStyles({
  header:{
    background:"white",
    color:"black",
    marginBottom:8,

  },
  menu:{
    display:"flex",
    flexDirection:"column",
    padding:"2px",
    
  }
})


const Header = () => {
 const classes= useStyle();
    return(
      <AppBar className={classes.header} position="static">
        <Toolbar>
        <Typography className={classes.menu}>
          <AppsIcon/>  </Typography>
          <Typography>TEST UI <ArrowForwardIosTwoToneIcon/> My Account</Typography>
          <Typography> <OpenWithTwoToneIcon/></Typography>
               
               <Selector/>
        </Toolbar>
      </AppBar>

      
      

  )
}

export default Header