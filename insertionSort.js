var nodes = [6, 7, 10, 2, 1, 3, 5, 4];

function insertionSort(nodes) {
  for (var i = 1; i < nodes.length; i++) {
    var value = nodes[i];
    var hole = i;
    while (hole > 0 && nodes[hole-1] > value) {
      nodes[hole] = nodes[hole - 1];
      hole = hole - 1;
    }
    nodes[hole] = value;
  }

  return nodes;
}

insertionSort(nodes);