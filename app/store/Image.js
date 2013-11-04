Ext.define('testApp.store.Image', {
    extend: 'Ext.data.Store',
    config: {
        model: 'testApp.model.Image',
        storeId: 'Image',
        data: [
            { imageurl: 'urlone', imagedata: 'imagedatastring1' },
            { imageurl: 'urltwo', imagedata: 'imagedatastring2' },
            { imageurl: 'urlthree', imagedata: 'imagedatastring3' },
            { imageurl: 'urlfour', imagedata: 'imagedatastring4' }
        ]
    }
});