import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum Section {
  HERO = 'hero',
  FEATURES = 'features',
  DEMO = 'demo',
  INSTALLATION = 'installation',
  DOCS = 'docs'
}