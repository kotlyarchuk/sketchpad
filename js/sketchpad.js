$(document).ready(function(){

  $('.color').each(function(){
    $(this).css( 'background-color', $(this).attr('id') );
  });


  finished = true;
  drawingCanvas = document.getElementById('canvas');;
  context = drawingCanvas.getContext('2d');

  $('.menu').on('click', '.color', function(){
    finished = true;
    $('.color').removeClass('bordered');
    $(this).addClass('bordered');
    color = $(this).prop('id');
  });

  $('#canvas').on('mousedown', function(event){
    finished = false;
    offset = $(this).offset();
    pageX = event.pageX - offset.left;
    pageY = event.pageY - offset.top;
    context.moveTo(pageX, pageY);
    context.beginPath();
  });

  $('#canvas').on('mousemove', function(event){
    if(finished !== true){
      offset = $(this).offset();
      pageX = event.pageX - offset.left;
      pageY = event.pageY - offset.top;
      context.lineTo(pageX, pageY);
      if(color !== undefined){
        context.strokeStyle = color;
        context.stroke();
      }
      else {
        context.stroke();
      }
    }
  });

  $('#canvas').on('mouseup', function(){
    finished = true;
  });


  $('.clear').on('click', function(){
    finished = true;
    clearCanvas();
  });

  function clearCanvas(){
    context.clearRect(0, 0, 600, 600);
  }

});
