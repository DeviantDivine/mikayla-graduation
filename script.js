let currentQuestion = 0;

const quizQuestions = [
    {
        question: "Where did we first talk?",
        options: ["Anilaw", "UP", "MOA", "NU"],
        answer: "Anilaw"
    },
    {
        question: "Where did I fall for you?",
        options: ["Jakarta", "Sapporo", "Beijing", "Manila"],
        answer: "Sapporo"
    },
    {
        question: "Where did we go on the day I told you my feelings?",
        options: ["SM MOA", "Antipolo", "Andy's House", "UPD"],
        answer: "UPD"
    },
    {
        question: "Where did we NOT go on our first date in the Philippines?",
        options: ["Megamall", "BGC", "Venice Grand Mall", "Cubao"],
        answer: "Cubao"
    },
    {
        question: "Do you like me back?",
        options: ["Yes", "Yes", "Yes", "Yes"],
        answer: "Yes"
    }
];

function nextPage(pageNum){
    document.querySelector(".page.active").classList.remove("active");
    document.getElementById("page"+pageNum).classList.add("active");

    if(pageNum === 2){
        loadQuestion();
    }
}

function loadQuestion(){
    const q = quizQuestions[currentQuestion];
    document.getElementById("questionText").innerText = q.question;

    let answersHTML = "";
    q.options.forEach(option => {
        answersHTML += `
            <button onclick="checkAnswer('${option}')">${option}</button>
        `;
    });

    document.getElementById("answers").innerHTML = answersHTML;
}

function checkAnswer(choice){
    if(choice === quizQuestions[currentQuestion].answer){
        currentQuestion++;

        if(currentQuestion < quizQuestions.length){
            loadQuestion();
        } else {
            nextPage(3);
            showPhoto();
        }
    } else {
        alert("Hmm... try again pretty girl 😌");
    }
}

const photos = [
    "images/snow.jpg",
    "images/cafe.jpg",
    "images/concert.jpg"
];

let currentPhoto = 0;

function showPhoto(){
    document.getElementById("photoReveal").src = photos[currentPhoto];
}

document.getElementById("nextPhotoBtn").addEventListener("click", () => {
    currentPhoto++;

    if(currentPhoto < photos.length){
        showPhoto();
    } else {
        nextPage(4);
    }
});

let power = 0;

document.getElementById("cap").addEventListener("click", () => {
    power += 10;

    document.getElementById("powerBar").style.width = power + "%";

    if(power >= 100){
        document.getElementById("cap").style.transform = "translateY(-300px)";
        
        setTimeout(() => {
            nextPage(5);
            showReason();
        }, 1500);
    }
});

const reasons = [
    "You inspire me to be better everyday",
    "You make me want to be the best version of myself for you",
    "Talking to you is always the highlight of my day",
    "You are a very cool girl who has so many cool things about you",
    "Everyone’s proud of you, not just me"
];

let reasonIndex = 0;

function showReason(){
    document.getElementById("reasonBox").innerText = reasons[reasonIndex];
}

document.getElementById("nextReasonBtn").addEventListener("click", () => {
    reasonIndex++;

    if(reasonIndex < reasons.length){
        showReason();
    } else {
        nextPage(6);
    }
});