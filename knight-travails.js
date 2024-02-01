function identifyNeighbors (rootJSON) {
  let root = JSON.parse(rootJSON);
  let possibleMoves = [ 
    [-1, 2], [1, 2], 
    [2, 1], [2, -1],
    [1, -2], [-1, -2], 
    [-2, 1], [-2, -1] 
  ];
  let neighbors = [];
  possibleMoves.forEach((move) => {
    let newX = root[0] + move[0];
    let newY = root[1] + move[1];
    // checking if out of bounds
    if ((newX > 7 || newX < 0 || newY > 7 || newY < 0) === false) {
      neighbors.push(JSON.stringify([ newX, newY ])); 
    }
  });
  return neighbors;
}


function calculatePath (root, destination, path = [destination]) {
  // function finds for the coordinate that contains destination as neighbor,
  // calls itself with that coordinate as new destination until root is reached
  // values are stringified arrays to enable easy searching and comparison
  destination = JSON.stringify(destination);
  root = JSON.stringify(root);
  if (destination === root) return path.reverse();

  // queue has stringified arrays
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let current = queue.shift();
    let neighbors = identifyNeighbors(current);
    if (neighbors.includes(destination)) {
      // if current neighbors the destination, it becomes the new destination
      return calculatePath(
        JSON.parse(root), 
        JSON.parse(current), 
        [...path, JSON.parse(current)]
      );
    } else  neighbors.forEach((neighbor) => queue.push(neighbor));
  }
}

function knightTravails (root, destination) {
  // basically just a wrapper function for output
  let path = calculatePath(root, destination);
  console.log(`=> You made it in ${path.length - 1} moves! Here's your path: `);
  path.forEach((segment) => console.log(segment));
}

knightTravails([3, 3], [4, 3])

