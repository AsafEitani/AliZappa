var MongoClient = require('mongodb').MongoClient;
var connectionString = "mongodb://mongo:secret@localhost:27017/";

const shops = [
    {
      name: "BuyMax",
      type: "Guitars Shop",
      content: "Heart rate monitors. Herzliya",
      phoneNumber: "0542050659",
      email: "support@buymax.co.il",
      website: "http://www.buymax.co.il/",
      address: "99 Sokolov, Herzliya"
    },
    {
      name: "my little shop",
      type: "Phones Shop",
      content: "daddy little shop",
      phoneNumber: "0521234567",
      email: "mylittleshop@gmail.com",
      website: "http://www.little.co.il/",
      address: "mendel matityaho 3, ramat gan"
    },
    {
      name: "Max TV",
      type: "TVs Shop",
      content: "maximum fun",
      phoneNumber: "0521234567",
      email: "mylittleshop@gmail.com",
      website: "http://www.maxtv.co.il/",
      address: "alenby 53, tel aviv"
    },
];

const guitars = [
  {
    name: "ALVAREZ ADWS77CESHB",
    manufacturer: "Alvarez",
    type: "acoustic",
    stringCount: 6,
    price: 2539
  },
  {
    name: "MRTN-D10E",
    manufacturer: "Martin",
    type: "acoustic",
    stringCount: 6,
    price: 4224
  },
  {
    name: "YAMAHA Pacifica",
    manufacturer: "Yamaha",
    type: "electric",
    stringCount: 6,
    price: 1850
  },
  {
    name: "FENDER Squier",
    manufacturer: "Fender",
    type: "electric",
    stringCount: 6,
    price: 1130
  },
  {
    name: "FENDER SQUIER",
    manufacturer: "Fender",
    type: "bass",
    stringCount: 4,
    price: 1190
  },
  {
    name: "Cort Action Bass Plus",
    manufacturer: "Cort",
    type: "bass",
    stringCount: 4,
    price: 1031
  },
];

const findItems = async () => {
    const client = await MongoClient.connect(connectionString, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    });
    // specify the DB's name
    const db = client.db('');
    
    for (var i = 0; i < shops.length; i++) {
      await db.collection('shops').insertOne(shops[i]);
    }

    for (var i = 0; i < guitars.length; i++) {
      await db.collection('guitars').insertOne(guitars[i]);
    }
    
    // close connection
    client.close();
};

findItems()