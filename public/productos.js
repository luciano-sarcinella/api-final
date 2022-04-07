const productos = [
    {'id' : '1001',
    'url' : 'https://media.istockphoto.com/photos/hoodie-jacket-isolated-picture-id1192227099?k=20&m=1192227099&s=612x612&w=0&h=twc9m8FzMmVlEPDEk8MEL4X-ouyWDU7BHxlNY5WJxqQ=',
    'categoria' : 'buzo',
    'color' : 'negro',
    'titulo': 'Buzo',
    'precio' : 7999
    },
    {'id' : '1002',
    'url' : 'https://media.istockphoto.com/photos/gray-hoodie-sweatshirt-mockup-isolated-on-white-background-picture-id685859844?k=20&m=685859844&s=612x612&w=0&h=3_yDQodt611Ya777zy_ABrChhszHkSEczgbp4OtedYc=',
    'categoria' : 'buzo',
    'color' : 'gris',
    'titulo': 'Buzo',
    'precio' : 6999
    },
    {
        'id' : '1003',
        'url' : 'https://media.istockphoto.com/vectors/mockup-of-the-black-sportswear-hoodie-and-trousers-in-four-dimensions-vector-id1063858410?k=20&m=1063858410&s=612x612&w=0&h=AlXzg0JeNIyvJ4MuD4YjS-e8nM2v9LTPnoMpaB0o5Zw=',
        'categoria' : 'buzo',
        'color' : 'negro',
        'titulo': 'Conjunto Negro',
        'precio' : 10999
    },
    {
        'id' : '1004',
        'url' : 'https://media.istockphoto.com/photos/fighter-boxing-during-his-winter-workout-in-snowy-park-picture-id1344754297?k=20&m=1344754297&s=612x612&w=0&h=9jXE8tptYa7ONs1DDZBlvk0UU6C6vnIuYxjvXAPx2nc=',
        'categoria' : 'buzo',
        'color' : 'negro',
        'titulo': 'Buzo Basico',
        'precio' : 7999
    },
    {
        'id' : '2001',
        'url' : 'https://http2.mlstatic.com/D_NQ_NP_847930-MLA31478746875_072019-O.jpg',
        'categoria' : 'pantalon',
        'color' : 'negro',
        'titulo': 'Jogger Babucha Slim',
        'precio' : 4999
    },
    {
        'id' : '2002',
        'url' : 'https://http2.mlstatic.com/D_NQ_NP_979138-MLA32142883878_092019-W.jpg',
        'categoria' : 'pantalon',
        'color' : 'verde',
        'titulo': 'Joggin militar',
        'precio' : 4499  
    },
    {
        'id' : '2003',
        'url' : 'https://uniformesweb.es/blog/wp-content/plugins/aawp/public/image.php?url=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNDFTYnRoZ09NZkwuanBn',
        'categoria' : 'pantalon',
        'color' : 'negro',
        'titulo': 'Cargo Basic',
        'precio' : 5499  
    },
    {
        'id':'2004',
        'url':'https://http2.mlstatic.com/D_NQ_NP_647287-MLA46743916848_072021-W.jpgg',
        'categoria':'pantalon',
        'color':'marron',
        'titulo': 'Jogger gabardina',
        'precio' : 5999  
    },
    {
        'id':'3001',
        'url':'https://media.istockphoto.com/photos/quilted-jacket-isolated-picture-id1162850119?k=20&m=1162850119&s=612x612&w=0&h=5B6u70nWD9nJSpjax_vofkdxguH23yD_79kShMSmSnM=',
        'categoria':'campera',
        'color':'negro',
        'titulo': 'Campera Inflada',
        'precio' : 12999  
    },
    {
        'id':'3002',
        'url':'https://media.istockphoto.com/photos/black-sweat-pullover-hoodie-isolated-unisex-long-sleeves-apparel-picture-id1199427458?k=20&m=1199427458&s=612x612&w=0&h=Qd2VMn6ooxAjTSCt6G2uG6or3yUPvyTqRQN6NKI_c9E=',
        'categoria':'campera',
        'color':'gris',
        'titulo': 'Campera Slim',
        'precio' : 7999  
    },
    {
        'id':'3003',
        'url':'https://media.istockphoto.com/photos/black-jacket-and-tshirt-isolated-on-white-background-picture-id1210106212?k=20&m=1210106212&s=612x612&w=0&h=bRQ_Fokg3CAGdR15gi3ZWlkDwocYPFr0gI8ksp39mTE=',
        'categoria':'campera',
        'color':'negro',
        'titulo': 'Campera Bomber',
        'precio' : 11999  
    },
    {
        'id':'3004',
        'url':'https://media.istockphoto.com/photos/hero-showing-white-tshirt-picture-id516544100?k=20&m=516544100&s=612x612&w=0&h=fNSD55WPz2jbLa-TYI1DKNR_M513caV2t1-OOJkPBBk=',
        'categoria':'campera',
        'color':'azul',
        'titulo': 'Campera Slim',
        'precio' : 7999  
    },
    {
        'id':'4001',
        'url':'https://media.istockphoto.com/photos/creative-minimal-paper-idea-concept-white-shoe-with-white-background-picture-id1149654373?k=20&m=1149654373&s=612x612&w=0&h=YfIwQ1QylFJ2sxMmjKAWLONWniGq9PiMGBkVeBeB9oQ=',
        'categoria':'zapatilla',
        'color':'blanco',
        'titulo': 'Zapatillas Urban',
        'precio' : 10499 
    },
    {
        'id':'4002',
        'url':'https://media.istockphoto.com/photos/sport-shoes-on-isolated-white-background-picture-id956501428?k=20&m=956501428&s=612x612&w=0&h=UC4qdZa2iA0PJvv0RIBlJDyF80wxFyLPq4YWvZa30Sc=',
        'categoria':'zapatilla',
        'color':'blanco',
        'titulo': 'Zapatillas Runnin',
        'precio' : 9999 
    },
    {
        'id':'4003',
        'url':'https://media.istockphoto.com/photos/different-color-running-shoes-picture-id979833570?k=20&m=979833570&s=612x612&w=0&h=J8cYcaHcCjO4aBNqJdHMSDKlv0qdxPwGqpj8wGjiJvE=',
        'categoria':'zapatilla',
        'color':'marron',
        'titulo': 'Zapatillas Air',
        'precio' : 9499 
    },
    {
        'id':'4004',
        'url':'https://images.pexels.com/photos/3228855/pexels-photo-3228855.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'categoria':'zapatilla',
        'color':'blanco',
        'titulo': 'Zapatillas Skate',
        'precio' : 8999 
    }

]

module.exports = productos