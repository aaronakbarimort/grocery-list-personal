$(document).ready(function() {
  $("#groceryList").submit(function(event) {
    event.preventDefault();

    var itemOne = $("#itemOne").val();
    var itemTwo = $("#itemTwo").val();
    var itemThree = $("#itemThree").val();
    var arrayInputs = [itemOne, itemTwo, itemThree];
    arrayInputs.sort();
    console.log(arrayInputs);
  });
});
