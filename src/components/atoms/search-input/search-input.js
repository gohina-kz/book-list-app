import React, { Component } from 'react'

import './index.css'

class SearchInput extends Component {
	render() {
		const { query, updateQuery } = this.props
		return (
			<input className="search-input" placeholder="Поиск" value = { query } onChange={(event) => updateQuery(event.target.value)} >
			</input>
		)
	}

}

	export default SearchInput
