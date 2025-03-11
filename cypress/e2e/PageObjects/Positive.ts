export class Positive {
  
     get ProductPage(){
         return cy.get('[data-test="title"]')
     } 
     get Backpack_txt(){
        return cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]')
    } 
    get CartIcon(){
        return cy.get('[data-test="shopping-cart-badge"]')
    } 
    get AddBackPack(){
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    } 

    get AddTshirt(){
        return cy.get('[data-test="add-to-cart"]')
    } 

    get TShirt_txt(){
        return cy.get('[data-test="item-1-title-link"] > [data-test="inventory-item-name"]').scrollIntoView()
    } 
    get TShirt_Inventory_txt(){
        return cy.get('[data-test="inventory-item-name"]')
    } 
    
    get BackButton(){
        return cy.get('[data-test="back-to-products"]')
    }

    get BackPackPrice(){
        return cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]')
    }
    get TshirtPrice(){
        return cy.get('[data-test="inventory-item-price"]')
    }

    get CartPage(){
        return cy.get('[data-test="title"]')
    }
    get Cart(){
        return cy.get('[data-test="shopping-cart-link"]')
    }
    get BackpackQuantity(){
        return cy.get(':nth-child(3) > [data-test="item-quantity"')
    }
    get TShirtQuantity(){
        return cy.get(':nth-child(4) > [data-test="item-quantity"]')
    }

    get RemoveBackpack(){
        return cy.get('[data-test="remove-sauce-labs-backpack"]')
    }
    get RemoveTShirt(){
        return cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]')
    }

    get ContinueShopping(){
        return cy.get('[data-test="continue-shopping"]')
    }
    




    }