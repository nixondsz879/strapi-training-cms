'use strict';

/**
 * number-of-bedroom service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::number-of-bedroom.number-of-bedroom');
