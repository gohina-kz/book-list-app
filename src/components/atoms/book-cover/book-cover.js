import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'

class BookCover extends Component {

	static propTypes = {
		url: PropTypes.string.isRequired
	}

	render() {
		return (
			<img alt="" className="book-cover" style={{ backgroundImage: `url(${this.props.url})` }}/>
		)
	}

}

export default BookCover
