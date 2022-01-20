require('./events');
require('./command');

let bus = {};
bus.spBus = [
    [11.15730, 22.05830, 70.597465, 11.40227, "airbus"],
    [-5.02138, 27.78839, 71.12261, 1.73074, "coach"],
    [-19.69541, 33.04969, 71.76610, 0.82546, "bus"]
];

bus.load = function() {
    bus.spBus.forEach(item =>{
        let bbus = mp.vehicles.new(mp.joaat(item[4]), new mp.Vector3(item[0],item[1],item[2],item[3]),
                {
                    numberPlate: "BUSjob",
                    color: [[0, 255, 0],[0, 255, 0]]
                });
        bbus.setVariable("job", "bus")
    })
};


bus.load();