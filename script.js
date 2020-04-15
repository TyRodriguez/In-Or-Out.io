$(document).ready(function(){
    var instance = M.Dropdown.init($(".dropdown-trigger"), {hover:true, coverTrigger:false});

    $('#dropdown1').on('click', 'li', function(){
        $('.dropdown-trigger').text($(this).text())
    })
})

