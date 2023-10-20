// Create an enumeration.
function Enum(...names) {
	const result = {
		count: names.length,
		names: Object.freeze(names),
	};
	
	for (const value in names) {
		result[names[value]] = parseInt(value);
	}
	
	return Object.freeze(result);
}

// A month of a year.
const Month = Enum(
	"JAN",
	"FEB",
	"MAR",
	"APR",
	"MAY",
	"JUN",
	"JUL",
	"AUG",
	"SEP",
	"OCT",
	"NOV",
	"DEC",
);

// Return whether a year is a leap year.
function isYearLeap(year) {
	return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

// Get the length of a month in a year.
function getMonthLength(year, month) {
	switch (month) {
		case Month.APR:
		case Month.JUN:
		case Month.SEP:
		case Month.NOV:
			return 30;
		case Month.FEB:
			return isYearLeap(year) ? 29 : 28;
		default:
			return 31;
	}
}

// Called when the previous button is pressed.
function onPreviousButtonPressed() {
	console.debug("Previous button pressed.");
}

// Called when the next button is pressed.
function onNextButtonPressed() {
	console.debug("Next button pressed.");
}

// Main function. Connect input events to the script.
function main() {
	document.getElementById("previous").addEventListener("click", onPreviousButtonPressed);
	document.getElementById("next").addEventListener("click", onNextButtonPressed);
}

// Call the main function when the document is ready.
if (document.readyState === "complete" || document.readyState === "interactive") {
	setTimeout(main, 1);
} else {
	document.addEventListener("DOMContentLoaded", main);
}
