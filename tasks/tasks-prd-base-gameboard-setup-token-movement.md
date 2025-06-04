## Relevant Files

- `src/App.tsx` - Root component of the React app. Will display the game board.
- `src/Board.tsx` - New component to render the map background and hex grid.
- `src/Token.tsx` - New component for draggable tokens.
- `src/Board.test.tsx` - Unit tests for `Board` component.
- `src/Token.test.tsx` - Unit tests for `Token` component.

### Notes

- Unit tests are placed next to the components they test.
- Run tests with `npx jest` or `npx jest path/to/test`.

## Tasks

- [ ] 1.0 Build Game Board layout
- [ ] 2.0 Implement draggable token component
- [ ] 3.0 Snap tokens to hex grid and enforce board bounds
- [ ] 4.0 Manage state for multiple tokens
- [ ] 5.0 Apply styling and verify cross-browser rendering
