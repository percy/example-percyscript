# example-percyscript

[![CircleCI](https://circleci.com/gh/percy/example-percyscript.svg?style=svg)](https://circleci.com/gh/percy/example-percyscript)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/percy/example-percyscript)

Example app showing the easiest way to get started with visual testing and [Percy](https://percy.io/).

See the [PercyScript documentation](https://docs.percy.io/docs/percyscript) for more info.

This app uses the demo [TodoMVC](https://github.com/tastejs/todomvc) app and takes snapshots of it while interacting with the todos.

To install dependencies, compile and run the Todo app:

```bash
$ npm install
$ open index.html
```

To run the PercyScript:
```bash
$ npm run snapshots
```

See `snapshots.js` file for the example script.
