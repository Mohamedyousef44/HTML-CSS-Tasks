let btn = document.getElementById('btn');
let para = document.getElementById('main');

btn.addEventListener('click',getLocation);

function getLocation(){
    if(navigator.geolocation){
       // navigator.geolocation.getCurrentPosition(showPosition , showError , options);
        navigator.geolocation.watchPosition(showPosition);
    }else{
        para.innerText = 'geolocation not supported in your browser';
    }
}

function showPosition(p){
    let long = p.coords.longitude;
    let lat = p.coords.latitude;
    let acc = p.coords.accuracy
    para.innerText = `longtiude: ${long}\nlatitude: ${lat}\naccuracy:${acc}`;
    location.assign("http://maps.google.com/maps?q" + lat + ",+" + long);
}

function showError(error){

    switch(error.code){
        case 0 :
            para.innerText = error.message ;
            break;
        case 1 :
            para.innerText = error.message ;
            break;
        case 2 :
            para.innerText = error.message ;
            break;
        case 3 :
            para.innerText = error.message ;
            break;
    }

}

let options = {
    timeout:0 
}