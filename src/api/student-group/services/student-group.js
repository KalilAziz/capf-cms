'use strict';

/**
 * student-group service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-group.student-group');
