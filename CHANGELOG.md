
# Changelog

### 3.3.0 — _2016, July 22nd_

#### Features

- **[#273](https://github.com/jlmakes/scrollreveal.js/issues/273) New Callbacks:** `beforeReveal(el)`
- **[#273](https://github.com/jlmakes/scrollreveal.js/issues/273) New Callback:** `beforeReset(el)`

_Example:_

```js
// Let’s see all 4 together now...
sr.reveal('.foo', {
  beforeReveal: (el) => console.log('Reveal started...'),
  afterReveal: (el) => console.log('Reveal complete.'),
  beforeReset: (el) => console.log('Reset triggered...'),
  afterReset: (el) => console.log('Reset complete.')
})
```

### 3.2.0 — _2016, July 8th_

Includes patchwork up to 3.1.5.

#### Features

- **Reveal Node Lists**: Add support for `Node List` objects as the first parameter of `reveal()`
```js
var elemList = document.querySelectorAll('.selector');
sr.reveal(elemList);
```

- **Version Check**: Easily check which version of ScrollReveal you’re running.
```js
sr.version // e.g. returns 3.2.0
```

#### Fixes

- *Compatibility*: Replace automatic module wrapper with a manual solution (Fixes [#253](https://github.com/jlmakes/scrollreveal.js/issues/253))
- *Functionality*: Fix  `config.distance` values when `config.origin` is `top` or `left`.(Fixes [#270](https://github.com/jlmakes/scrollreveal.js/issues/270))
- *Functionality*: Correctly record the interval argument for  `sync()` (Fixes [#268](https://github.com/jlmakes/scrollreveal.js/issues/268))
- *Functionality*: Fix animation sequence with `config.reset` (Fixes [#241](https://github.com/jlmakes/scrollreveal.js/issues/241))

#### Improvements

- *Compatibility*: Add `requestAnimationFrame` fallback. (Resolves [#267](https://github.com/jlmakes/scrollreveal.js/issues/267))
- *Functionality*: Remove `console.log()` from minified distribution (Fixes [#235](https://github.com/jlmakes/scrollreveal.js/issues/235))

### 3.1.0 — _2016, February 22nd_

Includes patchwork up to 3.0.9.


#### Features

- **Sequences**: New 3rd argument in `reveal()` to automate sequenced animation setup.
```html
<!-- example.html -->
<div class="sequenced"> Foo </div>
<div class="sequenced"> Bar </div>
<div class="sequenced"> Bun </div>
```
```js
// scripts.js
sr.reveal('.sequenced', { reset: false }, 1000);
```

- **Container Selectors**: Add support for `string` selectors to define `config.container`

```js
window sr = ScrollReveal({ container: '.container' });
// or
sr.reveal('.foo', { container: '.fooContainer' });
```

- **Reveal Nodes**: Add support for `Node` objects as the first parameter of `reveal()`

```js
// What you’re used to...
sr.reveal('.myElem');

// New! Pass a Node (works great with React!)
var myElem = document.querySelector('.myElem');
sr.reveal(myElem);

```


#### Fixes

- *Functionality*: Add missing support for `config.mobile` (Fixes [#216](https://github.com/jlmakes/scrollreveal.js/issues/216))
- *Functionality*: Return correct value when checking element visibility. (Fixes [#193](https://github.com/jlmakes/scrollreveal.js/issues/193), [#196](https://github.com/jlmakes/scrollreveal.js/issues/196))
- *Functionality*: Improve runtime for chained `reveal()` calls. (Fixes [#212](https://github.com/jlmakes/scrollreveal.js/issues/212))
- *Compatibility*: Debug Internet Explorer 9. (Fixes [#230](https://github.com/jlmakes/scrollreveal.js/pull/230))
- *Compatibility*: Debug Chrome on iOS. (Fixes [#196](https://github.com/jlmakes/scrollreveal.js/issues/196))
- *Compatibility*: Explicitly reference `window` object.
- *Compatibility*: Adjust AMD configuration for Webpack (Fixes [#209](https://github.com/jlmakes/scrollreveal.js/issues/209))

#### Improvements

- *Functionality*: Overwrite (instead of destroy) existing transition styles. (Resolves [#197](https://github.com/jlmakes/scrollreveal.js/issues/197))
- *Functionality*: Fail silently with `console.log` instead of `console.warn`
- *Performance*: Refactored initialization when using `sync()`
- *Performance*: Improve accuracy of callback timers.

### 3.0.0 — _2015, December 15th_

>**Note:** Version 3 is _not backwards compatible_ with version 2.

Reimagining ScrollReveal for vastly improved flexibility and maintainability! :bow:

#### _Breaking Changes!!_

- `config` object has been completely overhauled.
    - `config.enter` renamed `config.origin`
    - `config.wait` renamed `config.delay`
    - `config.delay` renamed `config.useDelay`
    - `config.over` renamed `config.duration`
    - `config.move` renamed `config.distance`
    - `config.viewport` renamed `config.container`
    - `config.vFactor` renamed `config.viewFactor`
    - `config.complete` renamed `config.afterReveal`
    - Time values are now expected in milliseconds (instead of `string`)
        - e.g. `config.wait = "0.5s"` is now `config.delay = 500`
    - `config.scale` expects value type `number` (instead of `Object`)
        - e.g. `config.scale = { direction: 'up', power: '10%' }` is now `config.scale = 0.9`
    - `config.rotation` axis values require `string` with unit type (instead of `number`)
        - e.g. `config.rotation.x = 10` is now `config.rotation.x = "10deg"`
- ScrollReveal constructor is now capitalized.
    - e.g. `window.sr = ScrollReveal();`
- `data-sr` attribute and all **keywords are no longer used**. Instead, use classes and JavaScript.

_Example using version 2.3.2 (deprecated)_
```html
<!-- old.html -->
<div data-sr="enter bottom over 2s and wait 1s"> Bad Foo </div>
<div data-sr="enter bottom over 2s and wait 1s"> Bad Bar </div>
```
```js
// old.js
window.sr = scrollReveal();
sr.init();
```

_Example using version 3.0.0_
```html
<!-- new.html -->
<div class="myReveal"> Good Foo </div>
<div class="myReveal"> Good Bar </div>
```
```js
// new.js
window.sr = ScrollReveal();
sr.reveal('.myReveal', { origin: 'bottom', duration: 2000, delay: 1000 });
```

#### Features

- **JavaScript API**: All new developer interface. (Resolves [#1](https://github.com/jlmakes/scrollreveal.js/issues/1), [#122](https://github.com/jlmakes/scrollreveal.js/issues/122))
    - Easily configure (and re-configure) multiple reveal sets
    - Makes working with aysnchronous content a breeze
    - Drastically cleaner markup
- **Horizontal Scrolling**: Add support for horizontal scrolling. (Resolves [#184](https://github.com/jlmakes/scrollreveal.js/issues/184))
- **New Callback**: `config.afterReset` — triggers when an element completely resets.

#### Improvements

- *Performance*: 44% smaller, only 2.8KB minified and g-zipped.
- *Functionality*: Reveals now resolve to the element’s computed opacity, instead of  `1`. (Resolves [#185](https://github.com/jlmakes/scrollreveal.js/issues/185))
- *Functionality*: The reliability of callback timers has been greatly improved.




# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## 3.3.1 - 2016-07-22

### Added
- Stuff

### Changed
- Stuff

## 3.3.0 - 2016-07-22

### Added
- Stuff

### Changed
- Stuff

## 3.2.0 - 2016-07-08

### Added
- Stuff

### Changed
- Stuff

## 3.1.5 - 2016-07-06

### Added
- Stuff

### Changed
- Stuff

## 3.1.4 - 2016-03-28

### Added
- Stuff

### Changed
- Stuff

## 3.1.3 - 2016-03-28

### Added
- Stuff

### Changed
- Stuff

## 3.1.2 - 2016-03-23

### Added
- Stuff

### Changed
- Stuff

## 3.1.1 - 2016-03-08

### Added
- Stuff

### Changed
- Stuff

## 3.1.0 - 2016-03-07

### Added
- Stuff

### Changed
- Stuff

## 3.0.9 - 2016-01-14

### Added
- Stuff

### Changed
- Stuff

## 3.0.8 - 2016-01-13

### Added
- Stuff

### Changed
- Stuff

## 3.0.7 - 2016-01-13

### Added
- Stuff

### Changed
- Stuff

## 3.0.6 - 2016-01-02

### Added
- Stuff

### Changed
- Stuff

## 3.0.5 - 2015-12-30

### Added
- Stuff

### Changed
- Stuff

## 3.0.4 - 2015-12-30

### Added
- Stuff

### Changed
- Stuff

## 3.0.3 - 2015-12-22

### Added
- Stuff

### Changed
- Stuff

## 3.0.2 - 2015-12-22

### Added
- Stuff

### Changed
- Stuff

## 3.0.1 - 2015-12-21

### Added
- Stuff

### Changed
- Stuff

## 3.0.0 - 2015-12-15

### Added
- Stuff

### Changed
- Stuff

### Added
- Stuff

### Changed
- Stuff

## 2.3.2 - 2015-06-15

### Changed
- Update `bower.json` syntax. Closes [#150](https://github.com/jlmakes/scrollreveal.js/issues/150).

## 2.3.1 - 2015-06-04

### Added
- Support instantiation without `new` keyword. Closes [#148](https://github.com/jlmakes/scrollreveal.js/issues/148).

## 2.3.0 - 2015-04-25

### Added
- New keyword `vFactor` and alias `vF`.
- New keyword `opacity` to control starting opacity.

### Removed
- The easing keyword `hustle` was removed.

## 2.2.0 - 2015-03-18

### Added
- New keyword `spin` to control yaw.
- New keyword `roll` to control roll.
- New keyword `flip` to control pitch.

### Changed
- Updated README.

## 2.1.0 - 2014-11-25

### Added
- Support various tables for mobile detection.  Closes [#32](https://github.com/jlmakes/scrollreveal.js/issues/32) [#81](https://github.com/jlmakes/scrollreveal.js/issues/81).
- Confirm CSS Transition support during instantiation.  Closes [#109](https://github.com/jlmakes/scrollreveal.js/issues/109).

## 2.0.5 - 2014-11-23

### Changed
- Revert change to `animate`. Closes [#108](https://github.com/jlmakes/scrollreveal.js/issues/108).

## 2.0.4 - 2014-11-21

### Changed
- Refactor `animate` method.
- Revert change to `isElementInViewport`. Closes [#106](https://github.com/jlmakes/scrollreveal.js/issues/106).

## 2.0.3 - 2014-11-14

### Added
- `data-sr` attributes are now stripped from initialized elements. Closes [#100](https://github.com/jlmakes/scrollreveal.js/issues/100) @orapouso.
- Live reload added to Gulp tasks.

### Changed
- Revise `isElementInViewport` logic.
- Minor edit to source comments.

### Removed
- Error when two or more instances share the same viewport element. Closes [#98](https://github.com/jlmakes/scrollreveal.js/issues/98) @orapouso.

### Fixed
- Support for `config.delay = "onload"`.
- Instantiate new instances of `setTimeout` correctly to trigger `config.complete`. Closes [#96](https://github.com/jlmakes/scrollreveal.js/issues/96).

## 2.0.2 - 2014-10-23

### Added
- Error when two or more instances share the same viewport element. Closes [#91](https://github.com/jlmakes/scrollreveal.js/issues/91).

### Fixed
- Unused parameter removed from `styleFactory` definition.
- Update NPM and Bower references with new distribution path.

## 2.0.1 - 2014-10-18

### Fixed
- `config.viewport` not working correctly.
- Minor edit to source comments.

## 2.0.0 - 2014-10-17

### Added
- New keyword `scale`  controls element starting size.
- New option `config.complete` defines a callback for when reveals finish.
- New option `config.viewport` defines custom viewports.
- New option `config.mobile` enables/disables ScrollReveal on mobile devices.
- New option `config.delay` controls when animations are delayed.

### Changed

- **BREAKING** -- ScrollReveal now uses the `data-sr` attribute to parse animation instructions, in place of `data-scroll-reveal`.
- Repository now honors [Semantic Versioning](http://semver.org/).

### Removed
- The keyword `after` has been removed.

## 0.1.3 - 2014-05-26 [YANKED]

### Added
- Starting opacity to configuration options. Closes [#33](https://github.com/jlmakes/scrollreveal.js/issues/33) @kierzniak.

### Changed
- Scroll event handling now uses `requestAnimationFrame`. Closes [#48](https://github.com/jlmakes/scrollreveal.js/issues/48) @pazguille.
- Generated styles are now stored in an object, wherein a key property corresponds to a `data-scroll-reveal-id` attribute on each element. Closes [#38](https://github.com/jlmakes/scrollreveal.js/pull/38) @georgelee1.

## 0.1.2 - 2014-03-13 [YANKED]

### Added
- Support elements with `position: fixed`. Closes [#35](https://github.com/jlmakes/scrollreveal.js/issues/35).

### Fixed
- Generated style output to be more specific. Closes [#37](https://github.com/jlmakes/scrollreveal.js/issues/37).

## 0.1.1 - 2014-03-06 [YANKED]

### Fixed
- Incorrect behavior using `enter` keyword with `top` or `left` values. Closes [#13](https://github.com/jlmakes/scrollreveal.js/issues/13) [#31](https://github.com/jlmakes/scrollreveal.js/issues/31) @sherban @danycerone.

## 0.1.0 - 2014-03-05 [YANKED]

### Added
- AMD/CommonJS distribution.
- Gulp configuration and build process.
- Test suite setup using Testling.

### Changed
- **BREAKING** -- ScrollReveal now uses the `data-scroll-reveal` attribute to parse animation instructions, in place of `data-scrollReveal`.

## 0.0.4 - 2014-02-28 [YANKED]

### Fixed
- ScrollReveal no longer destroys the existing style attribute on revealed elements, but instead, now appends the necessary animation styles to existing inline styles.

## 0.0.3 - 2014-02-22 [YANKED]

### Added
- Library and author meta data added to top of source file.

### Fixed
- Remove unused CSS Transition/Transform prefixes for Mozilla and Opera.

## 0.0.2 - 2014-02-13 [YANKED]

### Added
- CHANGELOG
- Customize defaults by passing a configuration object to the constructor.
- Reverse reveal animations when elements leave the viewport using the `reset` keyword, so they can reveal each time they enter the viewport.
- Control animation easing by replaxing the `move` keyword with new easing keywords, such as `ease` or `ease-in-out`.
- Add library documentation and code examples to README.

### Changed
- ScrollReveal is no longer automatically instantiated by the `DOMContentLoaded` event.

## 0.0.1 - 2014-01-22 [YANKED]

### Added
- README
- Initial commit
