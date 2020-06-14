$(function() {
    $(".change-devour").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      var newDevour = $(this).data("newDevour");
  
      var newDevourState = {
        devoured: newDevour
      };
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      var newburger = {
        burger_name: $("#bg").val().trim(),
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newburger
      }).then(
        function() {
          location.reload();
        }
      );
    });
  });
  