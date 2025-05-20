// Package metadata for Meteor.js web platform (https://www.meteor.com/)
// This file is defined within the Meteor documentation at
//
//   http://docs.meteor.com/#/full/packagejs
//
// and it is needed to define a Meteor package
"use strict";

Package.describe({
  name    : "useraccounts:iron-routing",
  summary : "UserAccounts package providing routes configuration capability via iron:router.",
  version : "1.16.0",
  git     : "https://github.com/meteor-compat/useraccounts-iron-routing.git"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@3.2.2");

  api.use([
    "check@1.4.4",
    "polygonwood:router@2.0.0",
    "underscore@1.6.4",
    "useraccounts:core@1.17.2",
  ], ["client", "server"]);

  api.imply([
    "useraccounts:core@1.17.2",
    "polygonwood:router@2.0.0"
  ], ["client", "server"]);

  api.addFiles([
    "lib/core.js",
    "lib/server.js",
  ], ["server"]);

  api.addFiles([
    "lib/core.js",
    "lib/client.js",
    "lib/templates_helpers/at_input.js",
  ], ["client"]);
});
