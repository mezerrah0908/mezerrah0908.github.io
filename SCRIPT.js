window.addEventListener("load", function(){


    document.querySelectorAll('.progress-bar').forEach(bar => {

        let width = bar.getAttribute('data-width');

        setTimeout(() => {

            bar.style.width = width;

        },300);

    });



    $('.formation-item').click(function(){

        $(this).find('p').slideToggle();

    });



    $('#topBtn').click(function(){

        $('html, body').animate({

            scrollTop:0

        },800);

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

});