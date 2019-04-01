import $ from "jquery";
import Modernizr from 'modernizr';
import Lodash from "./lodashTest";
import Plugin from "./plugin";
 console.log($);
 console.log(Modernizr);
 console.log(Lodash);
 console.log(Plugin);
 

/**
 * Auto initialise modules that support it
 **/
const moduleElements = document.querySelectorAll('[data-module]')

for (var i = 0; i < moduleElements.length; i++) {
  const el = moduleElements[i]
  const name = el.getAttribute('data-module')
  const Module = require(`./components/${name}`).default
  new Module(el)
}

