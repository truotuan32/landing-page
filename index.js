"use strict"

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const boxes = $$('.box_show')
const mouseHover = $('.mouse-hover')
//			window.addEventListener('scroll', checkBoxes)//

//			checkBoxes()
//
//			function checkBoxes() {
//				const triggerBottom = window.innerHeight / 5 * 4
//				console.log(triggerBottom)
//				boxes.forEach(box => {
//					const boxTop = box.getBoundingClientRect().top
//
//					if(boxTop < triggerBottom) {
//						box.classList.add('show')
//					} else {
//						box.classList.remove('show')
//					}
//				})
//			}

function toggleAnimationElement(element) {
	var rect = element.getClientRects()[0]
	var heightScreen = window.innerHeight || document.documentElement.clientHeight

	//check xem element có trong màn hình k 
	if (!(rect.bottom < 0 || rect.top > heightScreen)) {
		element.classList.add('show')
	}
	else {
		element.classList.remove('show')
	}
}

function checkAnimation() {
	boxes.forEach((itemElement) => {
		toggleAnimationElement(itemElement)
	})
}
window.onscroll = checkAnimation

//header hidden
let height1
window.addEventListener('scroll', function (e) {
	// console.log(window.pageYOffset)
	let height2 = window.pageYOffset
	if (height2 >= height1) {
		$('header').classList.add('header-hidden')
		height1 = height2
	}
	else {
		$('header').classList.remove('header-hidden')
		height1 = height2
	}
});

window.addEventListener('mousemove', function (e) {
	// move result
	let posX = e.clientX
	let posY = e.clientY
	mouseHover.style.cssText = `
					display: block;
					left: ${posX}px;
					top: ${posY}px;
				`
})