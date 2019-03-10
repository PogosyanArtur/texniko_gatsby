'use strict';

/**
 * Gallary.js controller
 *
 * @description: A set of functions called "actions" for managing `Gallary`.
 */

module.exports = {

  /**
   * Retrieve gallary records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.gallary.search(ctx.query);
    } else {
      return strapi.services.gallary.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a gallary record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.gallary.fetch(ctx.params);
  },

  /**
   * Count gallary records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.gallary.count(ctx.query);
  },

  /**
   * Create a/an gallary record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.gallary.add(ctx.request.body);
  },

  /**
   * Update a/an gallary record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.gallary.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an gallary record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.gallary.remove(ctx.params);
  }
};
