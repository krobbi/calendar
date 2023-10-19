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

// Test month lengths for a year.
function testMonthLengths(year) {
	console.debug(`In ${year}:`);
	
	for (let i = 0; i < Month.count; i++) {
		console.debug(` * ${Month.names[i]} was ${getMonthLength(year, i)} days long.`);
	}
}

// Main function.
function main() {
	testMonthLengths(1900);
	testMonthLengths(2000);
}

// Call the main function when ready.
(() => {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(main, 1);
	} else {
		document.addEventListener("DOMContentLoaded", main);
	}
})();
