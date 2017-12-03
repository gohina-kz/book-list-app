import React, { Component } from 'react'

import './index.css'
import Paragraph from '../../atoms/paragraph/paragraph'
import NewButton from '../../atoms/button/button'

class SearchStats extends Component {
	render() {
		return (
			<div className="search-stats">
				<Paragraph htmlText={`Найдено ${this.props.length} из ${this.props.booksLength}`}/>
				<NewButton buttonName="Показать все" class="button-without-border" clearyQuery ={this.props.clearyQuery}/>
			</div>
		)
	}
}

export default SearchStats
