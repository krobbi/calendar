// Return whether a year is a leap year.
function isYearLeap(year) {
	return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

// Test a leap year.
function testLeapYear(year, expected) {
	const isLeapYear = isYearLeap(year);
	
	if (isLeapYear) {
		console.debug(`${year} is a leap year.`);
	} else {
		console.debug(`${year} is not a leap year.`);
	}
	
	if (isLeapYear !== expected) {
		console.error("Test failed.");
	}
}

// Main function.
function main() {
	testLeapYear(1600, true);
	testLeapYear(1900, false);
	testLeapYear(2000, true);
	testLeapYear(2010, false);
	testLeapYear(2012, true);
}

// Call the main function when ready.
(() => {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(main, 1);
	} else {
		document.addEventListener("DOMContentLoaded", main);
	}
})();
