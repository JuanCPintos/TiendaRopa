
module.exports = {
    content: [
        "./views/layout.hbs",
        "./views/index.hbs",
        "./views/partials/form.hbs",
        "./views/partials/nav.hbs",
        "./views/partials/footer.hbs",
        "./views/partials/cardCategory.hbs",
        "./views/partials/products.hbs",
    ],
    theme: {
        extend:{
            backgroundImage: {
                'hero-pattern': "url('/img/tienda-ropa.avif')"
            }
        }
    },
    plugins: [],
};