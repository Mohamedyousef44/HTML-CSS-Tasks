let user = document.getElementById('user')
let email = document.getElementById('email')
let btn = document.getElementById('btn')

btn.addEventListener('click' , ()=>{
    localStorage.setItem('username' , user.value);
    localStorage.setItem('useremail' , email.value);
})

user.innerText