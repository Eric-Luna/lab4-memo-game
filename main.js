$(document).ready(function(){
    let imagenes = {
        'img1': 'img/chrome.svg',
        'img2': 'img/facebook.svg',
        'img3': 'img/firefox.svg',
        'img4': 'img/google-icon.svg',
        'img5': 'img/html-5.svg',
        'img6': 'img/instagram-icon.svg',
        'img7': 'img/opera.svg',
        'img8': 'img/javascript.svg',
        'img9': 'img/chrome.svg',
        'img10': 'img/facebook.svg',
        'img11': 'img/firefox.svg',
        'img12': 'img/google-icon.svg',
        'img13': 'img/html-5.svg',
        'img14': 'img/instagram-icon.svg',
        'img15': 'img/opera.svg',
        'img16': 'img/javascript.svg',
    }

    let img1 = null;
    let img2 = null;
    
    $(".img").click(function(){
        let id = $(this).attr('id');
        
        if(img1 == null){
            img1 = $(this);
            $(this).attr('src', imagenes[id]);
            img1.addClass('clickeada');
        }else{
            img2 = $(this);
            $(this).attr('src', imagenes[id]);
            
            setTimeout(function() {
                
                if(img1.attr('src') == img2.attr('src')){
                    img2.addClass('clickeada');
                    img1 = null;
                    img2 = null;
                    
                }else{
                    let intentos = parseInt($("#intentos").html());
                    intentos -= 1;
                    $("#intentos").html(intentos);
                    if(intentos === 0){
                        $(".juego").attr('disabled', true);
                    }
                    img1.removeClass('clickeada');
                    img2.removeClass('clickeada');
                    img1.attr('src', 'img/signo_pregunta.png');
                    img2.attr('src', 'img/signo_pregunta.png');
                    img1 = null;
                    img2 = null;
                }
            }, 500);

        }

    });

});

function reset(){
    console.log("CLick");
    $(".img").each(function(){
        $(this).attr('src', 'img/signo_pregunta.png');
        $(this).removeClass('clickeada');
        $("#intentos").html('10');
    });
}