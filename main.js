User_Name=localStorage.getItem("User-Name")
document.getElementById("userName").innerHTML=User_Name;

function Logout() {
    localStorage.removeItem("User-Name")
    window.location="login.html";
}

function Clown() {
    window.location="Clown.html";
}

function Moustache() {
    window.location="Moustache.html";
}