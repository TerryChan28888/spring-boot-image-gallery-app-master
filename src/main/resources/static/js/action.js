	// old script is comment out
	//$(document).ready(function() {
	//    $('#example').DataTable();
	//} );
	
	// the following is the new one
	$(document).ready(function() {
var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
//var items = [
//    {
//        src: 'https://placekitten.com/600/400',
//        w: 600,
//        h: 400
//    },
//    {
//        src: 'https://placekitten.com/1200/900',
//        w: 1200,
//        h: 900
//    }
//];
var items = [];

items.push({src: 'https://placekitten.com/600/400',w: 600,h: 400});
items.push({src: 'https://placekitten.com/1200/900',w: 1200,h: 900});

for(var i =1; i<$('li').length+1; i++){
	var img = new Image();
	img.src = '/image/display/'+i;
	items.push({src: '/image/display/'+i,w: img.width,h: img.height});
}

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
//var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();
} );