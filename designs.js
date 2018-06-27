// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
var width, height, color;
var tr ="<tr></tr>"{
​
$('#sizePicker').submit(function (event){
 event.preventDefault();
 height =$('#inputHeight').val();
 width =$('#inputWeight').val();
 makeGrid(height,width);
​
});
function makeGrid(y,z) {
​
$('tr').remove();
  for (var i = 1; i <= y; i++) {
​
      $('#pixelCanvas').append($tr);
​
      for (var j = 1; j <=z; j++) {
​
          $tr.append($('<td></td>'));
      }
  }
​
​
}
$('td').click(function addColor(){
color = $('#colorPicker').val();
​
if ($(this).attr('style')) {
$(this).removeAttr('style')
} else{
$(this).attr('style','background-color:' + color);
} 
​
});
​
}
