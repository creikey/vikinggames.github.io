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
    '<div class="links">',
      '<span id="center">',
        '<a href="https://discordapp.com/invite/5cZQAv3" target="_blank"><img id="center" class="bg" src="css/discord_logo.png" alt="Discord"></a>',
      '</span>',
      '<a id="right" href="https://www.sandiegounified.org/schools/la-jolla" target="_blank"><img class="bg" src="css/ljhs_logo.png" alt="La Jolla High School"></a>',
      '<a id="left" href="https://github.com/vikinggames" target="_blank"><img src="css/github_logo.png" alt="Github"></a>',
    '</div>',
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
