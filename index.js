const dotenv = require("dotenv");
const crossEnv = require("cross-env");
const fs = require("fs");
const program = require("commander");

program
  .command("lint")
  .description("Run the linting tool with the specified configuration file")
  .option("-c, --config <path>", "Path to the configuration file")
  .action(function (options) {
    // Read the configuration file
    const configPath = options.config || "config/.eslintrc";
    const config = fs.readFileSync(configPath, "utf8");

    // Inject the configuration into the environment
    dotenv.config({ path: configPath });

    // Run the linting tool with the injected configuration
    crossEnv("eslint");
  });

program
  .command("format")
  .description("Run the formatting tool with the specified configuration file")
  .option("-c, --config <path>", "Path to the configuration file")
  .action(function (options) {
    // Read the configuration file
    const configPath = options.config || "config/.prettierrc";
    const config = fs.readFileSync(configPath, "utf8");

    // Inject the configuration into the environment
    dotenv.config({ path: configPath });

    // Run the formatting tool with the injected configuration
    crossEnv("prettier");
  });

program.parse(process.argv);
