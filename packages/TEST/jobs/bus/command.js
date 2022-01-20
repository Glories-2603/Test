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