'use strict';

/**
 * dum service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dum.dum');
