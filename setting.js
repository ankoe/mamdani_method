var permintaan_range_min=parseFloat($("#permintaan .range-min").val());
var permintaan_range_max=parseFloat($("#permintaan .range-max").val());
var persediaan_range_min=parseFloat($("#persediaan .range-min").val());
var persediaan_range_max=parseFloat($("#persediaan .range-max").val());
var produksi_range_min=parseFloat($("#produksi .range-min").val());
var produksi_range_max=parseFloat($("#produksi .range-max").val());

$("#sidebar").niceScroll({cursorcolor:"#A4A9AE",cursoropacitymax:0.7});
$("body").niceScroll({cursorcolor:"#87918B",cursoropacitymax:0.4});
//cek permintaan
$("#permintaan .sedikit .a, #permintaan .sedikit .b, #permintaan .sedikit .c").change(function(){
    var ini=parseFloat($(this).val());
    if( ini<permintaan_range_min || ini>permintaan_range_max)
    {
        alert("mohon masukkan nilai diantara range "+ permintaan_range_min + " hingga "+ permintaan_range_max);
    }
});

$("#permintaan .sedang .a, #permintaan .sedang .b, #permintaan .sedang .c").change(function(){
    var ini=parseFloat($(this).val());
   if( ini<permintaan_range_min || ini>permintaan_range_max)
    {
        alert("mohon masukkan nilai diantara range "+ permintaan_range_min + " hingga "+ permintaan_range_max);
    }
});

$("#permintaan .banyak .a, #permintaan .banyak .b, #permintaan .banyak .c").change(function(){
    var ini=parseFloat($(this).val());
   if( ini<permintaan_range_min || ini>permintaan_range_max)
    {
        alert("mohon masukkan nilai diantara range "+ permintaan_range_min + " hingga "+ permintaan_range_max);
    }
});

//cek persediaan
$("#persediaan .sedikit .a, #persediaan .sedikit .b, #persediaan .sedikit .c").change(function(){
    var ini=parseFloat($(this).val());
    if( ini<persediaan_range_min || ini>persediaan_range_max)
    {
        alert("mohon masukkan nilai diantara range "+ persediaan_range_min + " hingga "+ persediaan_range_max);
    }
});

$("#persediaan .sedang .a, #persediaan .sedang .b, #persediaan .sedang .c").change(function(){
    var ini=parseFloat($(this).val());
    if( ini<persediaan_range_min || ini>persediaan_range_max)
    {
        alert("mohon masukkan nilai diantara range "+ persediaan_range_min + " hingga "+ persediaan_range_max);
    }
});

$("#persediaan .banyak .a, #persediaan .banyak .b, #persediaan .banyak .c").change(function(){
    var ini=parseFloat($(this).val());
    if( ini<persediaan_range_min || ini>persediaan_range_max)
    {
        alert("mohon masukkan nilai diantara range "+ persediaan_range_min + " hingga "+ persediaan_range_max);
    }
});

$("#produksi .banyak .a, #produksi .banyak .b, #produksi .banyak .c, #produksi .banyak .d").change(function(){
    var ini=parseFloat($(this).val());
    if( ini<produksi_range_min || ini>produksi_range_max)
    {
        alert("mohon masukkan nilai diantara range "+ produksi_range_min + " hingga "+ produksi_range_max);
    }
});
$("#produksi .sedikit .a, #produksi .sedikit .b, #produksi .sedikit .c, #produksi .sedikit .d").change(function(){
    var ini=parseFloat($(this).val());
    if( ini<produksi_range_min || ini>produksi_range_max)
    {
        alert("mohon masukkan nilai diantara range "+ produksi_range_min + " hingga "+ produksi_range_max);
    }
});

//inisiasi variabel default
$("#permintaan .slider").noUiSlider({
   range: [0, 30],
   start: [8, 24],
   handles:2,
   serialization: {
    to: [$("#permintaan .range-min"),$("#permintaan .range-max")]
   }
});

$('#permintaan .sedikit .a').val(8);
$('#permintaan .sedikit .b').val(11);
$('#permintaan .sedikit .c').val(14);

$('#permintaan .sedang .a').val(13);
$('#permintaan .sedang .b').val(16);
$('#permintaan .sedang .c').val(19);

$('#permintaan .banyak .a').val(18);
$('#permintaan .banyak .b').val(21);
$('#permintaan .banyak .c').val(24);

$("#persediaan .slider").noUiSlider({
   range: [20, 80],
   start: [30, 60],
   handles:2,
   serialization: {
    to: [$("#persediaan .range-min"),$("#persediaan .range-max")]
   }
});

$('#persediaan .sedikit .a').val(30);
$('#persediaan .sedikit .b').val(36);
$('#persediaan .sedikit .c').val(42);

$('#persediaan .sedang .a').val(38);
$('#persediaan .sedang .b').val(45);
$('#persediaan .sedang .c').val(50);

$('#persediaan .banyak .a').val(47);
$('#persediaan .banyak .b').val(55);
$('#persediaan .banyak .c').val(60);

//---------------produksi slider
$("#produksi .slider").noUiSlider({
   range: [0, 50],
   start: [10, 25],
   handles:2,
   serialization: {
    to: [$("#produksi .range-min"),$("#produksi .range-max")]
   }
});

$('#produksi .sedikit .a').val(10);
$('#produksi .sedikit .b').val(10);
$('#produksi .sedikit .c').val(14);
$('#produksi .sedikit .d').val(20);

$('#produksi .banyak .a').val(17);
$('#produksi .banyak .b').val(21);
$('#produksi .banyak .c').val(25);
$('#produksi .banyak .d').val(25);

$("#variasi div.permintaan").noUiSlider({
   range: [8 ,24],
   start: 16,
   handles:1,
   serialization: {
    to: [$("#variasi input.permintaan")]
   },
   slide: function(){
    keanggotaan_permintaan();
    nilai_rules();
    komposisi();
    defuzzy();
   }
});

$("#variasi div.persediaan").noUiSlider({
   range: [30,60],
   start: 52,
   handles:1,
   serialization: {
    to: [$("#variasi input.persediaan")]
   },
   slide: function(){
    keanggotaan_persediaan();
    nilai_rules();
    komposisi();
    defuzzy();
   }
});