Ext.define('ImageSimDemo.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',

  onFindSimilarity: function (button) {
  	url1 = this.lookupReference('imgUrl1').getValue();
  	url2 = this.lookupReference('imgUrl2').getValue();
  	//clear the output field
  	this.lookupReference('output').setHtml('');
   	//display the two images
  	this.lookupReference('img1').setSrc(url1);
  	this.lookupReference('img2').setSrc(url2); 	
  	//call the deepai API and find similarity between the two images 	
  	this.getSimilarity(url1,url2);
  },

  getSimilarity: async function (imgUrl1, imgUrl2){
  	try{
  		//replace with your API key
	  	deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');
	  	//call image similarity API
	    var resp = await deepai.callStandardApi("image-similarity", {
	            image1: imgUrl1,
	            image2: imgUrl2,
	    });
	    console.log(`Resposne:${JSON.stringify(resp)}`);

	    var distance = resp.output.distance;
	    this.lookupReference('output').setHtml('<h1 style="color:blue;">The distance between the two images is: ' 
	    	                                    + distance + '</h1>')
   }
   catch(err) {alert(err);}
}

})


