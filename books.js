const books=[
    {title: 'Book One', genere: 'Fiction', Publish: 1981, edition: 2000},
    {title: 'Book Two', genere: 'Non-Fiction', Publish: 1992, edition: 2001},
    {title: 'Book Three', genere: 'History', Publish: 1987, edition: 2003},
    {title: 'Book Four', genere: 'Non-Fiction', Publish: 2002, edition: 2004},
    {title: 'Book Five', genere: 'Science', Publish: 1983, edition: 2022},
    {title: 'Book Six', genere: 'Fiction', Publish: 1999, edition: 2010},
    {title: 'Book Seven', genere: 'History', Publish: 1991, edition: 2015},
    {title: 'Book Eight', genere: 'Poetry', Publish: 1997, edition: 2018},
    {title: 'Book Nine', genere: 'Non-Fiction', Publish: 2009, edition: 2021},
    {title: 'Book Ten', genere: 'Fiction', Publish: 1990, edition: 2009},
];

const userbook = books.filter( (bk) => bk.genere === 'History')
console.log(userbook);

const userbooks=books.filter( (bk) => {
return bk.Publish>=2000 && bk.genere === 'Non-Fiction'})
console.log(userbooks);


//reduce method
const shoppingCart=[
    {
    itemname: "js course",
    price: 3999
    },
    {
        itemname:"py course",
        price: 2999
    },
    {
        itemname: "cpp course",
        price: 5999
    },
    {
        itemname:"react course",
        price: 7999
    },
    {
        itemname:"nodeJs course",
        price:9999
    },
]

const pricetopay=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(pricetopay);