Handlebars.registerHelper('avatar', function(member) {
  return ( member.profile_medium == 'avatar/athlete/medium.png' ) ? '/assets/img/avatar.png' : member.profile_medium;
});

Handlebars.registerHelper('next', function(ev) {
  return moment(ev.upcoming_occurrences[0]).format('MMM Do YYYY');
});
