function addUser() {

    PlayerName1 = document.getElementById("playerName1").value;
    PlayerName2 = document.getElementById("playerName2").value;

    localStorage.setItem("player1", PlayerName1);
    localStorage.setItem("player2", PlayerName2);
    sampleN1 = "Player1";
    sampleN2 = "Player2";

    if(PlayerName1==""){
        localStorage.setItem("player1", sampleN1);
    }
    if(PlayerName2==""){
        localStorage.setItem("player2", sampleN2);
    }

    window.location = "game_page.html";
    
}