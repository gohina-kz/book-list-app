import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import PropTypes from 'prop-types'

import HeaderMain from '../../organisms/header-main/header-main'
import BookCard from '../../organisms/book-card/book-card'
import SearchStats from '../../molecules/search-stats/search-stats'
import './index.css'


class Main extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		onDeleteBook: PropTypes.func.isRequired
	}

	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	clearyQuery = () => {
		this.setState({ query: '' })
	}

	render() {
		const { books, onDeleteBook } = this.props
		const { query } = this.state
		let showingBooks
		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			showingBooks = books.filter((book) => match.test(book.name))
		} else {
			showingBooks = books
		}

		return (
			<div>
				<HeaderMain query={ query } updateQuery = { this.updateQuery } />
				<div className="padding-left">
				{ showingBooks.length !== books.length && (
					<SearchStats length={showingBooks.length} booksLength={books.length} clearyQuery={this.clearyQuery}  /> )}
					<BookCard onDeleteBook={onDeleteBook} books={showingBooks} />
				</div>
			</div>
		)
	}
}

export default Main
