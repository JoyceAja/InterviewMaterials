const dfs_recursive = (root, target) => {
    //base case
    if(root.value === target){ 
        return root
    }
    if(root.right){
        let result = dfs_recursive(root.right, target)
        if(result){
            return result
        }
    }
    if(root.left){
        let result = dfs_recursive(root.right, left)
        if(result){
            return result
        }
    }
    return null
}




const dfs_iterative = (root, target) => {
    const stack = [root]

    while(stack.length > 0){
        let node = stack.pop()

        if(node.value === target){
            return node
        }
        if(node.right){stack.push(node.right)}
        if(node.left){stack.push(node.left)}
    }
    return null
}