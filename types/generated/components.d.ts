import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaKeywords: Attribute.String;
    metaImage: Attribute.Media<'images'>;
  };
}

export interface ResourceResource extends Schema.Component {
  collectionName: 'components_resource_resources';
  info: {
    displayName: 'resource';
    icon: 'earth';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
      'resource.resource': ResourceResource;
    }
  }
}
