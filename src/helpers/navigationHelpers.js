/**
 * Navigation helper functions for the portfolio side-scroller.
 * Handles sprite movement and billboard/certificate scrolling.
 */

const BILLBOARD_SCROLL_AMOUNT = 3;
const BILLBOARD_TOUCH_SCROLL_AMOUNT = 30;
const CERTIFICATE_SCROLL_AMOUNT = 3;
const CERTIFICATE_TOUCH_SCROLL_AMOUNT = 30;
const SPRITE_NORMAL_MOVE = 3;
const SPRITE_TOUCH_MOVE = 30;
const SPRITE_BILLBOARD_MOVE = 0.45;
const SPRITE_BILLBOARD_TOUCH_MOVE = 4.5;
const SPRITE_CERTIFICATE_MOVE = 1;
const SPRITE_CERTIFICATE_TOUCH_MOVE = 10;

/**
 * Creates an object with all position state updated after scrolling billboards
 */
export function updateBillboardPositions(positions, direction) {
  const multiplier = direction === 'left' ? BILLBOARD_SCROLL_AMOUNT : -BILLBOARD_SCROLL_AMOUNT;
  return Object.fromEntries(
    Object.entries(positions).map(([key, val]) => [key, val + multiplier])
  );
}

/**
 * Creates an object with all position state updated after scrolling certificates
 */
export function updateCertificatePositions(positions, direction) {
  const multiplier = direction === 'left' ? CERTIFICATE_SCROLL_AMOUNT : -CERTIFICATE_SCROLL_AMOUNT;
  return Object.fromEntries(
    Object.entries(positions).map(([key, val]) => [key, val + multiplier])
  );
}

/**
 * Creates an object with all position state updated for touch billboard scroll
 */
export function updateBillboardPositionsTouch(positions, direction) {
  const multiplier = direction === 'left' ? BILLBOARD_TOUCH_SCROLL_AMOUNT : -BILLBOARD_TOUCH_SCROLL_AMOUNT;
  return Object.fromEntries(
    Object.entries(positions).map(([key, val]) => [key, val + multiplier])
  );
}

/**
 * Creates an object with all position state updated for touch certificate scroll
 */
export function updateCertificatePositionsTouch(positions, direction) {
  const multiplier = direction === 'left' ? CERTIFICATE_TOUCH_SCROLL_AMOUNT : -CERTIFICATE_TOUCH_SCROLL_AMOUNT;
  return Object.fromEntries(
    Object.entries(positions).map(([key, val]) => [key, val + multiplier])
  );
}

/**
 * Returns the sprite movement amount based on the current page and move amount
 */
export function getSpriteMove(isKeyboardOrWheel, pageNumber, direction) {
  return isKeyboardOrWheel ? SPRITE_NORMAL_MOVE : SPRITE_TOUCH_MOVE;
}

/**
 * Page transition checker - determines if sprite position should trigger a page change
 */
export function checkPageTransition(spritePositionX, currentPage) {
  if (spritePositionX > 90 && currentPage < 6) {
    return currentPage + 1; // go forward
  }
  if (spritePositionX < 10 && currentPage > 1) {
    return currentPage - 1; // go back
  }
  return null; // no transition
}

/**
 * Initial billboard positions - generates an object with positions starting from 40 with 40px spacing
 */
export function generateInitialBillboardPositions(count = 3, start = 20, spacing = 30) {
  const positions = {};
  for (let i = 0; i < count; i++) {
    positions[`billboard${count - i}position`] = start + (i * spacing);
  }
  return positions;
}

/**
 * Initial certificate positions
 */
export function generateInitialCertificatePositions(count = 6, start = 40, spacing = 40) {
  const positions = {};
  for (let i = 0; i < count; i++) {
    positions[`certificate${count - i}position`] = start + (i * spacing);
  }
  return positions;
}