const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");

const checks = [
  ["Has canonical link", /<link rel="canonical"\s+href="https:\/\/vivreauxphilippines\.com\/">/i.test(html)],
  ["Has meta description", /<meta name="description"\s+content="[^"]+">/i.test(html)],
  ["HTML lang attribute set", /<html[^>]*\slang="[^"]+"/i.test(html)],
  ["Hero has aria-label", /<section id="hero"[^>]*aria-label="[^"]+"/i.test(html)],
  ["YouTube iframe lazy loads", /<iframe[^>]*loading="lazy"/i.test(html)],
  ["App script loaded", /<script src="assets\/app\.js" defer><\/script>/i.test(html)],
  ["No replacement characters", !html.includes("\uFFFD")]
];

let failed = false;
checks.forEach(([label, ok]) => {
  if (ok) {
    console.log(`PASS ${label}`);
  } else {
    failed = true;
    console.error(`FAIL ${label}`);
  }
});

if (failed) {
  process.exit(1);
} else {
  console.log("All checks passed.");
}
