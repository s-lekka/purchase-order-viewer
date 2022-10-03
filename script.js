window.onload = function(){

try {
    const orders = JSON.parse(jsonFile)
    if (orders.ResponseStatus.ErrorCode != 0) console.log("Error Code: "+ orders.ResponseStatus.ErrorCode)

    
    let orderList = orders.mvPurchaseOrders
    let template = document.getElementById('orders-template').innerHTML
    let compiledTemplate = Handlebars.compile(template)
    let rendered = compiledTemplate({order: orderList})

    document.getElementById('orders-target').innerHTML = rendered;
} catch (error) {
    console.log(error)
}

}
