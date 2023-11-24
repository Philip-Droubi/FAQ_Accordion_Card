let showBtns = document.querySelectorAll(".question button");
let questions = document.querySelectorAll(".question .text");
questions.forEach(q => {
    q.addEventListener('click', (event) => {
        openQuestion(event, q);
    });
});

showBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        openQuestion(event, btn);
    });
});

function openQuestion(event, btn) {
    event.preventDefault();
    if (btn.parentElement.parentElement.classList.contains("closed")) {
        closeAllQuestions(showBtns);
        btn.parentElement.parentElement.classList.remove("closed");
        btn.parentElement.parentElement.classList.add("open");
    } else {
        btn.parentElement.parentElement.classList.add("closed");
        btn.parentElement.parentElement.classList.remove("open");
    }
}

function closeAllQuestions(btns) {
    btns.forEach(btn => {
        btn.parentElement.parentElement.classList.remove("open");
        btn.parentElement.parentElement.classList.add("closed");
    });
    return true
}