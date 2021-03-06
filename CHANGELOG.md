# Changelog

> **Tags:**
> - [New Feature]
> - [Bug Fix]
> - [Breaking Change]
> - [Documentation]
> - [Internal]
> - [Polish]

_Note: Gaps between patch versions are faulty/broken releases._

## 2.0.2
  * __[Internal]__
    * Tested with `react@0.14.0` and going forward `react@^0.14.0` is required for test and development
    * `Object.assign` is no longer imported from React internals

## 2.0.1
  * __[Bug Fix]__
    * `react-flexr` now works correctly with `stilr@^1.2.1`

## 2.0.0
  * __[Breaking Change]__
    * Context rendering removed. Use `setBreakpoints` instead.
    * react-style removed. [Stilr](https://github.com/kodyl/stilr) is now
      handling base styles. See updated readme for more information on how to
      include basic styling for flexr. (tl;dr get css at react-flexr/styles.css)

  * __[Internal]__
    * Simplified file structure.

  * __[New Features]__
    * `findMatch`
    * `setBreakpoints`
    * `getBreakpoints`
    * `findBreakpoints`
    * `optimizedResize`

  * __[Bug Fix]__
    * gutter is now properly propagated downwards to child Cell components if
      set on Grid component.

  * __[Documentation]__
    * Documentation greatly improved.
    * Added Changelog!
