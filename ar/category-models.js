var category_models = {};    
    
category_models = {
    "music_model": function(scene) {
        var guiter = new THREE.JSONLoader();　　
        guiter.load("model/music/guitar.json", function(geo, mat) {　　　
            var faceMat = new THREE.MeshFaceMaterial(mat);
            var model = new THREE.Mesh(geo, faceMat);
            model.position.set(-0.5, 0, -0.1);
            model.rotation.set(0, 0, Math.PI*7/4);
            model.scale.set(0.3, 0.3, 0.3);
            scene.add(model);　　　
        });
        var piano = new THREE.JSONLoader();　　
        piano.load("model/music/piano.json", function(geo, mat) {　　　
            var faceMat = new THREE.MeshFaceMaterial(mat);
            var model = new THREE.Mesh(geo, faceMat);
            model.position.set(0, 0, 0);
            model.scale.set(0.3, 0.3, 0.3);
            scene.add(model);　　　
        });
        var text = new THREE.JSONLoader();　　
        text.load("model/music/text.json", function(geo, mat) {　　　
            var faceMat = new THREE.MeshFaceMaterial(mat);
            var model = new THREE.Mesh(geo, faceMat);
            model.position.set(0, 0, 2.0);
            model.scale.set(0.3, 0.3, 0.3);
            scene.add(model);　　　
        });
    },

    "gourmet_model": function(scene) {
       
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
        game.load("model/game.json", function(geo, mat) {　　　
            var faceMat = new THREE.MeshFaceMaterial(mat);
            var model = new THREE.Mesh(geo, faceMat);
            model.position.set(0, 0, 0);　　　
            model.scale.set(0.3, 0.3, 0.3);　　　
            scene.add(model);　　　
        });
    },

    "trip_model": function(scene) {
        var plane = new THREE.JSONLoader();　　
        plane.load("model/plane.json", function(geo, mat) {　　　
            var faceMat = new THREE.MeshFaceMaterial(mat);
            var model = new THREE.Mesh(geo, faceMat);
            model.position.set(0, 0, 0);　　　
            model.scale.set(0.3, 0.3, 0.3);　　　
            scene.add(model);　　　
        });
    }
}
