/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    

        /* button  #testCart */
    $(document).on("click", "#testCart", function(evt)
    {
    
    var storeCart = new Cart('berrystore');
    
    var itemDetail_1= new Map();
    itemDetail_1.set("barcode",'87689769')   
    itemDetail_1.set("itemName1",'T1')    
    itemDetail_1.set("itemName2",'T2') 
    itemDetail_1.set("itemName3",'T3') 
    itemDetail_1.set("itemName4",'T4') 
                
    storeCart.addItem(itemDetail_1);
    
    
    var itemDetail_2= new Map();     
    itemDetail_2.set("barcode",'87689444769')   
    itemDetail_2.set("itemName",'tom44ato')        
    storeCart.addItem(itemDetail_2);
      
  console.log(storeCart);

       /*    storeCart.addItem('2389757266634958')
        storeCart.addItem('2389795266634958')
         storeCart.addItem('77777777')
          storeCart.addItem('9999999')
           storeCart.addItem('66677899')
           
      */   return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
