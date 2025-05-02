const questions = [
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "NaCl"],
      answer: "H2O"
    },
    {
      question: "Which part of the plant conducts photosynthesis?",
      options: ["Root", "Stem", "Leaf", "Flower"],
      answer: "Leaf"
    },
    {
      question: "Which organ in the human body pumps blood?",
      options: ["Lungs", "Liver", "Brain", "Heart"],
      answer: "Heart"
    },
    {
      question: "What gas do humans need to breathe in to survive?",
      options: ["Carbon Dioxide", "Oxygen", "Hydrogen", "Nitrogen"],
      answer: "Oxygen"
    },
    {
      question: "What is the center of an atom called?",
      options: ["Electron", "Proton", "Neutron", "Nucleus"],
      answer: "Nucleus"
    },
    {
      question: "Which planet is known for having rings?",
      options: ["Mars", "Jupiter", "Saturn", "Venus"],
      answer: "Saturn"
    },
    {
      question: "What force pulls objects toward the Earth?",
      options: ["Magnetism", "Gravity", "Friction", "Electricity"],
      answer: "Gravity"
    },
    {
      question: "Which vitamin is produced when sunlight hits the skin?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      answer: "Vitamin D"
    },
    {
      question: "How many bones are in the adult human body?",
      options: ["206", "210", "198", "250"],
      answer: "206"
    },
    {
      question: "Which is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Quartz"],
      answer: "Diamond"
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

