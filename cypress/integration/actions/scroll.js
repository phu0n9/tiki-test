module.exports = class Scroll{

    filterColumn = '[data-view-label="Nơi bán"]'
    checkboxKeyword = 'Hồ Chí Minh'
    checkboxType = 'input[type="checkbox"]'

    navigate(url){
        cy.visit(url)
        cy.wait(3000)
    }

    onClick(button){
        cy.get(button).click()
    }

    onSearchAndType(element,keyword){
        cy.get(element)
        .type(keyword)
    }

    onFilterSearch(){
        cy.get(this.filterColumn)
            .contains(this.checkboxKeyword)
            .find(this.checkboxType)
            .should('have.css', 'display', 'none')
            .check({force: true})
    }


    onSearchAndClick(element,elementKeyword,item){
        cy.get(element).click()
        .then(()=>{
            this.onClick(elementKeyword)
            this.onFilterSearch()
            cy.wait(1000)
            this.onClick(item)
        })
    }
}