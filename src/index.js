module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.map(index => index.join(""));
    let inputs = str.length / 2;

    for (let i = 0; i < inputs; i++) {
        for (let result of brackets) {
            str = str.replace(result, "");
        }
    }
    return !str;
};
