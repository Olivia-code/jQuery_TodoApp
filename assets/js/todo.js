// Check off Specific ToDDOs By Clicking

$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// click an X to delete ToDo

$("ul").on("click", "span",function(e) {
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(event.which === 13) {
        //grabing new text from input 
        let todoText = $(this).val();
        $(this).val("")
        // create a new li and add to ul 
        $('ul').append(`<li><span><i class="fa fa-trash"></i></span> ${todoText} </li>`)
    }
});

$(".fa-plus").click(function(){
    $("input[type = 'text']").fadeToggle();
})
