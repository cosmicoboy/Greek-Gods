
//Para exportar imagenes correctamente y sin problemas

// export const godsImages = require.context('/../assets/gods', true)
export const godsImages = require.context('/../assets/gods',  false, /\.(png|jpe?g|svg)$/)

