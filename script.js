class LinkedList {
    // will represent the full list.
    constructor(node){
        this.head=node;
    }

    append(value){
        // adds a new node containing value to the end of the list
        const node= new Node(value)
        this.last(this.head).setLink(node)
        return node
    }
    prepend(value){
        // adds a new node containing value to the start of the list
        const node= new Node(value)
        node.setLink(this.head);
        this.head = node;
    }
    printList () {
        function print (node){
            console.log(`(${node.value}) ->`)
            if(node.link ===null) {
                console.log(`null`);
                return
            }
            return print(node.link)
        }
        print(this.head)
    }
    tail() {
        return this.last(this.head);
    }

    last(node){
        if (node.link === null) return node
        return this.last(node.link);
    }

    head() {
        return this.head;
    }
    at(index) {
        // returns the node at the given index
        let n=1;
        function position (node){
            if(n===index) return node
            n++
            console.log(n)
            return position(node.link)
        }
        return position(this.head)
    }
    pop() {
        // removes the last element from the list
        function remove (node) {
            if (node.link === null) return node = null;
            else if (node.link.link ===null) return node.link = null;
            return remove(node.link)
        }
        remove(this.head)
    }

    contains(value){
        // returns true if the passed in value is in the list and otherwise returns false.
        function check (node){
            if(node.value === value) return true
            if(node.link=== null) return false
            return check(node.link)
        }
        return check(this.head)
    }

    find(value) {
        // returns the index of the node containing value, or null if not found.
        let node = this.head;
        let n=1;
        while(node !== null){
            if(node.value===value) return n;
            n++;
            node = node.link;
        }
    }

    toString(){
        // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null

    } 
    
}


class Node {
    // containing a value function and a link to the nextNode, set both as null by default.
    constructor (value){
        this.value = value;
        this.link=null;
    }

    setLink (point) {
        this.link = point;
    }
}


const node1 = new Node(1);
const list1 = new LinkedList(node1);
list1.append(2);
list1.append(3)
list1.append('end')
list1.prepend('start')
list1.printList()

list1.pop()
console.log('deleted')
list1.printList()
console.log(list1.contains('3'))
console.log('Find and index of node that has value 3:')
console.log(list1.find(3))
// const node2 = new Node(21);
// const node3 = new Node(3);

// node1.setLink(node2);
// node2.setLink(node3);

