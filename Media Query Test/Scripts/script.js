//function to display send button when required fields are not blank
function validateContactForm(){
    if(document.getElementById('first-name-query').value.length > 0 &&
    document.getElementById('last-name-query').value.length > 0 &&
    document.getElementById('phone-query').value.length > 0 &&
    document.getElementById('email-query').value.length > 0){
        document.getElementById('contact-form-button').style.visibility = "visible";
    }else{
        document.getElementById('contact-form-button').style.visibility = "hidden";
    }
}
//set interval to continuously check for contact form validation
setInterval(validateContactForm, 1);

function showContact(){
    document.getElementById('rectangle-wrapper').style.display = "none";
    document.getElementById('contact-wrapper').style.display = "table";
    document.getElementById('active-tab').innerHTML = "Contact";
    document.getElementById('active-tab').style.visibility = "visible";
    document.getElementById('divider').style.visibility = "visible";
}

function goHome(){
    document.getElementById('contact-wrapper').style.display = "none";
    document.getElementById('about-wrapper').style.display = "none";
    document.getElementById('portfolio-wrapper').style.display = "none";
    document.getElementById('divider').style.visibility = "hidden";
    document.getElementById('active-tab').style.visibility = "hidden";
    document.getElementById('rectangle-wrapper').style.display = "table"

}
function goAbout(){
    document.getElementById('rectangle-wrapper').style.display = "none";
    document.getElementById('about-wrapper').style.display = "table";
    document.getElementById('active-tab').innerHTML = "About";
    document.getElementById('active-tab').style.visibility = "visible";
    document.getElementById('divider').style.visibility = "visible";
}

function goPortfolio(){
    document.getElementById('rectangle-wrapper').style.display = "none";
    document.getElementById('about-wrapper').style.display = "none";
    document.getElementById('portfolio-wrapper').style.display = "table";
    document.getElementById('active-tab').innerHTML = "Portfolio";
    document.getElementById('active-tab').style.visibility = "visible";
    document.getElementById('divider').style.visibility = "visible";
}

function validateEmail (){
    if(document.getElementById('email-signup').value.length > 2){
        document.getElementById('email-signup-button').style.visibility = "visible";
    }else{
        document.getElementById('email-signup-button').style.visibility = "hidden"
    }
}

function midnight(){
    document.getElementById('header').style.backgroundColor = "white";
    document.getElementById('rectangle-wrapper').style.backgroundColor = "white";
    document.getElementById('top-name').style.color = "black";
    document.getElementById('footer-link-one').style.color = "black";
    document.getElementById('footer-link-two').style.color = "black";
    document.getElementById('footer-link-three').style.color = "black";
    document.getElementById('rectangle-one').style.backgroundColor = "black";
    document.getElementById('rectangle-two').style.backgroundColor = "black";
    document.getElementById('rectangle-three').style.backgroundColor = "black";
    document.getElementById('rectangle-four').style.backgroundColor = "black";
    document.getElementById('rectangle-five').style.backgroundColor = "black";
    document.getElementById('label-one').style.color = "white";
    document.getElementById('label-two').style.color = "white";
    document.getElementById('label-three').style.color = "white";
    document.getElementById('label-four').style.color = "white";
    document.getElementById('label-five').style.color = "white";

}
setInterval(validateEmail, 1);