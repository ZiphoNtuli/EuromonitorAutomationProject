import 'cypress-wait-until';

class Actions {
    clearTextBox(ele, eleName) {
        try {
            ele.should('exist').should('be.visible').clear();
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }

  selectDeedsOffice(dropdownArr, textData, multiselect ){
    try{
        dropdownArr.click()
       multiselect.click()
       multiselect.contains(textData).click()
       dropdownArr.click()
    }
    catch(error) {
            console.error(`the ${textData} element had an error`)
    }}


    typeInTextBox(ele, textData, eleName) {
        try {
            ele.should('exist').should('be.visible').clear();
            ele.should('exist').should('be.visible').type(textData);
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }
    
    typeWithEnter(ele, textData, eleName) {
        try {
            ele.should('exist').should('be.visible').clear();
            ele.should('exist').should('be.visible').type(textData).wait(1000).type('{enter}');
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }

    clickOnElement(ele, eleName) {
        try {
            ele.should('exist').should('be.visible').click()
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }

    clickOnElementWithoutOpeningNewTab(ele, eleName) {
        try {
            ele.should('exist').should('be.visible').click()
            cy.window().then((w)=> {
                cy.stub(w, 'print').as('print')
            })
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }


    clickOnElementContaining(ele, textData, eleName) {
        try {
            ele.contains(textData).should('exist').should('be.visible').click()
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }

    pageTitleContains(textData, eleName) {
        try {
            cy.title().should('eq', textData)
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }

    hoverOverElement(ele, eleName) {
        try {
            ele.should('exist').should('be.visible').trigger('mouseover')
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }

    scrollToElement(ele, eleName) {
        try {
            ele.should('exist').should('be.visible').scrollIntoView()
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }
    isElementVisibleTrueFalse(ele, eleName) {
        try {
           
            if(ele.should('be.visible')){
                return true
            }
            else{
                return false
            }
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }

    isElementVisible(ele, eleName) {
        try {
            return cy.get(ele).then($elements => {
                return $elements.length > 0;
            })
        } catch (error) {
            console.error(`Unable to check if the ${eleName} element is visible or not`, error);
            return false;
        }
    }

    ElementIsNotVisible(ele, eleName) {
        try {
            ele.should('not.be.visible')
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }

    doesElementExist(ele, eleName) {
        try {
            ele.should('exist')
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }

    ElementDoesNotExist(ele, eleName) {
        try {
            ele.should('not.exist')
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }

    elementContainsText(ele, textData, eleName) {
        try {
            ele.should('exist').should('be.visible').contains(textData)
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }

    elementContainsTextEntered(ele, textData, eleName) {
        try {
            ele.should('be.visible').should('have.value', textData)
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }

    filterAndClickElementFromMultipleElementsUsingAttr(ele, attribute, attrValue, eleName) {
        try {
            ele.filter((i, element) => {
                return Cypress.$(element).attr(attribute) === attrValue;
            })
                .should('exist')
                .click();
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }

    waitUntilElementContains(ele, textData, eleName) {
        try {
            cy.waitUntil(() =>
                ele.contains(textData)
            )
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }

    waitUntilElementIsVisible(ele, eleName) {
        try {
            cy.waitUntil(() =>
                ele.should('be.visible')
            )
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }

    waitUntilElementIsInvisible(ele, eleName) {
        try {
            cy.waitUntil(() =>
                ele.should('not.be.visible')
            )
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }

    selectDropdownElement(ele, textData, eleName){
        try {
            ele.select(textData)
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }

    selectDropdownElementWithValue(ele, textData, val, eleName){
        try {
            ele.select(textData).should('have.value', val)
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }

    checkDropdownElement(ele, dropDownName, eleName){
        try {
            ele.click()
            dropDownName.contains(eleName).click()
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }
    
    checkDateIsToday(ele){
        try {
            ele.invoke('text').then((text) => {
                // Extract just the date part (assuming the format is "YYYY/MM/DD HH:mm:ss")
                const elementDate = text.trim().split(' ')[0]; // "2024/08/19"
        
                // Get today's date in the same format "YYYY/MM/DD"
                const today = new Date();
                const year = today.getFullYear();
                const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
                const day = String(today.getDate()).padStart(2, '0');
                const todayDate = `${year}/${month}/${day}`;
        
                // Compare the dates
                expect(elementDate).to.equal(todayDate);
            });

        } catch (error) {
            console.error(`the ${ele} element had an error`)
        }
    }

    forceClickOnElement(ele, eleName) {
        try {
            ele.should('exist').should('be.visible').click({ force: true });
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }

    openNewTab(ele, eleName) {
        try {
            ele.should('exist').should('be.visible').invoke('attr', 'href').then(href => {
                cy.visit(href);
            });
        } catch (error) {
            console.error(`the ${eleName} element had an error`)
        }
    }
    scrollToView(ele, eleName) {
        try {
            ele.should('exist').should('be.visible').scrollIntoView();
        } catch (error) {
            console.error(`the ${eleName} element had an error`);
        }
    }
}



export default Actions