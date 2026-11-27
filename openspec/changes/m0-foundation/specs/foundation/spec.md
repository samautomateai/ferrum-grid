## ADDED Requirements

### Requirement: Reproducible quality gates
The project SHALL provide a single CI task that fails when any required quality gate fails.

#### Scenario: Gate failure
- **WHEN** a required test or static check fails
- **THEN** CI exits unsuccessfully

### Requirement: Independent core
The core SHALL have no runtime dependencies on external packages or browser frameworks.

#### Scenario: Forbidden dependency
- **WHEN** core imports a framework or DOM renderer
- **THEN** the architecture check rejects the change
