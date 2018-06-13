
     var map = new AMap.Map('mapContainer', {
    	resizeEnable: true,
			view: new AMap.View2D({
						center: new AMap.LngLat(116.397428, 39.90923),
						zoom: 12
				})
    });
    //设置城市
    document.getElementById('query').onclick = function(){
    	var cityName = document.getElementById('cityName').value;
        map.setCity(cityName);
    };
	
	
	window.onload = function(){	       
			 var obj2 = createDraggableObject();   
        obj2.init($('Menu'));  
			}