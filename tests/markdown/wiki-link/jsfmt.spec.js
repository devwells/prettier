run_spec(__dirname, ["markdown"], { proseWrap: "always" });
run_spec(__dirname, ["markdown"], { proseWrap: "always", singleQuote: true });
run_spec(__dirname, ["markdown"], { proseWrap: "never" });
run_spec(__dirname, ["markdown"], { proseWrap: "preserve" });
