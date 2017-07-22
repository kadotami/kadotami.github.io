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
        var loader = new THREE.FontLoader();
        loader.load( 'fonts/helvetiker_bold.typeface.json', function (font) {
            var textGeometry = new THREE.TextGeometry( 'MUSIC', {
                font: font,
                size: 10.0,
                height: 5,
                curveSegments: 10,
                bevelThickness: 3,
                bevelSize: 1.0,
                bevelEnabled: true
            });
            var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );    
            var text = new THREE.Mesh( textGeometry, material );    
            scene.add( text );
        })
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
