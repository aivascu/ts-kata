# TypeScript Kata template

[![Node CI](https://github.com/aivascu/ts-kata/actions/workflows/nodejs.yml/badge.svg?branch=master)](https://github.com/aivascu/ts-kata/actions/workflows/nodejs.yml)

This repository is a simple TypeScript project for experimenting with coding Katas.

## Summary

- [How to setup](#how-to-setup)
  - [Working locally](#working-locally)
  - [Working inside container](#working-inside-container)
- [How to use](#how-to-use)
  - [Installing packages](#installing-packages)
  - [Building](#building)
  - [Running tests](#running-tests)
- [License](#license)

## How to setup

There are two main ways to use this repository. You can setup the project locally or you could open it inside a Docker container, using VS Code.

### Working locally

This project tries to keep a minimum of requirements. You'll need just two things to use it efficiently.

- Node.js (v15.x)
- Visual Studio Code

Next, inside the VS Code, go to the extensions packages and check the recommended extensions, by the repository.

At the moment there are three recommended extensions

- [Test Explorer UI](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer)
- [Jest Test Explorer](https://marketplace.visualstudio.com/items?itemName=kavod-io.vscode-jest-test-adapter)
- [Jest (Optional)](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

### Working inside container

To work inside an isolated container you'll need the following dependencies.

- Docker
- Visual Studio Code
  - [Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)

Next, inside VS Code, run the action `Remote-Containers: Reopen in Container`. All the necessary dependencies will be installed automatically inside the container, including the recommended extensions.

## How to use

Since this is not a guide on how to practice conding katas, below are described only the steps necessary to build and run the tests.

### Installing packages

Once you've setup the project, depending on the option you picked, you might want to install the dependencies. To install dependencies run the package install command inside the repository directory.

```sh
> npm install
```

### Building

To build the project, you can invoke the following command inside your command line.

```sh
> npm run build
```

### Running tests

To run the tests you can run the following command.

```sh
> npm run test
```

To run test continuously you can substitute `test` with `watch-test`.

If you have installed the recommended extensions inside VS Code, the tests will be run automatically on file save by the Jest extensions. Or you can choose to run them manually from the test explorer panel.

## License

Copyright &copy; 2021 [Andrei Ivascu](https://github.com/aivascu).<br/>
This project is [MIT](https://github.com/aivascu/ts-kata/blob/master/LICENSE) licensed.
