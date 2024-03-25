## Burger Maker CLI

Small and simple example to create an interactive CLI tool.

Dev.to article about the same available [here](https://dev.to/rohit_ambre/simple-interactive-cli-tool-in-nodejavascript-k17-temp-slug-3909018)

#### Uses: 
1. [commander](https://www.npmjs.com/package/commander)
2. [inquirer](https://www.npmjs.com/package/inquirer)
3. [nanospinner](https://www.npmjs.com/package/nanospinner)

#### Requirement
```shell
node version >= v18.12.0
```

#### Use
- For Local Use
    
    Run `node index.js order`


- for global use
    - add `#! /usr/bin/env node` at the top of `index.js` file
    - update `bin` property in `package.json` to
    ```js
    "bin": {
        "burger-maker": "./index.js"
    }
    ```
    - Run: 
    ```shell
    npm i -g .
    ```
    - Open a new terminal
    ```shell
    burger-maker -V
    ```
    ```shell
    burger-maker order
    ```
    (note: if you're using `nvm` make sure, your node is at required version on new terminal)
