// Je declare mes variables et demande le nom du joueur humain 
const stone = document.querySelector('buttonStone');
const leaf = document.querySelector('buttonLeaf');
const scissor = document.querySelector('buttonScissor')
const buttons = document.querySelectorAll("button");
const username = prompt("Vous allez commencer une partie de shifumi ! Le premier a dix point gagne, bonne chance ! Veuillez indiquer votre nom d'utilisateur...");
var userScoreDisplay = document.getElementById('userScore');
var botScoreDisplay = document.getElementById('botScore');
var userWin = 0;
var botWin = 0;
var sound = new Audio ("public/assets/sound/cute-uwu.mp3");

document.onclick = function() {
    
}


// Ici je recupere le choix du joueurs humain au click sur un bouton et je donne une valeur random au bot avec Math.floor et math.random

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function() {
    var joueur = buttons[i].innerHTML;
    var robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    var resultat;

    // Logique entiere du jeu
    if (joueur === robot){
        resultat = "Vous avez fait une egalité !";
    } 
    else if((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Feuille" && robot === "Pierre") || (joueur === "Ciseaux" && robot === "Feuille")){
        resultat = "Tu as gagné !!";
        userWin++;
    } 
    else {
        resultat = "Vous avez perdu !";
        botWin++;
    }


    document.querySelector(".resultat").innerHTML = `
    ${username} a choisi : ${joueur}</br>
    l'adversaire a choisi : ${robot}</br>
    ${resultat}
    `;
    userScoreDisplay.innerHTML=userWin;
    botScoreDisplay.innerHTML=botWin;

    if(userWin === 10){
        alert(` Bravo ${username} tu remportes la victoire ! La chance est de ton coté. Clique sur OK pour rejouer !`);
    } 
    else if (botWin === 10){
        alert((`Pas de chance cette fois-ci ! l'adversaire remporte la victoire. Clique sur OK pour rejouer !`));
    }

    if(userWin === 10 || botWin === 10){
        sound.play();
        location.reload();
        
    }

})
}