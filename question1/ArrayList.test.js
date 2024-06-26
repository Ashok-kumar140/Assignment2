// const chai = require('chai');
const ArrayList = require('./ArrayList');

describe('ArrayList',()=>{
    let list;

    beforeEach(()=>{
        list = new ArrayList();
    });

    test('should add element in list', ()=>{
        list.add(100);
        list.add(5);
        expect(list.get(0)).toBe(100);
        expect(list.get(1)).toBe(5);
    });
    test('Should throw error', function(){
        list.add(10);
        expect(()=>list.get(1)).toThrow(Error,"Index out of bound");
        expect(()=>list.get(-1)).toThrow(Error,"Index out of bound");
    });

    test('Should remove element', function(){
        list.add(10);
        list.add(100);
        expect(list.remove(0)).toBe(10);
        expect(()=>list.get(-1)).toThrow(Error,"Index out of bound");
    });


})