# ADR 0002: Core isolation

Compile core production sources without DOM libraries or ambient Node types. Reject external and parent-relative imports in core during bootstrap. This conservative rule will be replaced by a resolved module graph before nested packages are introduced. It is not a sandbox. CI exports the generated lockfile for review and subsequent frozen installation. No security audit exemptions.
