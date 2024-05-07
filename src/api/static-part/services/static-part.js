'use strict';

/**
 * static-part service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::static-part.static-part');
