export default {
	constants: {
		COLORS: [
			"blue",
			"orange",
			"red",
			"green",
			"purple",
			"pink",
			"lime",
			"sky",
			"grey"
		]
	},
	generateItemPosition
}

function generateItemPosition(index, array, field) {
	// if moved to start 
	if (index === 0) {
		return "top";
	}
	// if moved to end 
	else if (index === array.length - 1) {
		return "bottom";
	}

	// moved to middle
	return randomIntFromInterval(
		array[index - 1][field], array[index + 1][field]
	);
}

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
