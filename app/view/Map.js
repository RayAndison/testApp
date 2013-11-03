Ext.define('testApp.view.Map', {
    extend: 'Ext.Panel',
    xtype: 'mapcard',
    
    requires: [
        'Ext.Map'
    ],

    config: {
        title: 'Map',
        iconCls: 'maps',
        layout: 'fit',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Show Location on Map'
            },
            {
                xtype: 'map',
                mapOptions: {
                    center: new google.maps.LatLng (-34.024742,150.736234),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 17
                },
                listeners:{
                    painted: function(){
                        setTimeout(
                            function(){
                                var pnt = new google.maps.LatLng(-30.024742,100.736234);
                                //...
                            },500);
                    }
                }
            }
        ]
    }
});