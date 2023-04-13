# Arona: AI assistant waifu

Arona is a data-oriented self-prompting AI assistant powered by TypeScript and Rust. Runs in both the browser, CLI, and programmatically via API.

### Usage

- Use the browser interface via https://arona.kivotos.sh
- Serve locally via `arona serve`

### Installation

`npm i -g arona`

### Features

- AI assistant: uses OpenAI Whisper with LLMs to generate models
- Communication across multiple AI agents
- Self-prompting supported: given a single starting objective, Arona can generate a sequence of actions to achieve it and execute it.
- Supplies data sources that Arona can look into (e.g. SQL)

### How does it work?

- Produce the sequence of actions based on the initial objectives.

### Future Plans

- [ ] Add implementation for Rust and WebAssembly
