---
title: Getting Started
slug: /
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Restart UI is a set of full featured, extensible, and accessible UI components, designed to integrate into any styling
framework or system. Restart components, are "headless", meaning they don't provide any styles. Components encapsulate
the complicated logic and and state without being prescriptive about their look and feel.

## Installation

<Tabs
defaultValue="npm"
values={[
{label: 'npm', value: 'npm'},
{label: 'Yarn', value: 'yarn'},
]}>
<TabItem value="npm">

```bash
npm install @restart/ui
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add @restart/ui
```

</TabItem>
</Tabs>

## Usage

Components can be imported from the main package or directly like:

```js
import Dropdown from "@restart/ui/Dropdown";
```

## Styling

Restart UI is a "headless" framework, meaning each component encapsulates logic and markup but not styling.
Restart UI is intended as a basis for building design systems using which styling technology you like.
You should provide your own styles, and the documentation provides some simple examples
for how to do that. For more complex integrations, check out [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap).

There are a few places where inline `style`s are applied, however. They are functionally
required and very minimal. Specifically `PopperJs` injects it's own styles in order
to position overlays and dropdowns, and `Modal` applies `overflow: hidden` to the
document body. These can technically be overridden but you probably won't need too.
