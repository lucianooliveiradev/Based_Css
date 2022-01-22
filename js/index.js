
// var data = 'https://www.google.com.br/maps/@-19.8853449,-43.9856367,14z'

// var url = data.url + "&output=embed";
// window.location.replace(url);
// console.log(url)


$('.abrir-modal').click(function () {

    // $('.modal-1').addClass('active-1');
    $(".modal-1").toggleClass('active-1');

    var condicao = $('.modal-1').hasClass('active-1');

    if (condicao) {
        $('.abrir-modal').text('Fechar Div')
    } else {
        $('.abrir-modal').text('Abrir Div')
    }
});


$(window).scroll(function () {
    var windowTop = $(this).scrollTop();
    $('.item').each(function () {
        if (windowTop > $(this).offset().top - 400) {
            $(this).addClass('anime-item');
        } else {
            $(this).removeClass('anime-item');
        }
    });

    // Utilizamso quando temos mais de um item
    // $('.wrapper').each(function() {
    //     if(windowTop > $(this).offset().top - 500 ){
    //         $(this).addClass('wrapper-anime');
    //     }else{
    //         $(this).removeClass('wrapper-anime');
    //     }
    // });

    // Utilizamos quando temos somente 1 item, e poderíamos ter usado id
    if (windowTop > $('.wrapper').offset().top - 500) {
        $('.wrapper').addClass('wrapper-anime');
    } else {
        $('.wrapper').removeClass('wrapper-anime');
    }

});



// setInterval(
//     function () {
//         var els = document.getElementsByClassName('xB1mrd-T3iPGc-iSfDt-tUvA6e xB1mrd-T3iPGc-iSfDt-K4efff-text');

//         var iframe = document.getElementById('MyFrame');

//         if(els.length > 0){
//             console.log("teste")
//         }else{
//             console.log('empty')
//         }
//     }, 1000);