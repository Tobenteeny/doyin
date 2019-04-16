alert("Hello! Animasaun Oluwatobiloba says WELCOME")
alert(" Please view in Desktop mode for maximum experience. Thanks")

var i=0; var images=[]; var time = 2000;
		
		images[0] = 'images/tob.jpg'
		images[1] = 'images/tobi.jpg'
		images[2] = 'images/tobii.jpg'
		// images[3] = 'imager/1k.jpg'
		// images[4] = 'imager/andy.jpg'
		// images[5] = 'imager/tp.jpg'
		// images[6] = 'imager/TD.jpg'
		// images[7] = 'imager/gawvi.jpg'
		
		
		

		function myImg() {
			document.slidee.src = images [i];
			if (i < images.length - 1) {
				i++ ;
			} else {
				i = 0;
			}
			setTimeout ("myImg()" , time);
		}
		window.onload = myImg