const { test } = QUnit;
/* const szamologep = new Szamologep(); */
const szamologep = new Szamologep();
console.log(szamologep.add(2, 2));
QUnit.module("osszeadas ", function () {
    test("add létezik-e?", function (assert) {
        assert.ok(szamologep.add, "add létezik");
    });
    test("add függvény-e?", function (assert) {
        assert.ok(typeof szamologep.add === "function", "add egy függvény");
    });
    test("két szám", function (assert) {
        assert.equal(szamologep.add(1, 2), 3);
    });
    test("Pozitív és negatív szám", (assert) => {
        assert.equal(szamologep.add(1, -2), -1);
    });
    test("pozitív és 0", (assert) => {
        assert.equal(szamologep.add(1, 0), 1);
    });
    test("negatív és 0", (assert) => {
        assert.equal(szamologep.add(-1, 0), -1);
    });
    test("szám és szövegesSzám", (assert) => {
        assert.equal(szamologep.add(1, "2"), 3);
    });
    test("szám és negatív szövegesSzám", (assert) => {
        assert.equal(szamologep.add(1, "-2"), -1);
    });
    test("szám és nem számot tartalmazó szöveg", (assert) => {
        assert.equal(szamologep.add(1, "a"), "Nem számokat adtál össze!");
    });
    test("Csak egy érték", (assert) => {
        assert.equal(szamologep.add(1), "Csak egy számot adtál meg");
    });
    test("Nagy szám", (assert) => {
        assert.equal(
            szamologep.add(1.797693134862315e308, 1.797693134862315e308),
            "Túlcsordulás"
        );
    });
});
QUnit.module("kivonás", (hooks) => {
    test("nagyobból a kisebb", (assert) => {
        assert.equal(szamologep.kivon(2, 1), 1);
    });
    test("Kisebből a nagyobb", (assert) => {
        assert.equal(szamologep.kivon(1, 2), -1);
    });
    test("pozitívból negatív", (assert) => {
        assert.equal(szamologep.kivon(1, -2), 3);
    });
    test("negatívból pozitív ", (assert) => {
        assert.equal(szamologep.kivon(-1, 2), -3);
    });
    test("negatívból negatív ", (assert) => {
        assert.equal(szamologep.kivon(-1, -2), 1);
    });
    test("pozitívból 0", (assert) => {
        assert.equal(szamologep.kivon(1, 0), 1);
    });
    test("negatívból 0", (assert) => {
        assert.equal(szamologep.kivon(-1, 0), -1);
    });
    test("szám és szövegesSzám", (assert) => {
        assert.equal(szamologep.kivon(1, "2"), -1);
    });
    test("szám és negatív szövegesSzám", (assert) => {
        assert.equal(szamologep.kivon(1, "-2"), 3);
    });
    test("szám és nem számot tartalmazó szöveg", (assert) => {
        assert.equal(szamologep.kivon(1, "a"), "Nem számokat adtál össze!");
    });
    test("Csak egy érték", (assert) => {
        assert.equal(szamologep.kivon(1), "Csak egy számot adtál meg");
    });
    test("Nagy szám", (assert) => {
        assert.equal(
            szamologep.kivon(-1.797693134862315e308, 1.797693134862315e308),
            "Túlcsordulás"
        );
    });
});

/* const add = require("../../add.js");

QUnit.module("összeadás");

QUnit.test("két szám", (assert) => {
    assert.equal(add(1, 2), 3);
});
QUnit.test("Pozitív és negatív szám", (assert) => {
    assert.equal(add(1, -2), -1);
});
QUnit.test("pozitív és 0", (assert) => {
    assert.equal(add(1, 0), 1);
});
QUnit.test("negatív és 0", (assert) => {
    assert.equal(add(-1, 0), -1);
});
QUnit.test("szám és szövegesSzám", (assert) => {
    assert.equal(add(1, "2"), 3);
});
QUnit.test("szám és negatív szövegesSzám", (assert) => {
    assert.equal(add(1, "-2"), -1);
});
QUnit.test("szám és nem számot tartalmazó szöveg", (assert) => {
    assert.equal(add(1, "a"), "Nem számokat adtál össze!");
});
QUnit.test("Csak egy érték", (assert) => {
    assert.equal(add(1), "Csak egy számot adtál meg");
});
QUnit.test("Nagy szám", (assert) => {
    assert.equal(
        add(1.797693134862315e308, 1.797693134862315e308),
        "Túlcsordulás"
    );
});
 */
