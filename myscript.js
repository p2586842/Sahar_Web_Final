const conditions_url = "https://www.trailrunproject.com/data/get-conditions?ids=7001635,7002742,7006663,7000108,7002175&key=YOUR_KEY_HERE"
async function = getdata ()

{
	const response = await fetch (conditions_url);
	const data = await response.json();
	console.log (data);
}

getdata();




function biggerImg(x) 
{
    x.style.height = "118%";
    x.style.width = "118%";/* this will increase the size of the image*/
}
	
	function originalImg(x) 
{
    x.style.height = "100%";
    x.style.width = "100%";
}	

