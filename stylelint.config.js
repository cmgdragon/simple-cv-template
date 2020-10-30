module.exports = {
    "extends": "stylelint-config-standard",
    "plugins": [
      "stylelint-scss"
    ],
    "rules": {
      "scss/selector-nest-combinators": "always",
      "indentation": 2,
      "no-eol-whitespace": true,
      "no-descending-specificity": null,
      "no-extra-semicolons": true,
      "value-keyword-case": "lower",
      "scss/comment-no-empty": true,
      "scss/no-dollar-variables": true,
      "scss/no-duplicate-dollar-variables": true,
      "scss/no-duplicate-mixins": true,
      "at-rule-no-unknown": [
        true,
        {
          "ignoreAtRules": [
            "use",
            "mixin",
            "include"
          ]
        }
      ]
    }
}