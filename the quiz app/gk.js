const questions = [
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      question: "Who wrote the national anthem of India?",
      options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Mahatma Gandhi", "Subhas Chandra Bose"],
      answer: "Rabindranath Tagore"
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Perth", "Canberra"],
      answer: "Canberra"
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: "Carbon Dioxide"
    },
    {
      question: "Who was the first man to step on the moon?",
      options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
      answer: "Neil Armstrong"
    },
    {
      question: "Which country is famous for the Great Wall?",
      options: ["India", "China", "Japan", "South Korea"],
      answer: "China"
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yuan", "Won", "Yen", "Ringgit"],
      answer: "Yen"
    },
    {
      question: "Which is the largest ocean on Earth?",
      options: ["Indian Ocean", "Arctic Ocean", "Pacific Ocean", "Atlantic Ocean"],
      answer: "Pacific Ocean"
    },
    {
      question: "What is the boiling point of water?",
      options: ["90°C", "100°C", "110°C", "120°C"],
      answer: "100°C"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      answer: "Leonardo da Vinci"
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

