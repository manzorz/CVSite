$.stellar({
	horizontalScrolling:false
});

var portfolioExamples = [
	{	"name":"Geolingua Test",
		"url":"geolingua.html",
		"image":"GeolinguaPage1.png",
		"alt":"Geolingua language quiz."
	},
	{	"name":"Spatial Thinking Test",
		"url":"spatialthinking.html",
		"image":"SMCRLMapTest.png",
		"alt":"Spatial thinking test."
	},
	{	"name":"Thumbnail Builder",
		"url":"thumbnailbuilder.html",
		"image":"thumbnailBuilder.png",
		"alt":"Thumbnail Builder."
	},
	{	"name":"Montana Corrections Interactive Map 1",
		"url":"montanaCorrections1.html",
		"image":"montanaCorrections.png",
		"alt":"Interactive map of tracked offenders living in Montana."
	},
	{
		"name":"Alaska Health Coverage Map",
		"url":"alaskahealth.html",
		"image":"AlaskaHealthCoverageMap.png",
		"alt":"Interactive map using javascript to allow users to view uninsured rates among children and the general populace by Alaska house district."
	}
];

var skills = [
	{	"name":"Spatial Analysis",
		"description":"As a former Esri intern and GIS major, I have experience with the ArcGIS suite, web mapping as well as upcoming technologies like ArcGIS Pro.",
		"image":"earth.png",
		"alt":"Earth image",
		"imgcredit":"Earth by Martin Vanco from the Noun Project"
	},
	{	"name":"Back End Development",
		"description":"I have primary worked with LAMP and XAMPP setups. These include PHP, MySQL, Python and some Ruby.",
		"image":"code.png",
		"alt":"Code image",
		"imgcredit":"code by Souvik Bhattacharjee from the Noun Project"
	},
	{	"name":"Front-End Development",
		"description":"Experienced in HTML, CSS, Javascript, jSON, jQuery, and some Angular.",
		"image":"design.png",
		"alt":"Web browser window image",
		"imgcredit":"Experienced in Photoshop, Illustrator, CSS, website readability and accessibility, I can design websites for simple, seamless use."
	}
];
 /*
var cities = [
	{	name:"Portland", yearsOfSaving:

	}


];
*/

var app=angular.module("portfolio", []);
app.controller("skillCtrl", function($scope){
	$scope.skills = skills;
});
app.controller("workSamples", function($scope){
	$scope.samples = portfolioExamples;
});
app.controller("cityBySavings", function($scope){
	$scope.myOrderBy = x;
});