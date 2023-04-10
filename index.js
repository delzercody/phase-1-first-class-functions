
function cody() {}
function frank() {}
function receivesAFunction(cody) {
    cody()
}
function returnsANamedFunction() {
   return frank
}

function returnsAnAnonymousFunction() {
     return () => ""
}