let totalPrice = 0;

document.getElementById('prod1').addEventListener('click', function () {

    const priceDecimal = getItemPriceById('price1');
    addToEntry('K. Accessories');


    



    const totalPriceField = document.getElementById('tp');
    totalPriceField.innerHTML = `${priceDecimal} Tk`

    const purchaseBtn = document.getElementById('purchaseBtn');
    purchaseBtn.removeAttribute('disabled');

})

document.getElementById('prod2').addEventListener('click', function () {
    const priceDecimal = getItemPriceById('price2');
    addToEntry('K. Accessories');
    



    const totalPriceField = document.getElementById('tp');
    totalPriceField.innerHTML = `${priceDecimal} Tk`

    const purchaseBtn = document.getElementById('purchaseBtn');
    purchaseBtn.removeAttribute('disabled');

})


/* Get the price of items */

function getItemPriceById(itemId) {
    const item = document.getElementById(itemId);
    const itemPriceText = item.innerText;
    const itemPrice = parseFloat(itemPriceText);
    totalPrice += itemPrice;
    return totalPrice.toFixed(2);
}

/* Set items and price */

function addToEntry(productName) {
    const itemsEntry = document.getElementById('itemList');
    const count = itemsEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-2');
    p.innerHTML = `${count + 1}. ${productName}`
    itemsEntry.appendChild(p);

    document.getElementById('hr').removeAttribute('hidden');

}

