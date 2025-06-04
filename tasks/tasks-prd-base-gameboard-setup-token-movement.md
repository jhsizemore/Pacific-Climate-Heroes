## Relevant Files

- `src/components/GameBoard.tsx` - Renders the map background with a hex grid overlay.
- `src/components/GameBoard.css` - Styling for the GameBoard background image.
- `src/components/HexGrid.tsx` - Logic for drawing and managing the hex grid.
- `src/components/Token.tsx` - Draggable token component snapped to grid centers.
- `src/components/GameBoard.test.tsx` - Unit tests for the GameBoard component.
- `src/components/Token.test.tsx` - Unit tests for token drag and drop behaviour.

### Notes

- Tests live next to the files they cover and run with `npx jest`.
- The project uses React + Vite targeting Node.js 18.

## Tasks

- [ ] 1.0 Create interactive game board
  - [x] 1.1 Build `GameBoard` component with background image
  - [ ] 1.2 Implement `HexGrid` overlay within the board
  - [ ] 1.3 Render `GameBoard` in `App`
- [ ] 2.0 Implement draggable tokens
  - [ ] 2.1 Build `Token` component displaying hero icons
  - [ ] 2.2 Enable drag-and-drop behaviour using React state
  - [ ] 2.3 Snap tokens to nearest hex on drop
- [ ] 3.0 Constrain token movement to board bounds
  - [ ] 3.1 Detect board boundaries when tokens are moved
  - [ ] 3.2 Prevent tokens from leaving the grid area
- [ ] 4.0 Support multiple independent tokens
  - [ ] 4.1 Manage positions of several tokens in state
  - [ ] 4.2 Ensure tokens can be dragged separately without conflict
- [ ] 5.0 Verify board loads correctly across browsers
  - [ ] 5.1 Add unit tests for drag-and-drop and snapping logic
  - [ ] 5.2 Test board rendering in modern browsers
