# Architecture

Proposed: framework adapters -> public API -> core lifecycle and state -> data, layout and interaction engines -> renderer ports. DOM renderer is first; Canvas and workers are optional. Client, infinite, server and viewport row models share explicit contracts for stable identity, cancellation and transactions. Plugins declare dependencies and deterministic lifecycle. Core must not import DOM or framework code. Use safe text rendering, bounded caches and versioned state. WASM requires benchmark evidence.
