// Main function.
function main() {
	console.log("Hello, world!");
}

// Call main function when ready.
(() => {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(main, 1);
	} else {
		document.addEventListener("DOMContentLoaded", main);
	}
})();
