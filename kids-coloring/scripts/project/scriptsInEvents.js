var poly = [];
var polygons = [];

function inside(point, vs) {
    
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
};


const scriptsInEvents = {

	async Gamecode_Event520_Act1(runtime, localVars)
	{
		var p = new Array( localVars.vX , localVars.vY );
		
		if(inside(p , polygons[localVars.vN])) {
			localVars.vReturn = 1;
			}
		else
			{localVars.vReturn = 0;}
	},

	async Gamecode_Event524_Act4(runtime, localVars)
	{
		var p = new Array( localVars.vX , localVars.vY );
		
		if(inside(p , polygons[localVars.vN])) {
			if( (localVars.vN+1) > localVars.vMax ) {
				localVars.vMax = (localVars.vN+1);
			}
		}
	},

	async Gamecode_Event577_Act1(runtime, localVars)
	{
		polygons = [];
	},

	async Gamecode_Event578_Act2(runtime, localVars)
	{
		poly = [];
	},

	async Gamecode_Event579_Act3(runtime, localVars)
	{
		var arr = new Array( localVars.vX, localVars.vY );
		poly.push(arr);
		
	},

	async Gamecode_Event580_Act1(runtime, localVars)
	{
		polygons.push(poly);
		
	},

	async Gamecode_Event600_Act1(runtime, localVars)
	{
		var arr = new Array( localVars.vX, localVars.vY );
		poly.push(arr);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

