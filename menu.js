var menu = [
    ["Ana Sayfa"],
    ["İndirim"],
    ["Ürünler",
        [
            ["Kadın",
                [
                    ["Giyim",
                        [
                            ["Pantolon",
                                [
                                    ["Mavi",

                                        //[
                                        //    ["aaa"],
                                        //    ["bbb"]
                                        //]
                                    ],
                                    ["Koton"],
                                    ["Defacto"]
                                ]
                            ],
                            ["Gömlek",
                                [
                                    ["Mavi"],
                                    ["Koton"],
                                    ["Defacto"]
                                ]
                            ]
                        ]
                    ],
                    ["Ayakkabı",
                        [
                            ["Stiletto",
                                [
                                    ["Mavi"],
                                    ["Koton"],
                                    ["Defacto"]
                                ]
                            ],
                            ["Bot",
                                [
                                    ["Mavi"],
                                    ["Koton"],
                                    ["Defacto"]
                                ]
                            ],
                            ["Günlük"]
                        ]
                    ],
                    ["Kozmetik"]
                ]
            ],

            ["Erkek",
                [
                    ["Giyim",
                        [
                            ["Pantolon",
                                [
                                    ["Mavi"],
                                    ["Koton"],
                                    ["Defacto"]
                                ]
                            ],
                            ["Gömlek",
                                [
                                    ["Mavi"],
                                    ["Koton"],
                                    ["Defacto"]
                                ]
                            ]
                        ]
                    ],
                    ["Aksesuar",
                        [
                            ["Saat",
                                [
                                    ["Mavi"],
                                    ["Koton"],
                                    ["Defacto"]
                                ]
                            ],
                            ["Kemer",
                                [
                                    ["Mavi"],
                                    ["Koton"],
                                    ["Defacto"]
                                ]
                            ]
                        ]
                    ],
                    ["Ayakkabı",
                        [
                            ["Stiletto",
                                [
                                    ["Mavi"],
                                    ["Koton"],
                                    ["Defacto"]
                                ]
                            ],
                            ["Bot",
                                [
                                    ["Mavi"],
                                    ["Koton"],
                                    ["Defacto"]
                                ]
                            ],
                            ["Günlük",
                                [
                                    ["Mavi"],
                                    ["Koton"],
                                    ["Defacto"]
                                ]
                            ]
                        ]
                    ]
                ]
            ],
            ["Çocuk"]
        ]
    ],
    ["Hakkımızda"],
    ["İletişim"]
];

function start() {
    var nav = document.getElementById("menu");

    // 1. MENU OLUSTURULDU
    for(var i = 0; i < menu.length; i+=1){
        if(menu[i].length < 2){
            nav.innerHTML += "<li>"+menu[i]+"</li>";
        }else{
            nav.innerHTML += "<li>"+menu[i][0]+"<ul id='menuSub"+i+"'></ul></li>";

            // 2. MENU OLUSTURULDU
            for(var x = 0; x < menu[i][1].length; x+=1){
                if(menu[i][1][x].length < 2){
                    document.getElementById("menuSub"+i).innerHTML += "<li>"+menu[i][1][x]+"</li>";
                }else{
                   document.getElementById("menuSub"+i).innerHTML += "<li>"+menu[i][1][x][0]+"<ul id='menuSub"+i+"-"+x+"'></ul></li>";

                    // 3. MENU OLUSTURULDU
                    for(var y = 0; y < menu[i][1][x][1].length; y+=1){
                        if(menu[i][1][x][1][y].length < 2){
                            document.getElementById("menuSub"+i+"-"+x).innerHTML += "<li>"+menu[i][1][x][1][y]+"</li>"
                        }else{
                            document.getElementById("menuSub"+i+"-"+x).innerHTML += "<li>"+menu[i][1][x][1][y][0]+"<ul id='menuSub"+i+"-"+x+"-"+y+"'></ul></li>";

                            // 4. MENU OLUSTURULDU
                            for(var z = 0; z < menu[i][1][x][1][y][1].length; z+=1){
                                if(menu[i][1][x][1][y][1][z].length < 2){
                                    document.getElementById("menuSub"+i+"-"+x+"-"+y).innerHTML += "<li>"+menu[i][1][x][1][y][1][z]+"</li>"
                                }else{
                                    document.getElementById("menuSub"+i+"-"+x+"-"+y).innerHTML += "<li>"+menu[i][1][x][1][y][1][z][0]+"<ul id='menuSub"+i+"-"+x+"-"+y+"-"+z+"'></ul></li>";

                                    // 5. MENU OLUSTURULDU
                                    for(var e = 0; e < menu[i][1][x][1][y][1][z][1].length; e+=1){
                                        if(menu[i][1][x][1][y][1][z][1][e].length < 2){
                                            document.getElementById("menuSub"+i+"-"+x+"-"+y+"-"+z).innerHTML += "<li>"+menu[i][1][x][1][y][1][z][1][e]+"</li>"
                                        }else{
                                            document.getElementById("menuSub"+i+"-"+x+"-"+y+"-"+z).innerHTML += "<li>"+menu[i][1][x][1][y][1][z][1][e][0]+"</li>"
                                            alert("6. Menu Desteklenmiyor! : " + menu[i][0]+" > "+ menu[i][1][x][0] +" > "+ menu[i][1][x][1][y][0] +" > "+ menu[i][1][x][1][y][1][z][0]+" > "+ menu[i][1][x][1][y][1][z][1][e][0] + " > X < içerik bulunuyor. ");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
