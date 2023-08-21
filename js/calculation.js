let totalPrice = 0;

document.getElementById('prod1').addEventListener('click', function () {

    const priceDecimal = getItemPriceById('price1');
    addToEntry('K. Accessories');
    addPriceToEntry(priceDecimal);
    addDiscountToEntry(priceDecimal);


})

document.getElementById('prod2').addEventListener('click', function () {
    const priceDecimal = getItemPriceById('price2');
    addToEntry('K. Accessories');
    addPriceToEntry(priceDecimal);
    addDiscountToEntry(priceDecimal);

})
document.getElementById('prod3').addEventListener('click', function () {

    const priceDecimal = getItemPriceById('price3');
    addToEntry('Home Cooker');
    addPriceToEntry(priceDecimal);
    addDiscountToEntry(priceDecimal);


})

document.getElementById('prod4').addEventListener('click', function () {
    const priceDecimal = getItemPriceById('price4');
    addToEntry('Sports Back Cap');
    addPriceToEntry(priceDecimal);
    addDiscountToEntry(priceDecimal);

})
document.getElementById('prod5').addEventListener('click', function () {

    const priceDecimal = getItemPriceById('price5');
    addToEntry('Full Jersey Set');
    addPriceToEntry(priceDecimal);
    addDiscountToEntry(priceDecimal);


})

document.getElementById('prod6').addEventListener('click', function () {
    const priceDecimal = getItemPriceById('price6');
    addToEntry('Sports cates');
    addPriceToEntry(priceDecimal);
    addDiscountToEntry(priceDecimal);

})
document.getElementById('prod7').addEventListener('click', function () {

    const priceDecimal = getItemPriceById('price7');
    addToEntry('Single Relax Chair');
    addPriceToEntry(priceDecimal);
    addDiscountToEntry(priceDecimal);


})

document.getElementById('prod8').addEventListener('click', function () {
    const priceDecimal = getItemPriceById('price8');
    addToEntry('Children play');
    addPriceToEntry(priceDecimal);
    addDiscountToEntry(priceDecimal);

})
document.getElementById('prod9').addEventListener('click', function () {
    const priceDecimal = getItemPriceById('price9');
    addToEntry('Flexible Sofa');
    addPriceToEntry(priceDecimal);
    addDiscountToEntry(priceDecimal);

})


/* Apply button listener */


const applyBtn = document.getElementById('applyBtn');

applyBtn.addEventListener('click', function () {
    const couponField = document.getElementById('couponField');
    const couponText = couponField.value;
    if (couponText == 'SELL200') {
        const totalField= document.getElementById('tp');
        const totalText= totalField.innerText;
        const total= parseFloat(totalText);
        const discount = total * .2;
        const discountDec= discount.toFixed(2);


        const discountPriceField = document.getElementById('dp');
        discountPriceField.innerHTML = `${discountDec} Tk`;


        const discountedPrice = document.getElementById('tdp');
        const updatedPrice= total-discount;
        const updatedPriceDec= updatedPrice.toFixed(2);
        discountedPrice.innerHTML = `${updatedPriceDec} Tk`;
        couponField.value='';
    } else {
        alert('Please Enter SELL200 coupon to get discount');
        couponField.value='';
        return
    }

})


/* Get the price of items */

function getItemPriceById(itemId) {
    const item = document.getElementById(itemId);
    const itemPriceText = item.innerText;
    const itemPrice = parseFloat(itemPriceText);
    totalPrice += itemPrice;
    return totalPrice.toFixed(2);
}

/* Set product name to Entry */

function addToEntry(productName) {
    const itemsEntry = document.getElementById('itemList');
    const count = itemsEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-2');
    p.innerHTML = `${count + 1}. ${productName}`
    itemsEntry.appendChild(p);

    document.getElementById('hr').removeAttribute('hidden');

}

/* Set product price to entry */

function addPriceToEntry(totalPrice) {
    const totalPriceField = document.getElementById('tp');
    totalPriceField.innerHTML = `${totalPrice} Tk`
    const purchaseBtn = document.getElementById('purchaseBtn');
    purchaseBtn.removeAttribute('disabled');
}

/* Enable Apply Button*/

function addDiscountToEntry(totalPrice) {
    const discountedPrice = document.getElementById('tdp');
    discountedPrice.innerHTML = `${totalPrice} Tk`;
    if (totalPrice >= 200) {
        applyBtn.removeAttribute('disabled');

    } else {
        const discountPriceField = document.getElementById('dp');
        discountPriceField.innerHTML = `${0} Tk`;

    }
}

/* Modal class functions */

function resetData() {

    totalPrice=0;
 
    const itemsEntry = document.getElementById('itemList');
    const totalPriceField = document.getElementById('tp');
    const discountPriceField = document.getElementById('dp');
    const discountedPrice = document.getElementById('tdp');
    const couponField = document.getElementById('couponField');
    const purchaseBtn = document.getElementById('purchaseBtn');
    const applyBtn = document.getElementById('applyBtn');



    itemsEntry.innerHTML = '';
    totalPriceField.innerHTML = '';
    discountPriceField.innerHTML = '';
    discountedPrice.innerHTML = '';
    couponField.value = '';
    purchaseBtn.disabled = true;
    applyBtn.disabled = true;

    

    const hr = document.getElementById('hr');
    hr.setAttribute('hidden', 'true');
}


/* Function to open the modal and apply styles */ 
function openModal() {
    const modal = document.getElementById('modal1');
    modal.showModal();
    document.body.classList.add('modal-open');
}

/* Function to close the modal and revert styles */ 
function modalClose() {
    const modal = document.getElementById('modal1');
    modal.close();

    // Reset the data
    resetData();

    // Revert page styles
    document.body.classList.remove('modal-open');
}