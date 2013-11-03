Ext.define('testApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    
    requires: [
        'Ext.navigation.View'
    ],
    
    config: {
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        defaults: {
        styleHtmlContent: true,
        scrollable: true
        },
        
        items: [
            { xtype: 'locatecard' },
            { xtype: 'mapcard' },
            { xtype: 'addimagecard'}
        ]
    }
});