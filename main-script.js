const heading = document.querySelector('h1');
heading.innerText = "Welcome "+sessionStorage.getItem('username');

const btn = document.querySelectorAll('.btn-expand');
const logout = document.querySelector('.logout-btn');

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function(){
        const answer_div = document.querySelectorAll('.answer-block');
        const is_div_contains_answer = answer_div[i].classList.contains('answer');
        if(is_div_contains_answer){
            btn[i].innerHTML = '<i class="bi bi-chevron-down"></i>'
            answer_div[i].classList.remove('answer');
        }
        else{
            btn[i].innerHTML = '<i class="bi bi-chevron-right"></i>';
            answer_div[i].classList.add('answer');
        }
    });
}

logout.addEventListener('click', function(){
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    window.location.href = "./index.html";
})
