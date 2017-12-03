import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { readFileAsDataURL, resizeImage } from './img'
import './index.css'


class UploadBookCover extends Component {

	static propTypes = {
		name: PropTypes.string.isRequired,
		maxHeight: PropTypes.number.isRequired
	}

	state = {
		value: ''
	}

	handleFileChange  = (event) => {
		const file = event.target.files[0]

		if (file && file.type.match(/^image\//)) {
			readFileAsDataURL(file).then(originalURL => {
				resizeImage(originalURL, this.canvas, this.props.maxHeight).then(url => {
					this.setState({ value: url })
				})
			})
		} else {
			this.setState({ value: '' })
		}
	}

	handleFormReset = () => {
		this.setState({ value: '' })
	}

	componentDidMount() {
		this.canvas = document.createElement('canvas')
		this.fileInput.form.addEventListener('reset', this.handleFormReset)
	}

	compnonentWillUnmount() {
		this.fileInput.form.removeEventListener('reset', this.handleFormReset)
	}


	render() {

		const { name } = this.props
		const { value } = this.state

		if (value) {
			const input = document.querySelector(".main-file")
			//input.classList.remove('file')
			input.classList.add('add-file')
			//const newInput = document.getElementById('123')
			// console.log(newInput)
			input.style.backgroundImage = `url("${value}")`
		}

		return (
			<div className="main-file">
				<input type="hidden" name={ name } value={ value }  />
				<input ref={node => this.fileInput = node} className="file" type="file" onChange={ this.handleFileChange } />
			</div>
		)
	}

}

export default UploadBookCover
