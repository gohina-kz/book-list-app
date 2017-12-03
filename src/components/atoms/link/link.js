import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './index.css'

class NewLink extends Component {

	static propTypes = {
		text: PropTypes.string,
		class: PropTypes.string.isRequired
	}

	render() {
		return (
			<Link
				to={ this.props.link }
				className={ this.props.class }>
				{ this.props.text }
			</Link>
		)
	}

}

export default NewLink
