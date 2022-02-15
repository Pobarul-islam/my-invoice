 const detailsButton = document.getElementById('detail-submit-btn');

detailsButton.addEventListener('click', function () {
    const buyerDetails = document.getElementById('buyer-details-input');
    document.getElementById('buyer-info').innerText = buyerDetails.value;
    buyerDetails.value = '';

})

const addProductBtn = document.getElementById('add-details-btn');


addProductBtn.addEventListener('click', function () {
    const tableInfo = document.getElementById('info-table')
    const itemName = document.getElementById('item-name-input');
    const itemPrice = document.getElementById('item-price-input');
    const itemQuantity = document.getElementById('item-quantity-input');

    console.log(itemName.value, itemPrice.value, itemQuantity.value);

        { <tr>
            <th >1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr> 
 }
})

