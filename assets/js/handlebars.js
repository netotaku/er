Handlebars.registerHelper('avatar', function(member) {
  return ( member.profile_medium == 'avatar/athlete/medium.png' ) ? '/assets/img/avatar.png' : member.profile_medium;
});

Handlebars.registerHelper('next', function(ev) {
  return moment(ev.upcoming_occurrences[0]).format('MMM Do YYYY');
});

Handlebars.registerHelper('ms', function(m) {
  return Math.round(m) + 'm';
});

Handlebars.registerHelper('kms', function(m) {
  return Math.round(m)/1000 + 'km';
});

Handlebars.registerHelper('secs', function(s) {

  var h = Math.floor(s / 3600),
      m = Math.floor(s % 3600 / 60),
      s = Math.floor(s % 3600 % 60);

  return h + ':' + m + ':' + s;
  
});
