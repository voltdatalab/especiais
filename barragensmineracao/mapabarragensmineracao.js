 document.addEventListener('DOMContentLoaded', function() {
        var URL = "https://docs.google.com/spreadsheets/d/11lkCxmYkE27wr_xhKg59G1jygBkmbadt9exHspGRuwo/pubhtml"
        Tabletop.init( { key: URL, callback: showInfo, simpleSheet: true } )
      })
      function showInfo(data) {
        
          // informações para popup
        var optionsJSON = ["ano", "barragem", "empreendedor", "altura", "reservatorio", "minerio", "processo", "identidade", "uf", "municipio", "cr", "dpa", "classif", "pnsb"]
        // inputar HTML
        var template = "<ul><h2>{{barragem}}</h2>"
                     + "<h3>Inserida no PNSB:  {{pnsb}}</h3>"
                     + "<h3>Local: {{municipio}} - {{uf}}</h3>"
                     + "<h3>Ano de referência: {{ano}}</h3>"
                     + "<h3>Classificação: {{classif}}</h3>"
                     + "<h3>Categoria de risco: {{cr}}</h3>"
                     + "<h3>Dano potencial: {{dpa}}</h3>"
                     + "<h3>Empreendedor: {{empreendedor}} - CNPJ {{identidade}}</h3>"
                     + "<h3>Minério: {{minerio}}</h3>"
                     + "<h4><em>Fonte: DNPM/MME/Governo Federal</em></h4></ul>"
        var geoJSON = Sheetsee.createGeoJSON(data, optionsJSON)
        var map = Sheetsee.loadMap("map")
        Sheetsee.addTileLayer(map, 'volt.o4glepp8') 
        Sheetsee.addMarkerLayer(geoJSON, map, template)
      }


