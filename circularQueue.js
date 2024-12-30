class CircularQueue{
    CircularQueue(MaxSize ){
        this.circularQueueArray =[];
        this.MaxSize = MaxSize;
        this.currentSize = circularQueueArray.length;
        this.front = 0;
        this.rear =  -1;
    }
    isEmpty(){
        if(this.currentSize === 0){
            console.log('Queue is Empty...');
            return;
        }else{
            return false;
        }
    }
    isFull(){
        if(this.currentSize >= this.MaxSize){
            console.log('Queue is Full...')
            return;
        }else{
            return false;
        }
    }
    enQueueValues(newVal){
        if(!this.isFull()){
            this.rear +=1;
            if(this.currentSize === this.MaxSize -1){
                this.currentSize =0;
                this.rear = 0;
                this.circularQueueArray[this.rear] =newVal;
                this.currentSize +=1;
                this.rear +=1;
            }else{
                this.circularQueueArray[this.currentSize] =newVal;
                this.currentSize +=1;
                this.rear +=1;
            }
        }

    }
    deQueuValues(){
        if(!this.isEmpty()){
            this.circularQueueArray[this.front] =''; //to avoid undefine values
            this.front +=1;
            this.rear -=1;
        }
    }
    diplayValues(){
        console.log(this.circularQueueArray)
    }
}

var cirqueue = new CircularQueue (5 );