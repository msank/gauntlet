'use strict';

describe('annotations', function () {
  var Image, Annotation, AnnotatedImage;

  beforeEach(module('gauntletNgApp'));

  beforeEach(inject(function ($injector) {

    Image = $injector.get('Image');
    Annotation = $injector.get('Annotation');
    AnnotatedImage = $injector.get('AnnotatedImage');


  }));

  describe('Image', function () {
    it('calls image is defined', function () {
      expect(Image).toBeDefined();
    });
    it('constructor', function () {
      var im = new Image('paf');
      expect(im.getName()).toEqual('paf');
    });
  });

  describe('Annotation', function () {
    it('calls Annotation is defined', function () {
      expect(Annotation).toBeDefined();
    });
    it('constructor', function () {
      var annot = new Annotation('box', 'Sky', {x: 100, y: 200});
      expect(annot.feature).toEqual('Sky');
    });
  });


  describe('AnnotatedImage', function () {
    it('calls AnnotatedImage is defined', function () {
      expect(AnnotatedImage).toBeDefined();
    });
    it('constructor', function () {
      //var annotImage = new AnnotatedImage(new Image('paf'));
      var im = new Image('paf');
      var annotImage = new AnnotatedImage(im);
      //expect(im.getName()).toEqual('paf');
      expect(annotImage.getImage().getName() ).toEqual('paf');
    });
  
  describe('count annot', function () {
      it('constructor', function () {
        var annotImage = new AnnotatedImage(new Image('paf'));
        expect(annotImage.countAnnotations()).toEqual(0);
      });
      it('add acouple annot', function () {
        var annotImage = new AnnotatedImage(new Image('paf'));
        annotImage.addAnnotation(new Annotation(('box', 'Sky', {x: 100, y: 200})));
        annotImage.addAnnotation(new Annotation(('box', 'Sun', {x: 100, y: 200})));
        expect(annotImage.countAnnotations()).toEqual(2);
      });
    });

  });
  
  

});
