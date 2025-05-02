const questions = [
    {
      question: "What is the value of π (pi) up to two decimal places?",
      options: ["3.12", "3.14", "3.16", "3.18"],
      answer: "3.14"
    },
    {
      question: "What is the square root of 144?",
      options: ["10", "11", "12", "13"],
      answer: "12"
    },
    {
      question: "What is 15% of 200?",
      options: ["25", "30", "35", "40"],
      answer: "30"
    },
    {
      question: "Solve: 9 + 6 ÷ 3",
      options: ["5", "11", "15", "7"],
      answer: "11"
    },
    {
      question: "What is 7 squared?",
      options: ["14", "21", "49", "77"],
      answer: "49"
    },
    {
      question: "What is the perimeter of a square with side 8 cm?",
      options: ["16 cm", "24 cm", "32 cm", "64 cm"],
      answer: "32 cm"
    },
    {
      question: "What is the area of a rectangle with length 10 cm and width 5 cm?",
      options: ["50 cm²", "25 cm²", "15 cm²", "100 cm²"],
      answer: "50 cm²"
    },
    {
      question: "Which number is a prime number?",
      options: ["4", "6", "9", "7"],
      answer: "7"
    },
    {
      question: "What is the next number in the sequence: 2, 4, 8, 16, ___?",
      options: ["20", "24", "30", "32"],
      answer: "32"
    },
    {
      question: "How many degrees are in a right angle?",
      options: ["45°", "90°", "120°", "180°"],
      answer: "90°"
    }
  ];
  

  
let qbox = document.getElementById('qbox');
let score = 0;


questions.map(function(q,i){
   displayQuestions(q,i);
})


function displayQuestions(q,i){
   let div = document.createElement('div');
   div.innerHTML = `
      <h3>${q.question}</h3>
      <div>
        <button class="${i}" >${q.options[0]}</button>
        <button class="${i}" >${q.options[1]}</button>
        <button class="${i}" >${q.options[2]}</button>
        <button class="${i}" >${q.options[3]}</button>
      </div>
   `
   qbox.appendChild(div);

   let buttons = document.getElementsByClassName(i);
   for(let button of buttons){
        button.addEventListener('click',function(e){
            if(e.target.innerHTML == q.answer){
                button.style.background = 'lawngreen';
                score++;
            }
            else{
                button.style.background = 'pink';
            }
            for(let button of buttons){
                button.disabled = true;
            }
        })
   }

}

function submit(){
    alert(`Your score is ${score}`);
}

