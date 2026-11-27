# Engineering rules

OpenSpec proposal, design and acceptance tests precede implementation. Use TDD. Do not copy proprietary code. Core has zero runtime dependencies and no DOM or framework imports. Document public APIs and ADRs. Require 90% line and branch coverage, strict TypeScript, 120-character lines, 500-line files, complexity <=10, lint, formatting, security and licence checks. Do not claim parity or completion without evidence. Update memory after each change. Run task ci before merge. Never commit secrets.
