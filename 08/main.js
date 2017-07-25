/*Create a Checklist: Independent Practice

You'll add the ability to complete tasks in the list. Your program must complete the following rules:

- Through jQuery add a "complete task" link at the end of each to-do item.
- When clicked, the link will cross out the current task (hint: add a class to the list that sets the text-decoration to strikeout).
- Each new task added by the user needs to also have the "complete task" link akt the end.
- Bonus: when user completes task, remove the task from the current list and add it to a completed list below. Do not show this list unless the there are completed items.
- Bonus 2: add the ability to restore items from the completed list to the first list.

*/

$(function() {

//create a variable to store the fav-list element it from the HTML
  var $favList = $('#fav-list');

 function complete(){

//create a html link element that has the word complete
   var $completeLink = $('<a href = "#"> complete</a>');

//adds the complete link created above to the end of each item in the fav-list
   $favList.children().append($completeLink);

 }

 // complete();

function strikeThrough(){

//stike through the item once the complete link is clicked
   $favList.children().on('click',function(){
    $(this).css('text-decoration','line-through');
   });
}
    complete();
    strikeThrough();

//Add newely created item to the list of items
  var $submitButton = $('#new-thing-button');
  // button.onclick = function(event) {
  $submitButton.on('click', function(event) {
    event.preventDefault();
    MyApp.addToList($favList);
// add the complete and strikeThrough function to the new items created.
    (this).append(complete(), strikeThrough());

  });
});

var MyApp = {};

MyApp.addToList = function(list) {
  var $newLi = $('<li>');
  var $newItemText = $('#new-thing');
  $newLi.html($newItemText.val());
  $newItemText.val('');
  if ($newLi.html() !== '') {
    list.append($newLi);
  }
}
