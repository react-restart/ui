---
title: Getting Started
slug: /
---

Restart UI is a set of full featured, extensible, and accessible UI components, designed to integrate into any styling
framework or system. Restart components, are "headless", meaning they don't provide any styles. Components encapsulate
the complicated logic and and state without being prescriptive about their look and feel.

## Installation

```sh
npm install react-overlays
```

Or with yarn

```sh
yarn add react-overlays
```

## Usage

Components can be imported from the main package or directly like:

```js
import Dropdown from "react-overlays/Dropdown";
```

## Styling

Restart UI is a toolkit for accessible.
It is not a UI framework but is meant to be incorporated _into_ frameworks. To make those integrations
possible, React Overlays is style-agnostic and **does not** come with any CSS.
You should provide your own styles, and the documentation provides some simple examples
for how to do that. For more complex integrations, check out [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap).

There are a few places where inline `style`s are applied, however. They are functionally
required and very minimal. Specifically `PopperJs` injects it's own styles in order
to position overlays and dropdowns, and `Modal` applies `overflow: hidden` to the
document body. These can technically be overridden but it's very unlikely to be
required.
