import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCartitem extends Struct.ComponentSchema {
  collectionName: 'components_shared_cartitems';
  info: {
    displayName: 'cartitem';
  };
  attributes: {
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    quantity: Schema.Attribute.Integer;
  };
}

export interface SharedItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_items';
  info: {
    displayName: 'items';
    icon: 'dashboard';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.cartitem': SharedCartitem;
      'shared.items': SharedItems;
    }
  }
}
