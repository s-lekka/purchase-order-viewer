window.onload = function(){

try {
    
    let orderList = orders.mvPurchaseOrders
    let template = document.getElementById('orders-template').innerHTML
    let compiledTemplate = Handlebars.compile(template)
    let rendered = compiledTemplate({order: orderList})

    document.getElementById('orders-target').innerHTML = rendered;
} catch (error) {
    console.log(error)
}

}
