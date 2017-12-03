import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BookCover from '../../atoms/book-cover/book-cover';
import Paragraph from '../../atoms/paragraph/paragraph'
import NewButton from '../../atoms/button/button';
import './index.css'

class BookCard extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		onDeleteBook: PropTypes.func.isRequired
	}
	render() {
		const { books, onDeleteBook } = this.props
		return (
			<div>
				{books.map((book) => (
					<div className="card flex" key={book.id}>
						<BookCover url= { book.url }/>
						<div className="book-details flex fl-c fl-col">
							<Paragraph htmlText={ book.name } />
							<Paragraph htmlText={ book.author }/>
						</div>
						<NewButton class="button-secondary" onDeleteBook={ onDeleteBook } book={book} />
					</div>
				))}
			</div>
		)
	}
}

export default BookCard
