/* eslint @typescript-eslint/no-unused-vars: "off" */
interface String {
    toCapitalizeFirst(): string

    toCapitalizeAll(): string
}

String.prototype.toCapitalizeFirst = function (): string {
    return this.replace(/\p{L}|\p{N}/u, (w) => w.toUpperCase())
}

String.prototype.toCapitalizeAll = function (): string {
    return this.replace(/^\p{L}|\s\p{L}/gu, (w) => w.toUpperCase())
}
