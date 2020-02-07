//choose random div for put the key
let randChest = Math.floor(Math.random() * 3);
let chooseChest = (myRand) => {
    for(let i = 0; i<=$('.chest').length; i++){
        if(i === myRand){
            $($($('.chest'))[i]).append("<div class='key'></div>")
        }
    };
};
chooseChest(randChest);

//check if some of chest have key inside
$('.chest').each(function(){
    $(this).on('click', function(){
        if(!$(this).is(':empty')){

            if($('.title').children().length === 0){
                $('.title').addClass('win');
                $('.title').html("<h2>YOU WIN!</h2>");
            };

            $('.key').animate({ opacity: 1, top: 0}, 900);
        }else{

            if($('.title').children().length === 0){
                $('.title').addClass('lose');
                $('.title').html("<h2>YOU LOSE!</h2>");
            };

            $('.key').animate({ opacity: 1, top: 0}, 900);
        };
    });
});
// reset game
$('.try_again').on('click', function(){
    $('.chest').empty();
    $('.title').empty().removeClass('win');
    randChest = Math.floor(Math.random() * 3);
    chooseChest(randChest);
});