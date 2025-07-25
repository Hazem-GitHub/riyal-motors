import type { Schema, Struct } from '@strapi/strapi';

export interface CardsOfferings extends Struct.ComponentSchema {
  collectionName: 'components_cards_offerings';
  info: {
    displayName: 'offerings';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.button', false>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsNavitem extends Struct.ComponentSchema {
  collectionName: 'components_elements_navitems';
  info: {
    displayName: 'navitem';
    icon: 'bulletList';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HerosHome extends Struct.ComponentSchema {
  collectionName: 'components_heros_homes';
  info: {
    displayName: 'home';
  };
  attributes: {
    cta1: Schema.Attribute.Component<'elements.button', false>;
    cta2: Schema.Attribute.Component<'elements.button', false>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    shortDescription: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.offerings': CardsOfferings;
      'elements.button': ElementsButton;
      'elements.navitem': ElementsNavitem;
      'heros.home': HerosHome;
    }
  }
}
