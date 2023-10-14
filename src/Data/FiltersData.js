export const brand =[
    "Nike",
    "Adidas",
    "New Ballance",
    "Vans",
    "Converse",
    "Balenciaga",
];

export const filters=[
    {
        id: "brand",
        name :"Brand",
        options:[
            { value :"nike" , label:"Nike"},
            { value :"adidas" , label:"Adidas"},
            { value :"new ballance" , label:"New Ballance"},
            { value :"vans" , label:"Vans"},
            { value :"converse" , label:"Converse"},
            { value :"balenciaga" , label:"Balenciaga"},
        ],
    },

    {
        id:"size",
        name :"Size",
        options:[
            {value :"7" , label:"7"},
            {value :"8" , label:"8"},
            {value :"9" , label:"9"},
            {value :"10" , label:"10"},
            {value :"11" , label:"11"},
            {value :"12" , label:"12"},
            {value :"13" , label:"13"},
            {value :"14" , label:"14"},
            {value :"15" , label:"15"},
        ],
    },
];

export const singleFilter =[
    {
        id: "price",
        name :"Price",
        options :[
            {value :"600000-1000000" , label:"Từ 600 Đến 1 triệu"},
            {value :"1000000-2000000" , label:"Từ 1 Đến 2 triệu"},
            {value :"2000000-3000000" , label:"Từ 2 Đến 3 triệu"},
            {value :"3000000-4000000" , label:"Từ 3 Đến 4 triệu"},
            {value :"4000000-5000000" , label:"Từ 4 Đến 5 triệu"},
            {value :"5000000-10000000" , label:"Từ 5 Đến 10 triệu"},
            {value :"10000000-15000000" , label:"Từ 10 Đến 15 triệu"},
        ],

    },

    {
        id:"discount ",
        name :"Discount",
        options:[
            {value:"10", label:"10%"},
            {value:"20", label:"30%"},
            {value:"30", label:"30%"},
            {value:"40", label:"40%"},
            {value:"50", label:"50%"},
            {value:"60", label:"60%"},
            {value:"70", label:"70%"},
            {value:"80", label:"80%"},
        ],
    },

    {
        id:"stock",
        name :"Availability",
        options:[
            {value:"in_stock",label:"In Stock"},
            {value:"out_off_stock",label:"Out Off Stock"},
        ]
    },
];

export const sortOptions =[
    {name : "Price : Low to Hight ", query :"price_low" ,current : false},
    {name : "Price : Hight to Low", query :"price_low" ,current : false},
]