cfg.Light, cfg.MUI, cfg.Share, cfg.Portrait

app.LoadPlugin( "Support" );
app.LoadPlugin( "Utils");

var btnCounter = 0;

function OnStart()
{
 lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

 sup = app.CreateSupport();
 utils = app.CreateUtils();
 grid = sup.CreateGridLayout();
 grid.SetColCount( 6);
 /*col0 = utils.RandomHexColor(false);
 col1 = utils.GetGradientColors(col0)[0];
 col2 = utils.GetGradientColors(col0)[1];*/
 
 for( var i=0; i<84; i++ )
 {
 col0 = utils.RandomHexColor(false);
 col1 = utils.GetGradientColors(col0)[0];
 col2 = utils.GetGradientColors(col0)[1];
  btn = app.CreateButton( Fill(i,2), 0.164, -1, "AutoShrink,Custom");
  btn.SetStyle( col1, col2, 5, col0, 0.1, 0.75  )
  btn.SetMargins( 0.001, 0.001, 0.001, 0.001 )
  btn.Caption = Fill(i,2);
  btn.SetOnTouch( btn_OnTouch )
  grid.AddChild( btn );
 }

 lay.AddChild( grid );

 app.AddLayout( lay );
}

function btn_OnTouch()
{
	var self = this;
	if(btnCounter < 10) self.SetTextColor( "#ff0000" );
	app.ShowPopup(parseInt(self.Caption)*2);
	btnCounter ++;
}


function Fill(a, b)
{

	if(a  < 10 && b == 2) return "0" + a;
	return a;
	
}