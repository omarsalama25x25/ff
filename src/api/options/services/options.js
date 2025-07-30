'use strict';

/**
 * options service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::options.options');
