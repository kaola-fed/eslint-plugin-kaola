/**
 * @fileoverview Rule to disallow incorrect semicolons
 * @author Aeo
 */

'use strict';

const Constant = require('../constant');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    let KEYWORDS = Constant.KEYWORDS.concat(context.options || []);
    /**
     * Check if the node name is present inside the KEYWORDS list
     * @param {ASTNode} id id to evaluate
     * @returns {void}
     * @private
     */
    function checkForViolation(id) {
        if (KEYWORDS.indexOf(id.name) > -1) {
            context.report({
                node: id,
                message: 'Shadowing of the keyword: \'{{idName}}\'.',
                data: {
                    idName: id.name
                }
            });
        }
    }
    return {
        VariableDeclarator(node) {
            checkForViolation(node.id);
        },
        ArrowFunctionExpression(node) {
            [].map.call(node.params, checkForViolation);
        },
        FunctionExpression(node) {
            if (node.id) {
                checkForViolation(node.id);
            }
            [].map.call(node.params, checkForViolation);
        },
        FunctionDeclaration(node) {
            if (node.id) {
                checkForViolation(node.id);
                [].map.call(node.params, checkForViolation);
            }
        },
        CatchClause(node) {
            checkForViolation(node.param);
        }
    };
};