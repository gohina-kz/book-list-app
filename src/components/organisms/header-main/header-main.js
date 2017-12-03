import React, { Component } from 'react'

import SearchInput from '../../atoms/search-input/search-input'
import NewLink from '../../atoms/link/link'
import './index.css'

class HeaderMain extends Component {
	render() {
		const { query, updateQuery } = this.props
		return (
			<div className="header-main">
				<SearchInput query={query} updateQuery={updateQuery} />
				<NewLink link="/create" class="link-secondary" />
			</div>
		)
	}
}

export default HeaderMain
