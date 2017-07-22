var category_models = {};    
    
category_models = {
    "music_model": function(scene) {
        var guiter = new THREE.JSONLoader();　　
        guiter.load("model/guitar.json", function(geo, mat) {　　　
            var faceMat = new THREE.MeshFaceMaterial(mat);
            var model = new THREE.Mesh(geo, faceMat);
            model.position.set(0.3, 0.3, 0);　　
            model.rotation.set(0, 0, Math.PI/4);　
            model.scale.set(0.5, 0.5, 0.5);　　　
            scene.add(model);　　　
        });
        var piano = new THREE.JSONLoader();　　
        piano.load("model/piano.json", function(geo, mat) {　　　
            var faceMat = new THREE.MeshFaceMaterial(mat);
            var model = new THREE.Mesh(geo, faceMat);
            model.position.set(0, 0, 0);　　　
            model.scale.set(0.5, 0.5, 0.5);　　　
            scene.add(model);　　　
        });
    }
}
