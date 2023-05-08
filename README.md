# react-keypress-shortcuts

## Keyboard Shortcut library for React App

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Credits](#credits)

## General info

This is a wrapper around [keypress.js](http://dmauro.github.io/Keypress/) to add keyboard shortcuts in your react app.

## Technologies

- [react](https://github.com/facebook/react)
- [keypress.js](https://github.com/dmauro/Keypress)

## Setup

To use this package, install it using npm:

```
npm install react-keypress-shortcuts
```

## Use

- Import `ShortcutContextProvider` from `react-keypress` and wrap around you `App` component

```
import { ShortcutContextProvider } from "react-keypress-shortcuts";

...

<ShortcutContextProvider>
    <App />
  </ShortcutContextProvider>

...
```

- To register a shortcut for your component, import `KeyboardShortcut` and use it like this

```
<KeyboardShortcut
        combo="ctrl d"
        description="Description that you want to provide"
        callback={() => console.log("You clicked ctrl d")}
/>

```

- `KeyboardShortcut` accepts 3 props

1. `combo` - This is the key that you want to add shortcut for
2. `description` - Add meaningful description to the shortcut
3. `callback` - action that you want to be performed when the shortcut is activated

- If you want more than 1 shortcuts to register then simply add `KeyboardShortcut` component as above with different combo

- To get the list of all shortcuts registered, import `ShortcutContext` and use it as a context. This context provides a `activeShortcuts` variable

```
import { ShortcutContext } from "react-keypress-shortcuts";

...

  const { activeShortcuts } = useContext(ShortcutContext);
```
