import $ from "jquery";
import Modernizr from 'modernizr';
import Lodash from "./lodashTest";
import Plugin from "./plugin";

if (!Modernizr.promises) {
	// console.log('Custom fonts:', Modernizr.fontface);
	// console.log('Border radius:', Modernizr.borderradius);
	// console.log('Multiple Background Images:', Modernizr.multiplebgs);
	// console.log('CSS Animations:', Modernizr.cssanimations);
	// console.log('CSS Reflections:', Modernizr.cssreflections);
	// console.log('CSS 3D Transformations:', Modernizr.csstransforms3d);
	// console.log('Canvas:', Modernizr.canvas);
	// console.log('Drag&Drop:', Modernizr.draganddrop);
	// console.log('Audio:', Modernizr.audio);
	// console.log('IndexedDB:', Modernizr.indexeddb);
	// console.log('Web Workers:', Modernizr.webworkers);
	// console.log('Geolocation:', Modernizr.geolocation);
	// console.log('Touch Events:', Modernizr.touch);
	// console.log('Webgl:', Modernizr.webgl);
}

$('#elem').defaultPluginName({
	propertyName: 'a custom value'
});

