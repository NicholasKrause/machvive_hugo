
// Google Analytics 4 (GA4) - Dimensions and Metrics Cheatsheet v1.0.7
// Might want auto click the expand button first
console.clear()
let oOut = {}
let eLines = []

document.querySelector("#root > div:nth-child(1) > div.container.p-3.mx-auto > div > div > button.inline-flex.items-center").click()

let aCrds = [ ... document.querySelectorAll("div.rounded-md.bg-green-100.pt-4.m-2.overflow-hidden")]
aCrds.forEach(function( Crd  ){
    let sCaption = Crd.querySelector("h1").textContent
    let oCrd = {}
    oOut[ sCaption ] = {"lines": []}
    let eLines = [ ... Crd.querySelectorAll("div.flex.text-gray-700")]
    eLines.forEach(function( eLine ){
        let eLine_name = eLine.querySelector("h1.font-semibold").textContent
        let eLine_type = eLine.querySelector("a.uppercase").textContent
        let eNextDiv = eLine.nextElementSibling
        let eNextSpan = eNextDiv.querySelector("span").textContent
        let aTable = [ ... eNextDiv.querySelectorAll("TD") ]
        let aTable2 = aTable.map(function(t){
            return ( t.textContent ) ? t.textContent : ""
        })
        oOut[ sCaption ].lines.push( {"name": eLine_name, "type": eLine_type, "desc": eNextSpan, "table": aTable2 } )
    })
})

console.log( JSON.stringify( oOut ) )