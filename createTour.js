module.exports = {

    createTourJS = function(name, scenes, sceneTitles, photourls) {

        pannellum.viewer('tour1', {   
            "default": {
                "firstScene": "circle",
                "sceneFadeDuration": 1000
            },

            "scenes": {
                "circle": {
                    "title": "Mason Circle",
                    "hfov": 110,
                    "pitch": -3,
                    "yaw": 117,
                    "type": "equirectangular",
                    "panorama": "/images/from-tree.jpg",
                    "hotSpots": [
                        {
                            "pitch": -2.1,
                            "yaw": 132.9,
                            "type": "scene",
                            "text": "Spring House or Dairy",
                            "sceneId": "house"
                        }
                    ]
                },

                "house": {
                    "title": "Spring House or Dairy",
                    "hfov": 110,
                    "yaw": 5,
                    "type": "equirectangular",
                    "panorama": "/images/bma-0.jpg",
                    "hotSpots": [
                        {
                            "pitch": -0.6,
                            "yaw": 37.1,
                            "type": "scene",
                            "text": "Mason Circle",
                            "sceneId": "circle",
                            "targetYaw": -23,
                            "targetPitch": 2
                        }
                    ]
                }
            }
        });
    }
}