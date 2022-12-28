# ConfigVault

ConfigVault is a tool for managing configuration files for node packages. It allows you to keep configuration files in a folder in the root directory of your project, rather than in the home directory, to reduce clutter.

## Installation

To install ConfigVault, run the following command:

```shell
npm install --save config-vault
```

## Usage

ConfigVault provides the following commands:

- `cv lint`: Run the linting tool with the specified configuration file.
- `cv format`: Run the formatting tool with the specified configuration file.

By default, ConfigVault will use the configuration files in the config folder. To specify a different configuration file, use the --config option. For example:

```shell
cv lint --config path/to/config.eslintrc
cv format --config path/to/config.prettierrc
```

You can also add the cv lint and cv format commands to the scripts field in your package.json file to run them as npm scripts:

```json
{
  "scripts": {
    "lint": "cv lint",
    "format": "cv format"
  }
}
```

Then, you can run the commands using npm run:

```shell
npm run lint
npm run format
```

## License

ConfigVault is licensed under the MIT License. See the [LICENSE ](./LICENSE) file for details.

I hope this helps! Let me know if you have any questions.
