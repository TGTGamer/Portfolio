"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get3 = exports.get2 = void 0;
function get2(accounts) {
    let result = [];
    accounts.forEach(x => {
        if (result.length !== 0)
            return;
        x; //?
        for (let y = accounts.length; y >= 0; y--) {
            accounts[y]; //?
            if (accounts[y] + x == 2020) {
                result = [accounts[y], x]; //?
            }
        }
    });
    return result; //?
}
exports.get2 = get2;
function get3(accounts) {
    let result = [];
    accounts.forEach(x => {
        if (result.length !== 0)
            return;
        x; //?
        for (let y = accounts.length - 1; y >= 0; y--) {
            if (result.length !== 0)
                return;
            accounts[y]; //?
            const totalLeft = 2020 - (accounts[y] + x); //?
            if (totalLeft < 2020) {
                const value = accounts.find(value => value == totalLeft); //?
                if (value)
                    result = [accounts[y], x, value]; //?
            }
        }
    });
    return result; //?
}
exports.get3 = get3;
//# sourceMappingURL=index.js.map