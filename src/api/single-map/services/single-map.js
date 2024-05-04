'use strict';

/**
 * single-map service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::single-map.single-map');
