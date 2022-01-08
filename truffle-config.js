const path = require("path");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
  },
  test_file_extension_regexp: /.*\.ts$/,
  migrations_file_extension_regexp: /.*\.js$/,
  test_directory: "./src/__test__",
  migrations_directory: path.resolve(__dirname, "./src/migrations"),
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      version: "^0.8.10",
    },
  },
};
