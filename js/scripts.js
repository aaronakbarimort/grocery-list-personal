$(document).ready(function() {
  $("#groceryList").submit(function(event) {
    event.preventDefault();

    var itemOne = $("#itemOne").val();
    var itemTwo = $("#itemTwo").val();
    var itemThree = $("#itemThree").val();
    var arrayInputs = [itemOne, itemTwo, itemThree];

    var arraySorted = arrayInputs.sort();
    // console.log(arraySorted);
    arraySorted.forEach(function(arraySort) {
      return $("#results").append("<li>" + arraySort + "</li>");
    });
  });
});
