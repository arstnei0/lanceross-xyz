document.getElementById("tooltip").innerHTML = "send me an email";

function getEmail() {
    let email = "zyx.ssorecnal@ecnal";

    let tempInput = document.createElement("INPUT");
    document.body.appendChild(tempInput);
    tempInput.setAttribute("value", email.split("").reverse().join(""));
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    var tooltip = document.getElementById("tooltip");
    document.getElementById("tooltip").innerHTML = "Copied!";
    setTimeout(() => {
        document.getElementById("tooltip").innerHTML = "send me an email";
    }, 2000);
}
