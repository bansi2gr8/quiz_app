var readlinesync=require("readline-sync");
var score=0;
var username=readlinesync.question("whats your name? ");
console.log("welcome " + username + " to do know Bansi? ");

function play (question,answer){
  var userans=readlinesync.question(question);
  if (userans.toUpperCase()===answer.toUpperCase()){
    console.log("your right");
    score=score+1
  }else{
    console.log("your wrong")
  }

  console.log("current score",score);
  console.log("_____")
}

var highScore=[{
  'name' : 'Ansh gupta',
  'score':3
}]

var questions=[{
  question:"Where do i live? ",
  answer:"Delhi"
},{
  question:"Where do i work? ",
  answer:"microsoft"
},{
  question:"Who is my fav. hero?",
  answer: "Govinda"
},{
  question: "Who is my fav. singer?",
  answer : "Sonu nigam"
},{
  question: "How much member in my family",
  answer: "5"
}];
for (var i=0;i<questions.length;i++){
  var currentquestion=questions[i];
  play(currentquestion.question,currentquestion.answer)
}
console.log("yaa, you scored",score);


if (score < highScore[0].score){
  console.log("your score is less than to sunny ")
}
else if(score == highScore[0].score){
  console.log("your score is equal to  sunny ")
}
  
else{
    
    console.log("your score is greather than to sunny ")
}

