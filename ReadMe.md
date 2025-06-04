# Pacific Climate Heroes

*A climate-action board game for Pacific Island communities, brought to life as a digital prototype.*

## Table of Contents

* [About](#about)
* [Getting Started](#getting-started)
* [Development Workflow](#development-workflow)
* [Usage](#usage)
* [Features](#features)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

---

## About

**Pacific Climate Heroes** is a game-based learning tool that empowers players to engage with climate resilience and environmental action through Pacific Island stories and ecosystems.

This digital prototype recreates the board in-browser with interactive drag-and-drop tokens over a custom background and hexagonal grid. The prototype supports playtesting, UI development, and integration planning before physical production.

Designed for:

* Environmental education programs
* Community resilience workshops
* School curricula
* NGOs and partners promoting climate literacy

---

## Getting Started

To run the project locally:

### Prerequisites

* Node.js (v18+)
* Git
* A modern web browser

### Installation

```bash
# Clone the repository
git clone https://github.com/jhsizemore/Pacific-Climate-Heroes.git
cd Pacific-Climate-Heroes

# Install dependencies
npm install

# Start development server
npm run dev
```

Then open your browser to: `http://localhost:5173/`

---

## 🛠️ Development Workflow

This project uses the [AI Dev Tasks for Cursor](https://github.com/snarktank/ai-dev-tasks) workflow — a lightweight system of `.mdc` (Markdown Command) files that guide AI-assisted development inside the [Cursor editor](https://cursor.sh/). This provides a structured, reviewable way to build features with AI help.

### Development Phases:

1. **PRD Creation** – Create a detailed Product Requirement Document using `create-prd.mdc`.
2. **Task Generation** – Break the PRD into a step-by-step implementation plan using `generate-tasks.mdc`.
3. **Task Execution** – Guide the AI to complete tasks one-by-one with `process-task-list.mdc`.
4. **Approval & Iteration** – Review each task’s output, provide feedback or approve.
5. **Progress Tracking** – Visually track which features are done and what’s next.

This process keeps the AI grounded, iterative, and responsive to design needs.
*Great for fast-moving prototypes and clean code development.*

Learn more at: [snarktank/ai-dev-tasks](https://github.com/snarktank/ai-dev-tasks)

---

## Usage

Once the app is running:

1. The board displays a Pacific Island background with a transparent hex grid.
2. Tokens can be clicked and dragged across the grid.
3. The project supports modular tokens, responsive layout, and dynamic asset updates.
4. Future versions will integrate turns, rulesets, event cards, and player logic.

---

## Features

* 🧩 **Hex Grid Overlay** on a fully illustrated board
* 🎮 **Interactive Tokens** with drag-and-drop functionality
* 🖼️ **Custom Map Backgrounds** for different Pacific settings
* 🌀 **Modular Component Design** (React + Vite)
* 🧠 **AI-Aided Development Workflow** for scalable feature planning

---

## Contributing

We welcome designers, developers, and educators to help shape Pacific Climate Heroes!

To contribute:

1. Fork this repo.
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes and commit (`git commit -m "Your message"`)
4. Push the branch (`git push origin feature-name`)
5. Open a Pull Request

👀 See our [Development Workflow](#️-development-workflow) for how to engage using AI Dev Tasks in Cursor.

---

## License

Distributed under the **MIT License**. See `LICENSE` for full terms.

---

## Contact

Project Lead: [Hunter Sizemore](mailto:jhsizemore@gmail.com)  
Company: Kliawota Disaen, Port Vila, Vanuatu  
GitHub: [@jhsizemore](https://github.com/jhsizemore)  
Website: [kliawotadisaen.com](https://kliawotadisaen.com) *(Coming Soon)*

---

## Acknowledgements

* 🌴 **Ni-Vanuatu Artists** for contributing original board illustrations
* 🛠️ **snarktank/ai-dev-tasks** for the powerful AI-assisted development model
* 💡 Inspired by educational tools in the climate justice and resilience movement
* ❤️ Special thanks to Pacific Island youth and community leaders guiding this vision

---
