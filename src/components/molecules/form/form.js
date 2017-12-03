import React, { Component } from 'react'

import NewInput from '../../atoms/input/input';
import NewButton from '../../atoms/button/button';
import UploadBookCover from '../../atoms/upload-book-cover/upload-book-cover';
import './index.css'

class AForm extends Component {
	render() {
		return (
			<form className="flex a-form" onSubmit={this.props.handleSubmit} >
				<UploadBookCover name="url" maxHeight={74} />
				<div className="padding-left">
					<NewInput replacer="Название книги" name="name" />
					<NewInput replacer="Автор" name="author" />
					<NewButton buttonName="Добавить книгу" class="button-primary" />
				</div>
			</form>
		)
	}
}

export default AForm;
