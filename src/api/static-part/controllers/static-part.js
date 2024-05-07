'use strict';

/**
 * static-part controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::static-part.static-part');
