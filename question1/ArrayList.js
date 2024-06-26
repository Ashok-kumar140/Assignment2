class ArrayList {
    constructor(){
        this.list = [];
    }

    add(value){
        this.list.push(value);
    }

    get(index){

        if(index<0|| index>=this.list.length){
            throw new Error("Index out of bound");

        }
        return this.list[index];
    }

    remove(index){
        if(index<0 || index>=this.list.length){
            throw new Error("Index out of bound");
        }

        return this.list.splice(index,1)[0];
    }
}

module.exports = ArrayList;