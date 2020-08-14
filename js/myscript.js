const conditions_url = "https://www.trailrunproject.com/data/get-conditions?ids=7001635,7002742,7006663,7000108,7002175&key=YOUR_KEY_HERE"
async function = getdata ()

{
	const response = await fetch (conditions_url);
	const data = await response.json();
	console.log (data);
}

getdata();




const width = 100;
const difference = 2;
const interveralID = 0;


function IncreaseImg()
 {
 clearInterval(interveralID);
 interveralID=setInterval(ExpandImg,10);
 }
 function DecreaseImg()
 {
 clearInterval(interveralID);
 interveralID=setInterval(ShrinkImg,10);
 }
 function ExpandImg()
 {
 if(width<200)
 {
 width = width+difference;
 document.getElementById("image1_products").style.width=width;
 document.getElementById("image2_products").style.width=width;
 document.getElementById("image3_products").style.width=width;
 document.getElementById("image4_products").style.width=width;
 document.getElementById("image5_products").style.width=width;
 document.getElementById("image6_products").style.width=width;
 
 console.log(width);
 }
 else
 {
 clearInterval(interveralID);
 }
 
 }
 function ShrinkImg()
 {
 if(width>100)
 {
 width = width-difference;
 document.getElementById("image1_products").style.width=width;
 document.getElementById("image2_products").style.width=width;
 document.getElementById("image3_products").style.width=width;
 document.getElementById("image4_products").style.width=width;
 document.getElementById("image5_products").style.width=width;
 document.getElementById("image6_products").style.width=width;
 console.log(width);
 }
 else
 {
 clearInterval(interveralID);
 }
 
 }
 
 
 
 const clicked = document.getElementById("send");

clicked.addEventListener("send", "form");
function form()
{
  alert(forwarded)
}
 