document.getElementById('header-container').style.backgroundColor = 'green';
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'pink';
const h3 = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < h3.length; i++) {
    h3[i].style.backgroundColor = 'purple'
};
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'yellow';
const h32 = document.querySelectorAll('.no-emergency-tasks h3');
for (let j = 0; j < h32.length; j++) {
    h32[j].style.backgroundColor = 'black'
};
document.getElementById('footer-container').style.backgroundColor = 'darkgreen';