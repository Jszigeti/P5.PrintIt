// CARROUSEL
{
	// tableau slide
	const slides = [
		{
			"image": "slide1.jpg",
			"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
		},
		{
			"image": "slide2.jpg",
			"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		},
		{
			"image": "slide3.jpg",
			"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
		},
		{
			"image": "slide4.png",
			"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
		}
	]

	// initialisation index
	let i = 0

	// intégration flèches carrousel
	const banner = document.querySelector("#banner")
	const arrowLeft = document.createElement("img")
	const arrowRight = document.createElement("img")
	banner.appendChild(arrowLeft)
	banner.appendChild(arrowRight)
	arrowLeft.classList.add("arrow", "arrow_left")
	arrowLeft.src = "./assets/images/arrow_left.png"
	arrowLeft.alt = "icone flèche de gauche"
	arrowRight.classList.add("arrow", "arrow_right")
	arrowRight.src = "./assets/images/arrow_right.png"
	arrowRight.alt = "icone flèche de droite"

	// eventListener flèche gauche
	arrowLeft.addEventListener("click", () => {
		// décrémentation index
		i--
		// retour index à 3 si < 0
		if (i < 0) {
			i = slides.length - 1
		}
		// appel fonction carrousel
		carrousel()
	})

	// eventListener flèche droite
	arrowRight.addEventListener("click", () => {
		// incrémentation index
		i++
		// retour index à 0 si > longueur tableau
		if (i > slides.length - 1) {
			i = 0
		}
		// appel fonction carrousel
		carrousel()
	})

	// intégration bullet points
	for (a in slides) {
		const dotsLine = document.querySelector(".dots")
		const dot = document.createElement("span")
		dotsLine.appendChild(dot)
		dot.classList.add("dot")
	}

	// initialisation premier "dot_selected"
	dot = document.querySelector(".dots span")
	dot.classList.add("dot_selected")

	// fonction carrousel
	function carrousel() {
		changeBullet()
		changeImage()
		changeTagLine()
	}

	// fonction changement bullet point sélectionné
	function changeBullet() {
		const dotsList = document.querySelectorAll(".dot")
		dotsList.forEach((dot) => dot.classList.remove("dot_selected"))
		dotsList[i].classList.add("dot_selected")
	}

	// fonction changement image carrousel
	function changeImage() {
		const bannerImg = document.querySelector(".banner-img")
		bannerImg.src = "./assets/images/slideshow/" + slides[i].image
	}

	// fonction changement texte carrousel
	function changeTagLine() {
		const bannerTagLine = document.querySelector("#banner p")
		bannerTagLine.innerHTML = slides[i].tagLine
	}
}