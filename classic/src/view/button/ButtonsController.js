/**
 * Created by Mique on 2016/12/26.
 */
Ext.define('ext6.view.button.ButtonsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.buttons',

    toggleDisabled: function (checkbox, checked) {
        var view = this.getView(),
            stateFn = checked ? 'disable' : 'enable',
            buttons = view.query('button');

        Ext.each(buttons, function (btn) {
            btn[stateFn]();
        });
    }
});
