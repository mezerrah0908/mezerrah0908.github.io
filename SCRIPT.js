$(document).ready(function(){

    $('.progress-bar').each(function(){

        let width = $(this).attr('data-width');

        $(this).css("width","0%");

        $(this).animate({

            width: width

        },2000);

    });



    $('.formation-item').click(function(){

        $(this).find('p').slideToggle();

    });



    $('#topBtn').click(function(){

        $('html, body').animate({

            scrollTop:0

        },800);

    });

});



const text = "Développeur Web & Étudiant SINF";

let i = 0;

function typing(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,100);

    }

}

typing();
