# Rule to disallow potential float addition or addition assignment(no-addition)

Disallow addition or addition assignment to avoid float addition

## Rule Details

This rule aims to prevent float addition in Javascript, code such as `a + b === 0.3` may accept float numbers 0.1 and 0.2 which will cause precision problem.

Examples of **incorrect** code for this rule:

```js
// if statement
var a = 0.1,
    b = 0.2;

if (a + b === 0.3) {
    console.log('sum is 0.3');
}

// string concat
var world = 'world';

var helloWorld = 'hello ' + world;

```

Examples of **correct** code for this rule:

```js
// if statement
var sum = 0.3;

if (sum === 0.3) {
    console.log('sum is 0.3');
}

// string concat
var world = 'world;

var helloWorld = `hello${world}`;

```

## When Not To Use It

if you really need to add numbers by Javascript, otherwise the sum should be transmitted by backend.
