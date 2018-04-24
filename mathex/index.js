/**
 * 高精度扩展
 * @type {{}}
 */
var MathEx = {};
/**
 * 除法
 * @param num1
 * @param num2
 * @returns {number}
 * @constructor
 */
division = function (num1, num2) {
    if (num2 == undefined) {
        num2 = 100;
    }
    var t1 = 0, t2 = 0, r1, r2;
    try {
        t1 = num1.toString().split('.')[1].length;
    }
    catch (e) {
    }
    try {
        t2 = num2.toString().split('.')[1].length;
    }
    catch (e) {
    }
    with (Math) {
        r1 = Number(num1.toString().replace('.', ''));
        r2 = Number(num2.toString().replace('.', ''));
        return (r1 / r2) * pow(10, t2 - t1);
    }
};
/**
 * 乘法
 * @param num1
 * @param num2
 * @returns {number}
 * @constructor
 */
multiplication = function (num1, num2) {
    if (num1 == undefined) {
        return 0;
    }
    if (num2 == undefined) {
        num2 = 100;
    }
    var m = 0, s1 = num1.toString(), s2 = num2.toString();
    try {
        m += s1.split('.')[1].length;
    } catch (e) {
    }
    try {
        m += s2.split('.')[1].length;
    } catch (e) {
    }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
};
/**
 * 加法
 * @param num1
 * @param num2
 * @returns {number}
 * @constructor
 */
addition = function (num1, num2) {
    var r1 = 0, r2 = 0, m;
    try {
        r1 = num1.toString().split('.')[1].length;
    } catch (e) {
    }
    try {
        r2 = num2.toString().split('.')[1].length;
    } catch (e) {
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (num1 * m + num2 * m) / m;
};
/**
 * 减法
 * @param num1
 * @param num2
 * @returns {string}
 * @constructor
 */
subtraction = function (num1, num2) {
    var r1 = 0, r2 = 0, m, n;
    try {
        r1 = num1.toString().split('.')[1].length;
    } catch (e) {
    }
    try {
        r2 = num2.toString().split('.')[1].length;
    } catch (e) {
    }
    m = Math.pow(10, Math.max(r1, r2));
    n = (r1 >= r2) ? r1 : r2;
    return ((num1 * m - num2 * m) / m).toFixed(n);
};


export = {
    subtraction,
    addition,
    multiplication,
    division,
};

module.exports = export;
