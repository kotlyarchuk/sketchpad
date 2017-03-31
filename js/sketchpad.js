$(document).ready(function(){
  finished = false;
  drawingCanvas = document.getElementById('canvas');;
  context = drawingCanvas.getContext('2d');

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
      context.stroke();
    }
  });

  $('#canvas').on('mouseup', function(){
    finished = true;
  });

  $('.clear').on('click', clearCanvas);

  function clearCanvas(){
    context.clearRect(0, 0, 600, 600);
  }

});
