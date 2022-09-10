function themeToggle() {
    var SetTheme = document.body;
    SetTheme.classList.toggle("lightmode")
    
    var theme;
    if (SetTheme.classList.contains("lightmode")) {
        console.log("Light Mode");
        theme = "LIGHT";
    } else {
        console.log("Dark Mode");
        theme = "DARK";
    }
    localStorage.setItem("PageTheme", JSON.stringify(theme));
}

setInterval(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    console.log(GetTheme);
    if (GetTheme === "LIGHT") {
        document.body.classList = "lightmode";
    } else {
        document.body.classList = "";
    }
}, 5);

