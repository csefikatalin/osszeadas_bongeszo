class Szamologep {
    constructor() {}
    add(a, b) {
        if (typeof b === "undefined") {
            return "Csak egy számot adtál meg";
        } else {
            if (isNaN(Number(a) + Number(b))) {
                console.log(Number(a) + Number(b));
                return "Nem számokat adtál össze!";
            }
            if (
                !isFinite(Number(a)) ||
                !isFinite(Number(b)) ||
                !isFinite(Number(a) + Number(b))
            ) {
                return "Túlcsordulás";
            }
            console.log(Number(a) + Number(b));
            return Number(a) + Number(b);
        }
    }
    kivon(a, b) {
        if (typeof b === "undefined") {
            return "Csak egy számot adtál meg";
        } else {
            if (isNaN(Number(a) - Number(b))) {
                console.log(Number(a) - Number(b));
                return "Nem számokat adtál össze!";
            }
            if (
                !isFinite(Number(a)) ||
                !isFinite(Number(b)) ||
                !isFinite(Number(a) - Number(b))
            ) {
                return "Túlcsordulás";
            }
            console.log(Number(a) - Number(b));
            return Number(a) - Number(b);
        }
    }
}
/* function add(a, b) {
    return a + b;
} */
/* module.exports = szamologep.add; */
