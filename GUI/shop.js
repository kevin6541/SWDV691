const userAction = async () => {
  const response = await fetch('https://fun-stuff-4-all.myshopify.com/admin/api/2020-04/products.json');
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
}






/* //mustache to build on the template
$(document).ready(function(){
    
	// Define variables that reference our script tags within the body of our page
    var testNav = $("#storeFrame").html();

	// Have MustacheJS render our script tags
    Mustache.parse(testNav);
	
    // Define our data objects
    var data = jsonObj;
    var obj = jQuery.parseJSON(data);
    var testRun = Mustache.render(testNav, obj);
	
	// Place data into the HTML of our page with the html() jQuery method
    $("#store").html(testRun);
}); */

//pull product data from the json API file
/* var text = jsonObj;
var obj = JSON.parse(text);   
var x = 0;
var itemArr = [];
for(items of obj.products){
    itemArr[x] = items.id;
    x += 1;
} */

/* var itemIdsArr = itemArr;
var client = ShopifyBuy.buildClient({
  domain: 'fun-stuff-4-all.myshopify.com',
  storefrontAccessToken: '83541bd8da3c95da319a06192c6a37d3',
});
var ui = ShopifyBuy.UI.init(client);
for (ids of itemIdsArr){
  ui.createComponent('product', {
    id: ids,
    node: document.getElementById(ids)
  });
} */

//shopify function to build the store - added the array to it to insert quantity
//extremely inefficient - creates a separate body for each item - other option is to let 
//shopify build the entire collection - efficient - but lose flixibility - i.e. - no search or qty.
/* (function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  var itemIdsArr = itemArr;
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'fun-stuff-4-all.myshopify.com',
      storefrontAccessToken: '83541bd8da3c95da319a06192c6a37d3',
    });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        for (ids of itemIdsArr){
          ui.createComponent('product', {
            id: ids,
            node: document.getElementById(ids),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            }
          }
        },
        "text": {
          "button": "Add to cart"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          }
        },
        "text": {
          "button": "Add to cart"
        }
      },
      "cart": {
        "text": {
          "total": "Subtotal",
          "button": "Checkout"
        },
        "contents": {
          "note": true
        },
        "popup": false
      }
    }, 
          });
       } });
    }
  
})(); */

//collection

/*<![CDATA[*/
/* (function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'fun-stuff-4-all.myshopify.com',
      storefrontAccessToken: '83541bd8da3c95da319a06192c6a37d3',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: '165664522345',
        node: document.getElementById('collection-component-1589555896509'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px",
          "width": "calc(25% - 20px)"
        },
        "img": {
          "height": "calc(100% - 15px)",
          "position": "absolute",
          "left": "0",
          "right": "0",
          "top": "0"
        },
        "imgWrapper": {
          "padding-top": "calc(75% + 15px)",
          "position": "relative",
          "height": "0"
        }
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "cart": {
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    },
    "popup": false
  }
},
      });
    });
  }
})(); */
/*]]>*/










