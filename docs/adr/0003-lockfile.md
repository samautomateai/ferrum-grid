# ADR 0003: Reproducible dependency installation

CI run 6 generated a lockfile. A temporary branch-scoped push-only workflow records a freshly resolved lockfile using the repository token. It runs no dependency lifecycle scripts and must be removed after the lockfile commit. The resulting commit requires a fresh CI run with frozen installation. Never grant write permissions to pull-request workflows.
