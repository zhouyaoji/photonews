/*
 * Copyright (c) 2013, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE.txt file for terms.
 */

/*jslint nomen:true, browser:true*/
/*global DATA, YUI*/

// classes
import ControllerNews from 'controllers/news';
import ControllerPhotos from 'controllers/photos';

import ModelNews from 'models/news';
import ModelPost from 'models/post';
import ModelPhotos from 'models/photos';
import ModelPhoto from 'models/photo';

import ViewAbout from 'views/about';
import ViewHome from 'views/home';
import ViewPhotos from 'views/photos';
import ViewNews from 'views/news';

import {Controllers, Views, Models} from 'pn';

Controllers.register('news', ControllerNews);
Controllers.register('photos', ControllerPhotos);

Models.register('news',   ModelNews);
Models.register('post',   ModelPost);
Models.register('photos', ModelPhotos);
Models.register('photo',  ModelPhoto);

Views.register('about',  ViewAbout);
Views.register('home',   ViewHome);
Views.register('news',   ViewNews);
Views.register('photos', ViewPhotos);

import {BaseApp} from 'base-app';
import {Base} from 'base-build';
import {config} from 'yui';

var MainView = Base.create('main-view', BaseApp, [], {

    // TODO
    // views config should not be generated by the server at all :)
    views: {
        home: {
            type: 'Views.HomeView',
            preserve: true
        },
        news: {
            type: 'Views.NewsView',
            preserve: true
        },
        photos: {
            type: 'Views.PhotosView',
            preserve: true
        },
        about: {
            type: 'Views.AboutView',
            preserve: true
        }
    },

    transitions: {
        navigate: 'fade',
        toChild: 'fade',
        toParent: 'fade'
    },

    initializer: function () {
        this.on('photosView:next', this.nextPhotos);
        this.on('photosView:prev', this.prevPhotos);
    },

    render: function (options) {
        var viewContainer,
            container;

        MainView.superclass.render.apply(this, arguments);

        options = options || {};

        if (options.rendered) {
            return this;
        }

        container = this.get('container');
        viewContainer = this.get('viewContainer');

        // Setup initial view here if content is not prerendered on the
        // server

        return this;
    },

    nextPhotos: function () {
        var model;
        model = this.get('model');
        model.load();
    },
    prevPhotos: function () {
        var model;
        model = this.get('model');
        model.load();
    }

}, {

    ATTRS: {}

});

config.global.MainView = MainView;
export default MainView;
