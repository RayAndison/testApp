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


var abc = Ext.getStore('GeoLocationStore');
abc.add({ userlat: -1234, userlong: 4321, address: "addresstwo" });