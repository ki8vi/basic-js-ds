const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootNodeElement = null;
  }
  root() {
    return this.rootNodeElement;
  }

  add(data) {
    const actualNodeElement = new Node(data);
    if (this.rootNodeElement !== null) {
      this.searchExistingNode(this.rootNodeElement, actualNodeElement);
    } else {
      this.rootNodeElement = actualNodeElement;
    }
  }
  
  has(data) {
    return this.lookForSameNode(data, this.rootNodeElement)
  }

  find(data) {
    return this.lookForSameNode(data, this.rootNodeElement, true)
  }

  remove(data, actualRootNode = this.rootNodeElement) {
    if(actualRootNode === null) {
        return null;
    }
    if(actualRootNode.data > data) {
        actualRootNode.left = this.remove(data, actualRootNode.left);
    } else if (actualRootNode.data < data) {
        actualRootNode.right = this.remove(data, actualRootNode.right);
    } else {
        if(actualRootNode.left === null) {
            return actualRootNode.right;
        } else if (actualRootNode.right === null) {
            return actualRootNode.left;
        }
        actualRootNode.data = this.minOfSibling(actualRootNode.right).data;
        actualRootNode.right = this.remove(actualRootNode.data, actualRootNode.right)
    }
    return actualRootNode;
  }

  minOfSibling(actualRoot = this.rootNodeElement) {
    if(actualRoot.left !== null) {
        return this.minOfSibling(actualRoot.left);
    } else {
        return actualRoot;
    }
  }

  min(actualRoot = this.rootNodeElement) {
    if(actualRoot.left !== null) {
      return this.min(actualRoot.left)
    } else {
      return actualRoot.data;
    }
  }

  max(actualRoot = this.rootNodeElement) {
    if(actualRoot.right !== null) {
      return this.max(actualRoot.right)
    } else {
      return actualRoot.data;
    }
  }

  lookForSameNode(data, sameNode, isFindMethod = false) {
    if(sameNode === null || sameNode === undefined) {
      if(isFindMethod) {
        return null;
      } else {
        return false
      }
    }
    if(sameNode.data === data) {
      if(isFindMethod) {
        return sameNode
      } else {
        return true;
      }
    } else {
      if(sameNode.data > data) {
        if(isFindMethod) {
          return this.lookForSameNode(data, sameNode.left, true)
        } else {
          return this.lookForSameNode(data, sameNode.left)
        }
      } 
      if (sameNode.data < data) {
        if(isFindMethod) {
          return this.lookForSameNode(data, sameNode.right, true)
        } else {
          return this.lookForSameNode(data, sameNode.right)
        }
      }
    }
  }

  searchExistingNode(actualRoot, searchingNode) {
    if (actualRoot.data > searchingNode.data) {
      if (actualRoot.left !== null) {
        this.searchExistingNode(actualRoot.left, searchingNode);
      } else {
        actualRoot.left = searchingNode;
      }
    } 
    if (actualRoot.data < searchingNode.data) {
      if (actualRoot.right !== null) {
        this.searchExistingNode(actualRoot.right, searchingNode);
      } else {
        actualRoot.right = searchingNode;
      }
    }
  } 
}

module.exports = {
  BinarySearchTree
};