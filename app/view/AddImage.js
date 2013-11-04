Ext.define('testApp.view.AddImage', {
    extend: 'Ext.Panel',
    xtype: 'addimagecard',

    config: {
        title: 'Add Image',
        iconCls: 'add',
        layout: 'fit',
        
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Add Image to Table'
            },/*
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'urlfield',
                        name: 'url'
                    },
                    {
                        xtype: 'button',
                        text: 'Add Image from URL'
                    }
                ]
            },*/
            {
                xtype: 'list',
                store: 'Image',
                //itemTpl: '{imageurl} {imagedata}'
                itemTpl: '{imageurl} {imagedata}'
            }
        ]
    }
});