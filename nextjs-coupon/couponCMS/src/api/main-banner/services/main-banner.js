'use strict';

/**
 * main-banner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-banner.main-banner');
