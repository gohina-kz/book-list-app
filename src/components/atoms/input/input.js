import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'

class NewInput extends Component {

	static propTypes = {
		replacer: PropTypes.string.isRequired,
		name: PropTypes.string
	}

	render() {
		return (
			<input
				placeholder={ this.props.replacer }
				type="text"
				className="input"
				name={ this.props.name }
				>
			</input>
		)
	}
}

export default NewInput
