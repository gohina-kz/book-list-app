import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Paragraph from '../../atoms/paragraph/paragraph'
import './index.css'


class BookDetails extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired
	}
	
	render() {
		const books = this.props.books
		return (
			<div className="book-details flex fl-c fl-col">
				{books.map((book) => (
					<div key={book.id} >
						<Paragraph htmlText={ book.name } />
						<Paragraph htmlText={ book.author }/>
					</div>
				))}
			</div>
		)
	}
}

export default BookDetails
