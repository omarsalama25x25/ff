'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
  async find(ctx) {
    const response = await strapi.service('api::product.product').find({
      ...ctx.query,
      populate: {
        image: true,
        sizes: true,
        optionGroup: {
          populate: {
            options: {
              populate: {
                image: true,
              },
            },
          },
        },
      },
    });
    return response;
  },

  async findOne(ctx) {
    const { id } = ctx.params;

    const response = await strapi.service('api::product.product').findOne(id, {
      populate: {
        image: true,
        sizes: true,
        optionGroup: {
          populate: {
            options: {
              populate: {
                image: true,
              },
            },
          },
        },
      },
    });
    return response;
  },

  async create(ctx) {
    const response = await super.create(ctx);
    return response;
  },

  async update(ctx) {
    const response = await super.update(ctx);
    return response;
  },

  async delete(ctx) {
    const response = await super.delete(ctx);
    return response;
  },
}));
