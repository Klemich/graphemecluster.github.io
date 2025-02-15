var origin = document.getElementById("origin");
var target = document.getElementById("target");
function update() {
	target.innerHTML = origin.value.replace(/&/g, "").replace(/</g, "").replace(/>/g, "").split("<br>").map(Converter).join("<br>").replace(//g, "&amp;").replace(//g, "&lt;").replace(//g, "&gt;").replace(/\t/g, "&#9").replace(/\n/g, "&#10");
}
[].forEach.call(document.querySelectorAll("input"), function(element) {
	element.onclick = function(event) {
		Converter[element.id] = element.checked;
		update();
	};
	Converter[element.id] = element.checked;
});
origin.oninput = update;
origin.onscroll = function() {
	if (target.isScrolling) target.isScrolling = false;
	else {
		target.scrollTop = this.scrollTop / this.scrollHeight * target.scrollHeight;
		origin.isScrolling = true;
	}
};
target.onscroll = function() {
	if (origin.isScrolling) origin.isScrolling = false;
	else {
		origin.scrollTop = this.scrollTop / this.scrollHeight * origin.scrollHeight;
		target.isScrolling = true;
	}
};
if (origin.value) update();
