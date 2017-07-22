var category_models = {};    
    
category_models = {
    "music_model": function(scene) {
        var guiter = new THREE.JSONLoader();　　
        guiter.load("model/guitar.json", function(geo, mat) {　　　
            var faceMat = new THREE.MeshFaceMaterial(mat);
            var model = new THREE.Mesh(geo, faceMat);
            model.position.set(-0.3, 0, -0.2);　　
            model.rotation.set(0, 0, Math.PI*7/4);　
            model.scale.set(0.3, 0.3, 0.3);　　　
            scene.add(model);　　　
        });
        var piano = new THREE.JSONLoader();　　
        piano.load("model/piano.json", function(geo, mat) {　　　
            var faceMat = new THREE.MeshFaceMaterial(mat);
            var model = new THREE.Mesh(geo, faceMat);
            model.position.set(0, 0, 0);　　　
            model.scale.set(0.3, 0.3, 0.3);　　　
            scene.add(model);　　　
        });
        var TextGeometry = new THREE.TextGeometry( 'MUSIC!!!', {
                size: 30, height: 4, curveSegments: 3,
                font: "helvetiker", weight: "bold", style: "normal",
                bevelThickness: 1, bevelSize: 2, bevelEnabled: true
        });
        var Material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
        var Text = new THREE.Mesh( TextGeometry, Material );
        scene.add( Text );
    },

    "gourmet_model": function(scene) {
       
    },

    "sports_model": function(scene) {
        var soccer = new THREE.JSONLoader();　　
        soccer.load("model/soccerball.json", function(geo, mat) {　　　
            var faceMat = new THREE.MeshFaceMaterial(mat);
            var model = new THREE.Mesh(geo, faceMat);
            model.position.set(0, 0, 0);　　　
            model.scale.set(0.3, 0.3, 0.3);　　　
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
    }
}
