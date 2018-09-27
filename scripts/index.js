(
  function() {
    'use strict';

    var _styleType;

    const URL_STYLE_DATA = "SampleCircle.json";
    // const URL_STYLE_DATA = "SampleRoundedRect.json";
    const URL_COUNTER_STAT_INFO = "CounterInfo.xml";
    
    $(document).ready(function(){
      loadJson( URL_STYLE_DATA );
    });

    function loadJson( strUrl ) {
      $.getJSON( strUrl, function( data ) {
        const defaultValue = {
          width : 10,
          height : 10,
          style : "C",
          fontfamily : "Daum",
          titlecolor : "#00ffff",
          numbercolor : "#00ffff",
          backgroundcolor : "#00ffff",
          backgroundalpha : 50,
          bordertype : 0,
          bordercolor : "",
          cornerradius : 10
        }

        const styleModel = Object.assign( defaultValue, data );

        drawBg( styleModel );

        _styleType = styleModel.style;

        var grpid = data[ "grpid" ];
        loadXml( URL_COUNTER_STAT_INFO );
      });
    }

    function loadXml( strUrl ) {
      $.ajax({
        type: "GET",
        url: strUrl,
        dataType: "xml",
        success: function(doc) {
          const defaultValue = {
            visitor : 0,
            article : 0,
            joiner : 0
          }
          
          var statsModel = {
            visitor : doc.getElementsByTagName( "visitor" )[0].textContent,
            article : doc.getElementsByTagName( "article" )[0].textContent,
            joiner : doc.getElementsByTagName( "joiner" )[0].textContent,
          }

          statsModel = Object.assign( defaultValue, statsModel );

          drawStats( statsModel );
        }
      });
    }

    function drawBg( styleModel ) {
      var bg = document.getElementById( "counterBgContainer" );

      const PIXEL = "px";

      bg.style.width = styleModel.width + PIXEL;
      bg.style.height = styleModel.height + PIXEL;
      bg.style.backgroundColor = styleModel.backgroundcolor;
      bg.style.opacity = styleModel.backgroundalpha;
      bg.style.borderRadius = styleModel.cornerradius + PIXEL;

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




