# Design

Use pnpm workspace, strict TypeScript, Go Task and GitHub Actions. Keep core independent. Pin dependencies and commit lockfile before enabling frozen installs. Test on Chromium, Firefox and WebKit once browser harness is introduced. Security and performance gates must fail closed.
