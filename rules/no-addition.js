/**
 * @fileoverview Rule to disallow potential float addition or addition assignment
 * @author zhangxueai
 */
"use strict";

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
};

function isInt(n) {
    return n % 1 === 0;
}

function validOperand(left, right) {
    if (left.type === 'BinaryExpression') {
        if (right.type === 'Literal' && getType(right.value) === 'float') {
            return false
        } else {
            return true;
        }
    }

    if (right.type === 'BinaryExpression') {
        if (left.type === 'Literal' && getType(left.value) === 'float') {
            return false
        } else {
            return true;
        }
    }

    if (left.type === 'Literal' && (getType(left.value) === 'string' || getType(left.value) === 'int')) {
        return true;
    }

    if (right.type === 'Literal' && (getType(right.value) === 'string' || getType(right.value) === 'int')) {
        return true;
    }

    return false;
}

function getType(value) {
    var type = '';

    switch(true) {
        case typeof value === 'string':
            type = 'string';
            break;
        case isFloat(value):
            type = 'float';
            break;
        case isInt(value):
            type = 'int';
            break;
        default:
            type = 'other';
            break;
    }

    return type;
}

function isBadOperator(operator) {
    return operator === "+" || operator === "+=";
}

function isBadAddition(node) {
    var operator = node.operator;
    var right = node.right;
    var left = node.left;

    return isBadOperator(operator) && !validOperand(left, right);
}

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "disallow addition or addition assignment to avoid float addition",
            category: "Best Practices",
            recommended: true
        },
        schema: [],

    },

    create: function(context) {

        var message = "no addition in case of unexpected float addition";

        return {
            "BinaryExpression, AssignmentExpression": function(node) {
                if (isBadAddition(node)) {
                    context.report({
                        node: node,
                        message: message
                    });
                }
            },
        };
    }
};
