import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Main from './components/pages/main/main'
import AddBook from './components/pages/add-book/add-book'


class App extends Component {

	state = {
		books: [
			{
				id: 1,
				name: "Атлант расправил плечи",
				url: "/static/media/atlant.jpg",
				author: "Айн Ранд"
			},
			{
				id: 2,
				name: "Источник",
				url: "/static/media/atlant.jpg",
				author: "Айн Ранд"
			},
			{
				id: 3,
				name: "7 навыков высокоэффективных людей",
				url: "/static/media/7-skills.jpg",
				author: "Стивен Кови"
			}
		]
	}

	componentDidMount() {
		// BooksAPI.getAll().then((books) => {
		// 	this.setState({ books })
		// })
	}

	removeBook = (book) => {
		this.setState((state) => ({
			books: state.books.filter((c) =>c.id !== book.id)
		}))

		//BooksAPI.remove(book)
	}

	createBook = (book) => {
		// BooksAPI.create(book).then(book => {
		// 	this.setState(state => {
		// 		books: state.books.concat([ book ])
		// 	})
		// })

		this.setState(state => {
			books: state.books.concat([ book ])
		})
	}

  render() {


    return (
      <div className="App">
				<Route exact path="/" render={() => (
					<Main books={this.state.books}
						onDeleteBook= { this.removeBook }
					 />
				)} />

				<Route path="/create" render={({ history }) => (
					<AddBook
						onCreateBook={(book) => {
							this.createBook(book)
							history.push('/')
						}}
					/>
				)}
			/>
      </div>
    );
  }
}

export default App;
