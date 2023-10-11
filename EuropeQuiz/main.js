const map = document.getElementById('map');
let paths = map.querySelectorAll('path');

let input = document.getElementById('input');

let countryID = [];
let countryName = [];
paths.forEach(e => {
    countryID.push(e.getAttribute('id'));
    let country = e.getAttribute('name').toLocaleLowerCase();
    e.setAttribute('name', `${country}`);
    countryName.push(country);
});


let correctAnswers = 0;
let totalCountries = countryName.length;

const counter = document.getElementById('counter');
counter.innerHTML = `${correctAnswers} / ${totalCountries}`;

input.addEventListener('keyup', () => {
        let guess = (input.value).toLocaleLowerCase();
        
        if(countryName.includes(guess)) {
            correctAnswers++;

            if(correctAnswers < 44) {
                let audio = new Audio('ping.mp3');
                audio.play();
            }

            document.querySelector(`[name="${guess}"]`).style.fill = "green";
            countryName = countryName.filter(e => e !== `${guess}`); // Removes the correct answer from the array
            
            input.value = '';
            counter.innerHTML = `${correctAnswers} / ${totalCountries}`;
        }
        if(correctAnswers === totalCountries) {
            let audio = new Audio('victory.mp3');
            audio.play();
            const youWin = document.getElementsByClassName('you-win');
            youWin[0].style.display = 'flex';
            counter.style.display = 'none';
            map.style.display = 'none';
        }
});

