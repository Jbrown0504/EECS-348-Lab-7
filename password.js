function validate() {
    var ps1 = document.getElementById("password1").value;
    var ps2 = document.getElementById("password2").value;


    if (ps1.length < 8) {
        alert("The length of the first password is less than 8 letters!")
    } else if (ps1 != ps2) {
        alert("The two passwords don't match!")
    } else {
        alert("Everything is good!")
    }
}

