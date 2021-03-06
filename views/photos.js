/*jslint nomen:true, node:true*/
/*jshint esnext:true*/

import {PN} from 'pn';
import {Template} from 'photonews-template-photos';

var PhotosView = PN.View.extend({

    photosTemplate: Template.get('photonews/photos'),

    events: {},

    render: function () {
        var container = this.get('container'),
            locals = this.get('locals'),
            html;

        if (!locals.items) {
            html = '<h3>No Photos Available </h3>';
        } else {
            html = this.photosTemplate({ items: locals.items });
        }
        container.setHTML(html);
        return this;
    }

});

export default PhotosView;
