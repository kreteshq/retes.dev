import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Retes</span>,
  project: {
    link: 'https://github.com/kreteshq/retes',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Retes',
  },
  
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Retes",
    };
  },
}

export default config
