var categories = [

    {

        name: "Europa",

        subcategory: {

            name: "Romania",

            subcategory: {

                name: "Bucuresti",

                subcategory: {

                    name: "Bdul Magheru",

                    subcategory: undefined

                }

            }

        }

    },

    {

        name: "categorie 1",

        subcategory: {

            name: "categorie 2",

            subcategory: {

                name: "categorie 3",

                subcategory: {

                    name: "categorie 4",

                    subcategory: {

                        name: "categorie 5",

                        subcategory: {

                            name: "categorie 6",

                            subcategory: undefined

                        }

                    }

                }

            }

        }

    }

];

console.log(categories);

function display(c) {

    console.log(c.name);
    if (c.subcategory) {
        display(c.subcategory);
    }

}
display(categories[1]);

