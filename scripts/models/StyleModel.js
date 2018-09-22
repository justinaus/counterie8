function StyleModel( raw ) {
    // $$$ 기본 값 나중에 체크 필요.
    this.width = raw[ "width" ] ? raw[ "width" ] : 10;
    this.height = raw[ "height" ] ? raw[ "height" ] : 10;
    this.style = raw[ "style" ] ? raw[ "style" ] : "C";
    this.fontfamily = raw[ "fontfamily" ] ? raw[ "fontfamily" ] : "Daum";
    this.titlecolor = raw[ "titlecolor" ] ? raw[ "titlecolor" ] : "#00ffff";
    this.numbercolor = raw[ "numbercolor" ] ? raw[ "numbercolor" ] : "#00ffff";
    this.backgroundcolor = raw[ "backgroundcolor" ] ? raw[ "backgroundcolor" ] : "#00ffff";
    this.backgroundalpha = raw[ "backgroundalpha" ] ? raw[ "backgroundalpha" ] : 50;
    this.bordertype = raw[ "bordertype" ] ? raw[ "bordertype" ] : 0;
    this.bordercolor = raw[ "bordercolor" ] ? raw[ "bordercolor" ] : "";
    this.cornerradius = raw[ "cornerradius" ] ? raw[ "cornerradius" ] : 10;

    var PIXEL = "px";

    this.width += PIXEL;
    this.height += PIXEL;
    this.cornerradius += PIXEL;
}