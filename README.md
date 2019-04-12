# example-percyscript

[![CircleCI](https://circleci.com/gh/percy/example-percyscript.svg?style=svg)](https://circleci.com/gh/percy/example-percyscript)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io)

Example app showing the easiest way to get started with visual testing and [Percy](https://percy.io/).

Uses the demo [TodoMVC](https://github.com/tastejs/todomvc) app and takes snapshots of the app while interacting with it.

To install dependencies, compile and run the Todo app:

```bash
$ npm install
$ open index.html
```

To run the PercyScript:
```bash
$ npm test
```

See `snapshots.js` file for the example script.
