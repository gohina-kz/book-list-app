import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'

class NewButton extends Component {

	static proptypes = {
		buttonName: PropTypes.string,
		class: PropTypes.string.isRequired,
		onDeleteBook: PropTypes.func,
		clearyQuery: PropTypes.func
	}

	render() {
		const {book, onDeleteBook, clearyQuery} = this.props

		const myFunc = () => {
			
			if (onDeleteBook) {
				 return onDeleteBook(book)
			}

			if(clearyQuery) {
				return clearyQuery()
			}
		}

		return (
			<button className={ this.props.class } onClick={ myFunc }>
				{ this.props.buttonName }
			</button>
		)
	}

}

export default NewButton
