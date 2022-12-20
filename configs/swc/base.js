// T-3235 - don't use this swc config for now (if swcrc can even be extended?)
module.exports =
  {
    $schema:
      "https://json.schemastore.org/swcrc",
    jsc: {
      parser:
        {
          syntax:
            "typescript",
          jsx: true,
          tsx: true,
          dynamicImport: true,
          decorators: true,
        },
      target:
        "esnext",
    },
    minify: false,
    module:
      {
        type: "es6",
      },
  };
