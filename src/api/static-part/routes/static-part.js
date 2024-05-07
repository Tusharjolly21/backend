'use strict';

/**
 * static-part router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::static-part.static-part');
