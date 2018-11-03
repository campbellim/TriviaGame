$(document).ready(function() {
    var audio = new Audio('assets/images/Audio.mp3');
    //audio.play();
    var index = 0;
    
	var countdownTimer = {
        time : 40,
		reset: function() {
			this.time = 40;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
            counter = setInterval(countdownTimer.count, 1000);
            audio.play();	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				//index = index +1
				//array[i]
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answer").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'This horror themed video game focuses on a Lovecraftian creature',
	possibleAnswers : ['A. Amnesia the Dark Descent ',
				 'B. Seven Days to Die ',
				 'C.  Call of Cthulhu',
				 'D. Star Wars: The Phantom Menace'],
	flags : [false, false, true, false],
	answer : 'C. Call of Cthulhu'
};

var q2 = {
	question: 'This Blizzard Entertainment game has no story that can be found inside the game',
	possibleAnswers: ['A. World of Warcraft ',
				 'B. Overwatch',
				 'C. League of Legends',
				 'D. Starcraft'],
	flags : [false, true, false, false],
	answer : 'B. Overwatch'
};

var q3 = {
	question : 'The song being played is used in this game series',
	possibleAnswers : ['A. Zelda',
				 'B. Bayonetta ',
				 'C. God of War',
				 'D. Kingdom Hearts'],
	flags : [false, true, false, false],
	answer : 'B. Bayonetta'
};

var q4 = {
	question : 'The game Tomb Raider features which female protagonist?',
	possibleAnswers : ['A. Lara Croft',
				 'B. Princess Zelda',
				 'C. Samus Aran',
				 'D. Bayonetta'],
	flags : [true, false, false, false],
	answer : 'A. Lara Croft'
};

var q5 = {
	question : 'This video game focuses on a man hunting for revenge after his wife and daughter are killed',
	possibleAnswers : ['A. Mario Party',
				 'B. Shadow of Mordor',
				 'C. Legend of Zelda',
				 'D. Prince of Persia'],
	flags : [false, true, false, false],
	answer : 'B. Shadow of Mordor'
};

var q6 = {
	question : 'This game company is known for being more Family Friendly',
	possibleAnswers : ['A. Nintendo',
				 'B. Microsoft',
				 'C. Sony',
				 'D. Bethesda'],
	flags : [true, false, false, false],
	answer : 'A. Nintendo'
};

var q7 = {
	question : 'Consuming this will give you an extra life in Super Mario',
	possibleAnswers : ['A. A Oneup drink',
				 'B. A pumpkin',
				 'C. An oneup Mushroom',
				 'D. A cat'],
	flags : [false, false, true, false],
	answer : 'C. An oneup Mushroom'
};

var q8 = {
	question : 'This game series has never had the main character speak',
	possibleAnswers : ['A. God of War',
				 'B. Legend of Zelda',
				 'C. Final Fantasy',
				 'D. Kingdom Hearts'],
	flags : [false, true, false, false],
	answer : 'B. '
};

var q9 = {
	question : 'This game is supposedly being turned into a horror movie',
	possibleAnswers : ['A. Call of Cthulhu',
				 'B. Amnesia: the Dark Descent',
				 'C. Silent Hill',
				 'D. Five Nights at Freddys'],
	flags : [false, false, false, true],
	answer : 'D. Five Nights at Freddys'
};

var q10 = {
	question : 'This side character is an archealogist',
	possibleAnswers : ['A. Nathan Drake',
				  'B. Liara Tsoni',
				  'C. Lara Croft',
				  'D. Captain Fitzroy'],
	flags : [false, true, false, false],
	answer : 'B. '
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}


function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answer').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	console.log("correct");
}

function answerWrong() {
	wrong++;
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answer').on('click', function() {



 console.log($(this));

 

 if($(this).attr("id")== 'buttonA') {
	 var answerChosen = 'A';
 } else if($(this).attr("id") == 'buttonB') {
 	answerChosen = 'B';
 } else if ($(this).attr("id") == 'buttonC') {
 	answerChosen = 'C';
 } else if ($(this).attr("id") == 'buttonD') {
 	answerChosen = 'D';
 }
 
 
 if ((answerChosen == 'A') && (questionArray[index].flags[0])) {
	 answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answers").hide();
 	showScore();
 }
});



});
