<script>
var d = new Date();
var year = d.getFullYear();
var month = ('0' + (d.getMonth()+1)).slice(-2);
var day = ('0' + (d.getDate())).slice(-2);

document.getElementById("inpe_a").src = "http://meioambiente.cptec.inpe.br/cgi-bin/mapserv?mode=map&map=/http/local/meioambiente.cptec.inpe.br/resources/data/rmamb/dados/" + year + "-" + month + "-" + day + "/qualidade_ar_40_1.map&mapext=-90.0064308681672+-51+-28.9935691318328+18&mapsize=550+622&layers=Estados+Regioes+COCONC401+&map.layer%5BCOCONC401%5D=OPACITY+100&map.layer%5BEstados%5D.class%5B0%5D=OUTLINECOLOR+255+255+255";

document.getElementById("inpe_b").src = "http://meioambiente.cptec.inpe.br/cgi-bin/mapserv?mode=map&map=/http/local/meioambiente.cptec.inpe.br/resources/data/rmamb/dados/" + year + "-" + month + "-" + day + "/emissoes_queimadas.map&mapext=-90.0064308681672+-51+-28.9935691318328+18&mapsize=550+622&layers=Estados+Regioes+CO+&map.layer%5BCO%5D=OPACITY+100";
</script>