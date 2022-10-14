const rows = 8;
const columns = 8;
let cells = [];
let cellWidth;
let cellHeight;

function setup() {
	createCanvas(400, 400);

	for (let r = 0; r < rows; r++) {
		cells[r] = [];
		for (let c = 0; c < columns; c++) {
			cells[r][c] = 0;
		}
	}

	// disable context menu
	for (let element of document.getElementsByClassName("p5Canvas")) {
		element.addEventListener("contextmenu", (e) => e.preventDefault());
	}

	delBtn = createButton("Remove Cells");
	delBtn.mousePressed(removeCells);

	colorMode(HSL);
}

function draw() {
	cellWidth = width / columns;
	cellHeight = height / rows;
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < columns; c++) {
			cells[r][c] = constrain(cells[r][c], 0, 100);

			const y = height * (r / rows);
			const x = width * (c / columns);
			fill(200, cells[r][c], 50);
			rect(x, y, cellWidth, height);
		}
	}
}

function mouseDragged() {
	if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
		const mouseR = floor(rows * (mouseY / height));
		const mouseC = floor(columns * (mouseX / width));
		cells[mouseR][mouseC] = 100;
	}
}

// remove cell on right click
function mousePressed() {
	if (mouseButton === RIGHT) {
		if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
			const mouseR = floor(rows * (mouseY / height));
			const mouseC = floor(columns * (mouseX / width));
			cells[mouseR][mouseC] = 0;
		}
	}
}

function removeCells() {
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < columns; c++) {
			cells[r][c] = 0;
		}
	}
}
