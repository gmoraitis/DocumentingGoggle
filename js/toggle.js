
function myFunction() {
    // variables
    var btn = document.getElementById("myButton");
    var title = document.getElementById("myTitle");
 

    if (btn.innerHTML === "Lights Off!") {
        btn.innerHTML = "Lights On!";
        btn.classList.add("text-warning");
        body.classList.remove("bg-white");
        body.classList.add("bg-dark");
        title.classList.add("text-danger");
    }
    else {
        btn.innerHTML = "Lights Off!";
        body.classList.add("bg-white");
        btn.classList.remove('text-warning');
        title.classList.remove("text-danger");

    }
};




