// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = product.querySelector('.subtotal span');

  const total = `${Number(price * quantity)}`;
  subTotal.innerHTML = `${total}`;

  return total;
}


function calculateAll() {
  // ITERATION 2
  const getAllProducts = document.getElementsByClassName('product');

  let totalSubTotal = [];
  for (let i = 0; i < getAllProducts.length; i++) {
    totalSubTotal.push(updateSubtotal(getAllProducts[i]));
  } 
  
  // ITERATION 3
  const totalValue = document.querySelector('#total-value span');
  const totalSum = totalSubTotal.reduce((acc, num) => acc + +num, 0);
  totalValue.innerHTML = `${totalSum}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct);
  }
  //... your code goes here
});

