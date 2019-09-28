// Select size input
$("#sizePicker").submit(function(event) {
  event.preventDefault();
  height = $("#inputHeight").val();
  width = $("#inputWidth").val();
  makeGrid(height, width);
})

function makeGrid(height, width) {
  // clear old grid
  $("tr").remove();

  // loop through value of inputHeight to add rows
  for (var x = 1; x <= height; x++) {
    $("#pixelCanvas").append("<tr id=table" + x + "></tr>");
    // loop through value of inputWidth to add columns
    for (var y = 1; y <= width; y++) {
      $("#table" + x).append("<td></td>");
    }
  }

  // Select color input
  $("td").click(function() {
    color = $("#colorPicker").val();
    // clear any existing colors - allows romoving color with second click
    if ($(this).attr("style")) {
      $(this).removeAttr("style");
    // apply new colors
    } else {
      $(this).attr("style", "background-color:" + color);
    }
  })

}
