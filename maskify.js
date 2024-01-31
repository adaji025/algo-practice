function maskify(cc) {
    if (cc.length <= 4) {
        return cc
    }

    const maskedLen = cc.length - 4
    const maskedPart = "#".repeat(maskedLen)
    const lastFour = cc.slice(-4)

    return maskedPart + lastFour
}

function maskifyAlt1(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }

console.log(maskify("5012162663"))
console.log(maskifyAlt1("5012162567"))
console.log(maskifyAlt1("567"))