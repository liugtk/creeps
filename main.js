var roleHarvester = require ('role.harvester');
var roleUpgrader    = require('role.upgrader');




module.exports.loop = function(){

    //clear memory
    for (let name in Memory.creeps){
        if(Game.creeps[name] == undefined){
            delete Memory.creeps[name];
        }
    }
    // for every creeps in the game, do their job
    for(let name in Game.creeps) {
        var creep = Game.creeps[name];


        if(creep.memory.role == 'harvester'){
            roleHarvester.run(creep);
        }
        else if(creep.memory.role == 'upgrader'){
            roleUpgrader.run(creep);
        }
    }

    var minimumNumberOfHarvesters = 10;
    var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
    console.log(numberOfHarvesters);
    if(numberOfHarvesters < minimumNumberOfHarvesters) {
        var name = Game.spawns.Spawn1.createCreep([WORK, WORK, MOVE, CARRY], undefined,
            {role: 'harverster', working: false});

    }else{
        var name = Game.spawns.Spawn1.createCreep([WORK, WORK, MOVE, CARRY], undefined,
            {role: 'upgrader', working: false});
    }
}