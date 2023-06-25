let zSpacing = -1000,
	lastPosition = zSpacing / 5,
	rootFrames = document.getElementsByClassName('frame'),
	frames = Array.from(rootFrames),
	zVals = []

window.onscroll = function () {
	let top = document.documentElement.scrollTop,
		delta = lastPosition - top

	lastPosition = top

	frames.forEach((n, i) => {
		zVals.push((i * zSpacing) + zSpacing)
		zVals[i] += delta * -5.5
		let frame = frames[i],
			transform = `translateZ(${zVals[i]}px)`,
			opacity = zVals[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	});
}

window.scrollTo(0, 1)