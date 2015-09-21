 jQuery(document).ready(function($) {
  $.ajax({
    url : "http://api.wunderground.com/api/1c262c65d1fb3a66/geolookup/conditions/q/MN/Minneapolis.json",
  dataType : "jsonp",
    success : function(parsed_json) {
      console.log(parsed_json);
    var location = parsed_json['location']['city'];
      var temp_f = parsed_json['current_observation']['temp_f'];
      var feelsLike = parsed_json['current_observation']['feelslike_f'];
      $(".temperature").append("The temperature in Minneapolis today is " + temp_f + " degrees.");
      $(".feelsLike").on("click", function(){
        $(".randomInfo").append("Currently, it feels like " + feelsLike);
      });
    }
  });
});