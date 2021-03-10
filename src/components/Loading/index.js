import React from 'react'
import './style.scss'
import PropTypes from 'prop-types'

export default class Loading extends React.Component {
  state = { content: this.props.text }

  componentDidMount() {
    const { speed, text } = this.props

    this.interval = window.setInterval(() => {
      this.state.content === text + '...'
        ? this.setState({ content: text })
        : this.setState(({ content }) => ({ content: content + '.' }))
    }, speed)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval)
  }

  render() {
    return <p className="Loading">{this.state.content}</p>
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300,
}
