var queue = [];
var maxSize = 5;
var currentSize = queue.length;

function enQueue(newVal) {
    if(queue.length >= maxSize){
        console.log('Queue is Alredy Full....');
        return;
    }else{
        queue[currentSize] = newVal;
        currentSize += 1;
    }
}

function deQueue() {
  if (queue.length <= 0) {
    console.log("Queue Is Already Empty...");
    return;
  } else {
    /*APPROACH - 01 
    currentSize -=1;
    for(var i=0 ; i< queue.length ;i++){
        queue[i] = queue[i +1];
    }
    queue.length =currentSize;
    */
    queue = queue.slice(1);
  }
}

function displayElement() {
  console.log(queue);
}

enQueue(1);
enQueue(0);
enQueue(11);
enQueue(12);
enQueue(18);
enQueue(17);

// deQueue();
// deQueue();
// deQueue();
// deQueue();

displayElement();
