function randomDigits() {
	var digits = new Array();
			
			for(i = 0; i < 4; i++) 
			{
				var correctDigits = false;
				while (correctDigits == false)
			    {
			      var rnd = Math.random () * 9;
			      var rounded = Math.floor(rnd);
			      if(!digits.includes(rounded))
			     
					{
					digits.push(rounded)
					correctDigits = true
					}
				}
			}
			return digits;
}