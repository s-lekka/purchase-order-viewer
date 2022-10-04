window.onload = function(){

    //get wanted order id from url
    const urlParams = new URLSearchParams(window.location.search);
    const orderID = urlParams.get('order');

    //find order with order id in the array of orders
    const order = orders.mvPurchaseOrders.find(element => element.PurchaseOrderId == orderID)
    const productList = order.PurchaseOrderDetails

    //view basic order information using handlebars
    let template = document.getElementById('info-template').innerHTML
    let compiledTemplate = Handlebars.compile(template)
    let rendered = compiledTemplate(order)
    document.getElementById('info-target').innerHTML = rendered;

    //create html for table view of product details
    let content = `<tr>
    <th>Product SKU</th>
    <th>Quantinty Ordered</th>
    <th>Unit Price</th>
    <th>Total Amount</th>
  </tr>`
    for (product in productList) {
        content = content.concat(`<tr>
        <td>`+order.PurchaseOrderDetails[product].PurchaseOrderRowProductSKU+`</td>
        <td>`+order.PurchaseOrderDetails[product].PurchaseOrderRowQuantity+`</td>
        <td>`+order.PurchaseOrderDetails[product].PurchaseOrderRowUnitPriceWithoutTaxOrDiscount+`</td>
        <td>`+order.PurchaseOrderDetails[product].PurchaseOrderRowTotalAmount+`</td>
    </tr>`)
    }
    document.getElementById("products").innerHTML = content

}