// this area is for iphone if i click plus
const plusQuantityButton = document.getElementById("plusQuantity");
plusQuantityButton.addEventListener("click", function () {
   const quantityNumber = document.getElementById("quantityNumber").value;
   const quantityAmount = parseInt(quantityNumber);
   const totalQuantity = quantityAmount + 1;

   const phonePrice = document.getElementById("phonePrice").innerText;
   const currentPhonePrice = parseInt(phonePrice);
   const totalPhonePrice = totalQuantity * 1219;

   const subtotalValue = document.getElementById("subtotalValue").innerText;
   const totalSubTotal = parseInt(subtotalValue);
   const subTotalFinal = totalSubTotal + 1219;

   const taxValue = document.getElementById("taxValue").innerText;
   const totalTaxValue = parseInt(taxValue);
   const taxValueFinal = Math.round(subTotalFinal * 2 / 100);

   const finalPrice = document.getElementById("finalPrice").innerText;
   const totalFinalValue = parseInt(finalPrice);
   const finalPriceAmount = subTotalFinal + taxValueFinal;

   document.getElementById("quantityNumber").value = totalQuantity;
   document.getElementById("phonePrice").innerText = totalPhonePrice;
   document.getElementById("subtotalValue").innerText = subTotalFinal;
   document.getElementById("taxValue").innerText = taxValueFinal;
   document.getElementById("finalPrice").innerText = finalPriceAmount;
})

// this area is for iphone if click minus
const minusQuantityButton = document.getElementById("minusQuantity");
minusQuantityButton.addEventListener("click", function () {
   const quantityNumber = document.getElementById("quantityNumber").value;
   const quantityAmount = parseInt(quantityNumber);
   const totalQuantity = quantityAmount - 1;

   const phonePrice = document.getElementById("phonePrice").innerText;
   const currentPhonePrice = parseInt(phonePrice);
   const totalPhonePrice = totalQuantity * 1219;

   const subtotalValue = document.getElementById("subtotalValue").innerText;
   const totalSubTotal = parseInt(subtotalValue);
   const subTotalFinal = totalSubTotal - 1219;

   const taxValue = document.getElementById("taxValue").innerText;
   const totalTaxValue = parseInt(taxValue);
   const taxValueFinal = Math.round(subTotalFinal * 2 / 100);

   const finalPrice = document.getElementById("finalPrice").innerText;
   const totalFinalValue = parseInt(finalPrice);
   const finalPriceAmount = subTotalFinal + taxValueFinal;

   document.getElementById("quantityNumber").value = totalQuantity;
   document.getElementById("phonePrice").innerText = totalPhonePrice;
   document.getElementById("subtotalValue").innerText = subTotalFinal;
   document.getElementById("taxValue").innerText = taxValueFinal;
   document.getElementById("finalPrice").innerText = finalPriceAmount;
})

// this area is for case if i click plus
const plusCaseQuantityButton = document.getElementById("plusCaseQuantity");
plusCaseQuantityButton.addEventListener("click", function () {
   const quantityCaseNumber = document.getElementById("quantityCaseNumber").value;
   const quantityCaseAmount = parseInt(quantityCaseNumber);
   const totalCaseQuantity = quantityCaseAmount + 1;

   const casePrice = document.getElementById("casePrice").innerText;
   const currentCasePrice = parseInt(casePrice);
   const totalCasePrice = totalCaseQuantity * 59;

   const subtotalValue = document.getElementById("subtotalValue").innerText;
   const totalSubTotal = parseInt(subtotalValue);
   const subTotalFinal = totalSubTotal + 59;

   const taxValue = document.getElementById("taxValue").innerText;
   const totalTaxValue = parseInt(taxValue);
   const taxValueFinal = Math.round(subTotalFinal * 2 / 100);

   const finalPrice = document.getElementById("finalPrice").innerText;
   const totalFinalValue = parseInt(finalPrice);
   const finalPriceAmount = subTotalFinal + taxValueFinal;

   document.getElementById("quantityCaseNumber").value = totalCaseQuantity;
   document.getElementById("casePrice").innerText = totalCasePrice;
   document.getElementById("subtotalValue").innerText = subTotalFinal;
   document.getElementById("taxValue").innerText = taxValueFinal;
   document.getElementById("finalPrice").innerText = finalPriceAmount;

})

// this area is for case if i click minus
const minusCaseQuantityButton = document.getElementById("minusCaseQuantity");
minusCaseQuantityButton.addEventListener("click", function () {
   const quantityCaseNumber = document.getElementById("quantityCaseNumber").value;
   const quantityCaseAmount = parseInt(quantityCaseNumber);
   const totalCaseQuantity = quantityCaseAmount - 1;

   const casePrice = document.getElementById("casePrice").innerText;
   const currentCasePrice = parseInt(casePrice);
   const totalCasePrice = totalCaseQuantity * 59;

   const subtotalValue = document.getElementById("subtotalValue").innerText;
   const totalSubTotal = parseInt(subtotalValue);
   const subTotalFinal = totalSubTotal - 59;

   const taxValue = document.getElementById("taxValue").innerText;
   const totalTaxValue = parseInt(taxValue);
   const taxValueFinal = Math.round(subTotalFinal * 2 / 100);

   const finalPrice = document.getElementById("finalPrice").innerText;
   const totalFinalValue = parseInt(finalPrice);
   const finalPriceAmount = subTotalFinal + taxValueFinal;

   document.getElementById("quantityCaseNumber").value = totalCaseQuantity;
   document.getElementById("casePrice").innerText = totalCasePrice;
   document.getElementById("subtotalValue").innerText = subTotalFinal;
   document.getElementById("taxValue").innerText = taxValueFinal;
   document.getElementById("finalPrice").innerText = finalPriceAmount;

})