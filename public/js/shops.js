// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 0, lng: 0 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}
  
window.initMap = initMap;

function selectShop(name,type,content,phoneNumber,email,website,imgsrc,lat,lon,id){
    document.getElementById("mainshop_headline").innerHTML = name;

    document.getElementById("mainshop_content_item_name").innerHTML = name;
    document.getElementById("mainshop_content_item_type").innerHTML = type;
    document.getElementById("mainshop_content_item_content").innerHTML = content;
    document.getElementById("mainshop_content_item_phonenumber").innerHTML = phoneNumber;
    document.getElementById("mainshop_content_item_email").innerHTML = email;
    document.getElementById("mainshop_content_item_website").innerHTML = website;
    document.getElementById("mainshop_content_img").src = imgsrc;
    changeMap(Number(lat),Number(lon))

    document.getElementById('adminEdit').href = "editShop?id="+id
}

function changeMap(lat, lng){
    console.log(lat)
    console.log(lng)
    const uluru = { lat: lat, lng: lng };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

function open_shop_list_search() {
    document.getElementById("shop_list_search_closed").id = "shop_list_search_open"
    document.getElementById("toggle_search_box_icon").onclick = close_shop_list_search
    document.getElementById("toggle_search_box_icon").className = "fa-light fa-up"
}

function close_shop_list_search() {
    document.getElementById("shop_list_search_open").id = "shop_list_search_closed"
    document.getElementById("toggle_search_box_icon").onclick = open_shop_list_search
    document.getElementById("toggle_search_box_icon").className = "fa-light fa-down"
}

function open_guitar_list_search() {
    document.getElementById("shop_list_search_closed").id = "guitar_list_search_open"
    document.getElementById("toggle_search_box_icon").onclick = close_guitar_list_search
    document.getElementById("toggle_search_box_icon").className = "fa-light fa-up"
}

function close_guitar_list_search() {
    document.getElementById("guitar_list_search_open").id = "shop_list_search_closed"
    document.getElementById("toggle_search_box_icon").onclick = open_guitar_list_search
    document.getElementById("toggle_search_box_icon").className = "fa-light fa-down"
}

function selectGuitar(name,type,manufacturer,stringCount,price,id){
    document.getElementById("mainshop_headline").innerHTML = name;

    document.getElementById("mainguitar_content_item_name").innerHTML = name;
    document.getElementById("mainguitar_content_item_type").innerHTML = type;
    document.getElementById("mainguitar_content_item_manufacturer").innerHTML = manufacturer;
    document.getElementById("mainguitar_content_item_stringCount").innerHTML = stringCount;
    document.getElementById("mainguitar_content_item_price").innerHTML = price;

    document.getElementById('adminEdit').href = "editGuitar?id="+id
}

function selectPhone(name,manufacturer,gb,color,dpi,price,id){
    document.getElementById("mainshop_headline").innerHTML = name;

    document.getElementById("mainguitar_content_item_name").innerHTML = name;
    document.getElementById("mainguitar_content_item_manufacturer").innerHTML = manufacturer;
    document.getElementById("mainguitar_content_item_gb").innerHTML = gb;
    document.getElementById("mainguitar_content_item_color").innerHTML = color;
    document.getElementById("mainguitar_content_item_dpi").innerHTML = dpi;
    document.getElementById("mainguitar_content_item_price").innerHTML = price;

    document.getElementById('adminEdit').href = "editPhone?id="+id
}

function selectTv(name,manufacturer,inch,price,id){
    document.getElementById("mainshop_headline").innerHTML = name;

    document.getElementById("mainguitar_content_item_name").innerHTML = name;
    document.getElementById("mainguitar_content_item_manufacturer").innerHTML = manufacturer;
    document.getElementById("mainguitar_content_item_inch").innerHTML = inch;
    document.getElementById("mainguitar_content_item_price").innerHTML = price;

    document.getElementById('adminEdit').href = "editTv?id="+id
}