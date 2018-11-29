/**
 * @fileoverview Rule to disallow addition or addition assignment
 * @author zhangxueai
 */
"use strict";

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "disallow addition or addition assignment to avoid float addition",
            category: "Best Practices",
            recommended: true
        },
        schema: []
    },

    create: function(context) {

        var message = "no addition in case of unexpected float addition";

        return {
            BinaryExpression: function(node) {
                if (node.operator === '+') {
                    context.report({
                        node: node,
                        message: message
                    });
                }
            },
            AssignmentExpression: function(node) {
                if (node.operator === '+=') {
                    context.report({
                        node: node,
                        message: message
                    });
                }
            }
        };
    }
};
