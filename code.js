onEvent("next", "click", function( ) {
  setScreen("screen2");
});
onEvent("text_input1", "input", function( ) {
  createRecord("feedback1", {feedbackpredict:(getText("text_input1"))}, function(record) {
    
  });
});
onEvent("button2", "click", function( ) {
  createRecord("feedback", {feedback:(getText("text_input1"))}, function(record) {
    
  });
  setScreen("screen3");
});
onEvent("back", "click", function( ) {
  setScreen("screen1");
});
