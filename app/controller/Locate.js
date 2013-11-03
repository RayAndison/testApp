Ext.define('testApp.controller.Locate', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.device.Geolocation',
        'Ext.data.JsonP'
    ],
    config: {
        refs: {
            latLongButton: 'button[action=getLatLong]'
        },
        control: {
            latLongButton: {
                tap: 'getPosition'
            }
        }
    },
    getPosition: function(){
    
        Ext.device.Geolocation.getCurrentPosition({
            success: function (pos) {
                userlat = pos.coords.latitude; userlong = pos.coords.longitude;
                var locate = Ext.getCmp('locatecard');
                var address='1 here st';
                GeoLocationStore.add({userlat:userlat});
                locate.push({
                    title: 'Your Location',
                    xtype: 'panel',
                    padding: 10,

                    items: [
                        {
                        html: [
                            'Latitude: '+userlat+'!<br>',
                            'Longitude: '+userlong+'!<br>',
                            'Address: '+address+'!'
                        ].join("")
                        }
                    ]
                });
            },
            failure: function () {
                console.log(Lang.locationRetrievalError);
            }
        });
        /*//get google reverse geolocation by proxy server
        Ext.Ajax.request({
            withCredentials: true,
            useDefaultXhrHeader: false,
            url: 'http://maps.googleapis.com/maps/api/geocode/js',
            params: {
            latlng:'-34.024742,150.736234',
            sensor: 'true'
            },
            success: function(response) {
                console.log("Everything worked");
            }
        });*/
        
    }
});