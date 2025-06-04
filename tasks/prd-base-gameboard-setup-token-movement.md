# Base Gameboard Setup & Token Movement Prototype

## Introduction/Overview

This feature introduces an interactive digital board for Pacific Climate Heroes. Users will see an illustrated map with a hexagonal grid and can drag tokens across the board. The goal is to build a simple prototype for testing layout and interaction before implementing game rules.

## Goals

1. Display the Pacific Island map with an overlaid hex grid in the browser.
2. Allow users to drag and drop tokens, snapping them to hex centers.
3. Ensure multiple tokens can be moved independently without errors.
4. Constrain token movement to the bounds of the board.

## User Stories

- **As a player**, I want to drag my climate hero token across the map so I can explore different hexes.
- **As a facilitator**, I want to demonstrate how players interact with the game board so I can test the physical version later.
- **As a developer**, I want a background map and hex grid so the game environment reflects Pacific geography.

## Functional Requirements

1. The application must render a static illustrated map background with a transparent hex grid overlay.
2. The system must allow users to drag tokens from one hex to another using mouse or touch input.
3. Tokens must snap to the center of the nearest valid hex when dropped.
4. Tokens must remain within the board area and cannot be placed outside the grid.
5. Multiple tokens must be draggable independently.
6. Initial loading of the board must succeed without runtime errors on modern browsers.

## Non-Goals (Out of Scope)

- Turn logic or collision rules between tokens.
- Persistent storage of token positions or multiplayer features.
- Token spawning, inventory management, or advanced game mechanics.

## Design Considerations

- Board background is a custom illustrated image representing Pacific Islands.
- Hex grid should be transparent but clearly visible.
- Tokens are stylized images or icons representing climate heroes or hazards.
- Overall style should be clean, educational, and lightly gamified.

## Technical Considerations

- Built with React and Vite, targeting Node.js 18.
- State can be held in memory using React state management; no persistence required.

## Success Metrics

- Users can drag and drop tokens without issues across major browsers.
- Tokens always snap to valid hexes and stay within the board.
- The board loads correctly and renders the grid and tokens.

## Open Questions

- What specific images or assets will be used for the initial map and tokens?
- Will we provide keyboard or accessibility alternatives for dragging tokens?

