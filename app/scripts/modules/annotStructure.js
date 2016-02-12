/*!
 * package Gauntlet
 * @author Martial M Sankar & Anastasia Chasapi
 * copyright 2015-2016, SIB Swiss Institute of Bioinformatics
 */
 
'use strict';

angular.module('annotStructure', ['ngRoute', 'services.annotation.annotFeaturesService', 'angularBootstrapNavTree', 'ngAnimate',
  'ngGrid', 'ngSanitize', 'ngCsv', 'ui.bootstrap', 'ngRoute', 'angularytics', 'toastr'])
/**
 * @ngdoc controller
 * @name annotStructure.controller:AnnotStructureCtrl
 * @description
 * The main controller of the annotation platform. It handles the annotation process
 */
  .controller('AnnotStructureCtrl', ['$scope', '$modal', '$anchorScroll', '$location', '$routeParams', '$route',
    '$http', '$window', '$sce', '$timeout', '$log', '$rootScope', 'annotFeaturesService', 
    'areaselectionService', 'Image', 'Annotation', 'Comment','AnnotatedImage','Angularytics','toastr',
    function ($scope, $modal,  $route, $routeParams, $anchorScroll, $location, $http, $window, $sce, $timeout, $log, $rootScope, annotFeaturesService, areaselectionservice, Image, Annotation, Comment, AnnotatedImage, Angularytics, toastr ) {

      

      $scope.master = {};

      var annotFeatures = annotFeaturesService.getAnnotFeaturesDefinitions();
      
      var annotImage = new AnnotatedImage(new Image('myDrawingObj'));

      var countCur = 0;

      var exportArray = [];

      var prevAnnotationTypeForSelection="";

      

      $scope.bgPreviewCss = "";
      $scope.sizeCss="";
      $scope.fn = "Please Upload a Drawing (JPEG, PNG)";
      $scope.fnExist = undefined;

      //for comment
      $scope.isDisabled=true;

      $scope.widthCur = null;

      $scope.uploadtooltip = "Please upload file";

      $scope.heightCur = null;
      

      // for progress bar

      $scope.progressMax = 100;
      $scope.progressDyn = 0;
      var itDyn = 4.5;

      // for directed navigation
      $scope.buttonLabel = "Start";
      $scope.tooltipdirected = "Start annotation";
      $scope.attrParents = "";
      // catches url changes events and updates tree if necessary (call to back / forward browser buttons)
      /*$rootScope.$on('$locationChangeSuccess', function (event) {
        $scope.activeTab = $location.$$hash;
      });*/
  


      // prewview charting
      
      var totCount4Prev = 0;  
      

      //

      $scope.togglePreviewMode = function() {

        
        if($scope.annotTypeForSelection=='preview'){
          $scope.annotTypeForSelection = prevAnnotationTypeForSelection;
          $scope.bgPreviewCss = "";




        }else {
          prevAnnotationTypeForSelection = $scope.annotTypeForSelection;
          $scope.bgPreviewCss = "background:black";
          $scope.annotTypeForSelection = 'preview';

         /* totCount4Prev = $scope.annotImgObj.countAnnotations();
          $scope.count4Pie = $scope.annotImgObj.countForEachFeatures(); // Array
          $scope.label4pie = $scope.annotImgObj.labelForEachFatures(); // Array

          console.log($scope.label4pie);
          $scope.totCount4Prev = totCount4Prev;*/
        

        }

      }

      $scope.ptDivDim = function() {
        var img = document.getElementById('drawingPoint');
        var absW = img.naturalWidth;
        var absH = img.naturalHeight;
        var relW = img.clientWidth;
        var relH = img.clientHeight;
        $scope.divInfo= [relW,relH,absW,absH];
         if($scope.widthCur == null){
           $scope.widthCur = absW;
           $scope.heightCur = absH;
        }
      };

      $scope.boxDivDim = function() {
        var img = document.getElementById('ngJcropBoxImg');
        var absW = img.naturalWidth;
        var absH = img.naturalHeight;
        var relW = img.clientWidth;
        var relH = img.clientHeight;

        // debug firefox width (see issue)
        if($scope.widthCur == null){
           $scope.widthCur = absW;
           $scope.heightCur = absH;
        }
       

        console.log("width heigh div : " + absW, absH);
        console.log("relative width heigh div : " + relW,relH);

        $scope.divInfo= [relW,relH,absW,absH];

      };
      $scope.previewDivDim = function() {
        var img = document.getElementById('drawingPreview');
        var absW = img.naturalWidth;
        var absH = img.naturalHeight;
        var relW = img.clientWidth;
        var relH = img.clientHeight;
        $scope.divInfo= [relW,relH,absW,absH];
      };


      // methods
      //--------------------------------------------------------

//Annotate with POINT


      $scope.addOnClick = function (event, attrName, attrLabel) {
        //analytics
        Angularytics.trackEvent('imageInteraction', 'AddPoint', attrName+";"+attrLabel);

        $scope.isDisabled = false;
        
        // enable button from point
        areaselectionservice.addPointArea(event.offsetX, event.offsetY, attrName, attrLabel);
        $scope.annotStructureTree.get_selected_branch().done = true;
        $scope.init();
      };


      $scope.$on('pointInfo.updated', function () {
        $scope.pointInfo = areaselectionservice.pointInfo;
        var addedAnnotation = new Annotation(
          $scope.fn,
          $scope.pointInfo[$scope.pointInfo.length - 1].featureName,
          $scope.pointInfo[$scope.pointInfo.length - 1].featureLabel,
          $scope.annotTypeForSelection,
          $scope.pointInfo[$scope.pointInfo.length - 1].x1,
          $scope.pointInfo[$scope.pointInfo.length - 1].y1,
          $scope.pointInfo[$scope.pointInfo.length - 1].x2,
          $scope.pointInfo[$scope.pointInfo.length - 1].y2,
          $scope.pointInfo[$scope.pointInfo.length - 1].xToStore1,
          $scope.pointInfo[$scope.pointInfo.length - 1].yToStore1,
          $scope.pointInfo[$scope.pointInfo.length - 1].xToStore2,
          $scope.pointInfo[$scope.pointInfo.length - 1].yToStore2,
          null
        );
        console.log(addedAnnotation);
        $scope.annotImgObj.addAnnotation(addedAnnotation);

        $scope.annotImgObj.addPointsFeats($scope.pointInfo[$scope.pointInfo.length - 1].featureName, addedAnnotation );
        $scope.countCur =  $scope.annotImgObj.countPointsFeats($scope.pointInfo[$scope.pointInfo.length - 1].featureName);
        $scope.annotStructureTree.get_selected_branch().count = $scope.countCur;

        //console.log('annotations for feat ' + $scope.pointInfo[$scope.pointInfo.length - 1].featureLabel + '# '+ $scope.annotImgObj.countPointsFeats($scope.pointInfo[$scope.pointInfo.length - 1].featureName));

        //console.log('Total annotations: ' + $scope.annotImgObj.countAnnotations());
      });





//Annotate with BOX

    $scope.areas = [];  
    $scope.obj = {};

     $scope.init = function () {

        // Must be [x, y, x2, y2, w, h]
        // $scope.obj.coords = [100, 100, 200, 200, 100, 100];
        $scope.obj.coords = null;
        $scope.obj.selection = null;
        $scope.obj.newAnnotation = '';
        $scope.currentAreaIdx = -1;
        $scope.checkboxStatus = false;

        


        $scope.$broadcast('$reset', $scope.imgSource);
      };

      $scope.init();

      $scope.newArea = function () {


           $scope.areas.push({
              selection: angular.copy($scope.obj.selection),
              coords: angular.copy($scope.obj.selection),
              annotations: []
           });
            //$scope.currentAreaIdx = $scope.areas.length - 1;

          console.log($scope.areas);

          var addedBoxAnnotation = new Annotation(
            $scope.fn,
            $scope.featNameForSelection,
            $scope.featLabel,
            $scope.annotTypeForSelection,
            $scope.obj.selection[0],
            $scope.obj.selection[1],
            $scope.obj.selection[2],
            $scope.obj.selection[3],
            $scope.obj.selection[0], //pt in $scope.annotationArray | label  pt.xToStore1
            $scope.obj.selection[1],
            $scope.obj.selection[2],
            $scope.obj.selection[3],
            null
          );

          //analytics
          Angularytics.trackEvent('imageInteraction', 'AddBox', $scope.featNameForSelection+";"+$scope.featLabel);


          $scope.annotImgObj.addAnnotation(addedBoxAnnotation);
          $scope.annotImgObj.addPointsFeats($scope.featNameForSelection, addedBoxAnnotation );
          //console.log('annotations for file : '+$scope.fn+ 'for feat ' + $scope.featNameForSelection+ '# '+ $scope.annotImgObj.countPointsFeats($scope.featNameForSelection));
          $scope.countCur = $scope.annotImgObj.countPointsFeats($scope.featNameForSelection);
          $scope.annotStructureTree.get_selected_branch().done = true;
          $scope.annotStructureTree.get_selected_branch().count = $scope.countCur;

          $scope.isDisabled = false;

          $scope.init();

      };

       $scope.selectArea = function (idx) {


       };


       // watch change on tree click

       $scope.$watch('buttonLabel', function(){

        if($scope.buttonLabel=="Start") {
          $scope.tooltipdirected = "Start annotation";
          $scope.buttonLabelDirectedStyle = "glyphicon glyphicon-play";
          
          $scope.progressDyn = $scope.progressDyn;

          $scope.directedActionFun = function () {
              expendFirstParentLeaf();
              
          }

        } else if ($scope.buttonLabel === "Next") {
          $scope.tooltipdirected = "Mark as visited and step forward";
          $scope.buttonLabelDirectedStyle = "glyphicon glyphicon-step-forward";
          // if not the last node 


           

            $scope.directedActionFun = function () {
              expendNextParentLeaf();
            }


        } else if ($scope.buttonLabel === "Restart") {
          $scope.tooltipdirected = "Restart annotation";
          $scope.buttonLabelDirectedStyle = "glyphicon glyphicon-play";
         
          $timeout(function(){$scope.togglePreviewMode()}, 1000);

          $scope.directedActionFun = function () {
              expendFirstParentLeaf();
          }

         // $scope.togglePreviewMode();

          /*$scope.directedActionFun = function () {
           //closeAllAndPreviewMode();
            
          };*/

        }
        


       });


      // function list for directed action 
      var expendFirstParentLeaf = function () {
          
          $scope.annotStructureTree.expand_all();
          

          $scope.annotStructureTree.select_first_branch();



          // get label parent
          treeHandler($scope.annotStructureTree.get_selected_branch());
          $scope.attrParents = $scope.featNameForSelection+" - "+$scope.featLabel; 

          $scope.annotStructureTree.expand_branch();
          $scope.annotStructureTree.select_next_branch();
          //  mark branch as read
          treeHandler($scope.annotStructureTree.get_selected_branch());

          console.log($scope.featNameForSelection+ " - " +$scope.annotTypeForSelection);


          // change button label
          
          $scope.buttonLabel = "Next";
          
      };

      

      var expendNextParentLeaf = function () {
          // progress bar
         

          // done and collapse parent
          $scope.annotStructureTree.select_parent_branch();

          
          if($scope.annotStructureTree.get_selected_branch().done === false ) {
            $scope.annotStructureTree.get_selected_branch().done = true;
            $scope.progressDyn = $scope.progressDyn+itDyn;
          }

          
          $scope.annotStructureTree.collapse_branch();

          // go to next parent sibling

          if($scope.annotStructureTree.get_next_sibling()!=null) {
            
            treeHandler($scope.annotStructureTree.select_next_sibling());
            //$scope.attrParents = $scope.featNameForSelection+" :: "+$scope.featLabel; 
                       

            // go to next branch until reaching a non-expend typeof
            //$scope.annotStructureTree.expand_branch();
            $scope.annotStructureTree.select_next_branch();

            //if type go to next
            treeHandler($scope.annotStructureTree.get_selected_branch());
            if($scope.annotTypeForSelection === "expand" ) {


              $scope.annotStructureTree.select_next_branch();

              treeHandler($scope.annotStructureTree.get_selected_branch());

              if($scope.annotTypeForSelection === "expand" ) {
                //$scope.attrParents = $scope.featNameForSelection+" :: "+$scope.featLabel;
                $scope.annotStructureTree.select_next_branch();
                            
              }

              //$scope.attrParents = $scope.featLabel; 
              $scope.buttonLabel = "Next";
              // progress updates
              

            }


          }else {

            // if differnt of the last branch
            if ($scope.featNameForSelection.search($scope.annotStructureData[$scope.annotStructureData.length-1].name)==-1) {


              treeHandler($scope.annotStructureTree.select_parent_branch());
              //$scope.annotStructureTree.get_selected_branch().done = true;
              //$scope.annotStructureTree.collapse_branch();

              $scope.attrParents = $scope.featNameForSelection+" - "+$scope.featLabel;
              $scope.attrParentLabel = $scope.featLabel;

              treeHandler($scope.annotStructureTree.select_next_branch());


            }else {

              $scope.buttonLabel = "Restart";
            
            }

          }
       
            
            
            // if current feature name match with the last one => export
       /*if($scope.featNameForSelection.search($scope.annotStructureData[$scope.annotStructureData.length-1].name)!=-1){
              
              $scope.buttonLabel = "Done & Export";
            
            }
          }else {
            $scope.buttonLabel = "Done & Continue";
          }*/
          
      };



     /* var closeAllAndPreviewMode = function () {

        $scope.annotStructureTree.select_parent_branch();
        $scope.annotStructureTree.get_selected_branch().done = true;

        $scope.annotStructureTree.collapse_all();
        $scope.togglePreviewMode();
      };*/




       // watch change on tree click
      $scope.$watch('featNameForSelection', function() {

        // switch mode if in preview mode
        if($scope.bgPreviewCss == "background-color:black") {
          $scope.bgPreviewCss = "";
        }

        if(typeof  $scope.annotTypeForSelection!=="undefined" && $scope.annotTypeForSelection!=="expand") {
            toastr.info($scope.instructions , $scope.annotTypeForSelection+ ' tool selected',  {timeOut:10000, closeButton:true});
        } 

        if(!$scope.featNameForSelection){

          $scope.displayedComment = "Add comment";
          $scope.countCur = countCur;
          $scope.addedSuccessStyle = "";
          $scope.isDisabled = true;
          $scope.comment = angular.copy($scope.master);
      

        }else{

          // comments

          $scope.comment = angular.copy($scope.master);

          if(!$scope.annotImgObj._pointsFeats[$scope.featNameForSelection]) {
            $scope.comment.added = "";
            $scope.displayedComment = "Add comment";
            $scope.addedSuccessStyle = "";
            $scope.isDisabled = true;
            //toastr.info($scope.annotTypeForSelection+ ' tool selected', {timeOut:1000});
          } else {

            $scope.isDisabled = false;

            var commentValue  = $scope.annotImgObj.getComment4Feat($scope.featNameForSelection);

            console.log(commentValue);
            if(commentValue !== undefined) {
              $scope.comment.added = commentValue;
              $scope.addedSuccessStyle = "border: 1px solid #5cb85c; border-radius: 4px; transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; box-shadow: 0 1px 10px #5cb85c;";
              
            }else {
              $scope.comment = angular.copy($scope.master);
              $scope.comment.added = "";

              $scope.addedSuccessStyle = "";
              $scope.displayedComment = "Add comment";
            }

            //if($scope.annotTypeForSelection!=="expand") {
             //toastr.info($scope.annotTypeForSelection+ ' tool selected', {timeOut:2000});
            //}
          }

          // counts
          if (!$scope.annotImgObj._pointsFeats[$scope.featNameForSelection]){
            $scope.countCur = countCur;
            //$scope.annotStructureTree.get_selected_branch().count = $scope.countCur;

          }else {
            $scope.countCur = $scope.annotImgObj.countPointsFeats($scope.featNameForSelection);
            //$scope.annotStructureTree.get_selected_branch().count = $scope.countCur;
          }

        }

      });





      $scope.comment = {added: ''};

      $scope.handleComment = function () {
        //console.log(" DEBUG CHECK Console : "+$scope.comment.added);
        
        //analytics
        if(window.location.hostname!=='localhost'){
          Angularytics.trackEvent('imageInteraction', 'addComment', $scope.featNameForSelection+";"+$scope.featLabel);
        }
        //console.log("# Commenet DEBUG: "+ $scope.featNameForSelection + " for " + $scope.comment.added)

         if (typeof $scope.annotImgObj._pointsFeats[$scope.featNameForSelection]  === 'undefined') {
          toastr.success('Please make a point or box on the image before adding comment.', 'Warning : The comment will not be saved.');
        }else {  
         $scope.annotImgObj.addComment($scope.featNameForSelection, $scope.comment.added);
         $scope.addedSuccessStyle = "border: 1px solid #5cb85c; border-radius: 4px; transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; box-shadow: 0 1px 10px #5cb85c;";

         toastr.success( 'Saved for export', 'Success', {timeOut:2000});
        }
        //$scope.displayedComment = "Add comment";
         //$scope.addedSuccessStyle = "border-color: #5cb85c"
      };  



      $scope.getExportArray = function(){
        
        for(var key in $scope.annotImgObj._pointsFeats) {

          var value = $scope.annotImgObj._pointsFeats[key];
          //console.log("comment: "+$scope.comment.added);
          //console.log("value: "+value[0].commentVal);

          var line = value[0];
          $scope.value=value;

          console.log("value"+value);
          for (var k in value) {
            //console.log("value"+ value[k]);
            exportArray.push(value[k]);
          }
          
        }
       //analytics
        Angularytics.trackEvent('Home Category', 'exportAnnot');

        return exportArray;
      };
         


//handle type "assign" features

      $scope.storeAssign = function(){

        var counter = 0;



        //console.log("added Object" );

          var newAssignAnnotation = new Annotation(
            $scope.fn,
            $scope.featNameForSelection,
            $scope.featLabel,
            $scope.annotTypeForSelection,
            "NaN",
            "NaN",
            "NaN",
            "NaN",
            "NaN",
            "NaN",
            "NaN",
            "NaN"
          );
          //$scope.annotImgObj.addAnnotation(newAssignAnnotation);
          $scope.annotImgObj.addAssignFeats($scope.featNameForSelection, newAssignAnnotation);
          $scope.annotStructureTree.get_selected_branch().done = true;
          console.log($scope.annotImgObj);
        

        $scope.init();

      };


//Reset annotations of a selected feature
      $scope.resetAnnotation = function () {
        //console.log("removing Object" );

         //analytics
        if(window.location.hostname!=='localhost'){
          Angularytics.trackEvent('imageInteraction', 'remove annot', $scope.featNameForSelection+";"+$scope.featLabel);
        }

        var toBeRemoved = [];
        for (var i = 0; i < $scope.annotationArray.length; i++) {
          if ($scope.annotationArray[i].feature === $scope.featNameForSelection) {
            toBeRemoved.push($scope.annotationArray[i]);
          }
        }


        $scope.annotImgObj.removeAnnotation(toBeRemoved);

        // remove annot pointsfeats
        $scope.annotImgObj.removePointsFeats($scope.featNameForSelection);
        $scope.countCur = 0;
        $scope.annotStructureTree.get_selected_branch().count = $scope.countCur;
        // remove assign feats
        $scope.annotImgObj.removeAssignFeats($scope.featNameForSelection);


        // remove and reset comments
        $scope.comment = angular.copy($scope.master);
        $scope.comment.added = "";
        $scope.saveMessageLabel = "";
        $scope.addedSuccessStyle = "";
        $scope.isDisabled = true;

        toastr.warning($scope.featNameForSelection + ' feature elements are cleared', {timeOut:4000});
        
        $scope.annotStructureTree.get_selected_branch().done = false;


      };

//Structure feature list


      function treeHandler(branch) {
        var _ref;
        var parent = $scope.annotStructureTree.get_parent_branch(branch);
        var newHash;
        var el;
        if(typeof parent !== "undefined") {
          $scope.attrParents = parent.name +" - "+ parent.label;
          $scope.attrParentLabel = parent.label;


        }  

        $scope.annotTypeForSelection = branch.annotationtype;
        $scope.featNameForSelection = branch.name;
        $scope.featLabel = branch.label;
        $scope.isdone = branch.done;
        $scope.branchPath = branch;


        if(branch.instructions !== "") {
            $scope.instructions = branch.instructions;
            //console.log("INSTRUCTION: "+$scope.instructions )
        }else {
            $scope.instructions = undefined;
            //console.log("INSTRUCTION: "+$scope.instructions )
        }

      

        var output = 'Feat. Selected :  ' + $scope.featNameForSelection + ' ' + branch.label + ' done : '+$scope.isdone ;

      


        //console.log(output);
        //console.log($scope.annotTypeForSelection);
      
      }

      $scope.changeTab = function(event){
        $scope.activeTabName = event.target.id;
      };

$scope.previewPDF = function(){
  $scope.annotTypeForSelection = 'preview';
  var img = document.getElementById('drawingPreview');
  console.log(img);
  var canvas = document.createElement('canvas');
  console.log(canvas);
  canvas.width = img.width;
  canvas.height = img.height;

  // Copy the image contents to the canvas
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL('image/png');
//TODO: in jsPDF creation, the biggest dimension goes first. we have to set condition so that height/width order is reversed when we have a landscape drawing
  var doc = new jsPDF('p', 'mm', [canvas.height, canvas.width]); //orientation, unit, format
  doc.addImage(dataURL, 'JPEG', 0, 0, canvas.width, canvas.height);
  doc.save('Test.pdf');
};



  /*$scope.openImportFrame = function() {

    var modalInstance = $modal.open({
      animation: true,
      scope: $scope,
      templateUrl: 'views/import-frame.html',
      controller: 'ExportFrameCtrl',
    });

    modalInstance.opened.then(function () {
      console.log('hello')
    });


  };*/


// open frame for export

  $scope.openExportFrame  = function () {



     var modalInstance = $modal.open({
      animation: true,
      scope: $scope,
      templateUrl: 'views/export-frame.html',
      controller: 'ExportFrameCtrl',

    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });

  };

// Load file images







var fileTypes = ['jpg', 'jpeg', 'png'];  //acceptable file types
$scope.fileTypes = fileTypes;
$scope.fileChanged = function() {

    

  var imFileInput = document.getElementById('uploadBtn');


  var imFile = imFileInput.files[0];
  var fn = imFile.name;
  
  $scope.fn = fn;
  

  $scope.ImgTooBig = false;
  // define reader
  var reader = new FileReader();

  var widthDft, heightDft;
  // A handler for the load event (just defining it, not executing it right now)
  reader.onloadend = function(e) {

    // false image to get proper size
    $(".fileUpload").append("<img id='testImg' style = 'position:absolute;left=-9999px;top:-9999px'/>");

    $('#testImg').attr('src', e.target.result);

    if($('#testImg').get(0).complete) {
      console.log("ok");
    }else {
      console.log("not ok "+$('#testImg').get(0).complete);
    }
   /* $('#testImg').on('load',function(){
                $scope.widthDft = $(this).width();
                $scope.heightDft = $(this).height();
                console.log($(this).width()+'*'+$(this).height());
    });*/

    $('#testImg').one('load', function (){
      $scope.widthDft = $(this).width();
                $scope.heightDft = $(this).height();
                console.log($(this).width()+'*'+$(this).height());
    }).each(function(){
      if($(this).complete) $(this).load();
    });
    
    //

    /*$("body").append("<img id='hiddenImage' src='"+reader.result+"' />");
    var width = $('#hiddenImage').width;
    var height = $('#hiddenImage').height;
    $('#hiddenImage').remove();*/

    // grep extension
    var extension = fn.split('.').pop().toLowerCase();
    var isSuccess = fileTypes.indexOf(extension) > -1;



    //console.log(fn+ "  "+ extension + " ");
    //console.log(reader.result);
    if (isSuccess) {
    
      if (widthDft>1280 || heightDft>1280){
        //console.log("Image width:"+widthDft+" height:"+heightDft);
        $scope.$apply(function() {
          $scope.ImgTooBig = true;
          $scope.ImgTooBigMsg = "ERROR : Image too big. Maximum resolution allowed: 1280x1280";
        });


        } else {
            
          //analytics
          Angularytics.trackEvent('Home Category', 'loadImage', fn);
          
          if($scope.fnExist!==undefined ){
              
              $scope.buttonLabel = "Start";
              $scope.attrParents = "";
              $scope.instructions = "";
              $scope.pointInfo = [];
              $scope.activeTabName = 'tab1';
              
              //progress bar
              $scope.progressDyn = 0;

              // adapte size at beginning
              $scope.sizeCss="";
              /*if ($scope.widthDft===undefined){
                $scope.widthDft=1500;
                $scope.heightDft=1500;
              }*/

              $scope.countCur = 0;
              $scope.commentArray = [];
              annotFeatures = annotFeaturesService.getAnnotFeaturesDefinitions();
              $scope.annotStructureData = annotFeatures.attributes;

              annotImage = new AnnotatedImage(new Image('myDrawingObj'));
              $scope.annotImgObj = annotImage;
              $scope.annotationArray = annotImage._annotations;

              $scope.init();

              exportArray = [];
              $scope.areas = [];  

           }

          $scope.$apply(function() {
            

            

            $scope.imFile = reader.result;
            $scope.imgSource = reader.result;
            $scope.ImgWidth = widthDft;
            $scope.ImgHeight = heightDft;

            
              

            $timeout(function(){
             
              //$scope.sizeCss = "width:"+ ($scope.widthDft+35)  +"px;height:"+($scope.heightDft+35)+"px;";


              if($scope.widthDft>$scope.heightDft){
                $scope.ImgOrientation = "landscape";

              }
              else{
                $scope.ImgOrientation = "portrait";
                $scope.sizeCss = "height:"+($scope.heightDft+35)+"px;";

              }
             
              $('#testImg').remove();
              delete $scope.widthDft;
              delete $scope.heightDft;

            }, 1000);
            
            toastr.success( fn+' displayed', 'Success', {timeOut:3000});
      
            $scope.fnExist = true;


      });




          
      //console.log("filename "+fn+"Image width:"+$scope.ImgWidth+" height:"+$scope.ImgHeight);

    }
  }else {
      // console.log("wrong format");
      $scope.$apply(function() {
        $scope.ImgTooBig = true;
        toastr.error( 'Wrong image type. Please use [jpg, jpeg, png]', 'ERROR');
        $scope.ImgTooBigMsg = "ERROR : Wrong image type. Please use [jpg, jpeg, png]";
      });

  }


  };



  // use reader to read the selected file
  // when read operation is successfully finished the load event is triggered
  // and handled by our reader.onload function

  



  reader.readAsDataURL(imFile);

};



  // for shortcut bindings
  $scope.getNextBranchShortCut = function (){
    treeHandler($scope.annotStructureTree.select_next_branch());
  }

  $scope.getPrevBranchShortCut = function (){
    treeHandler($scope.annotStructureTree.select_prev_branch());
  }



// function to get image and size using function  handler



      //switch among questionnaires
      $scope.revealQ= function(num){
        $scope.activeQ = num;
      };


      // scope variables
      //--------------------------------------------------------

      $scope.annotStructureData = annotFeatures.attributes;
      $scope.annotStructureTree = {};
      // makes methods available from the scope
      $scope.treeHandler = treeHandler;
      $scope.annotImgObj = annotImage;
      $scope.annotationArray = annotImage._annotations;

      $scope.csvHeader = [
        'filename',
        'Feature code',
        'Feature label',
        'Annotation type',
        'x1.onDiv',
        'y1.onDiv',
        'x2.onDiv',
        'y2.onDiv',
        'x1.onFile',
        'y1.onFile',
        'x2.onFile',
        'y2.onFile',
        'Comment'
      ];
     

      $scope.pointInfo = [];
      $scope.activeTabName = 'tab1';

      

      // root scope variables
      // -------------------------------------------------------

      countCur = $rootScope.countCur;
    }]
)
/**
 * @ngdoc directive
 * @name annotStructure.directive:featUndef
 * @description
 * Handles image rendering when no feature is selected
 */
  .directive('featUndef', function(){
    return {
      templateUrl:'views/feat-undef.html'
    };
  })
/**
 * @ngdoc directive
 * @name annotStructure.directive:featPreview
 * @description
 * Handles image rendering and annotation display in preview mode
 */
  .directive('featPreview', function(){
    return {
      templateUrl:'views/feat-preview.html'
    };
  })
/**
 * @ngdoc directive
 * @name annotStructure.directive:featPoint
 * @description
 * Handles image rendering and point annotations display when the active feature has annotationType=point
 */
  .directive('featPoint', function(){
    return {
      templateUrl:'views/feat-point.html'
    };
  })

/**
 * @ngdoc directive
 * @name annotStructure.directive:headerannot
 * @description
 * for upload button in header of annot
 */
.directive('headerannot', function(){
    return {
      templateUrl:'views/headerannot.html'
    };
  })

/**
 * @ngdoc directive
 * @name annotStructure.directive:commentFieldBox
 * @description
 * To add comment
 */
.directive('commentFieldBox', function(){
    return {
      templateUrl:'views/comment-field-box.html'
    };
  });



