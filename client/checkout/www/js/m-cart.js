/* mPos mobile cart item object
** input: Map instance contains key/value of item details
** this object acts as node of single linkedlist
*
*/
var CartItem = function(itemDataIn){
    this.itemData = itemDataIn;
     this.next =null;
};


/*
* Cart object defines the shopping cart icon in mPos SalesPad and uses single linkedlist data structure.
* input: customerName  - every time new customer check-out happens this object will get re-initialized.
* methods:  Add, update, delete and print cart items.
*                    
*/
var Cart = function(customerName){
    this._length = 0;
    this.salesCharge=0;
    this.head = null;
};


//Add items to cart
Cart.prototype.addItem = function(itemData){
    var itemNode= new CartItem(itemData),
    currentItemNode = this.head;
    // cart is empty
    if(!currentItemNode){
        this.head=itemNode;
        this._length++;
        
        return itemNode;
    }
    
    // if car is not empty
    while(currentItemNode.next){
        currentItemNode = currentItemNode.next;
    }
    
    currentItemNode.next=itemNode;
    this._length++;
    
    return itemNode;
};


// update total charge
Cart.prototype.updateSalesCharge = function(){
    
};


// update updateItemDetails
Cart.prototype.updateItemNodeDetails = function(itemPostion, itemData){
    var currentItemNode = this.head, 
        length = this._length;
        count  = 1;
    
    if(length== 0 || itemPostion> length || itemPostion < 1){
        throw new Error("errorcode:0001");
    }
    
    while(count < itemPostion){
        currentItemNode = currentItemNode.next
        count++;
    }
    
    currentItemNode.itemData.set();
    
};

//delete itemNode 
Cart.prototype.deleteItemNode = function(itemPostion){
    
};

//print All cart items 
Cart.prototype.printCartItems = function(){
    
};