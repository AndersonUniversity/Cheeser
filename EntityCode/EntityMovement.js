"use strict";

/**
 * This function updates each entity's position on the canvas
 * and verifies that they move across the screen like a marquis;
 * (when the object reaches the end of the screen, they're set back
 * to the front of the screen).
 */
function moveAllEntities() {
  gameMap.clearEntities(0);
  lanes5.forEach(function(entity) {
    checkForEach(entity.y, entity);
  });
  lanes10.forEach(function(entity) {
    checkForEach(entity.y, entity);
  });
  cheeses.forEach(function(entity) {
    entity.update();
  });
  livesImages.forEach(function(life) {
    life.update();
  });
  timer.update();
  scoreImage.update(score);
  updateHighScore();
  highScoreImage.update(highScore);
  checkForPlayerMove(
    player.x,
    player.x + player.width,
    player.y,
    player.y + player.height
  );
}

/**
 * This function was made so that every entity can be updated within
 * one function.
 * @param {int} y the y value of the current entity.
 * @param {component} entity the current entity.
 * @param {int} type is the type. player/entity.
 */
function checkForEach(y, entity) {
  y == Props[0].y ? moveRight(0, entity, 0) : y;
  y == Props[1].y ? moveLeft(1, entity, 0) : y;
  y == Props[2].y ? moveRight(2, entity, 0) : y;
  y == Props[3].y ? moveLeft(3, entity, 0) : y;
  y == Props[4].y ? moveRight(4, entity, 0) : y;
  y == Props[5].y ? moveLeft(5, entity, 0) : y;
  y == Props[6].y ? moveRight(6, entity, 0) : y;
  y == Props[7].y ? moveLeft(7, entity, 0) : y;
  y == Props[8].y ? moveRight(8, entity, 0) : y;
  y == Props[9].y ? moveLeft(9, entity, 0) : y;
}

function moveRight(index, entity, type) {
  entity.x += Props[index].speed;
  entity.update();
  if (type == 0 && checkRightMove(entity.x)) {
    entity.x = 0 - Props[index].size;
  } else {
    /*If the player is riding an object and goes off the canvas, they die.*/
    player.x + player.width > canvasWidth ? gameMap.dead() : player.update();
  }
}

function moveLeft(index, entity, type) {
  entity.x -= Props[index].speed;
  entity.update();
  if (type == 0 && checkLeftMove(entity.x, Props[index].size)) {
    entity.x = canvasWidth;
  } else {
    /*If the player is riding an object and goes off the canvas, they die.*/
    player.x < 0 ? gameMap.dead() : player.update();
  }
}

/**
 * This checks entities that are moving right
 * and makes sure they are reset when they go
 * off of the screen.
 * @param {int} x is the x coordinate
 */
function checkRightMove(x) {
  let outOfBounds = x >= canvasWidth ? true : false;
  return outOfBounds;
}

/**
 * This checks entities that are moving left
 * and makes sure they are reset when they go
 * off of the screen.
 * @param {int} x is the x coordinate
 * @param {int} size allows objects moving left
 * to fully leave the screen.
 */
function checkLeftMove(x, size) {
  let outOfBounds = x < 0 - size ? true : false;
  return outOfBounds;
}
