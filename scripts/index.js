(
  function() {
    'use strict';

    var _styleType;

    $(document).ready(function(){
      const url = "SampleCircle.json";
      // const url = "SampleRoundedRect.json";
      loadJson( url );
    });

    function loadJson( strUrl ) {
      $.getJSON( strUrl, function( data ) {
        var styleModel = new StyleModel( data );
        drawBg( styleModel );

        _styleType = styleModel.style;

        var grpid = data[ "grpid" ];
        var urlCounterInfo = "CounterInfo.xml";
        loadXml( urlCounterInfo );
      });
    }

    function loadXml( strUrl ) {
      $.ajax({
        type: "GET",
        url: strUrl,
        dataType: "xml",
        success: function(doc) {
          var visitor = doc.getElementsByTagName( "visitor" )[0].textContent;
          var article = doc.getElementsByTagName( "article" )[0].textContent;
          var joiner = doc.getElementsByTagName( "joiner" )[0].textContent;
          
          var statsModel = new StatsModel( visitor, article, joiner );
          console.log( statsModel );
          drawStats( statsModel );
        }
      });
    }

    function drawBg( styleModel ) {
      var bg = document.getElementById( "counterBgContainer" );

      bg.style.width = styleModel.width;
      bg.style.height = styleModel.height;
      bg.style.backgroundColor = styleModel.backgroundcolor;
      bg.style.opacity = styleModel.backgroundalpha;
      bg.style.borderRadius = styleModel.cornerradius;

      if( styleModel.bordertype ) {
        bg.style.borderStyle = "solid";
        bg.style.borderWidth = styleModel.bordertype;
        bg.style.borderColor = styleModel.bordercolor;
      }
    }

    function drawStats( statsModel ) {
      switch( _styleType ) {
        case "B" :
          // drawRoundedRectText();
          break;
        case "C" :
          // drawCircle( bg, styleModel );
          break;
      }
    }

    function drawRoundedRectText() {

    }
  }
)();




