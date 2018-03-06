var palindromeWord = function(word) {
  return false;
}

//User interface logic
$(document).ready(function() {
  $("form#palindrome-word").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = palindromeWord(word);

    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});
