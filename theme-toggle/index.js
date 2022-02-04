let darkmode = localStorage.getItem("darkMode")

function enabledarkmode {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "enabled");
}