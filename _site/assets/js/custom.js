$(function(){
  
  // Adds current year to copyright date
	var currentYear = (new Date()).getFullYear();
	$("[data-year]").text(currentYear);
  
  
  // Table of Contents
  var ToC = "<ul>";
  var newLine, el, title, link;

  $("main h2").each(function() {
    el = $(this);
    title = el.text();
    link = "#" + el.attr("id");

    newLine =
      "<li>" +
        "<a href='" + link + "'>" +
          title +
        "</a>" +
      "</li>";

    ToC += newLine;
  });
  
  ToC +="</ul>";
  $(".table-of-contents").append(ToC);
  
  
  var waypoints = $('[data-nav]').waypoint({
    handler: function(direction) {
      if(direction === "down") {
        $('[data-nav]').addClass('fixed');
      } else {
        $('[data-nav]').addClass('fixed');
      }
    },
    offset: 40
  })
  var waypoints = $('[data-main]').waypoint({
    handler: function(direction) {
      if(direction === "up") {
        $('[data-nav]').removeClass('fixed');
      }
    }
  })
});