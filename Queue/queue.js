/**
 * Created by piperck on 15/11/12.
 */

//data struct Queue.
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


//hotPotato Game
//nameList is player and number is pass flower times.
function hotPotato(nameList, number){
    var queue = new Queue();

    for(var i=0;i<nameList.length;i++){
        queue.enqueue(nameList[i]);
    }

    var eliminated = '';
    while (queue.size() > 1){
        for(var i=0;i<number;i++){
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + '在击鼓传花游戏中被淘汰。 ');
    }

    return queue.dequeue();
}