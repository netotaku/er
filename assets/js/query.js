function q(query, t, target){
  $.getJSON(query + '&callback=?', function(data){
    console.log(query, t, data);
    $(target).append(Handlebars.compile($(t).html())(data));
  });
}
