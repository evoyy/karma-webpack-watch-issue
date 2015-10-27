// Every test file is required using the require.context and compiled with
// webpack into one test bundle. Negative lookahead to avoid matching this
// file itself.
var testsContext = require.context('.', true, /^((?!webpack).)*\.js$/);
testsContext.keys().forEach(testsContext);
