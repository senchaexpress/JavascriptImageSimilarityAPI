Ext.define('ImageSimDemo.view.main.MainView', {
  extend: 'Ext.Panel',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel'
  },
  items: [
    {
      xtype: 'component',
      html:'<h1> Ext JS Image Similarity Demo App Using DeepAI.org </h1> '
    },  
    {
      xtype: 'textfield',
      label: 'Image URL 1',
      value: 'https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png',
      reference: 'imgUrl1'

    },
    {
      xtype: 'image',
      title: 'Image 1',
      reference: 'img1',
      width: 200,
      height: 200,

    },    
    {
      xtype: 'textfield',
      label: 'Image URL 2',
      value: 'https://inst.eecs.berkeley.edu/~cs194-26/fa18/upload/files/proj3/cs194-26-abk/images/lena.jpg',
      reference: 'imgUrl2'
    },
    {
      xtype: 'image',
      title: 'Image 2',
      reference: 'img2',
      width: 200,
      height: 200,
    },      
    {
      xtype: 'button',
      text: 'Find Similarity',
      handler: 'onFindSimilarity'
    },
    {
      xtype: 'component',
      html:'<p> Press the button to find similarity </p> ',
      reference: 'output',
    }   

  ],
  defaults: {
      flex: 1,
      margin: 10
  }
})


