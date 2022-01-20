let bus = {};
let _checkpointId = -1;
let _checkpoint = null;
let _marker = null;
let _blip = null;
let _currentId = 0;

bus.pointCreate = function(pickupPos) {

    bus.pointDelete();

    _marker = mp.markers.new(1, pickupPos, 3,
        {
            color: [33, 150, 243, 255],
            dimension: -1
        });

    _checkpoint = mp.checkpoints.new(1, pickupPos, 3 + 0.2,
        {
            direction: new mp.Vector3(0, 0, 0),
            color: [ 33, 150, 243, 0 ],
            visible: true,
            dimension: -1
        });

    _blip = mp.blips.new(1, pickupPos,
        {
            color: 59,
            scale: 0.8,
            name: 'Работа',
            drawDistance: 100,
            shortRange: false,
            dimension: -1
        });

    return _checkpoint.id;
};
bus.pointDelete = function() {
        if (typeof _blip == 'object' && mp.blips.exists(_blip))
            _blip.destroy();
        else {
            mp.blips.forEach(function (blip) {
                if (mp.blips.exists(blip) && blip.getSprite() == 1)
                    blip.destroy();
            });
        }
        if (typeof _marker == 'object' && mp.markers.exists(_marker))
            _marker.destroy();
        else {
            mp.markers.forEach(function (marker) {
                try {
                    if (mp.markers.exists(marker) && marker.getColor() === [33, 150, 243, 255])
                        marker.destroy();
                }
                catch (e) {
                }
            });
        }

        if (typeof _checkpoint == 'object' && mp.checkpoints.exists(_checkpoint))
            _checkpoint.destroy();
        else {
            mp.checkpoints.forEach(function (cp) {
                try {
                        cp.destroy();
                }
                catch (e) {
                    
                }
            });
        }
        mp.checkpoints.forEach(function (cp) {
            try {
                    cp.destroy();
            }
            catch (e) {
                
            }
        });

    _checkpoint = null;
    _marker = null;
    _blip = null;
};


bus.markers = [
    [-20.77613, -1355.558, 29.17333, 1],
    [-69.27248, -1364.598, 29.39273, 0],
    [-207.2123, -1411.102, 31.23419, 0],
    [-250.3917, -1419.969, 31.24708, 0],
    [-351.4041, -1419.679, 29.43443, 0],
    [-434.4893, -1412.981, 29.23767, 0],
    [-526.2911, -1114.002, 21.93598, 0],
    [-534.7128, -985.7481, 23.2819, 0],
    [-502.8471, -864.3864, 30.00174, 0],
    [-609.1118, -834.1956, 25.54251, 0],
    [-647.7816, -869.95, 24.4784, 1],
    [-646.2023, -935.5083, 22.39142, 0],
    [-751.9155, -1095.719, 10.76653, 0],
    [-885.2305, -1171.75, 4.808795, 0],
    [-930.7425, -1198.454, 5.070882, 0],
    [-1049.229, -1266.24, 6.215746, 0],
    [-1138.747, -1304.63, 5.08339, 0],
    [-1203.084, -1191.843, 7.607671, 1],
    [-1240.451, -1080.135, 8.41134, 0],
    [-1277.571, -946.8057, 11.30568, 0],
    [-1349.633, -813.9242, 18.31865, 0],
    [-1412.26, -761.7822, 22.47782, 0],
    [-1518.48, -688.4073, 28.45993, 0],
    [-1622.958, -596.4943, 33.06582, 0],
    [-1586.303, -534.6346, 35.38402, 0],
    [-1477.075, -463.451, 35.40791, 0],
    [-1429.307, -435.4835, 35.76416, 1],
    [-1401.365, -416.0498, 36.48946, 0],
    [-1320.327, -367.8933, 36.67199, 0],
    [-1090.98, -279.3097, 37.6939, 0],
    [-1014.448, -244.1829, 37.64638, 1],
    [-912.8623, -268.655, 40.57436, 0],
    [-826.0239, -316.0187, 37.73166, 0],
    [-756.6213, -346.8496, 35.85471, 1],
    [-665.9775, -374.3257, 34.63932, 0],
    [-548.4927, -376.5024, 35.062, 0],
    [-315.4498, -406.8911, 30.03227, 0],
    [-224.8235, -436.4268, 30.54648, 0],
    [-249.4325, -635.1298, 33.57001, 0],
    [-203.4997, -696.7413, 33.83302, 1],
    [-152.6661, -713.5783, 34.6908, 0],
    [1.240081, -761.6959, 32.01256, 0],
    [143.6725, -807.9731, 31.20995, 0],
    [231.8147, -691.0505, 36.4769, 1],
    [246.5911, -646.074, 39.61546, 0],
    [303.3329, -492.8282, 43.35616, 0],
    [316.535, -416.0796, 44.94266, 0],
    [347.8625, -309.5445, 52.84609, 1],
    [349.7827, -298.8471, 53.67729, 0],
    [398.3643, -156.267, 64.35838, 0],
    [517.5294, 38.56313, 93.93687, 0],
    [665.2781, 20.48015, 84.85236, 0],
    [770.9596, -44.92016, 80.91208, 0],
    [968.2475, -177.0578, 73.06339, 1],
    [991.9081, -190.6512, 71.63889, 0],
    [1211.547, -348.5237, 69.12844, 0],
    [1182.876, -442.515, 66.7378, 1],
    [1179.259, -488.382, 65.65414, 0],
    [1174.542, -612.1591, 63.73099, 0],
    [1196.08, -738.2855, 58.70032, 0],
    [1178.955, -820.3583, 55.49027, 0],
    [1150.809, -927.1675, 48.87659, 0],
    [1008.341, -985.3448, 42.27326, 0],
    [826.1581, -999.9065, 26.36019, 1],
    [808.5326, -1001.976, 25.18585, 0],
    [419.95, -1038.981, 29.68525, 0],
    [321.5047, -1036.647, 29.11785, 1],
];


mp.events.add("client:busJob", (answer) => {
    switch(answer){
        case 1:
            _checkpointId = bus.pointCreate(new mp.Vector3(bus.markers[_currentId][0], bus.markers[_currentId][1], bus.markers[_currentId][2] - 1));
            _currentId++;
            mp.game.graphics.notify('Вы начали рейс, не выходите из ТС до конца поездки');
            break;
        default:
            mp.game.graphics.notify('Значение евента не найдено');
            break
    }

});


mp.events.add("playerEnterCheckpoint", (checkpoint) => {
    try {
        if (mp.players.local.vehicle.getPedInSeat(-1) !== mp.players.local.handle) {
            mp.game.graphics.notify('Вам необходимо быть на водительском месте!');
            return;
        }
        if (_checkpointId == -1 || _checkpointId == undefined)  return;
        if (checkpoint.id == _checkpointId) {
            if(!mp.players.local.vehicle.getVariable("job") == "bus") return mp.game.graphics.notify('Вы должны быть водителем автобуса!');
            if (mp.players.local.getVariable("job") == "bus") {
                _currentId++;
                if (_currentId >= bus.markers.length) {
                    mp.events.callRemote("server:endPoint");
                    bus.pointDelete();
                    return;
                }
                if (bus.markers[_currentId - 1][3] == 1) {
                    mp.game.graphics.notify('Вы прибыли на остановку, ожидайте 10 сек.');
                        mp.players.local.vehicle.freezePosition(true);
                        setTimeout(() => {
                            mp.events.callRemote("server:succesPoint");
                            _checkpointId = bus.pointCreate(new mp.Vector3(bus.markers[_currentId][0], bus.markers[_currentId][1], bus.markers[_currentId][2] - 1));
                            mp.players.local.vehicle.freezePosition(false);
                        }, 1000*10);
                        
                }
                _checkpointId = bus.pointCreate(new mp.Vector3(bus.markers[_currentId][0], bus.markers[_currentId][1], bus.markers[_currentId][2] - 1));
            }
        }
    }
    catch (e) {
        
    }
});