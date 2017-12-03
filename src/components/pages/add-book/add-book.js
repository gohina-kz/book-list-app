import React, { Component } from 'react'
import serializeForm from 'form-serialize'

import AForm from '../../molecules/form/form'
import NewLink from '../../atoms/link/link'
import './index.css'


class AddBook extends Component {
	handleSubmit = (e) => {
		e.preventDefault()
		const values = serializeForm(e.target, { hash: true })
		if (this.props.onCreateBook)
		this.props.onCreateBook(values)
	}

	render() {
		return (
			<div>
				<NewLink link="/" class="link-back"> </NewLink>
				<AForm handleSubmit={this.handleSubmit}  />
			</div>
		)
	}
}

export default AddBook
