import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    fontSize: 15,
  },
  homeButton: {
    marginLeft: -12,
  },
};

class TopBar extends Component {
  componentDidMount() {
    // do something here
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <ToolBar>
            <IconButton className={classes.homeButton} color="inherit" aria-label="menu">
              <HomeIcon />
            </IconButton>
            <Typography color="inherit" className={classes.grow}>
              主页
            </Typography>
            <Button color="inherit">新建话题</Button>
            <Button color="inherit">登录</Button>
          </ToolBar>
        </AppBar>
      </div>
    )
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TopBar)
