function calculateTax (incom: number, taxYear = 2022): number {
    if (taxYear < 2022)
    return incom * 1.2;
    return incom * 1.3;
    
}
console.log("incom")
calculateTax(10_000)
