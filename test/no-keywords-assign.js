/**
 * @fileoverview Disallow shadowing of KEYWORDS
 * @author Aeo
 */

'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../rules/no-keywords-assign'); 
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();
const KEYWORDS = require('../constant').KEYWORDS;

ruleTester.run('no-keywords-assign', rule, {
    valid: [
        'function foo(goods){ var goodsId; }',
        '!function foo(goods){ var goodsId; }',
        '!function(goods){ var goodsId; }',
        'try {} catch(e) {}',
        { code: 'export default function() {}', parserOptions: { sourceType: 'module' } }
    ],
    invalid: KEYWORDS.reduce((list, item) => list.concat([
        {
            code: `function ${item}(${item}) { var ${item}; !function ${item}(${item}) { try {} catch(${item}) {} }; }`,
            errors: [].fill.call({ length: 6 }, { message: `Shadowing of the keyword: '${item}'.`, type: 'Identifier' })
        },
        {
            code: `var ${item} = (${item}) => { var ${item}; !function ${item}(${item}) { try {} catch(${item}) {} }; }`,
            parserOptions: { ecmaVersion: 6 },
            errors: [].fill.call({ length: 6 }, { message: `Shadowing of the keyword: '${item}'.`, type: 'Identifier' })
        }
    ]), [])
});