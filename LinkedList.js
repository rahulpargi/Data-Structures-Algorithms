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
    insertAt(element,pos){
        if(pos>0 && pos>this.size){
            return false;
        }else{
            //create a new node
            var node=new Node(element);
            var curr,prev;

            curr=this.head;
            //adding the element to first  index
            if(pos==0){
                node.next=this.head;
                this.head=node;
            }else{
                curr=this.head;
                var it=0;
                //iterate to the list find position
                while(it<pos){
                    it++;
                    prev=curr;
                    curr=curr.next;
                }
                //adding an element
                node.next=curr;
                prev.next=node;
            }
            this.size++;
        }

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
ll.insertAt(5,1);
ll.insertAt(6,3);
ll.printList();
ll.sizeList();

