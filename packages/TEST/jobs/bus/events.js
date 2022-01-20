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