export function getPanel(panel) {
  if (panel === "customer") {
    return {
      title: "Customer Panel",
      panel_link: "/socio/panel",
      sections: [
        {
          title: "Amarres",
          buttons: [
            {
              name: "Zonas",
              link: "/zona/lista",
            },
            {
              name: "Estadísticas",
              link: "",
            },
          ],
        },
        {
          title: "Gestion",
          buttons: [
            {
              name: "Usuarios",
              link: "",
            },
            {
              name: "Reportes",
              link: "",
            },
            {
              name: "Registros",
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

  if (panel === "admin") {
    return {
      title: "Admin Panel",
      panel_link: "/socio/panel",
      sections: [
        {
          title: "Amarres",
          buttons: [
            {
              name: "Zonas",
              link: "/zona/lista",
            },
            {
              name: "Estadísticas",
              link: "",
            },
          ],
        },
        {
          title: "Gestion",
          buttons: [
            {
              name: "Usuarios",
              link: "",
            },
            {
              name: "Reportes",
              link: "",
            },
            {
              name: "Registros",
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
          title: "Amarres",
          buttons: [
            {
              name: "Zonas",
              link: "/zona/lista",
            },
            {
              name: "Estadísticas",
              link: "",
            },
          ],
        },
        {
          title: "Gestion",
          buttons: [
            {
              name: "Usuarios",
              link: "",
            },
            {
              name: "Reportes",
              link: "",
            },
            {
              name: "Registros",
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
