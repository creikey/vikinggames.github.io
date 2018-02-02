$(function() {
  var home = "Home"
  var calendar = "Calendar"
  var agenda = "Agenda"
  var resources = "Resources"
  var path = window.location.pathname;
  var page = path.split("/").pop();
  if (page == "index.html") {
    home = "<b>Home</b>"
  }
  if (page == "agenda.html") {
    agenda= "<b>Agenda</b>"
  }
  if (page == "resources.html") {
    resources = "<b>Resources</b>"
  }
  if (page == "calendar.html") {
    calendar = "<b>Calendar</b>"
  }
  var html = [
    '<div class="title">',
      '<h1>Viking Games</h1>',
    '</div>',
    '<div class="menu">',
      '<ul>',
        '<li><a href="index.html">' + home + '</a></li>',
        '<li><a href="calendar.html">' + calendar + '</a></li>',
        '<li><a href="agenda.html">' + agenda + '</a></li>',
        '<li><a href="resources.html">' + resources + '</a></li>',
      '</ul>',
    '</div>'
  ].join("\n");
  $("#nav-placeholder").append(html)
});
