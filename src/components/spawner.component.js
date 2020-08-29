AFRAME.registerComponent('td-spawner', {
    schema: {
        speed:{default:300},
        spawning:{default:false},
        container:{type:'selector'},
        enemy:{type:'selector'}
    },

    init: function () { 
        this.countdown = this.data.speed;
        
    },
    
    update: function (oldData) { 
        this.countdown = this.data.speed;
    },

    tick: function (time, timeDelta) {
        if(this.data.spawning ){
            this.countdown -= timeDelta;
            if(this.countdown < 0){
                this.countdown = this.data.speed;
                    const NewEnemy = this.data.enemy.cloneNode(true);
                    NewEnemy.setAttribute("td-enemy",
                        {type:~~(Math.random()*5),
                        speed:1,
                        health:100,
                        value:2})
                    NewEnemy.setAttribute("position", this.el.object3D.position)
                    this.data.container.append(NewEnemy);
                // spawn enemy

            }
        }
     }  
});