const passInput = document.querySelector('#user-password');
const btnPass = document.querySelector(".show-hide-password");
const passImg = document.querySelector('img');

btnPass.addEventListener('click',function(){
    if(passInput.value === ""){
        return passImg;
    }
    if(passInput.type ==='password'){
        passInput.type = 'text';
        passImg.src = '/Images/hide.png'
    }else{
        passInput.type ='password';
        passImg.src = '/Images/show.png'
    }
})