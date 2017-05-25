
function populate(opt, data){
  $(opt.target).append(Handlebars.compile($(opt.template).html())(data));
}

function query(opt){
  $.getJSON(opt.query + '&callback=?', function(data){
    opt.callback(opt, data);
  });
}
