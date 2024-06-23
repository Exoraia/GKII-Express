const wrapper = document.querySelector('.wrapper');
const wrp = document.querySelector('.wrp');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginButton = document.querySelector('#login-button');


btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

btnPopup.addEventListener('click', ()=> {
    wrp.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrp.classList.remove('active-popup');
});

loginButton.addEventListener('click', ()=> {
    var http = new XMLHttpRequest();
    http.open('POST', '/api/v1/auth', true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
        console.log(http.response);
        console.log(http.response['token']);
        document.cookie='accessToken='+ http.response['token'];
        window.location.replace('/admin');
        }
    }
    var params = 'username=user1&password=password1'; 
    http.send(params);
});