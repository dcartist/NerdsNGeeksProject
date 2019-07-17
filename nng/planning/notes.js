var questNumber = document.querySelector('#questNumber')
var answer1 = document.querySelector('#answer1')
var answer2 = document.querySelector('#answer2')
var answer3 = document.querySelector('#answer3')
var quizInput = document.querySelectorAll('.quizInput')
var activeQuestion = document.querySelector('#activeQuestion');
var quizForm = document.querySelector('#quizForm')
var mainQuiz = document.querySelectorAll('.mainQuiz')
var questCounter = 0 //counts the amount of questions
var scoreNum = 0
var score = document.querySelector('#score')
score.innerHTML = 0 // shows the number at the beginning of the Quiz
questNumber.innerHTML = "This is another test"
var mainQList = [] // Main list of questions
var questionsAsked = []
var starter = document.querySelector('#start')
var startPanel = document.querySelector(".start")
var showAnswer = document.querySelector('.answers')
var answerText = document.querySelector('.answerText')
var keepGoing = document.querySelector('.keepGoing')
var submitButton = document.querySelector('.submitButton')
var theEnd = document.querySelectorAll('.theEnd') // the ending

keepGoing.addEventListener("click", function(evt) {
    evt.preventDefault;
    questCounter += 1
    endGame(questCounter)
    showAnswer.style.display = "none"
        // submitButton.style.display = "block"
    submitButton.style.visibility = "visible"
    clearTheQuiz()
    displayQuiz()
    return questCounter
})

//Beginning panel
starter.addEventListener("click", function(evt) {
    evt.preventDefault();
    startPanel.style.display = "none"
    mainQuiz[0].style.display = "block"
    mainQuiz[1].style.display = "block"
    displayQuiz()
})

class QuestionMaker {
    constructor(question, option1, option2, option3, realAnswer, score) {
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.realAnswer = realAnswer;
        this.score = score;
    }
}
//questions listed
mainQList[0] = new QuestionMaker('Where does Spongebob Squarepants work?', 'The Krusty Krab', 'Red Lobster', 'The Chum Bucket', 'Krusty Crab', 20)
mainQList[1] = new QuestionMaker('Who was the captain of the Enterprise in the pilot episode of Star Trek?', 'Captain Kirk', 'Captain Pike', 'Captian Jones', 'Captain Pike', 45)
mainQList[2] = new QuestionMaker('In the arcade game Joust, the player controls a knight riding what animal?', 'Camel', 'Ostrich', 'Horse', 'Ostrich', 30)
mainQList[3] = new QuestionMaker('The Connecticut Leather Company later became what toy company that was popular in the 1980s for its Cabbage Patch Kids and video game consoles?', 'Cole', 'LeCo', 'Coleco', 'Coleco', 60)
mainQList[4] = new QuestionMaker('What now retired NBA player starred in the 1996 movie Kazaam', 'Sinbad', 'Shaquille O’Neal', 'Micheal Jordan', 'Shaquille', 25)
mainQList[5] = new QuestionMaker('The first person shooter video game DOOM was first released in what year?', '1991', '1993', '1992', '1993', 120)
mainQList[6] = new QuestionMaker('Appearing on the show in 1982, who was the youngest person to ever host Saturday Night Live?', 'Jodi Foster', 'Drew Barrymore', 'Brooke Shields', 'Drew Barrymore', 35)
mainQList[7] = new QuestionMaker('What was the first publicly traded U.S. company to reach a $1 trillion market cap? ', 'Microsoft', 'Facebook', 'Apple', 'Apple', 25)
mainQList[8] = new QuestionMaker('In what year did Nintendo release its first game console in North America?', '1985', '1986', '1987', '1985', 35)
mainQList[9] = new QuestionMaker('What heavy metal element was once known as quicksilver?', 'Iron', 'Mercury', 'Nickel', 'Mercury', 30)
mainQList[10] = new QuestionMaker('Orson Welles provided the voice for which Transformer in “The Transformers: The Movie” released in 1986?', 'Unicron', 'Galvatron', 'Optimus Prime', 'Unicron', 40)
mainQList[11] = new QuestionMaker('What is the most abundant chemical element in the Universe?', 'Hydrogen', 'Oxygen', 'Carbon', 'Hydrogen', 30)
mainQList[12] = new QuestionMaker('What was the name of the Eminem single that set the world’s record in 2013 for the most words used in a song?', 'Berzerk', 'Loose Yourself', 'Rap God', 'Rap God', 30)
mainQList[13] = new QuestionMaker('The Star Trek episode "Mirror, Mirror" has certain members of the crew switch places with their counterparts in an alternate, or mirror, universe. Which of these characters did not switch places?', 'Spock', 'Uhura', 'Scotty', 'Spock', 20)
mainQList[14] = new QuestionMaker('In which film was the spaceship called Nostromo?', '2001: A Space Odyssey', 'Alien', 'Spaceballs', 'Alien', 230)
mainQList[15] = new QuestionMaker('What is the registry number for the star ship Enterprise in the original series?', 'NCC-1401', 'NCC-1610', 'NCC-1701', 'NCC-1701', 30)
mainQList[16] = new QuestionMaker("What is Captain Kirk's middle name?", 'Tiberius', 'Titus', 'Thaddeus', 'Tiberius', 125)
mainQList[17] = new QuestionMaker('Which of the following is not a name used to describe the stable wormhole on "Deep Space Nine"?', 'The Passageway', 'The Galactic Vortex', 'The Eye of the Universe', 'The Galactic Vortex', 30)
mainQList[18] = new QuestionMaker('Head of Scientific Research at UNIT, this cunning lady has met The Doctor multiple times. She helped him deal with small black cubes, the Zygons and even the terrifying Daleks', 'River Song', 'Clara Oswald', 'Kate Stewart', 'Kate Stewart', 30)
mainQList[19] = new QuestionMaker('Who is the author of the book “A Brief History of Time”?', 'Stephen Hawking', 'Michio Kaku', 'Lawrence M. Krauss', 'Stephen Hawking', 35)
mainQList[20] = new QuestionMaker('Leonard Nimoy  provided the voice for which Transformer in “The Transformers: The Movie” released in 1986?', 'Unicron', 'Galvatron', 'Optimus Prime', 'Galvatron', 40)
mainQList[21] = new QuestionMaker('In the Harry Potter series, what is the name of Harry’s pet owl? ', 'Norbert', 'Fawkes', 'Hedwig', 'Hedwig', 30)
mainQList[22] = new QuestionMaker('Which video game studio created the popular online game Fortnite?', 'Sony', 'Epic Games', 'Bethesda', 'Epic Games', 30)
mainQList[23] = new QuestionMaker('In 1975 an engineer created the first electronic camera while working for what company?', 'Kodak', 'Canon', 'Nikon', 'Kodak', 30)
mainQList[24] = new QuestionMaker('What British lead singer was born Farrokh Bulsara?', 'M.I.A.', 'Freddie Mercury', 'Zayn Malik', 'Freddie Mercury', 140)
mainQList[25] = new QuestionMaker('How many members were in the American rock band The White Stripes?', '3', '4', '2', '2', 20)
mainQList[26] = new QuestionMaker('Who wrote “Waiting for Godot”?', 'William Butler Yeats', 'Oscar Wilde', 'Samuel Beckett', 'Samuel Beckett', 20)
mainQList[27] = new QuestionMaker('What gives red blood cells their color?', 'Hemolysis', 'Hemolin', 'Hemoglobin', 'Hemoglobin', 80)
mainQList[28] = new QuestionMaker('Which of the following names did the Daleks refer to the Doctor as?', 'The Oncoming Storm', 'Hurricane Doctor', 'The Upcoming Storm', 'The Oncoming Storm', 40)
mainQList[29] = new QuestionMaker('Richard Horvitz, who provided the voice of Zim, did NOT have a role in which of the following shows?', 'Grim & Evil', 'Rugrats', 'Power Rangers', 'Rugrats', 40)
mainQList[30] = new QuestionMaker('What year was "The Empire Strikes Back" first released into theaters?', '1977', '1980', '1983', '1980', 40)
mainQList[31] = new QuestionMaker('On Invader Zim in the episode "The Nightmare Begins" what song does GIR sing, on the way to Earth?', 'The Taco Song', 'The Waffles song', 'The Doom song', 'The Doom song', 140)
mainQList[32] = new QuestionMaker('In the human body, what is the hallux?', 'Index Finger', 'Big Toe', 'Belly Button', 'Big Toe', 70)

//shuffle from https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        questionsAsked.push(array[currentIndex])
    }
};

shuffle(mainQList)



function clearTheQuiz() {
    quizInput[0].checked = false
    quizInput[1].checked = false
    quizInput[2].checked = false
    newQuestion = questionsAsked[questCounter]
        // displayQuiz()
}

function displayQuiz() {
    newQuestion = questionsAsked[questCounter]
    activeQuestion.innerHTML = questionsAsked[questCounter].question
    questNumber.innerHTML = `${questCounter + 1}`
    answer1.innerHTML = questionsAsked[questCounter].option1
    answer2.innerHTML = questionsAsked[questCounter].option2
    answer3.innerHTML = questionsAsked[questCounter].option3
    quizInput[0].value = questionsAsked[questCounter].option1
    quizInput[1].value = questionsAsked[questCounter].option2
    quizInput[2].value = questionsAsked[questCounter].option3
}


function scoring(updatedScore) {
    scoreNum += updatedScore
    score.innerHTML = scoreNum
    return scoreNum
}
//ends the game and redirects to thank you page
function endGame(questCounter) {

    if (questCounter > 9) {
        // window.alert('done')
        mainQuiz[0].style.display = "none"
        mainQuiz[1].style.display = "none"
        document.body.style.backgroundColor = "black"
        theEnd[0].style.display = "block"
        theEnd[1].style.display = "block"
        document.body.classList.remove("designerBack")
        document.body.className = "mainBackground"
        console.log('done')
            // window.location.href = "thankyou.html"
    }
}
// console.log(questionsAsked)

function showtheAnswer(questCounter) {
    showAnswer.style.display = "block"
    answerText.innerHTML = questionsAsked[questCounter].realAnswer
}

let newQuestion = questionsAsked[questCounter]
quizForm.addEventListener("submit", function(evt) {
    // let counter = 1;
    evt.preventDefault();
    submitButton.style.visibility = "hidden"

    if (quizInput[0].checked && quizInput[0].value == questionsAsked[questCounter].realAnswer) {
        console.log(`${questionsAsked[questCounter].realAnswer} value 3 is stated`)
        showtheAnswer(questCounter)
            // submitButton.className += " disabled"
        scoring(questionsAsked[questCounter].score)

    } else if (quizInput[1].checked && quizInput[1].value == questionsAsked[questCounter].realAnswer) {
        console.log(`${questionsAsked[questCounter].realAnswer} value 3 is stated`)
        showtheAnswer(questCounter)
        console.log(questCounter) // testing to see if counter works
        scoring(questionsAsked[questCounter].score)
    } else if (quizInput[2].checked && quizInput[2].value == questionsAsked[questCounter].realAnswer) {
        console.log(`${questionsAsked[questCounter].realAnswer} value 3 is stated`)

        console.log(quizInput[2])
            // quizInput[2].className = "quizInput correct"
        showtheAnswer(questCounter)
        console.log(questCounter)   // testing to see if counter works
        scoring(questionsAsked[questCounter].score)
    } else {
        showtheAnswer(questCounter)
    }
    newQuestion = questionsAsked[questCounter]

})