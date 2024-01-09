function login() {
    var usernameElement = document.getElementById("username");
    var passwordElement = document.getElementById("password");

    console.log("Username element:", usernameElement);
    console.log("Password element:", passwordElement);

    var username = usernameElement ? usernameElement.value : "ciet";
    var password = passwordElement ? passwordElement.value : "ciet@123";

    console.log("Username:", username);
    console.log("Password:", password);

    if (username == "ciet" && password == "ciet@123") {
        // Redirect to the second HTML file
        window.location.href = 'login.html';
        return false; // Prevents the form from submitting
    } else {
        alert("Invalid username or password");
        return false; // Prevents the form from submitting
    }
}
function profile()
{
    var submit = document.getElementById("submit");
        window.location.href = 'studentprofile.html';
        
}
function admin(){
    var admin = document.getElementById("submit");
        window.location.href = 'admin.html';
}
function home(){
    var home = document.getElementById("home");
    var admin = document.getElementById("admin");
     window.location.href = 'event.html'; 
     }
function sports(){
    var sports = document.getElementById("sports");
        window.location.href = 'sports.html';
}
function culturals(){
    var cultural = document.getElementById("cultural");
        window.location.href = 'culturals.html';
}
function achievement(){
    var achieve = document.getElementById("achieve");
        window.location.href = 'achievement.html';
}
function upcoming(){
    var upcome = document.getElementById("upcome");
        window.location.href = 'upcoming.html';
}
function house()
{
    var btn=document.getElementById("btn")
    window.location.href='event.html'
    var btn1=document.getElementById("btn1")
    window.location.href='event.html'
    var btn2=document.getElementById("btn2")
    window.location.href='event.html'
    var btn3=document.getElementById("btn3")
    window.location.href='event.html'
}
function del(button)
{
var row=button.childNode.childtNode
row.childNode.removeChild(row)

}
function reset()
{
    var reset=document.getElementById("reset")
    window.location.href='event.html'
}



