$('h1').click(function(){
  $(this).text("I was changed!")
})

$('input').eq(0).keypress(function() {
    $('h3').toggleClass('turnBlue')
})

$('input').eq(0).keypress(function() {
    if(Event.which === 13){
        $('h3').toggleClass('turnBlue');
    }
})

$('h1').on('dblclick', function(){
    $(this).text("I was changed!")
  })