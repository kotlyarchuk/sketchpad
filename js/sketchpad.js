$(document).ready(function(){
    createField(16);

    function createField(size){
        clearField();
        width = parseInt($('.container').css('width'));
        boxWidth = width / size;

            count = size*size;
            container = '';
            for (i = 0; i < count; i++) {
                container += '<div class="box" style="width: '+boxWidth+'px; height: '+boxWidth+'px; display: inline-block; margin: 0;"></div>';
                // container += ($('<div class="box"></div>').css({'width':boxWidth, 'height':boxWidth, 'display':'inline-block', 'margin':'0'}))
            }
            $('.container').append($(container));
    }

    function clearField(){
        $('.container > .box').remove();
    }

    function addColor(){
        //alert(234);

    }

    $('.clear').on('click', function(){
        size = +prompt( "Which size (AxA), enter A" );
        createField(size);
    });

    $('.container').on('mouseenter', 'div', function(){
        $(this).addClass('hovered');
    });


});
