angular.module('basic-todo', [])
    .controller('TodoController', function(){
        
        var tc = this;
        
        tc.list = [];
        
        tc.addItem = function(item){
            tc.list.push(item);
            tc.newItem = {}
        }
        
        tc.toggleItemState = function(item){
            if(item.completed){
                var index = tc.list.indexOf(item);
               return tc.list.splice(index, 1);
            }
            item.completed = true;
        }        
        
    })