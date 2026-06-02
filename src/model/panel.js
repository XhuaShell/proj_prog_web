export function getPanel(panel) {
  if (panel === "admin") {
    return {
      title: "Admin Panel",
      panel_link: "/socio/panel",
      sections: [
        {
          title: "Manage",
          buttons: [
            {
              name: "Models",
              link: "/panel/admin/model",
            },
            {
              name: "Brands",
              link: "/panel/admin/brands",
            },
            {
              name: "Technical Specs",
              link: "/panel/admin/model",
            },
            {
              name: "Cars",
              link: "/error/unfinishedFunction",
            },
          ],
        },
        {
          title: "Show",
          buttons: [
            {
              name: "Counsumers",
              link: "/error/unfinishedFunction",
            },
            {
              name: "Stock",
              link: "/error/unfinishedFunction",
            },
            {
              name: "Sellers",
              link: "/panel/admin/sellers",
            },
          ],
        },
        {
          title: "Acount",
          buttons: [
            {
              name: "Personal account",
              link: "/panel/account",
            },
          ],
        },
      ],
    };
  }

  if (panel === "customer") {
    return {
      title: "Customer",
      panel_link: "/socio/panel",
      sections: [
        {
          title: "Perfil",
          buttons: [
            {
              name: "Datos",
              link: "/panel/account",
            },
          ],
        },
        {
          title: "Stock",
          buttons: [
            {
              name: "Ver",
              link: "/error/unfinishedFunction",
            },
          ],
        },
      ],
    };
  }

  if (panel === "seller") {
    return {
      title: "Seller Panel",
      panel_link: "/socio/panel",
      sections: [
        {
          title: "Ventas",
          buttons: [
            {
              name: "Registrar",
              link: "/panel/seller/sale/register",
            },
            {
              name: "Ver Ventas",
              link: "/panel/seller/sales",
            },
          ],
        },
        {
          title: "Stock",
          buttons: [
            {
              name: "Ver",
              link: "",
            },
            {
              name: "Reportes",
              link: "",
            },
          ],
        },
        {
          title: "Cuenta",
          buttons: [
            {
              name: "Actualización",
              link: "/panel/account",
            },
          ],
        },
      ],
    };
  }
}
