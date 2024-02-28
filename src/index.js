"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hasher = require("hasher");
var crossroads_1 = require("crossroads"); // Import using ES6 default import syntax
var ej2_base_1 = require("@syncfusion/ej2-base");
require("../styles/styles.scss");
require("../styles/index.scss");
var pages = [
    { root: 'home', page: 'homePage' },
    { root: 'about', page: 'aboutPage' },
];
routeDefault(); // Initiate default routing function
function routeDefault() {
    crossroads_1.default.addRoute('', function () {
        window.location.href = '#/home'; // At initial page load href value updated as `home` for route.
    });
}
crossroads_1.default.addRoute('/{val}', function () {
    var pageObj = getPageObj(window.location.hash.replace('#/', ''));
    var ajaxHTML = new ej2_base_1.Ajax('./' + pageObj.page + '.html', 'GET', true);
    ajaxHTML.send().then(function (value) {
        if (document.getElementById('content-area')) {
            document.getElementById('content-area').innerHTML = value.toString();
        }
        if (window.location.hash.replace('#/', '') === 'home') {
            window.home();
        }
        else {
            window.about();
        }
    })
        .catch(function (error) {
        // Handle any potential Promise rejections
        console.error('An error occurred:', error);
    });
});
function getPageObj(page) {
    var pageObj = {};
    pages.forEach(function (item) {
        if (item.root === page) {
            pageObj = item;
        }
    });
    return pageObj;
}
// Window location hash handlers
hasher.initialized.add(function (hashValue) {
    crossroads_1.default.parse(hashValue); // Page initial loading state this function calls '' route handler.
});
hasher.changed.add(function (hashValue) {
    crossroads_1.default.parse(hashValue); // When location hash changed this function calls `home` route handler.
});
hasher.init(); // Initiate the hasher function
