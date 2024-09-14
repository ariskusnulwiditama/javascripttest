function findDepth(nodes, id) {
    let depth = 0;
    let currentNode = nodes.find(node => node.id === id);
  
    while (currentNode && currentNode.upline !== '0') {
      currentNode = nodes.find(node => node.id === currentNode.upline);
      depth++;
    }
  
    return depth;
  }
  

  const nodes = [
    {id: 'a', upline: '0'}, {id: 'b', upline: 'a'}, {id: 'c', upline: 'a'}, {id: 'cc', upline: 'a'},
    {id: 'd', upline: 'b'}, {id: 'e', upline: 'b'}, {id: 'f', upline: 'c'}, {id: 'g', upline: 'c'},
    {id: 'gg', upline: 'cc'}, {id: 'h', upline: 'd'}, {id: 'i', upline: 'd'}, {id: 'ii', upline: 'gg'},
    {id: 'j', upline: 'h'}, {id: 'k', upline: 'h'}, {id: 'hh', upline: 'ii'}, {id: 'kk', upline: 'hh'}
  ];
  

  console.log(findDepth(nodes, 'a')); 
  console.log(findDepth(nodes, 'cc')); 
  console.log(findDepth(nodes, 'e')); 
  