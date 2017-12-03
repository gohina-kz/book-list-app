
const readFileAsDataURL = file =>
	new Promise(resolve => {
		const reader = new FileReader()

		reader.onload = (event) => {
			resolve(event.target.result)
		}

		reader.readAsDataURL(file)
	})

const resizeImage = (imageURL, canvas, maxHeight) =>
	new Promise(resolve => {
		const img = new Image()

		img.onload = () => {
			// returns a drawing context on the canvas
			const context = canvas.getContext('2d')

			if (img.height > maxHeight) {
				img.width *= maxHeight / img.height
				img.height = maxHeight
			}

			//  clears the specified pixels
			context.clearRect(0, 0, canvas.width, canvas.height)
			canvas.width = img.width
			canvas.height = img.height

			context.drawImage(img, 0, 0, img.width, img.height)

			resolve(canvas.toDataURL('image/jpeg'))
		}

		img.src = imageURL
	})


	export {
		readFileAsDataURL,
		resizeImage
	}
