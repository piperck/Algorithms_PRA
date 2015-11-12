/**
 * Created by piperck on 15/11/12.
 */
function Queue(){
    var items = [];

    this.enqueue = function(elements){
        items.push(elements);
    }

    this.dequeue = function(){
        return items.shift();
    }

    this.front = function(){
        return items[0];
    }

    this.isEmpty = function(){
        return items.length == 0;
    }

    this.size = function(){
        return items.length
    }

    this.print = function(){
        console.log(items.toString());
    }
}

//优先队列
function PriorityQueue(){
    var items = [];

    function QueueElement(element,priority){
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function(element,priority){
        var queueElement = new QueueElement();

        if(this.isEmpty()){
            items.push(queueElement);
        }else{
            var added = false;
            for(var i =0;i<items.length;i++){
                if(queueElement.priority<items[i].priority){
                    items.splice(i,0,queueElement);
                    added=true;
                    break;
                }
            }
            if(!added){
                items.push(queueElement);
            }
        }
    }
}