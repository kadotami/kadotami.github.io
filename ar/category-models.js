var category_models = {};    
    
category_models = {
    "music_model": function(scene) {
        var guiter = new THREE.JSONLoader();　　
        guiter.load("model/music/music.json", function(geo, mat) {　　　
            var faceMat = new THREE.MeshFaceMaterial(mat);
            var model = new THREE.Mesh(geo, faceMat);
            model.position.set(0, 0, 0);
            model.scale.set(0.3, 0.3, 0.3);
            scene.add(model);　　　
        });
    },

    "gourmet_model": function(scene) {
       var soccer = new THREE.JSONLoader();　　
        soccer.load("model/gourmet/coffee.json", function(geo, mat) {　　　
            var faceMat = new THREE.MeshFaceMaterial(mat);
            var model = new THREE.Mesh(geo, faceMat);
            model.position.set(0, 0, 0);　　　
            model.scale.set(0.5, 0.5, 0.5);　　　
            scene.add(model);　　　
        });
    },

    "sports_model": function(scene) {
        var soccer = new THREE.JSONLoader();　　
        soccer.load("model/sports/soccerball.json", function(geo, mat) {　　　
            var faceMat = new THREE.MeshFaceMaterial(mat);
            var model = new THREE.Mesh(geo, faceMat);
            model.position.set(-0.2, 0, 0);　　　
            model.scale.set(0.5, 0.5, 0.5);　　　
            scene.add(model);　　　
        });
        var baseball = new THREE.JSONLoader();　　
        baseball.load("model/sports/baseball.json", function(geo, mat) {　　　
            var faceMat = new THREE.MeshFaceMaterial(mat);
            var model = new THREE.Mesh(geo, faceMat);
            model.position.set(0., 0, 0);　　　
            model.scale.set(0.5, 0.5, 0.5);　　　
            scene.add(model);　　　
        });
    },

    "game_model": function(scene) {
        var game = new THREE.JSONLoader();　　
        game.load("model/game/ps4.json", function(geo, mat) {　　　
            var faceMat = new THREE.MeshFaceMaterial(mat);
            var model = new THREE.Mesh(geo, faceMat);
            model.position.set(0, 0, 0);　　　
            model.scale.set(0.3, 0.3, 0.3);　　　
            scene.add(model);　　　
        });
    },

    "travel_model": function(scene) {
        var plane = new THREE.JSONLoader();　　
        plane.load("model/travel/travel.json", function(geo, mat) {　　　
            var faceMat = new THREE.MeshFaceMaterial(mat);
            var model = new THREE.Mesh(geo, faceMat);
            model.position.set(0, 0, 0);　　　
            model.scale.set(0.3, 0.3, 0.3);　　　
            scene.add(model);　　　
        });
    }
}
