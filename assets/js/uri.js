

    var uri = (function(){

      var token = '?access_token=928f90f92b4ee165f4874ab68c1f1636f7f8fa5b',
          slug = 'eastville-running-club',
          base = 'https://www.strava.com/api/v3/clubs/' + slug;

      return {
        members: function(){
          return base + '/members' + token;
        },
        events: function(){
          return base + '/group_events' + token + '&upcoming=true';
        },
        activities: function(){
          return base + "/activities" + token + '&before=' + moment().subtract(7,'d').unix();
        }
      }

    })();
