Ext.define('testApp.view.Locate', {
    extend: 'Ext.navigation.View',
    xtype: 'locatecard',
    id: 'locatecard',
    
    config: {
        title: 'Locate',
        iconCls: 'home',
        
        items: [
            {
                title: 'Get your Location',
                xtype: 'panel',
                padding: 10,

                items: [
                    {
                        xtype: 'button',
                        text: 'Tap to get',
                        action: 'getLatLong'
                    }
                ]
            }
        ]
    }
});
