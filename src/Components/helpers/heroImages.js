
//Para exportar imagenes correctamente y sin problemas

// export const godsImages = require.context('/../assets/gods', true)
deityImages = require.context('/../assets/gods',  false  , /\.(png|jpe?g|svg)$/)

const importAll = (r) => {
    return r.keys().map(r);
}

console.log(deityImages);

export const godsImages =importAll(deityImages)





