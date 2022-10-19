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
      address: "99 Sokolov, Herzliya",
      lat: 32.167490,
      lon: 34.850570
    },
    {
      name: "my little shop",
      type: "Phones Shop",
      content: "daddy little shop",
      phoneNumber: "0521234567",
      email: "mylittleshop@gmail.com",
      website: "http://www.little.co.il/",
      address: "mendel matityaho 3, ramat gan",
      lat: 32.069220,
      lon: 34.833190
    },
    {
      name: "Max TV",
      type: "TVs Shop",
      content: "maximum fun",
      phoneNumber: "0521234567",
      email: "mylittleshop@gmail.com",
      website: "http://www.maxtv.co.il/",
      address: "alenby 53, tel aviv",
      lat: 32.069270,
      lon: 34.809970
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

const phones = [
  {
    name: "S22",
    manufacturer: "Galaxy",
    gb: 64,
    color: "black",
    dpi: 544,
    price: 4321
  },
  {
    name: "S22",
    manufacturer: "Galaxy",
    gb: 256,
    color: "white",
    dpi: 544,
    price: 5321
  },
  {
    name: "A79",
    manufacturer: "Galaxy",
    gb: 64,
    color: "black",
    dpi: 300,
    price: 1210
  },
  {
    name: "A80",
    manufacturer: "Galaxy",
    gb: 64,
    color: "green",
    dpi: 544,
    price: 1900
  },
  {
    name: "S13 max",
    manufacturer: "Iphone",
    gb: 256,
    color: "red",
    dpi: 544,
    price: 99000
  }
];

const tvs = [
  {
    name: "au8000",
    manufacturer: "Samsung",
    inch: 60,
    price: 1890
  },
  {
    name: "au7100",
    manufacturer: "Samsung",
    inch: 65,
    price: 1790
  },
  {
    name: "A1PVA",
    manufacturer: "LG",
    inch: 55,
    price: 5000
  },
  {
    name: "A1PVA",
    manufacturer: "LG",
    inch: 65,
    price: 5200
  },
  {
    name: "Bravia 1",
    manufacturer: "Sony",
    inch: 42,
    price: 1234
  },
  {
    name: "Bravia 2",
    manufacturer: "Sony",
    inch: 55,
    price: 999
  }
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

    for (var i = 0; i < phones.length; i++) {
      await db.collection('phones').insertOne(phones[i]);
    }

    for (var i = 0; i < tvs.length; i++) {
      await db.collection('tvs').insertOne(tvs[i]);
    }

    admin = {
      username: "secret",
      password: "secret"
    }

    await db.collection('users').insertOne(admin);

    // close connection
    client.close();
};

findItems()