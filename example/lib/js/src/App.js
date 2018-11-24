// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var Home = require("./Home.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Details = require("./Details.js");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var NavigationConfig = require("./NavigationConfig.js");

function mapRoute(r) {
  if (r) {
    return /* tuple */[
            "Details",
            /* record */[/* screen */(function (navigation) {
                  return ReasonReact.element(undefined, undefined, Details.make(navigation, /* array */[]));
                })]
          ];
  } else {
    return /* tuple */[
            "Home",
            /* record */[/* screen */(function (navigation) {
                  return ReasonReact.element(undefined, undefined, Home.make(navigation, /* array */[]));
                })]
          ];
  }
}

var reactClass = Curry._2(NavigationConfig.Navigator[/* configure */6], mapRoute, /* Home */0);

exports.mapRoute = mapRoute;
exports.reactClass = reactClass;
/* reactClass Not a pure module */
