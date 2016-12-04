function makeNote(e) {

    // Check the event object if the .click is on the canvas
    // or a created note
    if (e.eventPhase === 2) {

        // Create the new comment at the corsor postition
        var $newbox = $('<div class="ui-widget-content" id="newbox" style="top:' + e.pageY + 'px; left: ' + e.pageX + 'px;"><a class="stickyclose">X</a><input type="text" placeholder="Title"class="stickytop"><textarea class="stickynotes" placeholder="Your text goes here"></textarea></div>');
        $('#canvas').append($newbox);
        $newbox.stop().show('bounce');
        $newbox.draggable();
        $newbox.resizable();
        $('.stickyclose').click(function() {
            $(this).parent('#newbox').stop().hide( "drop", { direction: "down" }, 'slow' );
        });
    }
}

// wait until the dom document is loaded
$( document ).ready(function() {
    // listen for a .click() event on the add button element
    $('.stickyopen').click(function(e) {
        makeNote(e);
    });
});