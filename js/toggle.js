function myFunction() {
    var element = document.body;
    element.classList.toggle("dark_mode");

    var btn = document.getElementById("buttonText");
    if (btn.innerHTML === "Lights Off!") {
        btn.innerHTML = "Lights On!";
    }
    else {
        btn.innerHTML = "Lights Off!";
    }
};

