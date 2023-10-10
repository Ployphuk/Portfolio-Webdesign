window.onload = loginLoad;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


const firstname = urlParams.get('firstname')
const lastname = urlParams.get('lastname')
const gender = urlParams.get('gender')
const bday = urlParams.get('bday')
const email = urlParams.get('email')
const password1 = urlParams.get('password1')

const username = urlParams.get('username')
const password = urlParams.get('password')

function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){

	var usernameInput = document.forms["myLogin"]["username"].value;
	var passwordInput = document.forms["myLogin"]["password"].value;

	if(usernameInput == username){
		if(passwordInput == password){
			alert("Login Successful");
		}
		else{
			alert("Wrong password");
			return false;
		}
	}
	else{
		alert("No username in the system");
		return false;
	}
}	