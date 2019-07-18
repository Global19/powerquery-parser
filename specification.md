# Specification Notes

There are a few differences between the [Power Query / M Language Specification](https://docs.microsoft.com/en-us/powerquery-m/power-query-m-language-specification), the Power Query implementation, and this implementation.

## Where the Power Query parser differs from the specification

* The `field-specification` construct requires an `identifier`. Instead `identifer` is replaced with `generalized-identifier`.
* The `type` construct matches either `parenthesized-expression` or `primary-type`. Instead `parenthesized-expression` is replaced with `primary-expression`.
* The `table-type` construct matches on `row-type`. An additional match of `primary-expression` is added on the following tokens: `@`, `identifier`, or `left-parenthesis`.
* The `as-expression` and `is-expression` constructs allow recursion (eg. 1 as number as number). This parser doesn't yet support recursion, but is planned feature work.