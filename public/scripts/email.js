document.getElementById("clicked").innerHTML = "send me an email";

function getEmail() {
    let email = "zyx.ssorecnal@ecnal";

    let tempInput = document.createElement("INPUT");
    document.body.appendChild(tempInput);
    tempInput.setAttribute("value", email.split("").reverse().join(""));
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    let clicked = document.getElementById("clicked");
    document.getElementById("clicked").innerHTML = "copied!";
    setTimeout(() => {
        document.getElementById("clicked").innerHTML = "send me an email";
    }, 2000);
}
