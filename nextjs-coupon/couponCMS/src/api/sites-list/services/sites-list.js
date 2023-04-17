'use strict';

/**
 * sites-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sites-list.sites-list');
