/**
 * @fileoverview test no addition rule
 * @author zhangxueai
 */
"use strict";

var rule = require("../rules/no-addition"),

    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();

var warning = "no addition in case of unexpected float addition";

ruleTester.run("no-addition", rule, {

    valid: [
        {
            code: "a-b"
        },
        {
            code: "a++"
        },
        ,
        {
            code: "+a"
        }
    ],

    invalid: [
        {
            code: "1.1 + 1.2",
            errors: [{
                message: warning,
                type: "BinaryExpression"
            }]
        },
        {
            code: "a + b",
            errors: [{
                message: warning,
                type: "BinaryExpression"
            }]
        },
        {
            code: "a += b",
            errors: [{
                message: warning,
                type: "AssignmentExpression"
            }]
        },
        {
            code: "percent += Number(item.prizeProb)",
            errors: [{
                message: warning,
                type: "AssignmentExpression"
            }]
        }
    ],
});
