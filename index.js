function checkIfisActive(num){
    if(num.classList.contains('active')){
        num.classList.remove('active');
        num.classList.remove('mark');
    }
}

function changeActive(position){
    for (let i = 1; i <=5; i++) {
        let num = document.getElementById(String(i))
        checkIfisActive(num);
    }

    let num = document.getElementById(String(position));
    
    if(num.classList.contains('active')){
        num.classList.remove('active');
        num.classList.remove('mark');
    }
    else{
        num.className += 'active mark';
    }

    window.mark = position;
}

function submit(){
    firstCard = document.getElementById('firstCard');
    firstCard.classList.remove('card');
    firstCard.classList += 'disable';
    
    secondCard = document.getElementById('submit');
    secondCard.classList.remove('disable');

    document.getElementById('selection').innerHTML = 'You selected ' + mark + ' out of 5'
}