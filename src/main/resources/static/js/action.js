	// old script is comment out
	//$(document).ready(function() {
	//    $('#example').DataTable();
	//} );
	
	// the following is the new one
var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: 'https://placekitten.com/600/400',
        w: 600,
        h: 400
    },
    {
        src: 'https://placekitten.com/1200/900',
        w: 1200,
        h: 900
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
//var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
var gallery = new PhotoSwipe( pswpElement, false, items, options);
gallery.init();