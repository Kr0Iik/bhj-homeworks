const cartProducts = document.querySelector('.cart__products');
const products = Array.from(document.querySelectorAll('.product'));

products.forEach(product => {
  const quantityValue = product.querySelector('.product__quantity-value');
  const addButton = product.querySelector('.product__add');
  const productId = product.dataset.id;
  const imageSrc = product.querySelector('.product__image').getAttribute('src');

  product.addEventListener('click', (event) => {
    const isInc = event.target.classList.contains('product__quantity-control_inc');
    const isDec = event.target.classList.contains('product__quantity-control_dec');

    if (isInc) {
      quantityValue.textContent = parseInt(quantityValue.textContent) + 1;
    }

    if (isDec) {
      let currentCount = parseInt(quantityValue.textContent);
      if (currentCount > 1) {
        quantityValue.textContent = currentCount - 1;
      }
    }
  });

  addButton.addEventListener('click', () => {
    const countToAdd = parseInt(quantityValue.textContent);
    
    const productInCart = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

    if (productInCart) {
      const cartProductCount = productInCart.querySelector('.cart__product-count');
      cartProductCount.textContent = parseInt(cartProductCount.textContent) + countToAdd;
    } else {
      cartProducts.insertAdjacentHTML('beforeend', `
        <div class="cart__product" data-id="${productId}">
            <img class="cart__product-image" src="${imageSrc}">
            <div class="cart__product-count">${countToAdd}</div>
        </div>
      `);
    }
  });
});
