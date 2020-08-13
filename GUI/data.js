$(document).ready(function(){
    
	// Define variables that reference our script tags within the body of our page
    var topNavigation = $("#topNavigation").html();
    var topNavigation2 = $("#topNavigation2").html();

	// Have MustacheJS render our script tags
    Mustache.parse(topNavigation);
    Mustache.parse(topNavigation2);
	
    // Define our data objects
	var topNav = Mustache.render(topNavigation, {
        item:
		[
			{
                name1: "home accents",
                link: "home_accents.html",
                class1: "flex-fill",
                class3: " leftNav"
            },
            {
                name1: "gifts",
                link: "gifts.html",
                class1: "flex-fill",
                class3: " midNav"
            },
            {
                name1: "bath ",
                name2: "&middot",
                name3: " body",
                link: "bath_body.html",
                class1: "flex-fill",
                class3: " midNav"
            },
            {
                name1: "health care",
                link: "health_care.html",
                class1: "flex-fill",
                class3: " rightNav"
            }
		]
    });
    var topNav2 = Mustache.render(topNavigation2, {
        item:
		[
			{
                name1: "home accents",
                link: "home_accents.html",
                class1: "flex-fill",
                class2: "p-2 flex-topNav"
            },
            {
                name1: "gifts",
                link: "gifts.html",
                class1: "flex-fill",
                class2: "p-2 flex-midNav"
            },
            {
                name1: "bath ",
                name2: "&middot",
                name3: " body",
                link: "bath_body.html",
                class1: "flex-fill",
                class2: "p-2 flex-midNav"
            },
            {
                name1: "health care",
                link: "health_care.html",
                class1: "flex-fill",
                class2: "p-2 flex-bottomNav"
            }
		]
    });
	
	// Place data into the HTML of our page with the html() jQuery method
    $("#render_topLinks").html(topNav);
    $("#render_topLinks2").html(topNav2);
    // Insert current years since 1898 in about us.  Note: MustacheJS is not needed to do this.
	$("#yearsSince1898").html(new Date().getFullYear() - 1898);
});