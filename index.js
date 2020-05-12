var repeatTheString = function(){
    var input = $('#before').val()
    var num = window.parseInt($('#num').val()) || 2
    var result = ''
    for(var i = 0;i<num;i++){
        result += input
    }
    $('#result').text(result)
}