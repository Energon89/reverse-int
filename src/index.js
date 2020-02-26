module.exports = function reverse(n) {
    const stringNumber = new String(n);
    return stringNumber.replace('-', '').split('').reverse().join('');
}
