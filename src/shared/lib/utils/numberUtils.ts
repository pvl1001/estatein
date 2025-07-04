/* eslint @typescript-eslint/no-unused-vars: "off" */
interface Number {
    toCurrency(maximumFractionDigits?: number): string

    toFeet(maximumFractionDigits?: number): string
}

Number.prototype.toCurrency = function (maximumFractionDigits = 2): string {
    return this.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits,
    }).replace('.', ',')
}

Number.prototype.toFeet = function (maximumFractionDigits = 2): string {
    return this.toLocaleString('en-US', {
        maximumFractionDigits,
    }).replace('.', ',')
}
