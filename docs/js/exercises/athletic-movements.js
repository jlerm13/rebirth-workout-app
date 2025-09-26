// exercises/athleticMovements.js - Athletic Movements with Surface/Space-Focused Equipment Mapping
(function() {
    const athleticMovements = {
      // SPRINTING - Primary focus on surface and space availability
      
      sprint10yd: {
        name: "10-Yard Sprint",
        classification: "athletic", 
        effort: "Speed",
        category: "sprint",
        movementPattern: "linear-acceleration",
        warmupProtocol: "sprint-progression",
        
        // Simple surface/space mapping - intensity/volume varies by phase, not equipment
        equipmentMap: {
          full: "10-Yard Sprint (Track/Turf)",
          commercial: "10-Yard Sprint (Gym Space/Treadmill)",
          minimal: "10-Yard Sprint (Any Available Space)",
          bodyweight: "10-Yard Sprint (Indoor/Outdoor)"
        },
        
        variations: [
          "Standing Start 10-Yard",
          "3-Point Start 10-Yard", 
          "Flying 10-Yard",
          "Resistance 10-Yard (bands/sled)"
        ],
        features: ["acceleration", "short"],
        requires: [],
        coachingCues: [
          "Drive phase first 10 yards",
          "Stay low out of start",
          "Powerful arm drive",
          "Quick ground contacts"
        ],
        athleticCarryover: "Builds acceleration for all sports",
        indicator: { isIndicator: true, type: "speed" }
      },
    
      sprint20yd: {
        name: "20-Yard Sprint",
        classification: "athletic",
        effort: "Speed", 
        category: "sprint",
        movementPattern: "acceleration-transition",
        warmupProtocol: "sprint-progression",
        
        equipmentMap: {
          full: "20-Yard Sprint (Track/Field)",
          commercial: "20-Yard Sprint (Available Space)",
          minimal: "20-Yard Sprint (Hallway/Parking Lot)",
          bodyweight: "20-Yard Sprint (Any Surface)"
        },
        
        variations: [
          "20-Yard Dash",
          "20-Yard Flying Start", 
          "20-Yard from Prone",
          "20-Yard Shuttle"
        ],
        features: ["acceleration", "transition"],
        requires: [],
        coachingCues: [
          "Transition to upright by 15 yards",
          "Maintain acceleration", 
          "Relaxed shoulders",
          "Full speed through finish"
        ],
        athleticCarryover: "Key distance for most field sports",
        indicator: { isIndicator: true, type: "speed" }
      },
    
      sprint40yd: {
        name: "40-Yard Sprint",
        classification: "athletic",
        effort: "Speed",
        category: "sprint", 
        movementPattern: "full-acceleration",
        warmupProtocol: "extensive-sprint-prep",
        
        equipmentMap: {
          full: "40-Yard Sprint (Track/Football Field)",
          commercial: "40-Yard Sprint (Large Space)",
          minimal: "30-Yard Sprint (Space Limited)",
          bodyweight: "Stair Sprints (Vertical Alternative)"
        },
        
        variations: [
          "40-Yard Dash (NFL Combine style)",
          "40-Yard Flying Start",
          "40-Yard with Hand Timing",
          "Electronic Timed 40-Yard"
        ],
        features: ["max-velocity", "assessment"],
        requires: [],
        coachingCues: [
          "Full acceleration curve",
          "Reach max velocity by 30 yards",
          "Maintain through finish line",
          "Don't slow down early"
        ],
        athleticCarryover: "Gold standard speed assessment",
        indicator: { isIndicator: true, type: "speed" }
      },
    
      sprint60yd: {
        name: "60-Yard Sprint", 
        classification: "athletic",
        effort: "Speed",
        category: "sprint",
        movementPattern: "max-velocity-maintenance",
        warmupProtocol: "extensive-sprint-prep",
        
        equipmentMap: {
          full: "60-Yard Sprint (Track/Large Field)",
          commercial: "60-Yard Sprint (Available Long Space)",
          minimal: "40-Yard Sprint (Space Alternative)",
          bodyweight: "Hill Sprints (Incline Alternative)"
        },
        
        variations: [
          "60-Yard Dash",
          "60-Yard Build-Up",
          "Flying 60-Yard",
          "60-Yard Breakdown"
        ],
        features: ["max-velocity", "speed-endurance"],
        requires: [],
        coachingCues: [
          "Maintain max velocity",
          "Relaxed running", 
          "Consistent stride length",
          "Focus on turnover"
        ],
        athleticCarryover: "Tests max velocity maintenance",
        indicator: { isIndicator: false }
      },
    
      sprint100m: {
        name: "100-Meter Sprint",
        classification: "athletic",
        effort: "Speed",
        category: "sprint",
        movementPattern: "complete-sprint",
        warmupProtocol: "competition-sprint-prep",
        
        equipmentMap: {
          full: "100m Sprint (Track)",
          commercial: "100m Sprint (Measured Course)", 
          minimal: "Timed Distance Run (Any Length)",
          bodyweight: "Extended Sprint Intervals"
        },
        
        variations: [
          "100m Dash",
          "100m Time Trial",
          "100m Build-Up",
          "100m Breakdown"
        ],
        features: ["complete-speed", "anaerobic"],
        requires: [],
        coachingCues: [
          "Complete speed curve",
          "Relaxed max velocity phase",
          "Fight deceleration phase", 
          "Mental toughness last 30m"
        ],
        athleticCarryover: "Complete speed and speed endurance test",
        indicator: { isIndicator: false }
      },
    
      // AGILITY MOVEMENTS - Focus on space and equipment availability
    
      shuttle5105: {
        name: "5-10-5 Shuttle",
        classification: "athletic",
        effort: "Agility",
        category: "agility",
        movementPattern: "multi-directional", 
        warmupProtocol: "agility-prep",
        
        equipmentMap: {
          full: "5-10-5 Shuttle (Cones/Lines)",
          commercial: "5-10-5 Shuttle (Markers Available)",
          minimal: "5-10-5 Shuttle (Visual Markers)",
          bodyweight: "5-10-5 Shuttle (Estimated Distance)"
        },
        
        variations: [
          "Standard 5-10-5",
          "Left Start 5-10-5",
          "Right Start 5-10-5", 
          "Competition 5-10-5"
        ],
        features: ["change-of-direction", "assessment"],
        requires: [],
        coachingCues: [
          "Low cutting position",
          "Touch the line",
          "Drive hard out of cuts",
          "Stay low throughout"
        ],
        athleticCarryover: "Classic change of direction assessment",
        indicator: { isIndicator: true, type: "agility" }
      },
    
      threeConeShuttle: {
        name: "Three-Cone Shuttle", 
        classification: "athletic",
        effort: "Agility",
        category: "agility",
        movementPattern: "L-drill",
        warmupProtocol: "agility-prep",
        
        equipmentMap: {
          full: "3-Cone Shuttle (Cones)",
          commercial: "3-Cone Shuttle (Markers)",
          minimal: "3-Cone Shuttle (Visual Points)",
          bodyweight: "L-Drill Pattern (No Equipment)"
        },
        
        variations: [
          "Standard 3-Cone",
          "Left-Hand 3-Cone",
          "Right-Hand 3-Cone",
          "NFL Combine 3-Cone"
        ],
        features: ["complex-agility", "assessment"],
        requires: [],
        coachingCues: [
          "Stay low through cuts",
          "Maintain body control",
          "Sharp cuts at cones",
          "Don't round the corners"
        ],
        athleticCarryover: "Complex agility and body control",
        indicator: { isIndicator: true, type: "agility" }
      },
    
      tTestAgility: {
        name: "T-Test Agility",
        classification: "athletic",
        effort: "Agility",
        category: "agility", 
        movementPattern: "multi-directional-complex",
        warmupProtocol: "agility-prep",
        
        equipmentMap: {
          full: "T-Test (Cones in T Formation)",
          commercial: "T-Test (Available Markers)",
          minimal: "T-Test (Visual Reference Points)",
          bodyweight: "T-Pattern Movement (Estimated)"
        },
        
        variations: [
          "Standard T-Test",
          "Modified T-Test",
          "Timed T-Test",
          "T-Test for Time"
        ],
        features: ["multi-directional", "complex"],
        requires: [],
        coachingCues: [
          "Side shuffle, don't cross over",
          "Touch each cone",
          "Stay in athletic position", 
          "Quick transitions"
        ],
        athleticCarryover: "Multi-directional agility assessment",
        indicator: { isIndicator: false }
      },
    
      // LADDER/CONE DRILLS - Equipment-dependent but simple substitutions
    
      ladderDrills: {
        name: "Ladder Drills",
        classification: "athletic",
        effort: "Coordination",
        category: "agility",
        movementPattern: "foot-speed-coordination",
        warmupProtocol: "coordination-prep",
        
        equipmentMap: {
          full: "Agility Ladder Drills",
          commercial: "Agility Ladder (Available)",
          minimal: "Imaginary Ladder (Visual Pattern)",
          bodyweight: "Floor Pattern Drills (No Equipment)"
        },
        
        variations: [
          "In-In-Out-Out",
          "Two-In Each Box",
          "Lateral Shuffle",
          "Crossover Steps"
        ],
        features: ["coordination", "foot-speed"],
        requires: [],
        coachingCues: [
          "Quick, light feet",
          "Stay on balls of feet", 
          "Maintain rhythm",
          "Keep head up"
        ],
        athleticCarryover: "Foot speed and coordination",
        indicator: { isIndicator: false }
      },
    
      coneDrills: {
        name: "Cone Drills",
        classification: "athletic",
        effort: "Agility",
        category: "agility",
        movementPattern: "pattern-agility",
        warmupProtocol: "agility-prep",
        
        equipmentMap: {
          full: "Cone Drills (Traffic Cones)",
          commercial: "Cone Drills (Available Markers)",
          minimal: "Object Drills (Any Markers)",
          bodyweight: "Pattern Drills (Visual References)"
        },
        
        variations: [
          "Figure 8 Cones",
          "Zig-Zag Cones", 
          "Star Pattern Cones",
          "Box Pattern Cones"
        ],
        features: ["pattern-recognition", "cutting"],
        requires: [],
        coachingCues: [
          "Sharp cuts around cones",
          "Maintain speed through pattern",
          "Stay low in cuts",
          "Don't touch the cones"
        ],
        athleticCarryover: "Pattern recognition and cutting ability",
        indicator: { isIndicator: false }
      },
    
      // PLYOMETRIC MOVEMENTS - Space and surface considerations
    
      boundingDrills: {
        name: "Bounding Drills",
        classification: "athletic",
        effort: "Power",
        category: "plyometric",
        movementPattern: "horizontal-bounding", 
        warmupProtocol: "plyometric-prep",
        
        equipmentMap: {
          full: "Bounding (Track/Grass Field)",
          commercial: "Bounding (Available Surface)",
          minimal: "Bounding (Any Safe Surface)",
          bodyweight: "Bounding (Indoor/Outdoor)"
        },
        
        variations: [
          "Single-Leg Bounds",
          "Double-Leg Bounds",
          "Alternating Bounds",
          "Triple Bounds"
        ],
        features: ["horizontal-power", "plyometric"],
        requires: [],
        coachingCues: [
          "Maximum distance each bound",
          "Quick ground contact",
          "Drive forward, not up",
          "Use arms for momentum"
        ],
        athleticCarryover: "Horizontal power for sprinting and jumping",
        indicator: { isIndicator: false }
      },
    
      skipDrills: {
        name: "Skip Drills",
        classification: "athletic", 
        effort: "Technique",
        category: "technique",
        movementPattern: "skip-patterns",
        warmupProtocol: "dynamic-warmup",
        
        equipmentMap: {
          full: "Skip Drills (Track/Open Space)",
          commercial: "Skip Drills (Available Space)",
          minimal: "Skip Drills (Minimal Space)",
          bodyweight: "Skip Drills (Any Location)"
        },
        
        variations: [
          "A-Skip",
          "B-Skip",
          "C-Skip",
          "Straight-Leg Skip"
        ],
        features: ["technique", "coordination"],
        requires: [],
        coachingCues: [
          "High knees",
          "Quick ground contact",
          "Dorsiflexed foot",
          "Maintain rhythm"
        ],
        athleticCarryover: "Sprint technique and coordination",
        indicator: { isIndicator: false }
      },
    
      // REACTION DRILLS - Minimal equipment needs
    
      reactionSprints: {
        name: "Reaction Sprints", 
        classification: "athletic",
        effort: "Reactive",
        category: "reaction",
        movementPattern: "reactive-acceleration",
        warmupProtocol: "reactive-prep",
        
        equipmentMap: {
          full: "Reaction Sprints (Whistle/Commands)",
          commercial: "Reaction Sprints (Audio/Visual Cues)",
          minimal: "Reaction Sprints (Partner Commands)",
          bodyweight: "Self-Directed Reaction Drills"
        },
        
        variations: [
          "Whistle Start Sprints",
          "Visual Cue Sprints",
          "Partner Command Sprints", 
          "Ball Drop Reactions"
        ],
        features: ["reactive", "sport-specific"],
        requires: [],
        coachingCues: [
          "Stay ready position",
          "React to stimulus quickly",
          "First step is crucial",
          "Accelerate immediately"
        ],
        athleticCarryover: "Game-like reactive ability",
        indicator: { isIndicator: false }
      },
    
      // HILL SPRINTS - HIGH PHASE SPECIFICITY due to different training adaptations
    
      hillSprints: {
        name: "Hill Sprints",
        classification: "athletic",
        effort: "Power-Endurance",
        category: "sprint",
        movementPattern: "incline-sprint",
        warmupProtocol: "extensive-sprint-prep",
        
        equipmentMap: {
          'early-offseason': {
            full: "Long Hill Sprints (Aerobic Power/Joint-Friendly)",
            commercial: "Treadmill Incline Sprints (6-8%, longer duration)",
            minimal: "Stair Sprints (Longer flights, aerobic focus)",
            bodyweight: "Hill Running (Natural inclines, tempo effort)"
          },
          'mid-offseason': {
            full: "Short Steep Hill Sprints (Alactic Power)",
            commercial: "High Incline Treadmill (10-15%, short bursts)",
            minimal: "Stair Sprints (Short flights, max effort)",
            bodyweight: "Hill Bounds (Explosive hill running)"
          },
          'preseason': {
            full: "Hill Sprints (Acceleration Strength)",
            commercial: "Moderate Incline Sprints (8-12%, acceleration focus)",
            minimal: "Stair Sprints (Acceleration pattern)",
            bodyweight: "Hill Accelerations (Sport-specific)"
          },
          'inseason': {
            full: "Short Hill Sprints (Neural Maintenance)",
            commercial: "Light Incline Sprints (Activation)",
            minimal: "Easy Stair Sprints (Movement quality)",
            bodyweight: "Hill Tempo (Active recovery)"
          }
        },
        
        variations: [
          "Long Hill Sprints (30-60 seconds)",
          "Short Hill Sprints (8-15 seconds)", 
          "Hill Bounds",
          "Walking Hill Intervals"
        ],
        features: ["joint-friendly", "power-endurance", "phase-specific"],
        requires: [],
        coachingCues: [
          "Maintain sprint form on incline",
          "Drive knees up higher than flat",
          "Use arms aggressively",
          "Shorten stride, increase turnover"
        ],
        athleticCarryover: "Builds power endurance with reduced joint stress",
        indicator: { isIndicator: false }
      },
    
      resistedSprints: {
        name: "Resisted Sprints",
        classification: "athletic", 
        effort: "Power",
        category: "sprint",
        movementPattern: "loaded-sprint",
        warmupProtocol: "loaded-sprint-prep",
        
        equipmentMap: {
          'early-offseason': {
            full: "Light Sled/Band Resisted Sprints (Aerobic Power)",
            commercial: "Band Resisted Sprints (Form development)",
            minimal: "Partner Resisted Sprints (Learning)",
            bodyweight: "Hill Sprints (Natural resistance)"
          },
          'mid-offseason': {
            full: "Heavy Sled Sprints (Strength-Speed)",
            commercial: "Heavy Band Resisted Sprints (Power)",
            minimal: "Parachute/Tire Drag Sprints",
            bodyweight: "Hill Bounds (Max resistance)"
          },
          'preseason': {
            full: "Moderate Resistance Sprints (Acceleration)",
            commercial: "Band Release Sprints (Overspeed)",
            minimal: "Light Resistance Sprints (Speed-strength)",
            bodyweight: "Moderate Hill Accelerations"
          },
          'inseason': {
            full: "Light Resistance Sprints (Neural activation)",
            commercial: "Band Activation Sprints (Warm-up)",
            minimal: "Light Partner Resistance (Activation)",
            bodyweight: "Easy Hill Runs (Active recovery)"
          }
        },
        
        variations: [
          "Sled Sprint (various weights)",
          "Band Resisted Sprints",
          "Parachute Sprints",
          "Partner Resisted Sprints"
        ],
        features: ["resistance", "strength-speed", "acceleration"],
        requires: ["resistance-equipment"],
        coachingCues: [
          "Maintain sprint form under load",
          "Drive forward against resistance", 
          "Quick transition when resistance releases",
          "Don't over-stride against resistance"
        ],
        athleticCarryover: "Develops acceleration strength and power",
        indicator: { isIndicator: false }
      },
    
      // BACKPEDAL/DEFENSIVE - Space-focused
    
      backpedal: {
        name: "Backpedal",
        classification: "athletic",
        effort: "Defensive",
        category: "defensive-movement",
        movementPattern: "backward-running",
        warmupProtocol: "movement-prep",
        
        equipmentMap: {
          full: "Backpedal (Field/Court Surface)",
          commercial: "Backpedal (Available Space)",
          minimal: "Backpedal (Any Safe Surface)", 
          bodyweight: "Backpedal (Indoor/Outdoor)"
        },
        
        variations: [
          "Straight Backpedal",
          "Angled Backpedal",
          "Backpedal to Sprint", 
          "Weave Backpedal"
        ],
        features: ["defensive", "deceleration"],
        requires: [],
        coachingCues: [
          "Stay on balls of feet",
          "Keep chest up",
          "Quick, short steps",
          "Maintain balance"
        ],
        athleticCarryover: "Essential for defensive athletes",
        indicator: { isIndicator: false }
      },
    
      carioca: {
        name: "Carioca",
        classification: "athletic",
        effort: "Lateral",
        category: "lateral-movement", 
        movementPattern: "crossover-running",
        warmupProtocol: "lateral-prep",
        
        equipmentMap: {
          full: "Carioca (Track/Field)",
          commercial: "Carioca (Open Space)",
          minimal: "Carioca (Hallway/Limited Space)",
          bodyweight: "Carioca (Any Location)"
        },
        
        variations: [
          "Standard Carioca",
          "High Knee Carioca",
          "Speed Carioca",
          "Carioca with Arms"
        ],
        features: ["lateral", "coordination"],
        requires: [],
        coachingCues: [
          "Cross over, cross under",
          "Stay on balls of feet", 
          "Maintain square hips",
          "Quick feet pattern"
        ],
        athleticCarryover: "Lateral movement and hip mobility",
        indicator: { isIndicator: false }
      }
    };

    if (typeof loadExerciseModule === 'function') {
        loadExerciseModule('athleticMovements', athleticMovements);
    } else {
        console.error('loadExerciseModule function not available when loading athletic-movements');
    }
})();
