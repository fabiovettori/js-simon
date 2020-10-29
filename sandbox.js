$(document).ready(function(){

    // Settaggi generali gioco
    // Inserire qui il numero di numeri con cui giocare
    var setGameNumbers = 5;
    var memoTime = 5000;

    // genero in html un numero di elementi div corrispondenti al punto di cui sopra
    for (var i = 0; i < setGameNumbers; i++) {
        $('.output').append('<div class="square"></div>');
    }

    // salvo in una variabile dei numeri random pari al numero dei numeri del set di gioco
    var nummbersToMemo = [];
    while (nummbersToMemo.length < setGameNumbers) {
        var namber = Math.floor(Math.random() * 100) + 1;

        if (!nummbersToMemo.includes(namber)) {
            nummbersToMemo.push(namber);
        }
    }

    // console.log(nummbersToMemo);

    // assegno a ciscun elemento html un numero del set gi gioco
    $('.square').each(function(i){
        $(this).text(nummbersToMemo[i]);
    })

    // lascio memorizzare all'utente i numeri gerati quindi li nascondo scaduto il tempo a disosizione
    setTimeout(function(){
        $('.square').hide();
        $('h2').text('Insert in the log the numbers..');
    }, memoTime);


    // chiedo a l'utente di inserire i numeri che ha memorizzato
    setTimeout(function(){
        var userNumbers = [];
        for (var i = 0; i < setGameNumbers; i++) {
            var number = parseInt(prompt('Do you remember those five numbers?'));
            userNumbers.push(number);
        }

        // console.log(userNumbers);

        // verifico che il giocatore abbia indovinato i numeri
        for (var i = 0; i < setGameNumbers; i++) {

            var referee = false;
            if (userNumbers[i] !== nummbersToMemo[i]) {
                referee = true;
            }
        }

        if (!referee) {
            $('h2').text('Hai vinto!');
        } else {
            $('h2').text('Hai perso!');
        }

    }, memoTime);
})
