'use strict';
/**
 * Messages resource
 * @module resources/messages
 */

var querystring = require('querystring');

var utils = require('../utils');

module.exports = function(request) {
  return {
    send: function(userIds, notification, callback) {
      var body = {
        recipients: userIds,
        notification: notification
      };

      request.post({
        path: "/notifications",
        body: body
      }, callback || utils.nop);
    }
  };
};
