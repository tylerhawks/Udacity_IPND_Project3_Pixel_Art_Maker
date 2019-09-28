// Take user input to create the grid
$("#sizePicker").submit(function(event) {
  // turn off the default action of the submit button
  event.preventDefault();
  // get grid dimensions from input
  height = $("#inputHeight").val();
  width = $("#inputWidth").val();
  // build grid
  makeGrid(height, width);
})

function makeGrid(height, width) {
  // clear old grid
  $("tr").remove();

  // loop through value of inputHeight to add rows
  for (var row = 1; row <= height; row++) {
    $("#pixelCanvas").append("<tr id=table" + row + "></tr>");
    // loop through value of inputWidth to add columns
    for (var col = 1; col <= width; col++) {
      $("#table" + row).append("<td></td>");
    }
  }

  // Apply selected color to square
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
