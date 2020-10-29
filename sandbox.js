$(document).ready(function(){

    var nummbersToMemo = [];
    while (nummbersToMemo.length < 5) {
        var namber = Math.floor(Math.random() * 100) + 1;

        if (!nummbersToMemo.includes(namber)) {
            nummbersToMemo.push(namber);
        }
    }

    console.log(nummbersToMemo);

    $('.square').each(function(i){
        $(this).text(nummbersToMemo[i]);
    })

    setTimeout(function(){
        $('.square').hide();
        $('h2').text('Insert in the log the numbers..');
    }, 5000);


    setTimeout(function(){
        var userNumbers = [];
        for (var i = 0; i < 5; i++) {
            var number = parseInt(prompt('Do you remember those five numbers?'));
            userNumbers.push(number);
        }
    }, 6000);

    console.log(userNumbers);

})
