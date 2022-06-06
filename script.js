const register = (event) => {
    event.preventDefault();

    document.getElementById("form").style.display = "none";
    document.getElementById("success").style.display = "flex";
}

const back = (event) => {
    event.preventDefault();

    document.getElementById("form").style.display = "flex";
    document.getElementById("success").style.display = "none";
}
