
str = `Hello ${localStorage.getItem('username')} welcome in your page\nyour e-mail is ${localStorage.getItem('useremail')} `;

function innerPage(id , str){
    let obj = document.getElementById(id);
    obj.innerText = str;
}

innerPage('main' ,str);