Ext.define('testApp.model.GeoLocation', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'userlat', type: 'int' },
            { name: 'userlong', type: 'int' },
            { name: 'address', type: 'string' }
        ]
    }
});


