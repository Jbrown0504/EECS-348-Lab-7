function change_color() {
    var border_r = document.getElementById("border_r").value;
    var border_g = document.getElementById("border_g").value;
    var border_b = document.getElementById("border_b").value;
    var border_width = document.getElementById("border_width").value;
    var background_r = document.getElementById("background_r").value;
    var background_g = document.getElementById("background_g").value;
    var background_b = document.getElementById("background_b").value;

    var paragraph = document.getElementById("paragraph");
    paragraph.style.borderColor = `rgb(${border_r},${border_g},${border_b})`;
    paragraph.style.borderWidth = border_width
    paragraph.style.backgroundColor = `rgb(${background_r},${background_g},${background_b})`;
}