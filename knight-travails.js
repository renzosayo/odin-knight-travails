function identifyNeighbors (root) {
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


function knightTravails (root, destination) {
  let asd = [];
  let depth = 0;
  let queue = [];
  // stringified to make same with others
  queue.push(JSON.stringify(root));
  while (queue.length > 0) {
    let current = queue.shift();
    let neighbors = identifyNeighbors(JSON.parse(current));
    if (neighbors.includes(JSON.stringify(destination))) {
      asd.push(current);
      console.log(current)
      console.log('found' + neighbors);
      return;
    } else {
      neighbors.forEach((neighbor) => queue.push(neighbor));
    }
  }
}

knightTravails([0, 0], [7, 7]);

//console.log(identifyNeighbors([1, 1]));
