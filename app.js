const quizDB = [
    {
    question: "Q1:Which of these elements in HTML can be used for making a text bold?",
    a: "<a>",
    b: "<pre>",
    c: "<br>",
    d: "<b>",
    ans: "ans4"
},
{
    question: "HTML is the standard ____language for creating Web pages.",
    a: "scripting",
    b: "programming",
    c: "styling",
    d: "markup",
    ans: "ans4"
},
{
    question: "Which is the correct syntax to include comment in an HTML document?",
    a: "//",
    b: "/* Comment */",
    c: "// Comment //",
    d: "<!-- Comment -->",
    ans: "ans4"
},
{
    question: "Which element/tag defines a paragraph?",
    a: "<p>",
    b: "<pre>",
    c: "<panel>",
    d: "None of the above",
    ans: "ans1"
},
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')

const showScore = document.querySelector('#showScore')

let questionCount = 0;
let score = 0;

function loadQuestion () {
    
    const questionList = quizDB[questionCount]

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
} 

loadQuestion();

function getCheckAnswer()  {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }   
    })
    return answer;
}

function deselectAll() {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

function timer(){
    let timer = document.querySelector('.timer ');
    let comp = false;
    let time = setTimeout(clearInterval,5000,  
        setInterval(()=>{
          console.log("click") 
    },500))
    console.log("time khtm",time)
}
timer();

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer){
        if(checkedAnswer === quizDB[questionCount].ans){
             score++;
             questionCount++;
            deselectAll();
        }
        else{
            questionCount++;
            deselectAll();
        }
        if(questionCount < quizDB.length){
            loadQuestion();
        }
        else{
              showScore.innerHTML = `
            <h3> You score ${score}/${quizDB.length}</h3>
            <button class = "btn" onclick="location.reload()">PLAY AGAIN</button> 
            `;
    
            showScore.classList.remove('scoreArea');
        }
    }
    else if(!checkedAnswer){
        alert("PLease select an option")
    }
  
})