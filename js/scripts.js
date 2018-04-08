$(document).ready(function() {
  $("#groceryList").submit(function(event) {
    event.preventDefault();

    var itemOne = $("#itemOne").val();
    var itemTwo = $("#itemTwo").val();
    var itemThree = $("#itemThree").val();
    var arrayInputs = [itemOne, itemTwo, itemThree];
    console.log(arrayInputs);
  });
});
