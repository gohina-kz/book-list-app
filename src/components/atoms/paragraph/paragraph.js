import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'

class Paragraph extends Component {

	static propTypes = {
		htmlText: PropTypes.string.isRequired
	}

	render() {
		return (
			<p className = "paragraph" > { this.props.htmlText } </p>
		)
	}
}

export default Paragraph
