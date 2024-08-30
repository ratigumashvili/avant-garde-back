import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'resource.resource': ResourceResource;
      'shared.seo': SharedSeo;
    }
  }
}
