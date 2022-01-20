let bus = {};
bus.spBus = [
    [11.15730, 22.05830, 70.597465, 11.40227, "airbus"],
    [-5.02138, 27.78839, 71.12261, 1.73074, "coach"],
    [-19.69541, 33.04969, 71.76610, 0.82546, "bus"]
];

function playerExitVehicleHandler(player, vehicle) {
    if(player.vehicle.getVariable("job") == "bus" && player.getVariable("job") == "bus" && player.seat == 0){
        mp.events.call("server:endPoint")
    }
    console.log(`${player.name} when out from vehicle with ID: ${vehicle.id}`);
}

mp.events.add("playerExitVehicle", playerExitVehicleHandler);

mp.events.add('server:succesPoint', (player) => {
    try {
        player.setVariable("pay", player.getVariable("pay") + 100)
    } catch (e) {
        console.log(e);
    }
});
mp.events.add('server:endPoint', (player) => {
    try {
        player.outputChatBox(`${player.name} ! Вы заработали: ${player.getVariable("pay")}`);
        player.setVariable("pay", null)
    } catch (e) {
        console.log(e);
    }
});

function playerEnterVehicleHandler(player, vehicle, seat) {
    if(player.vehicle.getVariable("job") == "bus") {
        player.outputChatBox(`${player.name} ! Чтобы начать работу введите /startjob`);
    }
	console.log(`${player.name} got into the car with ID: ${vehicle.id}. Seat: ${seat}`);
}
 
mp.events.add("playerEnterVehicle", playerEnterVehicleHandler);

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



mp.events.add('playerCommand', (player, command) => {
    try {
        if (command.toLowerCase() === "startjob") {
            if (!player.seat == 0) return player.notify(`Необходимо быть за рулем!`);
            if(!player.vehicle) return player.notify(`Необходимо быть в транспорте!`);
            if(!player.vehicle.getVariable("job") == "bus") return player.notify(`Доступно только в автобусе!`);
            player.call("client:busJob", [1]);
            player.setVariable("job", "bus");
       }
       else {
            player.notify(`Команды не существует на сервере!`);
       }
    }
    catch (e) {
        console.log(e);
    }
});