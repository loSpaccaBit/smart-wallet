export default {
  title: "Smart-Wallet",
  description: "Esplora il mondo della finanza personale con noi!",
  lang: 'it',
  cleanUrls: true,
  ignoreDeadLinks: true,

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Smart-Wallet",
    search: {
      provider: "local",
    },
    nav: [
      { text: "Blog", link: "/blog" },
    ],
    sidebar: [
      {
        text: "Truffe",
        collapsible: true,
        items: [
          { text: "Pishing", link: "/truffe/phising" },
          { text: "QrPhising", link: "/truffe/qr-phising" },
        ],
      },
      {
        text: "Pagamenti",
        collapsible: true,
        items: [
          { text: "Pagamenti", link: "/pagamenti/pagamenti-online" },
        ],
      }
    ],
    docFooter: {
      prev: true,
      next: true,
    },
    footer: {
      copyright: "Copyright © 2024 - Francesco Pio Nocerino, Scognamiglio Emanuele, Scotti Cristian",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
    returnToTopLabel: 'Vai su',
    sidebarMenuLabel: 'Menu',
  },
};
