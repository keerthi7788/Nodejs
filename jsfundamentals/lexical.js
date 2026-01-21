// Lexical scope means:
// A function can access variables that are defined where the function is written,
// not where it is called.

// “Lexical” = location in source code
function f() {
    let privatevariable = 10;
    function logger() {
        console.log(privatevariable);
    }
    function update(value) {
        privatevariable = value;
    }

    return { update, logger }
}
const { update, logger } = f();
const { update: u2, logger: l2 } = f();

logger();
l2();
update(100);
u2(1000);
logger();
l2();