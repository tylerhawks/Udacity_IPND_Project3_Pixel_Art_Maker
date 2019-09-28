// collect user input for canvas size and call makeGrid
$("input[type='submit']").on("click", function(event) {
  // block default submit button functionality
  event.preventDefault();
  // set height and width variables using user input
  let rows = $("#inputHeight").val();
  let cols = $("#inputWidth").val();
  // build the canvas
  makeGrid(rows, cols);
});

// color tds when user clicks on the canvas
$("#pixelCanvas").on("click", "td", function() {
  // assign user input to variable
  let color = $("#colorPicker").val()
  // apply selected color to the box clicked on
  $(this).css("background-color", color);
});

//  build the canvas using height and width values collected above
function makeGrid(rows, cols) {
  // clear any previous canvases
  $("#pixelCanvas").empty();
  // loop through value of height to create rows
  for (let height = 0; height < rows; height++) {
    $("#pixelCanvas").append("<tr></tr>")
    // loop through value of width to create tds in each row. ie columns
    for (let width = 0; width < cols; width++) {
      $("tr").last().append($("<td></td>"));
    }
  }
}
