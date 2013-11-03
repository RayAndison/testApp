Ext.define('testApp.store.GeoLocation', {
    extend: 'Ext.data.Store',
    config: {
        model: 'testApp.model.GeoLocation',
        storeId: 'GeoLocationStore',
        data: [
            { userlat: '-123', userlong: '321', address: 'addressone' }
        ]
    }
});


