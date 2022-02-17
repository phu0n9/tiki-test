module.exports = class Scroll{

    navigate(url){
        cy.visit(url)
        cy.wait(3000)
    }

    onClick(button){
        cy.get(button)
    }

    onSearchAndType(element,keyword){
        cy.get(element)
        .type(keyword)
    }

    onSearchAndClick(element,elementKeyword){
        cy.get(element).click()
        .then(()=>{
            cy.get(elementKeyword).click()
        })
    }
}