"use strict";
function calculateTax(incom, taxYear = 2022) {
    if (taxYear < 2022)
        return incom * 1.2;
    return incom * 1.3;
}
console.log("incom");
calculateTax(10000);
//# sourceMappingURL=index.js.map