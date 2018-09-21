//Singly Linked List
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
    //Deleting a node 
    Delete(pos){
        if(this.head==null || pos>this.size){
            return -1;
        }else{
            var curr,prev,itr=0;
            curr=this.head;
            prev=curr;
            //Deleting first element
            if(pos==0){
                this.head=curr.next;

            }else{
                
            //iterate to find the position to remove an element
            while(itr<pos){
                itr++;
                prev=curr;
                curr=curr.next;
            }
            //Deleting a node
            prev.next=curr.next;
            }
            this.size--;
            //return the removed element
            return curr.element;

        }
        

    }

    //Delete an element from the list if not found return -1
    deleteElement(ele){
        
        var curr,prev;
        curr=this.head;
        prev=null;
        //Iterating  the list  to find the element
        while(curr!=null){
            
            if(curr.element===ele){
                if(prev==null){
                    this.head=curr.next;
                }else{
                    prev.next=curr.next;
                }
                this.size--;
                return curr.element;   
            }
            
            prev=curr;
            curr=curr.next;
            
            
            ///break;

        }
        return -1;


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
    isEmpty(){
        return this.size==0;
    }
}

var ll=new LinkedList();
ll.add(10);
ll.add(11);
ll.add(13);
ll.insertAt(5,1);
ll.insertAt(6,3);
console.log("Before Deleting");
ll.printList();
ll.sizeList();
console.log("After Deleting");
ll.Delete(1);
ll.deleteElement(13);
ll.printList();
ll.sizeList();
ll.isEmpty();

