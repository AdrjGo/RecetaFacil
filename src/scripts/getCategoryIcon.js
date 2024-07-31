export function getCategoryIcon(title, newCategory) {
  const categoryIcons = {
    Pasabocas: "/icons/aperitivo.svg",
    Arroces: "/icons/arroz.svg",
    "Carnes Blancas": "/icons/pollo.svg",
    "Carnes Rojas y Rosadas": "/icons/carne.svg",
    Ensaladas: "/icons/ensalada.svg",
    "Guisos y Estofados": "/icons/guiso.svg",
    Desayunos: "/icons/desayuno.svg",
    Legumbres: "/icons/legumbres.svg",
    Mariscos: "/icons/mariscos.svg",
    Panaderia: "/icons/pan.svg",
    Pastas: "/icons/pastas.svg",
    Pescados: "/icons/pescado.svg",
    Postres: "/icons/postres.svg",
    Salsas: "/icons/salsas.svg",
    "Sopas y cremas": "/icons/sopa.svg",
    Vegetales: "/icons/vegetales.svg",
  };

  return categoryIcons[title] || "/icons/mandil.svg";
}
