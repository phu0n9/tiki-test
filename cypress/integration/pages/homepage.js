/// <reference types="cypress" />

const ScrollPage = require('../actions/scroll')
const scroll = new ScrollPage()

context("Homepage scrolling",()=>{
    beforeEach(()=>{
        scroll.navigate("https://tiki.vn/")
    })

    it("Scroll bar button click",()=>{
        // scroll bar button click
        scroll.onClick('.icon-next')
    })
    
    it("Scroll banner button click",()=>{
        // scroll banner button click
        scroll.onClick('.slick-next > .icon-wrap > img')
    })
    
    it("Click on each item",()=>{
        cy.get('.header').scrollIntoView()
        // click on each item
        cy.get('.style__StyledInfiniteScrollWidgetHeaderTabs-sc-89j3qn-1 > [data-view-index]').each((item,index,list)=>{
            scroll.onClick(list[index])
        })
    })
    
    it("Infinity Scrolling",()=>{
        cy.get('.header').scrollIntoView()

        for (let i = 0;i<5;i++){
            // inifinity scroll
            scroll.onClick('.style__Wrapper-sc-hf75l8-0')
        }
        
    })

    // enter a keyword and search 
    it("Search and type",()=>{
        scroll.onSearchAndType('.FormSearch__Input-sc-1fwg3wo-2',"tai nghe bluetooth{enter}")
    })

    // choose an item from search bar and choose a item in filter column 
    it("Search and click",()=>{
        scroll.onSearchAndClick('.FormSearch__Input-sc-1fwg3wo-2',
        '[data-view-index="1"] > .keyword',
        '[data-view-index="1"] > .style__StyledItem-sc-18svp8n-0')
    })
})
