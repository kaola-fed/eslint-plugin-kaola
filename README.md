# eslint-plugin-kaola

[![version](https://img.shields.io/npm/v/eslint-plugin-kaola.svg)](https://www.npmjs.com/package/eslint-plugin-kaola) 
[![Build Status](https://img.shields.io/travis/Deol/eslint-plugin-kaola.svg)](https://travis-ci.org/Deol/eslint-plugin-kaola)
[![Github licences](https://img.shields.io/github/license/Deol/eslint-plugin-kaola.svg)](https://github.com/Deol/eslint-plugin-kaola/blob/master/LICENSE)

[![nodei](https://nodei.co/npm/eslint-plugin-kaola.png?downloads=true)](https://www.npmjs.com/package/eslint-plugin-kaola)

## Installation

```
$ npm i eslint eslint-plugin-kaola --save-dev
```

## Usage

Add `kaola` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "kaola"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "kaola/no-keywords-assign": ["error", ...customKeywords]
    }
}
```