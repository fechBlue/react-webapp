import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

const Primary = ({ topic }) => (
  <div>
    <span>{topic.tab}</span>
    <span>{topic.title}</span>
  </div>
)

const Secondary = ({ topic }) => (
  <div>
    <span>{topic.username}</span>
    <span>
      <span>{topic.reply_count}</span>
      <span>/</span>
      <span>{topic.visit_count}</span>
    </span>
    <span>创建时间： {topic.create_at}</span>
  </div>
)

const TopicList = ({ topic }) => (
  <ListItem button>
    <ListItemAvatar>
      <Avatar src={topic.avatar} />
    </ListItemAvatar>
    <ListItemText primary={<Primary topic={topic} />} secondary={<Secondary topic={topic} />} />
  </ListItem>
)

TopicList.propTypes = {
  topic: PropTypes.object.isRequired,
}
Primary.propTypes = {
  topic: PropTypes.object.isRequired,
}
Secondary.propTypes = {
  topic: PropTypes.object.isRequired,
}

export default TopicList
