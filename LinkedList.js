//Linked List

class Node{
    //constructor
    constructor(element){
        this.element=element;
        this.next=null;
    }

}

class LinkedList{
    constructor(){
        //storing the first node in head & size is the number of nodes
        this.head=null;
        this.size=0;
    }
    //Adding Elements at the end of list

    add(element){
        //creates a new node
        var node = new Node(element);

        //to store current node
        var current;

        //if list is empty add the element and make it head
        if(this.head==null){
            this.head=node;
        }else{
            current=this.head;

            //iterate to the end of list
            while(current.next){
                current=current.next;
            }

            //add node
            current.next=node;
        }
        this.size++;
    }

    //Printing List
    printList(){
        var curr=this.head;
        var str="";
        while(curr){
            str+=curr.element+" ";
            curr=curr.next;
        }
        console.log(str);
    }
    sizeList(){
        console.log(this.size);
    }
}

var ll=new LinkedList();
ll.add(10);
ll.add(11);
ll.add(13);
ll.printList();
ll.sizeList();

