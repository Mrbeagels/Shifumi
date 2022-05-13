// Je declare mes variables et demande le nom du joueur humain 
const buttons = document.querySelectorAll("button");
const username = prompt("Veuillez indiquer votre nom d'utilisateur...");
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
    sound.play();
    var joueur = buttons[i].innerHTML;
    var robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    var resultat;

    // Logique entiere du jeu
    if (joueur === robot){
        resultat = "Vous avez fait une egalité !";
    } 
    else if((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Feuille" && robot === "Pierre") || (joueur === "Ciseaux" && robot === "Feuille")){
        resultat = " 素晴らしい ! Tu as gagné !!";
        userWin++;
    } 
    else {
        resultat = "BA-BAKA ! Vous avez perdu !";
        botWin++;
    }


    document.querySelector(".resultat").innerHTML = `
    ${username} a choisi : ${joueur}</br>
    La Waifu a choisi : ${robot}</br>
    ${resultat}
    `;
    userScoreDisplay.innerHTML=userWin;
    botScoreDisplay.innerHTML=botWin;

    if(userWin === 10){
        alert(`O/ UwU O/ Bravo ${username} tu remportes la victoire et tu rentre chez toi avec une encyclopedie en 78 volumes des maladies de l'oreille interne! `);
    } 
    else if (botWin === 10){
        alert((`B-BA-BAKKA, j'ai voulu te laisser gagner, mais t'es trop un bakka !`));
    }

    if(userWin === 10 || botWin === 10){
        location.reload();
    }

})
}