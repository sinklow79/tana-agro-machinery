// Runs automatically after `npm run build` (npm postbuild hook).
//
// GitHub Pages does NOT serve Git LFS files -- it serves the ~133-byte pointer
// text instead of the actual media. Our source repo stores the section videos
// (Төхөөрөмжүүд) in Git LFS, so the production build must ship the real bytes as
// normal files and tell the gh-pages branch NOT to re-apply the LFS filter when
// committing them. We write a .gitattributes into build/ that disables LFS for
// mp4 in the deployed output only (the source repo keeps using LFS).
//
// Deploy must run `gh-pages` with --dotfiles so this file is actually published.
const fs = require("fs");
const path = require("path");

const buildDir = path.resolve(__dirname, "..", "build");
const target = path.join(buildDir, ".gitattributes");
const contents = "*.mp4 -filter -diff -merge -text\n";

if (!fs.existsSync(buildDir)) {
  console.error("[inject-gitattributes] build/ not found; skipping.");
  process.exit(0);
}

fs.writeFileSync(target, contents);
console.log("[inject-gitattributes] wrote", target);
