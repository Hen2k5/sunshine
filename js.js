let moon = document.getElementById('moondiv')
let sun = document.getElementById('sundiv')
let f1 = function(){
sun.style.transition = '10s';
sun.style.marginTop = '50px';
sun.style.backgroundColor = 'yellow';
moon.style.marginLeft = '-80px';
moon.style.transition = '13s';
document.body.style.transition = '15s';
document.body.style.backgroundColor = 'white';
}
setTimeout(() => {
    f1()
}, 1000 );