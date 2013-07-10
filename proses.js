    

function keanggotaan_permintaan()
{ 
    var permintaan = parseFloat($("#variasi input.permintaan").val());
    var minta_sedikit_a=parseFloat($('#permintaan .sedikit .a').val());
    var minta_sedikit_b=parseFloat($('#permintaan .sedikit .b').val());
    var minta_sedikit_c=parseFloat($('#permintaan .sedikit .c').val());
        
    var minta_sedang_a=parseFloat($('#permintaan .sedang .a').val());
    var minta_sedang_b=parseFloat($('#permintaan .sedang .b').val());
    var minta_sedang_c=parseFloat($('#permintaan .sedang .c').val());
        
    var minta_banyak_a=parseFloat($('#permintaan .banyak .a').val());
    var minta_banyak_b=parseFloat($('#permintaan .banyak .b').val());
    var minta_banyak_c=parseFloat($('#permintaan .banyak .c').val());
    
    //permintaan sedikit
    if(permintaan<=minta_sedikit_a || permintaan >= minta_sedikit_c)
    {
        $('#keanggotaan .permintaan .sedikit').text(0);
    }
    else if(permintaan >= minta_sedikit_a && permintaan <= minta_sedikit_b)
        {
            var hasil=(permintaan-minta_sedikit_a)/(minta_sedikit_b-minta_sedikit_a);
            $('#keanggotaan .permintaan .sedikit').text(hasil.toFixed(2));
        }
    else if(permintaan >= minta_sedikit_b && permintaan <= minta_sedikit_c){
            var hasil=(minta_sedikit_c-permintaan)/(minta_sedikit_c-minta_sedikit_b);
        $('#keanggotaan .permintaan .sedikit').text(hasil.toFixed(2));
    }
    
    //permintaan sedang
    if(permintaan<=minta_sedang_a || permintaan >= minta_sedang_c)
    {
        $('#keanggotaan .permintaan .sedang').text(0);
    }
    else if(permintaan >= minta_sedang_a && permintaan <= minta_sedang_b)
        {
            var hasil=(permintaan-minta_sedang_a)/(minta_sedang_b-minta_sedang_a);
            $('#keanggotaan .permintaan .sedang').text(hasil.toFixed(2));
        }
    else if(permintaan >= minta_sedang_b && permintaan <= minta_sedang_c){
            var hasil=(minta_sedang_c-permintaan)/(minta_sedang_c-minta_sedang_b);
        $('#keanggotaan .permintaan .sedang').text(hasil.toFixed(2));
    }
    
    //permintaan banyak
    if(permintaan<=minta_banyak_a || permintaan >= minta_banyak_c)
    {
        $('#keanggotaan .permintaan .banyak').text(0);
    }
    else if(permintaan >= minta_banyak_a && permintaan <= minta_banyak_b)
        {
            var hasil=(permintaan-minta_banyak_a)/(minta_banyak_b-minta_banyak_a);
            $('#keanggotaan .permintaan .banyak').text(hasil.toFixed(2));
        }
    else if(permintaan >= minta_banyak_b && permintaan <= minta_banyak_c){
            var hasil=(minta_banyak_c-permintaan)/(minta_banyak_c-minta_banyak_b);
        $('#keanggotaan .permintaan .banyak').text(hasil.toFixed(2));
    }
}

function keanggotaan_persediaan()
{ 
    var persediaan = parseFloat($("#variasi input.persediaan").val());
    var sedia_sedikit_a=parseFloat($('#persediaan .sedikit .a').val());
    var sedia_sedikit_b=parseFloat($('#persediaan .sedikit .b').val());
    var sedia_sedikit_c=parseFloat($('#persediaan .sedikit .c').val());
        
    var sedia_sedang_a=parseFloat($('#persediaan .sedang .a').val());
    var sedia_sedang_b=parseFloat($('#persediaan .sedang .b').val());
    var sedia_sedang_c=parseFloat($('#persediaan .sedang .c').val());
        
    var sedia_banyak_a=parseFloat($('#persediaan .banyak .a').val());
    var sedia_banyak_b=parseFloat($('#persediaan .banyak .b').val());
    var sedia_banyak_c=parseFloat($('#persediaan .banyak .c').val());
    
    //persediaan sedikit
    if(persediaan<=sedia_sedikit_a || persediaan >= sedia_sedikit_c)
    {
        $('#keanggotaan .persediaan .sedikit').text(0);
    }
    else if(persediaan >= sedia_sedikit_a && persediaan <= sedia_sedikit_b)
        {
            var hasil=(persediaan-sedia_sedikit_a)/(sedia_sedikit_b-sedia_sedikit_a);
            $('#keanggotaan .persediaan .sedikit').text(hasil.toFixed(2));
        }
    else if(persediaan >= sedia_sedikit_b && persediaan <= sedia_sedikit_c){
            var hasil=(sedia_sedikit_c-persediaan)/(sedia_sedikit_c-sedia_sedikit_b);
        $('#keanggotaan .persediaan .sedikit').text(hasil.toFixed(2));
    }
    
    //persediaan sedang
    if(persediaan<=sedia_sedang_a || persediaan >= sedia_sedang_c)
    {
        $('#keanggotaan .persediaan .sedang').text(0);
    }
    else if(persediaan >= sedia_sedang_a && persediaan <= sedia_sedang_b)
        {
            var hasil=(persediaan-sedia_sedang_a)/(sedia_sedang_b-sedia_sedang_a);
            $('#keanggotaan .persediaan .sedang').text(hasil.toFixed(2));
        }
    else if(persediaan >= sedia_sedang_b && persediaan <= sedia_sedang_c){
            var hasil=(sedia_sedang_c-persediaan)/(sedia_sedang_c-sedia_sedang_b);
        $('#keanggotaan .persediaan .sedang').text(hasil.toFixed(2));
    }
    
    //persediaan banyak
    if(persediaan<=sedia_banyak_a || persediaan >= sedia_banyak_c)
    {
        $('#keanggotaan .persediaan .banyak').text(0);
    }
    else if(persediaan >= sedia_banyak_a && persediaan <= sedia_banyak_b)
        {
            var hasil=(persediaan-sedia_banyak_a)/(sedia_banyak_b-sedia_banyak_a);
            $('#keanggotaan .persediaan .banyak').text(hasil.toFixed(2));
        }
    else if(persediaan >= sedia_banyak_b && persediaan <= sedia_banyak_c){
            var hasil=(sedia_banyak_c-persediaan)/(sedia_banyak_c-sedia_banyak_b);
        $('#keanggotaan .persediaan .banyak').text(hasil.toFixed(2));
    }
}

 function nilai_rules()
 {
     var permintaan_sedikit = parseFloat($('#keanggotaan .permintaan .sedikit').text());
     
     var permintaan_sedang = parseFloat($('#keanggotaan .permintaan .sedang').text());
     var permintaan_banyak = parseFloat($('#keanggotaan .permintaan .banyak').text());
     
     var persediaan_sedikit = parseFloat($('#keanggotaan .persediaan .sedikit').text());
     var persediaan_sedang = parseFloat($('#keanggotaan .persediaan .sedang').text());
     var persediaan_banyak = parseFloat($('#keanggotaan .persediaan .banyak').text());
     
     var rule=new Array(6);
     var i;
     for(i=1;i<=6;i++){
             if(($("#rules"+i+" .permintaan").val()=="permintaan sedikit") && ($("#rules"+i+" .persediaan").val()=="persediaan sedikit"))
                 {   rule[i-1] = Math.min(permintaan_sedikit,persediaan_sedikit); 
                 }
             else if(($("#rules"+i+" .permintaan").val()=="permintaan sedikit") && ($("#rules"+i+" .persediaan").val()=="persediaan sedang"))
                 {   rule[i-1] = Math.min(permintaan_sedikit,persediaan_sedang);                 
                  }    
             else if(($("#rules"+i+" .permintaan").val()=="permintaan sedikit") && ($("#rules"+i+" .persediaan").val()=="persediaan banyak"))
                 {   rule[i-1] = Math.min(permintaan_sedikit,persediaan_banyak); 
                 }
             
             else if(($("#rules"+i+" .permintaan").val()=="permintaan sedang") && ($("#rules"+i+" .persediaan").val()=="persediaan sedikit"))
                 {   
                    rule[i-1] = Math.min(permintaan_sedang,persediaan_sedikit); 
                 }
             else if(($("#rules"+i+" .permintaan").val()=="permintaan sedang") && ($("#rules"+i+" .persediaan").val()=="persediaan sedang"))
                 {   rule[i-1] = Math.min(permintaan_sedang,persediaan_sedang); 
                 }    
             else if(($("#rules"+i+" .permintaan").val()=="permintaan sedang") && ($("#rules"+i+" .persediaan").val()=="persediaan banyak"))
                 {   rule[i-1] = Math.min(permintaan_sedang,persediaan_banyak); 
                 }
                 
             else if(($("#rules"+i+" .permintaan").val()=="permintaan banyak") && ( $("#rules"+i+" .persediaan").val()=="persediaan sedikit"))
                 {   rule[i-1] = Math.min(permintaan_banyak,persediaan_sedikit); 
                 }
             else if(($("#rules"+i+" .permintaan").val()=="permintaan banyak") && ($("#rules"+i+" .persediaan").val()=="persediaan sedang"))
                 {   rule[i-1] = Math.min(permintaan_banyak,persediaan_sedang); 
                 }    
             else if(($("#rules"+i+" .permintaan").val()=="permintaan banyak") && ($("#rules"+i+" .persediaan").val()=="persediaan banyak"))
                 {   rule[i-1] = Math.min(permintaan_banyak,persediaan_banyak); 
                 }
     }
     $('#nilai_rules span.1').text(rule[0]);
     $('#nilai_rules span.2').text(rule[1]);
     $('#nilai_rules span.3').text(rule[2]);
     $('#nilai_rules span.4').text(rule[3]);
     $('#nilai_rules span.5').text(rule[4]);
     $('#nilai_rules span.6').text(rule[5]);
 }

function komposisi()
{
    
    var rules=new Array(6);
    var prod_banyak=new Array();
    var prod_sedikit=new Array();
    var i;
    rules[0]=$('#nilai_rules span.1').text();
    rules[1]=$('#nilai_rules span.2').text();
    rules[2]=$('#nilai_rules span.3').text();
    rules[3]=$('#nilai_rules span.4').text();
    rules[4]=$('#nilai_rules span.5').text();
    rules[5]=$('#nilai_rules span.6').text();
    
    for(i=1;i<=6;i++)
    {
            if($("#rules"+i+" .produksi").val()=="produksi banyak")
            {
                prod_banyak.push(rules[i-1]);
            }
            else
            {
                prod_sedikit.push(rules[i-1]);
            }
    }
    var panjang_banyak = prod_banyak.length;
    var panjang_sedikit = prod_sedikit.length;
    prod_banyak.sort();
    prod_sedikit.sort();
    if(panjang_banyak>0)
    {
        $('#komposisi span.banyak').text(prod_banyak[panjang_banyak-1]);   
    }
    else $('#komposisi span.banyak').text(0);
    
    if(panjang_sedikit>0)
    {
        $('#komposisi span.sedikit').text(prod_sedikit[panjang_sedikit-1]);   
    }
    else $('#komposisi span.sedikit').text(0);
    
    
    //mencari a1 dan a2
    //rumus a1--> a1=(nilai_komposisi_produksi_sedikit*(produksi_range_max-produksi_range_min))+produksi_range_min
    //rumus a2--> a2=(nilai_komposisi_produksi_banyak*(produksi_range_max-produksi_range_min))+produksi_range_min
    var produk_sedikit=parseFloat($('#komposisi span.sedikit').text());
    var produk_banyak=parseFloat($('#komposisi span.banyak').text());
    var a1=(produk_sedikit*(produksi_range_max-produksi_range_min))+produksi_range_min;
    var a2=(produk_banyak*(produksi_range_max-produksi_range_min))+produksi_range_min;
    $('#a1').text(a1.toFixed(2));
    $('#a2').text(a2.toFixed(2));
}

function defuzzy()
{
    var a1=parseFloat($('#a1').text());
    var a2=parseFloat($('#a2').text());
    var produk_sedikit=parseFloat($('#komposisi span.sedikit').text());
    var produk_banyak=parseFloat($('#komposisi span.banyak').text());
    var M1 = produksi_range_min/2*(a1*a2);
        var Ma=(a2*a2*a2)/(3*(produksi_range_max-produksi_range_min));
        console.log("Ma : "+Ma);
        var Mb=(a2*a2)*(produksi_range_max-produksi_range_min)/(2*(produksi_range_max-produksi_range_min));
        console.log("Mb : "+Mb);
        var Mc=Ma-Mb;
        console.log("Mc : "+Mc);
        var Md=(a1*a1*a1)/(3*(produksi_range_max-produksi_range_min));
        console.log("Md : "+Md);
        var Me=(a1*a1)*(produksi_range_max-produksi_range_min)/(2*(produksi_range_max-produksi_range_min));
        console.log("Me : "+Me);
        var Mf=Md-Me;
        console.log("Mf : "+Mf);
    var M2=Mc-Mf;
    var M3=(produk_banyak/2*(produksi_range_max*produksi_range_max)) - (produk_banyak/2*(a2*a2)); 
    
    var luas1=produk_sedikit*a1 ;
        var luasA=(a2*a2)/(2*(produksi_range_max-produksi_range_min));
        var luasB=(produksi_range_max-produksi_range_min)/(produksi_range_max-produksi_range_min)*a2;
        var luasC=luasA-luasB;
        var luasD=(a1*a1)/(2*(produksi_range_max-produksi_range_min));
        var luasE=(produksi_range_max-produksi_range_min)/(produksi_range_max-produksi_range_min)*a1;
        var luasF=luasD-luasE;
    var luas2=luasC-luasF;
    var luas3=(produk_banyak*(produksi_range_max)) - (produk_banyak*(a2));    
    
    var Z1=M1+M2+M3;
    var Z2=luas1+luas2+luas3;
    var Ztotal=Z1/Z2;
    
    $('#M1').text(M1.toFixed(2));
    $('#M2').text(M2.toFixed(2));
    $('#M3').text(M3.toFixed(2));
    
    $('#A1').text(luas1.toFixed(2));
    $('#A2').text(luas2.toFixed(2));
    $('#A3').text(luas3.toFixed(2));
    
    $('#Ztotal').text(Ztotal.toFixed(2));
    
    
}

$("#variasi input.permintaan").change(function(){
    keanggotaan_permintaan();
    nilai_rules();
    komposisi();
    defuzzy();
});

$("#variasi input.persediaan").change(function(){
    keanggotaan_persediaan();
    nilai_rules();
    komposisi();
    defuzzy();
});
$("#rules1 .permintaan,#rules2 .permintaan,#rules3 .permintaan,#rules4 .permintaan,#rules5 .permintaan,#rules6 .permintaan").change(function(){
   nilai_rules();
   komposisi();
   defuzzy();
});

$("#rules1 .persediaan,#rules2 .persediaan,#rules3 .persediaan,#rules4 .persediaan,#rules5 .persediaan,#rules6 .persediaan").change(function(){
   nilai_rules();
   komposisi();
   defuzzy();
});

$("#rules1 .produksi,#rules2 .produksi,#rules3 .produksi,#rules4 .produksi,#rules5 .produksi,#rules6 .produksi").change(function(){
   komposisi();
   defuzzy();
});
