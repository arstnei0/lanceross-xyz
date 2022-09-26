function themeToggle() {
    var SetTheme = document.body;
    SetTheme.classList.toggle("lightmode")
    
    var theme;
    if (SetTheme.classList.contains("lightmode")) {
        theme = "LIGHT";
    } else {
        theme = "DARK";
    }
    localStorage.setItem("PageTheme", JSON.stringify(theme));
}

setInterval(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    if (GetTheme === "LIGHT") {
        document.body.classList = "lightmode";
    } else {
        document.body.classList = "";
    }
});