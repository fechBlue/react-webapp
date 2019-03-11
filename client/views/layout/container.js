import React from 'react'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    margin: 10,
    marginTop: 80,
  },
}

const Container = ({ classes, children }) => (
  <Paper elevation={4} className={classes.root}>
    { children }
  </Paper>
)

Container.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
}

export default withStyles(styles)(Container)
