module.exports = function check(str, bracketsConfig) {
    // function check(str, bracketsConfig) {
    // your solution
    let bracketStack = [str[0]];
    let brackets = {};
    for (let i = 0; i < bracketsConfig.length; i++) {
        brackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
        brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }
    for (let i = 1; i < str.length; i++) {
        if (str[i] === ")" && bracketStack[bracketStack.length - 1] !== "(") {
            return false;
        } else if (
            str[i] === "]" &&
            bracketStack[bracketStack.length - 1] !== "["
        ) {
            return false;
        } else if (
            str[i] === "}" &&
            bracketStack[bracketStack.length - 1] !== "{"
        ) {
            return false;
        } else if (
            brackets[str[i]] !== null &&
            bracketStack[bracketStack.length - 1] === brackets[str[i]]
        ) {
            bracketStack.pop();
        } else {
            bracketStack.push(str[i]);
        }
    }
    return bracketStack.length === 0;
};
const config1 = [["(", ")"]];
const config2 = [
    ["(", ")"],
    ["[", "]"],
];
const config3 = [
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
];
const config4 = [["|", "|"]];
const config5 = [
    ["(", ")"],
    ["|", "|"],
];
const config6 = [
    ["1", "2"],
    ["3", "4"],
    ["5", "6"],
    ["7", "7"],
    ["8", "8"],
];
const config7 = [
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
    ["|", "|"],
];
// console.log(check("())(", config1)); //false
// console.log(check("[]][[]", config3)); //false
// console.log(check("[]][[]", config2)); //false
