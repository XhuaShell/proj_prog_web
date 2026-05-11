export function getPanel(panel) {
  if (panel === "customer") {
    return {
      title: "Customerrr",
      panel_link: "/socio/panel",
      sections: [
        {
          title: "Perfil",
          buttons: [
            {
              name: "Datos",
              link: "",
            },
          ],
        },
        {
          title: "Stock",
          buttons: [
            {
              name: "Ver",
              link: "/public/panel/customerPanel",
            },
          ],
        },
        {
          title: "Cuenta",
          buttons: [
            {
              name: "Actualización",
              link: "/socio/informacion",
            },
          ],
        },
      ],
    };
  }

  if (panel === "admin") {
    return {
      title: "Admin Panel",
      panel_link: "/socio/panel",
      sections: [
        {
          title: "Registrar",
          buttons: [
            {
              name: "Empleado",
              link: "/zona/lista",
            },
            {
              name: "Administrador",
              link: "",
            },
            {
              name: "Carros",
              link: "",
            },
          ],
        },
        {
          title: "Ver",
          buttons: [
            {
              name: "Clientes",
              link: "",
            },
            {
              name: "Stock",
              link: "",
            },
            {
              name: "Vendedores",
              link: "",
            },
          ],
        },
        {
          title: "Cuenta",
          buttons: [
            {
              name: "Actualización",
              link: "/socio/informacion",
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
              link: "/zona/lista",
            },
            {
              name: "Ver",
              link: "",
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
              link: "/socio/informacion",
            },
          ],
        },
      ],
    };
  }
}
