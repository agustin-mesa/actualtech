import { db } from "./firebase";

const addItem = async ({
  id,
  categoria,
  title,
  price,
  pictureUrl,
  envioGratis,
  cuotas,
  sinInteres,
  descuento,
  stock,
  opiniones,
  promedioOpiniones,
}) => {
  db.collection("productos-tienda").doc(id).set({
    id: id,
    categoria: categoria,
    title: title,
    price: price,
    pictureUrl: pictureUrl,
    envioGratis: envioGratis,
    cuotas: cuotas,
    sinInteres: sinInteres,
    descuento: descuento,
    stock: stock,
    opiniones: opiniones,
    promedioOpiniones: promedioOpiniones,
  });
};

export default addItem;

/*

    import { v4 as uuidv4 } from "uuid";

    addItem({
        id: uuidv4(),
        categoria: producto.categoria,
        title: producto.title,
        price: producto.price,
        pictureUrl: producto.pictureUrl,
        envioGratis: producto.envioGratis,
        cuotas: producto.cuotas,
        sinInteres: producto.sinInteres,
        descuento: producto.descuento,
        stock: producto.stock,
        opiniones: producto.opiniones,
        promedioOpiniones: producto.promedioOpiniones,
      });

*/
