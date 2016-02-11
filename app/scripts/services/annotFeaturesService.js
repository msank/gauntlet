'use strict';

angular.module('services.annotation.annotFeaturesService', []).factory('annotFeaturesService', ['$rootScope', '$http', '$log', function ($rootScope, $http, $log) {

  var annotFeaturesService = {};


  annotFeaturesService.getAnnotFeaturesDefinitions = function () {


    
    var annotFeatures = {

      default: 'defaultReport',
      /*attributes: [
        {
          name: 'G',
          label: 'General',
          annotationtype: 'expand',
          mode: 'both',
          figureground: 'none',
          instructions: '',
          done: false,
          children: [
            {
              name: 'G1',
              label: 'Is there any representation of god/figure?',
              annotationtype: 'expand',
              mode: 'both', 
              figureground: 'none',
              instructions: 'One choice',
              done: false,
              children: [
                {
                  name: 'G1.1',
                  label: 'No',
                  annotationtype: 'assign',
                  mode: 'both',
                  figureground: 'none',
                  instructions: '',
                  done: false
                },
                {
                  name: 'G1.2',
                  label: 'Indeterminable',
                  annotationtype: 'assign',
                  mode: 'both',
                  figureground: 'none',
                  instructions: '',
                  done: false
                },
                {
                  name: 'G1.3',
                  label: 'Yes',
                  annotationtype: 'box',
                  mode: 'both',
                  figureground: 'none',
                  instructions: '',
                  done: false
                }
              ]
            },
            {
              name: 'G2',
              label: 'Is there a clear-cut distinction of god-context?',
              annotationtype: 'expand',
              mode: 'both',
              figureground: 'none',
              instructions: 'One choice',
              done: false,
              children: [
                {
                  name: 'G2.1',
                  label: 'Irrelevant (no figure/no context)',
                  annotationtype: 'assign',
                  mode: 'both',
                  figureground: 'none',
                  instructions: '',
                  done: false
                },
                {
                  name: 'G2.2',
                  label: 'Yes',
                  annotationtype: 'assign',
                  mode: 'both',
                  figureground: 'none',
                  instructions: '',
                  done: false
                }
              ]
            }
          ]
        },
        {
          name: 'F',
          label: 'Figure',
          annotationtype: 'expand',
          mode: 'both',
          figureground: 'clearcut',
          instructions: '',
          done: false,
          children: [
            {
              name: 'F1',
              label: 'Type of representation',
              annotationtype: 'expand',
              mode: 'both',
              figureground: 'clearcut',
              instructions: 'Multiple choice',
              done: false,
              children: [
                {
                  name: 'F1.1',
                  label: 'Human features (body-wise)',
                  annotationtype: 'assign',
                  mode: 'both',
                  figureground: 'clearcut',
                  instructions: '',
                  done: false
                },
                {
                  name: 'F1.2',
                  label: 'Light/sun',
                  annotationtype: 'assign',
                  mode: 'both',
                  figureground: 'clearcut',
                  instructions: '',
                  done: false
                }
              ]
            },
            {
              name: 'F2',
              label: 'Human features (body-wise) representing god',
              annotationtype: 'expand',
              mode: 'description',
              figureground: 'clearcut',
              instructions: '',
              done: false,
              children: [
                {
                  name: 'F2.1',
                  label: 'Framing',
                  annotationtype: 'expand',
                  mode: 'description',
                  figureground: 'clearcut',
                  instructions: '',
                  done: false,
                  children: [
                    {
                      name: 'F2.1.1',
                      label: 'Full-length',
                      annotationtype: 'assign',
                      mode: 'description',
                      figureground: 'clearcut',
                      instructions: '',
                      done: false
                    },
                    {
                      name: 'F2.1.2',
                      label: 'Other',
                      annotationtype: 'assign',
                      mode: 'description',
                      figureground: 'clearcut',
                      instructions: 'Describe',
                      done: false
                    }
                  ]
                },
                {
                  name: 'F2.2',
                  label: 'Face',
                  annotationtype: 'expand',
                  mode: 'description',
                  figureground: 'clearcut',
                  instructions: '',
                  done: false,
                  children: [
                    {
                      name: 'F2.2.1',
                      label: 'Irrelevant',
                      annotationtype: 'assign',
                      mode: 'description',
                      figureground: 'clearcut',
                      instructions: '',
                      done: false
                    },
                    {
                      name: 'F2.2.2',
                      label: 'Present',
                      annotationtype: 'box',
                      mode: 'description',
                      figureground: 'clearcut',
                      instructions: '',
                      done: false
                    }
                  ]
                },
                {
                  name: 'F2.3',
                  label: 'Hair',
                  annotationtype: 'expand',
                  mode: 'description',
                  figureground: 'clearcut',
                  instructions: '',
                  done: false,
                  children: [
                    {
                      name: 'F2.3.1',
                      label: 'Irrelevant',
                      annotationtype: 'assign',
                      mode: 'description',
                      figureground: 'clearcut',
                      instructions: '',
                      done: false
                    },
                    {
                      name: 'F2.3.2',
                      label: 'Present',
                      annotationtype: 'expand',
                      mode: 'description',
                      figureground: 'clearcut',
                      instructions: '',
                      done: false,
                      children: [
                        {
                          name: 'F2.3.2.1',
                          label: 'Long hair',
                          annotationtype: 'point',
                          mode: 'description',
                          figureground: 'clearcut',
                          instructions: '',
                          done: false
                        },
                        {
                          name: 'F2.3.2.2',
                          label: 'Short hair',
                          annotationtype: 'point',
                          mode: 'description',
                          figureground: 'clearcut',
                          instructions: '',
                          done: false
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: 'F3',
              label: 'Light/sun representing god',
              annotationtype: 'expand',
              mode: 'description',
              figureground: 'clearcut',
              instructions: '',
              done: false,
              children: [
                {
                  name: 'F3.1',
                  label: 'Color of the figure',
                  annotationtype: 'expand',
                  mode: 'description',
                  figureground: 'clearcut',
                  instructions: '',
                  done: false,
                  children: [
                    {
                      name: 'F3.1.1',
                      label: 'Colorless',
                      annotationtype: 'assign',
                      mode: 'description',
                      figureground: 'clearcut',
                      instructions: '',
                      done: false
                    },
                    {
                      name: 'F3.1.2',
                      label: 'Unicolor',
                      annotationtype: 'point',
                      mode: 'description',
                      figureground: 'clearcut',
                      instructions: 'click on most representative color',
                      done: false
                    },
                    {
                      name: 'F3.1.3',
                      label: 'Multicolor',
                      annotationtype: 'point',
                      mode: 'description',
                      figureground: 'clearcut',
                      instructions: 'click on most representative color',
                      done: false
                    }
                  ]
                }
              ]
            }


          ]
        },

        {
          name: 'C',
          label: 'Context',
          annotationtype: 'expand',
          mode: 'description',
          figureground: 'both',
          instructions: '',
          done: false,
          children: [
            {
              name: 'C1',
              label: 'Presence of characters',
              annotationtype: 'expand',
              mode: 'description',
              figureground: 'both',
              instructions: 'One choice / apart from the figure',
              done: false,
              children: [
                {
                  name: 'C1.1',
                  label: 'Not present',
                  annotationtype: 'assign',
                  mode: 'description',
                  figureground: 'both',
                  instructions: '',
                  done: false
                },
                {
                  name: 'C1.2',
                  label: 'Present',
                  annotationtype: 'expand',
                  mode: 'description',
                  figureground: 'both',
                  instructions: '',
                  done: false,
                  children: [
                    {
                      name: 'C1.2.1',
                      label: 'Angel',
                      annotationtype: 'box',
                      mode: 'description',
                      figureground: 'both',
                      instructions: '',
                      done: false
                    },
                    {
                      name: 'C1.2.2',
                      label: 'Fairy or other mythical character',
                      annotationtype: 'box',
                      mode: 'description',
                      figureground: 'both',
                      instructions: 'Describe',
                      done: false
                    }
                  ]
                }
              ]
            },
            {
              name: 'C2',
              label: 'Cloud-figure interaction',
              annotationtype: 'expand',
              mode: 'description',
              figureground: 'clearcut',
              instructions: 'One choice',
              done: false,
              children: [
                {
                  name: 'C2.1',
                  label: 'No direct interaction with the figure',
                  annotationtype: 'assign',
                  mode: 'description',
                  figureground: 'clearcut',
                  instructions: '',
                  done: false
                },
                {
                  name: 'C2.2',
                  label: 'Present',
                  annotationtype: 'expand',
                  mode: 'description',
                  figureground: 'clearcut',
                  instructions: '',
                  done: false,
                  children: [
                    {
                      name: 'C2.2.1',
                      label: 'Figure positioned on the cloud(s)',
                      annotationtype: 'box',
                      mode: 'description',
                      figureground: 'clearcut',
                      instructions: '',
                      done: false
                    },
                    {
                      name: 'C2.2.2',
                      label: 'Figure positioned below the cloud(s)',
                      annotationtype: 'box',
                      mode: 'description',
                      figureground: 'clearcut',
                      instructions: '',
                      done: false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]*/

    /*  attributes:[
  {
      "name": "C",
      "level": 0,
      "label": "1. Characters area",
      "annotationtype": "expand",
      "mode": "both",
      "figureground": "none",
      "instructions": "Determine the characters area on the drawing",
      "done": false,
      "children": [
        {
            "name": "C1",
            "level": 1,
            "label": "Human features (body-wise)",
            "annotationtype": "box",
            "mode": "both",
            "figureground": "none",
            "instructions": "Draw a box around this character",
            "done": false
          },
        {
            "name": "C2",
            "level": 1,
            "label": "Non-human features (e.g. animal)",
            "annotationtype": "box",
            "mode": "both",
            "figureground": "none",
            "instructions": "Draw a box around this character and describe",
            "done": false
          },
        {
            "name": "C3",
            "level": 1,
            "label": "Text",
            "annotationtype": "box",
            "mode": "both",
            "figureground": "none",
            "instructions": "Draw a box around this character and describe",
            "done": false
          },
        {
            "name": "C4",
            "level": 1,
            "label": "Blank sheet",
            "annotationtype": "box",
            "mode": "both",
            "figureground": "none",
            "instructions": "Draw a box around this character",
            "done": false
          },
        {
            "name": "C5",
            "level": 1,
            "label": "Other characters",
            "annotationtype": "box",
            "mode": "both",
            "figureground": "none",
            "instructions": "Draw a box around this character and describe",
            "done": false
          }
      ]
    },
  {
      "name": "A",
      "level": 0,
      "label": "2. Attributes",
      "annotationtype": "expand",
      "mode": "both",
      "figureground": "none",
      "instructions": "Annotate figures or/and context",
      "done": false,
      "children": [
        {
            "name": "A1",
            "level": 1,
            "label": "Physical",
            "annotationtype": "expand",
            "mode": "description",
            "figureground": "clear cut",
            "instructions": "Figure's physical characteristics",
            "done": false,
            "children": [
              {
                  "name": "A1.1",
                  "level": 2,
                  "label": "Framing",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "clear cut",
                  "instructions": "One choice",
                  "done": false,
                  "children": [
                    {
                        "name": "A1.1.1",
                        "level": 3,
                        "label": "Full-length",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of the figure",
                        "done": false
                      },
                    {
                        "name": "A1.1.2",
                        "level": 3,
                        "label": "Half-length (head and shoulders)",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of the figure",
                        "done": false
                      },
                    {
                        "name": "A1.1.3",
                        "level": 3,
                        "label": "Head-shot",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of the figure",
                        "done": false
                      },
                    {
                        "name": "A1.1.4",
                        "level": 3,
                        "label": "Isolated part",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of the figure",
                        "done": false
                      },
                    {
                        "name": "A1.1.5",
                        "level": 3,
                        "label": "Eye miniature (one or both eyes)",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of the figure",
                        "done": false
                      },
                    {
                        "name": "A1.1.6",
                        "level": 3,
                        "label": "3/4 length",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of the figure",
                        "done": false
                      },
                    {
                        "name": "A1.1.7",
                        "level": 3,
                        "label": "Other ",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of the figure and describe",
                        "done": false
                      }
                  ]
                },
              {
                  "name": "A1.2",
                  "level": 2,
                  "label": "Facial",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "clear cut",
                  "instructions": "",
                  "done": false,
                  "children": [
                    {
                        "name": "A1.2.1",
                        "level": 3,
                        "label": "Head",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Draw a box around this feature",
                        "done": false
                      },
                    {
                        "name": "A1.2.2",
                        "level": 3,
                        "label": "Eyes",
                        "annotationtype": "expand",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "For each eye",
                        "done": false,
                        "children": [
                          {
                            "name": "A1.2.2.1",
                            "level": 4,
                            "label": "Open",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false
                          },
                          {
                            "name": "A1.2.2.2",
                            "level": 4,
                            "label": "Closed",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false
                          }
                        ]
                      },
                    {
                        "name": "A1.2.3",
                        "level": 3,
                        "label": "Nose",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A1.2.4",
                        "level": 3,
                        "label": "Mouth",
                        "annotationtype": "expand",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "",
                        "done": false,
                        "children": [
                          {
                            "name": "A1.2.4.1",
                            "level": 4,
                            "label": "Open",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false
                          },
                          {
                            "name": "A1.2.4.2",
                            "level": 4,
                            "label": "Closed",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false
                          },
                          {
                            "name": "A1.2.4.3",
                            "level": 4,
                            "label": "Half closed",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false
                          }
                        ]
                      },
                    {
                        "name": "A1.2.5",
                        "level": 3,
                        "label": "Ears",
                        "annotationtype": "expand",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "For each ear",
                        "done": false,
                        "children": [
                          {
                            "name": "A1.2.5.1",
                            "level": 4,
                            "label": "Standard",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false
                          },
                          {
                            "name": "A1.2.5.2",
                            "level": 4,
                            "label": "Buddha-like",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false
                          },
                          {
                            "name": "A1.2.5.3",
                            "level": 4,
                            "label": "Other",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature and describe",
                            "done": false
                          }
                        ]
                      },
                    {
                        "name": "A1.2.6",
                        "level": 3,
                        "label": "Hair",
                        "annotationtype": "expand",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "One choice",
                        "done": false,
                        "children": [
                          {
                            "name": "A1.2.6.1",
                            "level": 4,
                            "label": "Hair (i.e. long, short)",
                            "annotationtype": "box",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false
                          },
                          {
                            "name": "A1.2.6.2",
                            "level": 4,
                            "label": "Chignon / knotted",
                            "annotationtype": "box",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false
                          },
                          {
                            "name": "A1.2.6.3",
                            "level": 4,
                            "label": "Bald",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false
                          },
                          {
                            "name": "A1.2.6.4",
                            "level": 4,
                            "label": "Other",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature and describe",
                            "done": false
                          }
                        ]
                      },
                    {
                        "name": "A1.2.7",
                        "level": 3,
                        "label": "Beard / moustache",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A1.2.8",
                        "level": 3,
                        "label": "Animal-like",
                        "annotationtype": "expand",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "",
                        "done": false,
                        "children": [
                          {
                            "name": "A1.2.8.1",
                            "level": 4,
                            "label": "Muzzle",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false
                          },
                          {
                            "name": "A1.2.8.2",
                            "level": 4,
                            "label": "Tooth / fang / tusk",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false
                          },
                          {
                            "name": "A1.2.8.3",
                            "level": 4,
                            "label": "Beak",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false
                          },
                          {
                            "name": "A1.2.8.4",
                            "level": 4,
                            "label": "Wing",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false
                          },
                          {
                            "name": "A1.2.8.5",
                            "level": 4,
                            "label": "Tail",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false
                          },
                          {
                            "name": "A1.2.8.6",
                            "level": 4,
                            "label": "Limb",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false
                          },
                          {
                            "name": "A1.2.8.7",
                            "level": 4,
                            "label": "Paw",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false
                          },
                          {
                            "name": "A1.2.8.8",
                            "level": 4,
                            "label": "Claw",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false
                          },
                          {
                            "name": "A1.2.8.9",
                            "level": 4,
                            "label": "Other",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature and describe",
                            "done": false
                          }
                        ]
                      }
                  ]
                },
              {
                  "name": "A1.3",
                  "level": 2,
                  "label": "Clothing",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "clear cut",
                  "instructions": "",
                  "done": false,
                  "children": [
                    {
                        "name": "A1.3.1",
                        "level": 3,
                        "label": "Dress / tunic / toga",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A1.3.2",
                        "level": 3,
                        "label": "Shirt / T-shirt / jumper",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A1.3.3",
                        "level": 3,
                        "label": "Jacket / coat",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A1.3.4",
                        "level": 3,
                        "label": "Skirt",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A1.3.5",
                        "level": 3,
                        "label": "Shorts / trouser",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A1.3.6",
                        "level": 3,
                        "label": "Loincloth",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A1.3.7",
                        "level": 3,
                        "label": "Other",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature and describe",
                        "done": false
                      }
                  ]
                },

              {
                  "name": "A1.4",
                  "level": 2,
                  "label": "Limbs",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "clear cut",
                  "instructions": "For each hand",
                  "done": false,
                  "children": [
                        {
                          "name": "A1.4.1",
                          "level": 3,
                          "label": "Arms",
                          "annotationtype": "box",
                          "mode": "description",
                          "figureground": "clear cut",
                          "instructions": "Draw a box around this feature from shoulder to wrist for each arm",
                          "done": false
                         },
                         {
                          "name": "A1.4.2",
                          "level": 3,
                          "label": "Legs",
                          "annotationtype": "box",
                          "mode": "description",
                          "figureground": "clear cut",
                          "instructions": "Draw a box around this feature from hip to ankle for each leg  (only if legs are visible)",
                          "done": false
                        },
                    
                  ]
                },  

              {
                  "name": "A1.5",
                  "level": 2,
                  "label": "Hands",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "clear cut",
                  "instructions": "For each hand",
                  "done": false,
                  "children": [
                    {
                        "name": "A1.5.1",
                        "level": 3,
                        "label": "Closed",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A1.5.2",
                        "level": 3,
                        "label": "Open",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A1.5.3",
                        "level": 3,
                        "label": "Half closed",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A1.5.4",
                        "level": 3,
                        "label": "Folded (e.g. as if praying)",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A1.5.5",
                        "level": 3,
                        "label": "Crossed fingers (both hands)",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A1.5.6",
                        "level": 3,
                        "label": "Holding an object",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A1.5.7",
                        "level": 3,
                        "label": "Index pointing at something",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A1.5.8",
                        "level": 3,
                        "label": "Mudra-like",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A1.5.9",
                        "level": 3,
                        "label": "Other",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature and describe",
                        "done": false
                      }
                  ]
                },
              
              {
                  "name": "A1.6",
                  "level": 2,
                  "label": "Feet",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "clear cut",
                  "instructions": "For each feet",
                  "done": false,
                  "children": [
                    {
                        "name": "A1.6.1",
                        "level": 3,
                        "label": "Naked",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A1.6.2",
                        "level": 3,
                        "label": "Covered (e.g. shoe, sandal, sock)",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A1.6.3",
                        "level": 3,
                        "label": "Other",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature and describe",
                        "done": false
                      }
                  ]
                }
            ]
          },
        {
            "name": "A2",
            "level": 1,
            "label": "Accessories",
            "annotationtype": "expand",
            "mode": "description",
            "figureground": "clear cut",
            "instructions": "The figure either has, is wearing or is holding x",
            "done": false,
            "children": [
              {
                  "name": "A2.1",
                  "level": 2,
                  "label": "Divine",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "",
                  "done": false,
                  "children": [
                    {
                        "name": "A2.1.1",
                        "level": 3,
                        "label": "Wings",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Draw a box around this feature",
                        "done": false
                      },
                    {
                        "name": "A2.1.2",
                        "level": 3,
                        "label": "Aura",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Draw a box around this feature",
                        "done": false
                      },
                    {
                        "name": "A2.1.3",
                        "level": 3,
                        "label": "Halo",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Draw a box around this feature",
                        "done": false
                      }
                  ]
                },
              {
                  "name": "A2.2",
                  "level": 2,
                  "label": "Head-related",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "",
                  "done": false,
                  "children": [
                    {
                        "name": "A2.2.1",
                        "level": 3,
                        "label": "Overhead (e.g. Crown/Hat/Tiara/Mitre)",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.2.2",
                        "level": 3,
                        "label": "Overface (e.g. Glasses, Diadem)",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.2.3",
                        "level": 3,
                        "label": "Other element drawn on head",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature and describe",
                        "done": false
                      }
                  ]
                },
              {
                  "name": "A2.3",
                  "level": 2,
                  "label": "Body-related",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "",
                  "done": false,
                  "children": [
                    {
                        "name": "A2.3.1",
                        "level": 3,
                        "label": "Cross pendant",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.3.2",
                        "level": 3,
                        "label": "Rosary",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.3.3",
                        "level": 3,
                        "label": "Locket",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.3.4",
                        "level": 3,
                        "label": "Necklace",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.3.5",
                        "level": 3,
                        "label": "Bracelet",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.3.6",
                        "level": 3,
                        "label": "Earrings",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.3.7",
                        "level": 3,
                        "label": "Sword",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.3.8",
                        "level": 3,
                        "label": "Wand / sceptre",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.3.9",
                        "level": 3,
                        "label": "Stick / cane",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.3.10",
                        "level": 3,
                        "label": "Trident",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.3.11",
                        "level": 3,
                        "label": "Keys",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.3.12",
                        "level": 3,
                        "label": "Scale",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.3.13",
                        "level": 3,
                        "label": "Cape",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.3.14",
                        "level": 3,
                        "label": "Scarf",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.3.15",
                        "level": 3,
                        "label": "Cross drawn on body",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.3.16",
                        "level": 3,
                        "label": "Text written on body",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature and describe",
                        "done": false
                      },
                    {
                        "name": "A2.3.17",
                        "level": 3,
                        "label": "Other element drawn on body",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature and describe",
                        "done": false
                      }
                  ]
                },
              {
                  "name": "A2.4",
                  "level": 2,
                  "label": "Books",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "",
                  "done": false,
                  "children": [
                    {
                        "name": "A2.4.1",
                        "level": 3,
                        "label": "Bible",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false
                      },
                    {
                        "name": "A2.4.2",
                        "level": 3,
                        "label": "Koran",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false
                      },
                    {
                        "name": "A2.4.3",
                        "level": 3,
                        "label": "Other",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature and describe",
                        "done": false
                      }
                  ]
                },
              {
                  "name": "A2.5",
                  "level": 2,
                  "label": "Symbolic elements",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "",
                  "done": false,
                  "children": [
                    {
                        "name": "A2.5.1",
                        "level": 3,
                        "label": "Christian Cross",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.5.2",
                        "level": 3,
                        "label": "Bread",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.5.3",
                        "level": 3,
                        "label": "Wine",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.5.4",
                        "level": 3,
                        "label": "Dove",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.5.5",
                        "level": 3,
                        "label": "Candle",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.5.6",
                        "level": 3,
                        "label": "Lotus flower",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.5.7",
                        "level": 3,
                        "label": "Heart",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Point into the middle of this feature",
                        "done": false
                      },
                    {
                        "name": "A2.5.8",
                        "level": 3,
                        "label": "Other",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Point into the middle of this feature and describe",
                        "done": false
                      }
                  ]
                },
              {
                  "name": "A2.6",
                  "level": 2,
                  "label": "Other attribute(s)",
                  "annotationtype": "point",
                  "mode": "description",
                  "figureground": "clear cut",
                  "instructions": "Point into the middle of this feature and describe",
                  "done": false
                }
            ]
          },
        {
            "name": "A3",
            "level": 1,
            "label": "Celestial (e.g. sun)",
            "annotationtype": "expand",
            "mode": "",
            "figureground": "",
            "instructions": "",
            "done": false,
            "children": [
              {
                  "name": "A3.1",
                  "level": 2,
                  "label": "Sun",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false
                },
              {
                  "name": "A3.2",
                  "level": 2,
                  "label": "Cloud",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false
                },
              {
                  "name": "A3.3",
                  "level": 2,
                  "label": "Sky",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false
                },
              {
                  "name": "A3.4",
                  "level": 2,
                  "label": "Star",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false
                },
              {
                  "name": "A3.5",
                  "level": 2,
                  "label": "Moon",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false
                },
              {
                  "name": "A3.7",
                  "level": 2,
                  "label": "Other",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature and describe",
                  "done": false
                }
            ]
          },
        {
            "name": "A4",
            "level": 1,
            "label": "Elemental (e.g. fire)",
            "annotationtype": "expand",
            "mode": "description",
            "figureground": "both",
            "instructions": "",
            "done": false,
            "children": [
              {
                  "name": "A4.1",
                  "level": 2,
                  "label": "Fire",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false
                },
              {
                  "name": "A4.2",
                  "level": 2,
                  "label": "Water (e.g. river)",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false
                },
              {
                  "name": "A4.3",
                  "level": 2,
                  "label": "Light (e.g. yellow-coloured space)",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false
                }
            ]
          },
        {
            "name": "A5",
            "level": 1,
            "label": "Architectural",
            "annotationtype": "expand",
            "mode": "description",
            "figureground": "both",
            "instructions": "",
            "done": false,
            "children": [
              {
                  "name": "A5.1",
                  "level": 2,
                  "label": "Building structures (e.g. house)",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "",
                  "done": false,
                  "children": [
                    {
                        "name": "A5.1.1",
                        "level": 3,
                        "label": "House",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false
                      },
                    {
                        "name": "A5.1.2",
                        "level": 3,
                        "label": "Church",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false
                      },
                    {
                        "name": "A5.1.3",
                        "level": 3,
                        "label": "Crib",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false
                      },
                    {
                        "name": "A5.1.4",
                        "level": 3,
                        "label": "Mosque",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false
                      },
                    {
                        "name": "A5.1.5",
                        "level": 3,
                        "label": "Synagogue",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false
                      },
                    {
                        "name": "A5.1.6",
                        "level": 3,
                        "label": "Buddhist temple",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false
                      },
                    {
                        "name": "A5.1.7",
                        "level": 3,
                        "label": "Other",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature and describe",
                        "done": false
                      }
                  ]
                },
              {
                  "name": "A5.2",
                  "level": 2,
                  "label": "Architectural elements (e.g. wall)",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "",
                  "instructions": "",
                  "done": false,
                  "children": [
                    {
                        "name": "A5.2.1",
                        "level": 3,
                        "label": "Wall",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false
                      },
                    {
                        "name": "A5.2.2",
                        "level": 3,
                        "label": "Door",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false
                      },
                    {
                        "name": "A5.2.3",
                        "level": 3,
                        "label": "Window",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false
                      },
                    {
                        "name": "A5.2.4",
                        "level": 3,
                        "label": "Other",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature and describe",
                        "done": false
                      }
                  ]
                },
              {
                  "name": "A5.3",
                  "level": 2,
                  "label": "Pieces of furniture (e.g. table)",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "",
                  "instructions": "",
                  "done": false,
                  "children": [
                    {
                        "name": "A5.3.1",
                        "level": 3,
                        "label": "Table",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false
                      },
                    {
                        "name": "A5.3.2",
                        "level": 3,
                        "label": "Chair / throne",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false
                      },
                    {
                        "name": "A5.3.3",
                        "level": 3,
                        "label": "Bed",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false
                      },
                    {
                        "name": "A5.3.4",
                        "level": 3,
                        "label": "Pedestal / plinth",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false
                      },
                    {
                        "name": "A5.3.5",
                        "level": 3,
                        "label": "Other",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature and describe",
                        "done": false
                      }
                  ]
                }
            ]
          },
        {
            "name": "A6",
            "level": 1,
            "label": "Vegetation (e.g. tree)",
            "annotationtype": "expand",
            "mode": "description",
            "figureground": "both",
            "instructions": "",
            "done": false,
            "children": [
              {
                  "name": "A6.1",
                  "level": 2,
                  "label": "Tree",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false
                },
              {
                  "name": "A6.2",
                  "level": 2,
                  "label": "Flower",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false
                },
              {
                  "name": "A6.3",
                  "level": 2,
                  "label": "Land",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false
                },
              {
                  "name": "A6.4",
                  "level": 2,
                  "label": "Other",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature and describe",
                  "done": false
                }
            ]
          }
      ]
    },
  {
      "name": "R",
      "level": 0,
      "label": "3. Representations of god",
      "annotationtype": "expand",
      "mode": "description",
      "figureground": "both",
      "instructions": "Figure(s) representing god",
      "done": false,
      "children": [
        {
            "name": "R1",
            "level": 1,
            "label": "God figures",
            "annotationtype": "point",
            "mode": "description",
            "figureground": "both",
            "instructions": "Point into the middle of the figure",
            "done": false
          }
      ]
    }
]*/
  
  attributes: [
  {
      "name": "C",
      "level": 0,
      "label": "1. Characters area",
      "annotationtype": "expand",
      "mode": "both",
      "figureground": "none",
      "instructions": "Determine the characters area on the drawing",
      "done": false,
      "count": "undefined",
      "children": [
        {
            "name": "C1",
            "level": 1,
            "label": "Human features (body-wise)",
            "annotationtype": "box",
            "mode": "both",
            "figureground": "none",
            "instructions": "Draw a box around this character",
            "done": false,
            "count": "undefined"
          },
        {
            "name": "C2",
            "level": 1,
            "label": "Non-human features (e.g. animal)",
            "annotationtype": "box",
            "mode": "both",
            "figureground": "none",
            "instructions": "Draw a box around this character and describe",
            "done": false,
            "count": "undefined"
          },
        {
            "name": "C3",
            "level": 1,
            "label": "Text",
            "annotationtype": "box",
            "mode": "both",
            "figureground": "none",
            "instructions": "Draw a box around this character and describe",
            "done": false,
            "count": "undefined"
          },
        {
            "name": "C4",
            "level": 1,
            "label": "Blank sheet",
            "annotationtype": "box",
            "mode": "both",
            "figureground": "none",
            "instructions": "Draw a box around this character",
            "done": false,
            "count": "undefined"
          },
        {
            "name": "C5",
            "level": 1,
            "label": "Other characters",
            "annotationtype": "box",
            "mode": "both",
            "figureground": "none",
            "instructions": "Draw a box around this character and describe",
            "done": false,
            "count": "undefined"
          }
      ]
    },
  {
      "name": "A",
      "level": 0,
      "label": "2. Attributes",
      "annotationtype": "expand",
      "mode": "both",
      "figureground": "none",
      "instructions": "Annotate figures or/and context",
      "done": false,
      "count": "undefined",
      "children": [
        {
            "name": "A1",
            "level": 1,
            "label": "Physical",
            "annotationtype": "expand",
            "mode": "description",
            "figureground": "clear cut",
            "instructions": "Figure's physical characteristics",
            "done": false,
            "count": "undefined",
            "children": [
              {
                  "name": "A1.1",
                  "level": 2,
                  "label": "Framing",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "clear cut",
                  "instructions": "One choice",
                  "done": false,
                  "count": "undefined",
                  "children": [
                    {
                        "name": "A1.1.1",
                        "level": 3,
                        "label": "Full-length",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of the figure",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.1.2",
                        "level": 3,
                        "label": "Half-length (head and shoulders)",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of the figure",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.1.3",
                        "level": 3,
                        "label": "Head-shot",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of the figure",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.1.4",
                        "level": 3,
                        "label": "Isolated part",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of the figure",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.1.5",
                        "level": 3,
                        "label": "Eye miniature (one or both eyes)",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of the figure",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.1.6",
                        "level": 3,
                        "label": "3/4 length",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of the figure",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.1.7",
                        "level": 3,
                        "label": "Other ",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of the figure and describe",
                        "done": false,
                        "count": "undefined"
                      }
                  ]
                },
              {
                  "name": "A1.2",
                  "level": 2,
                  "label": "Facial",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "clear cut",
                  "instructions": "",
                  "done": false,
                  "count": "undefined",
                  "children": [
                    {
                        "name": "A1.2.1",
                        "level": 3,
                        "label": "Head",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Draw a box around this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.2.2",
                        "level": 3,
                        "label": "Eyes",
                        "annotationtype": "expand",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "For each eye",
                        "done": false,
                        "count": "undefined",
                        "children": [
                          {
                            "name": "A1.2.2.1",
                            "level": 4,
                            "label": "Open",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false,
                            "count": "undefined"
                          },
                          {
                            "name": "A1.2.2.2",
                            "level": 4,
                            "label": "Closed",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false,
                            "count": "undefined"
                          }
                        ]
                      },
                    {
                        "name": "A1.2.3",
                        "level": 3,
                        "label": "Nose",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.2.4",
                        "level": 3,
                        "label": "Mouth",
                        "annotationtype": "expand",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "",
                        "done": false,
                        "count": "undefined",
                        "children": [
                          {
                            "name": "A1.2.4.1",
                            "level": 4,
                            "label": "Open",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false,
                            "count": "undefined"
                          },
                          {
                            "name": "A1.2.4.2",
                            "level": 4,
                            "label": "Closed",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false,
                            "count": "undefined"
                          },
                          {
                            "name": "A1.2.4.3",
                            "level": 4,
                            "label": "Half closed",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false,
                            "count": "undefined"
                          }
                        ]
                      },
                    {
                        "name": "A1.2.5",
                        "level": 3,
                        "label": "Ears",
                        "annotationtype": "expand",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "For each ear",
                        "done": false,
                        "count": "undefined",
                        "children": [
                          {
                            "name": "A1.2.5.1",
                            "level": 4,
                            "label": "Standard",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false,
                            "count": "undefined"
                          },
                          {
                            "name": "A1.2.5.2",
                            "level": 4,
                            "label": "Buddha-like",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false,
                            "count": "undefined"
                          },
                          {
                            "name": "A1.2.5.3",
                            "level": 4,
                            "label": "Other",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature and describe",
                            "done": false,
                            "count": "undefined"
                          }
                        ]
                      },
                    {
                        "name": "A1.2.6",
                        "level": 3,
                        "label": "Hair",
                        "annotationtype": "expand",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "One choice",
                        "done": false,
                        "count": "undefined",
                        "children": [
                          {
                            "name": "A1.2.6.1",
                            "level": 4,
                            "label": "Hair (i.e. long, short)",
                            "annotationtype": "box",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false,
                            "count": "undefined"
                          },
                          {
                            "name": "A1.2.6.2",
                            "level": 4,
                            "label": "Chignon / knotted",
                            "annotationtype": "box",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false,
                            "count": "undefined"
                          },
                          {
                            "name": "A1.2.6.3",
                            "level": 4,
                            "label": "Bald",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false,
                            "count": "undefined"
                          },
                          {
                            "name": "A1.2.6.4",
                            "level": 4,
                            "label": "Other",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature and describe",
                            "done": false,
                            "count": "undefined"
                          }
                        ]
                      },
                    {
                        "name": "A1.2.7",
                        "level": 3,
                        "label": "Beard / moustache",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.2.8",
                        "level": 3,
                        "label": "Animal-like",
                        "annotationtype": "expand",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "",
                        "done": false,
                        "count": "undefined",
                        "children": [
                          {
                            "name": "A1.2.8.1",
                            "level": 4,
                            "label": "Muzzle",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false,
                            "count": "undefined"
                          },
                          {
                            "name": "A1.2.8.2",
                            "level": 4,
                            "label": "Tooth / fang / tusk",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false,
                            "count": "undefined"
                          },
                          {
                            "name": "A1.2.8.3",
                            "level": 4,
                            "label": "Beak",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false,
                            "count": "undefined"
                          },
                          {
                            "name": "A1.2.8.4",
                            "level": 4,
                            "label": "Wing",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false,
                            "count": "undefined"
                          },
                          {
                            "name": "A1.2.8.5",
                            "level": 4,
                            "label": "Tail",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false,
                            "count": "undefined"
                          },
                          {
                            "name": "A1.2.8.6",
                            "level": 4,
                            "label": "Limb",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false,
                            "count": "undefined"
                          },
                          {
                            "name": "A1.2.8.7",
                            "level": 4,
                            "label": "Paw",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false,
                            "count": "undefined"
                          },
                          {
                            "name": "A1.2.8.8",
                            "level": 4,
                            "label": "Claw",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature",
                            "done": false,
                            "count": "undefined"
                          },
                          {
                            "name": "A1.2.8.9",
                            "level": 4,
                            "label": "Other",
                            "annotationtype": "point",
                            "mode": "description",
                            "figureground": "clear cut",
                            "instructions": "Point into the middle of this feature and describe",
                            "done": false,
                            "count": "undefined"
                          }
                        ]
                      }
                  ]
                },
              {
                  "name": "A1.3",
                  "level": 2,
                  "label": "Clothing",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "clear cut",
                  "instructions": "",
                  "done": false,
                  "count": "undefined",
                  "children": [
                    {
                        "name": "A1.3.1",
                        "level": 3,
                        "label": "Dress / tunic / toga",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.3.2",
                        "level": 3,
                        "label": "Shirt / T-shirt / jumper",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.3.3",
                        "level": 3,
                        "label": "Jacket / coat",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.3.4",
                        "level": 3,
                        "label": "Skirt",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.3.5",
                        "level": 3,
                        "label": "Shorts / trouser",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.3.6",
                        "level": 3,
                        "label": "Loincloth",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.3.7",
                        "level": 3,
                        "label": "Other",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature and describe",
                        "done": false,
                        "count": "undefined"
                      }
                  ]
                },
              {
                  "name": "A1.4",
                  "level": 2,
                  "label": "Arms",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "clear cut",
                  "instructions": "Draw a box around this feature from shoulder to wrist for each arm",
                  "done": false,
                  "count": "undefined"
                },
              {
                  "name": "A1.5",
                  "level": 2,
                  "label": "Hands",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "clear cut",
                  "instructions": "For each hand",
                  "done": false,
                  "count": "undefined",
                  "children": [
                    {
                        "name": "A1.5.1",
                        "level": 3,
                        "label": "Closed",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.5.2",
                        "level": 3,
                        "label": "Open",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.5.3",
                        "level": 3,
                        "label": "Half closed",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.5.4",
                        "level": 3,
                        "label": "Folded (e.g. as if praying)",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.5.5",
                        "level": 3,
                        "label": "Crossed fingers (both hands)",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.5.6",
                        "level": 3,
                        "label": "Holding an object",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.5.7",
                        "level": 3,
                        "label": "Index pointing at something",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.5.8",
                        "level": 3,
                        "label": "Mudra-like",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.5.9",
                        "level": 3,
                        "label": "Other",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature and describe",
                        "done": false,
                        "count": "undefined"
                      }
                  ]
                },
              {
                  "name": "A1.6",
                  "level": 2,
                  "label": "Legs",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "clear cut",
                  "instructions": "Draw a box around this feature from hip to ankle for each leg  (only if legs are visible)",
                  "done": false,
                  "count": "undefined"
                },
              {
                  "name": "A1.7",
                  "level": 2,
                  "label": "Feet",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "clear cut",
                  "instructions": "For each feet",
                  "done": false,
                  "count": "undefined",
                  "children": [
                    {
                        "name": "A1.7.1",
                        "level": 3,
                        "label": "Naked",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.7.2",
                        "level": 3,
                        "label": "Covered (e.g. shoe, sandal, sock)",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A1.7.3",
                        "level": 3,
                        "label": "Other",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature and describe",
                        "done": false,
                        "count": "undefined"
                      }
                  ]
                }
            ]
          },
        {
            "name": "A2",
            "level": 1,
            "label": "Accessories",
            "annotationtype": "expand",
            "mode": "description",
            "figureground": "clear cut",
            "instructions": "The figure either has, is wearing or is holding x",
            "done": false,
            "count": "undefined",
            "children": [
              {
                  "name": "A2.1",
                  "level": 2,
                  "label": "Divine",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "",
                  "done": false,
                  "count": "undefined",
                  "children": [
                    {
                        "name": "A2.1.1",
                        "level": 3,
                        "label": "Wings",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Draw a box around this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.1.2",
                        "level": 3,
                        "label": "Aura",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Draw a box around this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.1.3",
                        "level": 3,
                        "label": "Halo",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Draw a box around this feature",
                        "done": false,
                        "count": "undefined"
                      }
                  ]
                },
              {
                  "name": "A2.2",
                  "level": 2,
                  "label": "Head-related",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "",
                  "done": false,
                  "count": "undefined",
                  "children": [
                    {
                        "name": "A2.2.1",
                        "level": 3,
                        "label": "Overhead (e.g. Crown/Hat/Tiara/Mitre)",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.2.2",
                        "level": 3,
                        "label": "Overface (e.g. Glasses, Diadem)",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.2.3",
                        "level": 3,
                        "label": "Other element drawn on head",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature and describe",
                        "done": false,
                        "count": "undefined"
                      }
                  ]
                },
              {
                  "name": "A2.3",
                  "level": 2,
                  "label": "Body-related",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "",
                  "done": false,
                  "count": "undefined",
                  "children": [
                    {
                        "name": "A2.3.1",
                        "level": 3,
                        "label": "Cross pendant",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.3.2",
                        "level": 3,
                        "label": "Rosary",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.3.3",
                        "level": 3,
                        "label": "Locket",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.3.4",
                        "level": 3,
                        "label": "Necklace",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.3.5",
                        "level": 3,
                        "label": "Bracelet",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.3.6",
                        "level": 3,
                        "label": "Earrings",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.3.7",
                        "level": 3,
                        "label": "Sword",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.3.8",
                        "level": 3,
                        "label": "Wand / sceptre",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.3.9",
                        "level": 3,
                        "label": "Stick / cane",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.3.10",
                        "level": 3,
                        "label": "Trident",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.3.11",
                        "level": 3,
                        "label": "Keys",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.3.12",
                        "level": 3,
                        "label": "Scale",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.3.13",
                        "level": 3,
                        "label": "Cape",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.3.14",
                        "level": 3,
                        "label": "Scarf",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.3.15",
                        "level": 3,
                        "label": "Cross drawn on body",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.3.16",
                        "level": 3,
                        "label": "Text written on body",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature and describe",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.3.17",
                        "level": 3,
                        "label": "Other element drawn on body",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "clear cut",
                        "instructions": "Point into the middle of this feature and describe",
                        "done": false,
                        "count": "undefined"
                      }
                  ]
                },
              {
                  "name": "A2.4",
                  "level": 2,
                  "label": "Books",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "",
                  "done": false,
                  "count": "undefined",
                  "children": [
                    {
                        "name": "A2.4.1",
                        "level": 3,
                        "label": "Bible",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.4.2",
                        "level": 3,
                        "label": "Koran",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.4.3",
                        "level": 3,
                        "label": "Other",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature and describe",
                        "done": false,
                        "count": "undefined"
                      }
                  ]
                },
              {
                  "name": "A2.5",
                  "level": 2,
                  "label": "Symbolic elements",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "",
                  "done": false,
                  "count": "undefined",
                  "children": [
                    {
                        "name": "A2.5.1",
                        "level": 3,
                        "label": "Christian Cross",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.5.2",
                        "level": 3,
                        "label": "Bread",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.5.3",
                        "level": 3,
                        "label": "Wine",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.5.4",
                        "level": 3,
                        "label": "Dove",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.5.5",
                        "level": 3,
                        "label": "Candle",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.5.6",
                        "level": 3,
                        "label": "Lotus flower",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.5.7",
                        "level": 3,
                        "label": "Heart",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Point into the middle of this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A2.5.8",
                        "level": 3,
                        "label": "Other",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Point into the middle of this feature and describe",
                        "done": false,
                        "count": "undefined"
                      }
                  ]
                },
              {
                  "name": "A2.6",
                  "level": 2,
                  "label": "Other attribute(s)",
                  "annotationtype": "point",
                  "mode": "description",
                  "figureground": "clear cut",
                  "instructions": "Point into the middle of this feature and describe",
                  "done": false,
                  "count": "undefined"
                }
            ]
          },
        {
            "name": "A3",
            "level": 1,
            "label": "Celestial (e.g. sun)",
            "annotationtype": "expand",
            "mode": "",
            "figureground": "",
            "instructions": "",
            "done": false,
            "count": "undefined",
            "children": [
              {
                  "name": "A3.1",
                  "level": 2,
                  "label": "Sun",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false,
                  "count": "undefined"
                },
              {
                  "name": "A3.2",
                  "level": 2,
                  "label": "Cloud",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false,
                  "count": "undefined"
                },
              {
                  "name": "A3.3",
                  "level": 2,
                  "label": "Sky",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false,
                  "count": "undefined"
                },
              {
                  "name": "A3.4",
                  "level": 2,
                  "label": "Star",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false,
                  "count": "undefined"
                },
              {
                  "name": "A3.5",
                  "level": 2,
                  "label": "Moon",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false,
                  "count": "undefined"
                },
              {
                  "name": "A3.7",
                  "level": 2,
                  "label": "Other",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature and describe",
                  "done": false,
                  "count": "undefined"
                }
            ]
          },
        {
            "name": "A4",
            "level": 1,
            "label": "Elemental (e.g. fire)",
            "annotationtype": "expand",
            "mode": "description",
            "figureground": "both",
            "instructions": "",
            "done": false,
            "count": "undefined",
            "children": [
              {
                  "name": "A4.1",
                  "level": 2,
                  "label": "Fire",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false,
                  "count": "undefined"
                },
              {
                  "name": "A4.2",
                  "level": 2,
                  "label": "Water (e.g. river)",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false,
                  "count": "undefined"
                },
              {
                  "name": "A4.3",
                  "level": 2,
                  "label": "Light (e.g. yellow-coloured space)",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false,
                  "count": "undefined"
                }
            ]
          },
        {
            "name": "A5",
            "level": 1,
            "label": "Architectural",
            "annotationtype": "expand",
            "mode": "description",
            "figureground": "both",
            "instructions": "",
            "done": false,
            "count": "undefined",
            "children": [
              {
                  "name": "A5.1",
                  "level": 2,
                  "label": "Building structures (e.g. house)",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "",
                  "done": false,
                  "count": "undefined",
                  "children": [
                    {
                        "name": "A5.1.1",
                        "level": 3,
                        "label": "House",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A5.1.2",
                        "level": 3,
                        "label": "Church",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A5.1.3",
                        "level": 3,
                        "label": "Crib",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A5.1.4",
                        "level": 3,
                        "label": "Mosque",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A5.1.5",
                        "level": 3,
                        "label": "Synagogue",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A5.1.6",
                        "level": 3,
                        "label": "Buddhist temple",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A5.1.7",
                        "level": 3,
                        "label": "Other",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature and describe",
                        "done": false,
                        "count": "undefined"
                      }
                  ]
                },
              {
                  "name": "A5.2",
                  "level": 2,
                  "label": "Architectural elements (e.g. wall)",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "",
                  "instructions": "",
                  "done": false,
                  "count": "undefined",
                  "children": [
                    {
                        "name": "A5.2.1",
                        "level": 3,
                        "label": "Wall",
                        "annotationtype": "point",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A5.2.2",
                        "level": 3,
                        "label": "Door",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A5.2.3",
                        "level": 3,
                        "label": "Window",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A5.2.4",
                        "level": 3,
                        "label": "Other",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature and describe",
                        "done": false,
                        "count": "undefined"
                      }
                  ]
                },
              {
                  "name": "A5.3",
                  "level": 2,
                  "label": "Pieces of furniture (e.g. table)",
                  "annotationtype": "expand",
                  "mode": "description",
                  "figureground": "",
                  "instructions": "",
                  "done": false,
                  "count": "undefined",
                  "children": [
                    {
                        "name": "A5.3.1",
                        "level": 3,
                        "label": "Table",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A5.3.2",
                        "level": 3,
                        "label": "Chair / throne",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A5.3.3",
                        "level": 3,
                        "label": "Bed",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A5.3.4",
                        "level": 3,
                        "label": "Pedestal / plinth",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature",
                        "done": false,
                        "count": "undefined"
                      },
                    {
                        "name": "A5.3.5",
                        "level": 3,
                        "label": "Other",
                        "annotationtype": "box",
                        "mode": "description",
                        "figureground": "both",
                        "instructions": "Draw a box around this feature and describe",
                        "done": false,
                        "count": "undefined"
                      }
                  ]
                }
            ]
          },
        {
            "name": "A6",
            "level": 1,
            "label": "Vegetation (e.g. tree)",
            "annotationtype": "expand",
            "mode": "description",
            "figureground": "both",
            "instructions": "",
            "done": false,
            "count": "undefined",
            "children": [
              {
                  "name": "A6.1",
                  "level": 2,
                  "label": "Tree",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false,
                  "count": "undefined"
                },
              {
                  "name": "A6.2",
                  "level": 2,
                  "label": "Flower",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false,
                  "count": "undefined"
                },
              {
                  "name": "A6.3",
                  "level": 2,
                  "label": "Land",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature",
                  "done": false,
                  "count": "undefined"
                },
              {
                  "name": "A6.4",
                  "level": 2,
                  "label": "Other",
                  "annotationtype": "box",
                  "mode": "description",
                  "figureground": "both",
                  "instructions": "Draw a box around this feature and describe",
                  "done": false,
                  "count": "undefined"
                }
            ]
          }
      ]
    },
  {
      "name": "R",
      "level": 0,
      "label": "3. Representations of god",
      "annotationtype": "expand",
      "mode": "description",
      "figureground": "both",
      "instructions": "Figure(s) representing god",
      "done": false,
      "count": "undefined",
      "children": [
        {
            "name": "R1",
            "level": 1,
            "label": "God figures",
            "annotationtype": "point",
            "mode": "description",
            "figureground": "both",
            "instructions": "Point into the middle of the figure",
            "done": false,
            "count": "undefined"
          }
      ]
    }
]





    };

    return annotFeatures;

  };

  return annotFeaturesService;
}]);
