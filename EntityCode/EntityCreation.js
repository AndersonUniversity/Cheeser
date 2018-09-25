"use strict";

/*This is the width of the canvas.*/
const canvasWidth = 672;

/*These are the sizes for each type of entity.*/
const height = 45;

/*This is the width, x coordinate, and y coordinate of each non-player entity.*/
const Props = [
  { size: 45, x: 0, y: 599, speed: 2 },
  { size: 45, x: 0, y: 551, speed: 3 },
  { size: 45, x: 0, y: 503, speed: 3 },
  { size: 45, x: 0, y: 455, speed: 2 },
  { size: 45, x: 0, y: 407, speed: 4 },
  { size: 90, x: 0, y: 309, speed: 2 },
  { size: 90, x: 0, y: 261, speed: 4 },
  { size: 180, x: 0, y: 213, speed: 3 },
  { size: 90, x: 0, y: 165, speed: 4 },
  { size: 135, x: 0, y: 117, speed: 5 }
];

/*This is based on code from w3Schools.
https://www.w3schools.com/graphics/tryit.asp?filename=trygame_component_more_move*/

/**
 * Creates new entities on the canvas.
 * @param {int} width of object.
 * @param {int} height of object.
 * @param {string} color of object.
 * @param {int} x position on canvas on x axis.
 * @param {int} y position on canvas on y axis.
 */
function entityCreation(width, height, color, x, y) {
  /*The canvas that is being drawn on.*/
  let canvas = document.getElementById("kitchen");
  /*Allows for components to be drawn on the canvas.*/
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  /*The x coordinate of the component.*/
  this.x = x;
  /*The y coordinate of the component.*/
  this.y = y;
  /*The width of the component.*/
  this.width = width;
  /*The height of the component.*/
  this.height = height;
  //Initial creation of entity.
  ctx.fillRect(this.x, this.y, this.width, this.height);
  /*Allows for the entity to move.*/
  this.update = function() {
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}

/**
 * Populates lanes with all objects on the canvas.
 */
function generateAllLanes() {
  randomPos();
  lane1();
  lane6();
}

/**
 * Generates random x coordinates for all entities in
 * lanes.
 */
function randomPos() {
  Props.forEach(function(i) {
    i.x = Math.floor(Math.random() * (6 - 4) + 4) * 100;
  });
}

/**
 * This function creates and returns a new entity.
 * @param {*} y is the y coordinate on the canvas.
 * @param {*} size is the width of the entity.
 * @param {*} x is the x coordinate on the canvas.
 */
function newEntity(y, size, x) {
  let returnedEntity = new entityCreation(size, height, "red", x, y);
  return returnedEntity;
}

/**
 * Creates 3 entities in lanes 1-5
 */
function lane1() {
  lanes5.push(newEntity(Props[0].y, Props[0].size, Props[0].x));
  lanes5.push(newEntity(Props[1].y, Props[1].size, Props[1].x));
  lanes5.push(newEntity(Props[2].y, Props[2].size, Props[2].x));
  lanes5.push(newEntity(Props[3].y, Props[3].size, Props[3].x));
  lanes5.push(newEntity(Props[4].y, Props[4].size, Props[4].x));
  lanes5.push(newEntity(Props[0].y, Props[0].size, Props[0].x - 200));
  lanes5.push(newEntity(Props[1].y, Props[1].size, Props[1].x - 200));
  lanes5.push(newEntity(Props[2].y, Props[2].size, Props[2].x - 200));
  lanes5.push(newEntity(Props[3].y, Props[3].size, Props[3].x - 200));
  lanes5.push(newEntity(Props[4].y, Props[4].size, Props[4].x - 200));
  lanes5.push(newEntity(Props[0].y, Props[0].size, Props[0].x - 400));
  lanes5.push(newEntity(Props[1].y, Props[1].size, Props[1].x - 400));
  lanes5.push(newEntity(Props[2].y, Props[2].size, Props[2].x - 400));
  lanes5.push(newEntity(Props[3].y, Props[3].size, Props[3].x - 400));
  lanes5.push(newEntity(Props[4].y, Props[4].size, Props[4].x - 400));
}

/**
 * Creates 3 entities in lanes 6-10
 */
function lane6() {
  lanes10.push(newEntity(Props[5].y, Props[5].size, Props[5].x));
  lanes10.push(newEntity(Props[6].y, Props[6].size, Props[6].x));
  lanes10.push(newEntity(Props[7].y, Props[7].size, Props[7].x));
  lanes10.push(newEntity(Props[8].y, Props[8].size, Props[8].x));
  lanes10.push(newEntity(Props[9].y, Props[9].size, Props[9].x));
  lanes10.push(newEntity(Props[5].y, Props[5].size, Props[5].x - 200));
  lanes10.push(newEntity(Props[6].y, Props[6].size, Props[6].x - 200));
  lanes10.push(newEntity(Props[7].y, Props[7].size, Props[7].x - 300));
  lanes10.push(newEntity(Props[8].y, Props[8].size, Props[8].x - 200));
  lanes10.push(newEntity(Props[9].y, Props[9].size, Props[9].x - 200));
  lanes10.push(newEntity(Props[5].y, Props[5].size, Props[5].x - 400));
  lanes10.push(newEntity(Props[6].y, Props[6].size, Props[6].x - 400));
  lanes10.push(newEntity(Props[7].y, Props[7].size, Props[7].x - 500));
  lanes10.push(newEntity(Props[8].y, Props[8].size, Props[8].x - 400));
  lanes10.push(newEntity(Props[9].y, Props[9].size, Props[9].x - 400));
}