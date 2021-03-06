jQuery('.slide').carousel({
	interval: 5000
})

jQuery(document).ready(function(){

	jQuery('.my-slide').owlCarousel({
    	loop:true,
    	margin:10,
    	nav:true,
    	responsive:{
        	0:{
            	items:1
        	},
        	600:{
            	items:2
        	},
        	1000:{
            	items:3
        	},
        	1366:{
        		items:4
        	}
    	}
	});

	jQuery('.my-slide-a').owlCarousel({
    	loop:true,
    	margin:10,
    	nav:true,
    	responsive:{
        	0:{
            	items:1
        	},
        	600:{
            	items:2
        	},
        	1000:{
            	items:3
        	},
        	1366:{
        		items:5
        	}
    	}
	});

	jQuery('.my-slide-b').owlCarousel({
    	loop:true,
    	margin:10,
    	nav:true,
    	responsive:{
        	0:{
            	items:1
        	},
        	600:{
            	items:2
        	},
        	1366:{
        		items:3
        	}
    	}
	});
});