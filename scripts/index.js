(
  function() {
    'use strict';

    var _styleType;

    // circle sample :
    // const URL_STYLE_DATA = "https://gist.githubusercontent.com/justinaus/e5d38dbb3c63c791770e4d3efa8b6251/raw/SampleCircle.json";
    
    // rounded rect sample :
    const URL_STYLE_DATA = "https://gist.githubusercontent.com/justinaus/e458d314806b63430720b96855d4c841/raw/SampleRoundedRect.json";
    
    // list sample0 :  
    // const URL_STYLE_DATA = "https://gist.githubusercontent.com/justinaus/90d88154e726914cfb5e283c5f6662be/raw/SampleList0.json";
    
    // list sample1 :
    // const URL_STYLE_DATA = "https://gist.githubusercontent.com/justinaus/1d91d27444738378d018e090e8efe9d2/raw/SampleList1.json";
    
    // http://cafe.daum.net/_c21_/title_counter_info?grpid=1XXgB
    const URL_COUNTER_STAT_INFO = "https://gist.githubusercontent.com/justinaus/dd23dc0e11615c0d6b2983b2edfa32c2/raw/CounterInfo.xml";
    
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
            visitor : $(doc).find( 'visitor' ).text(),
            article : $(doc).find( 'article' ).text(),
            joiner : $(doc).find( 'joiner' ).text(),
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




