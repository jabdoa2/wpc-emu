'use strict';

module.exports = {
  name: 'The Party Zone',
  version: 'L-2',
  rom: {
    u06: 'PZ_U6.L2',
    u14: 'pz_u14.l1',
    u15: 'pz_u15.l1',
    u18: 'pz_u18.l1',
  },
  switchMapping: [
    { id: 11, name: 'RIGHT FLIPPER' },
    { id: 12, name: 'LEFT FLIPPER' },
    { id: 13, name: 'START BUTTON' },
    { id: 14, name: 'PLUMB BOB TILT' },
    { id: 16, name: 'HA - 1' },
    { id: 17, name: 'HA - 2' },
    { id: 18, name: 'HA - 3' },

    { id: 21, name: 'SLAM TILT' },
    { id: 22, name: 'COIN DOOR CLOSED' },
    { id: 23, name: 'TICKED OPTQ' },
    { id: 26, name: 'BOP - B' },
    { id: 27, name: 'BOP - O' },
    { id: 28, name: 'BOP - P' },

    { id: 31, name: 'BACK RAMP SWITCH' },
    { id: 34, name: 'EDM QUAL - 1' },
    { id: 35, name: 'EDM QUAL - 2' },
    { id: 36, name: 'EDM QUAL - 3' },
    { id: 37, name: 'EDM QUAL - 4' },
    { id: 38, name: 'EDM QUAL - 5' },

    { id: 41, name: 'BACK BALL POPPER' },
    { id: 42, name: 'RT BALL POPPER' },
    { id: 43, name: 'LEFT JET BUMPER' },
    { id: 44, name: 'RIGHT JET BUMPER' },
    { id: 45, name: 'BOTTOM JET BUMP' },

    { id: 51, name: 'HEAD OPTO - 1' },
    { id: 52, name: 'HEAD OPTO - 2' },
    { id: 53, name: 'HEAD OPTO - 3' },
    { id: 54, name: 'LEFT RETURN LANE' },
    { id: 55, name: 'LEFT DRAIN' },
    { id: 56, name: 'END ZONE TARGET' },
    { id: 57, name: 'RT RETURN LANE' },
    { id: 58, name: 'RIGHT DRAIN' },

    { id: 61, name: 'SHOOTER LANE' },
    { id: 62, name: 'LANE TO TOP' },
    { id: 63, name: 'OUT OF CONTROL' },
    { id: 64, name: 'TOP REBOUND' },
    { id: 65, name: 'SKILL SHOT' },
    { id: 66, name: 'REQUEST' },
    { id: 67, name: 'DJ EJECT' },
    { id: 68, name: 'TIME' },

    { id: 71, name: 'COTTAGE ENTRANCE' },
    { id: 72, name: 'ENTER LEFT RAMP' },
    { id: 73, name: 'LEFT SLING' },
    { id: 74, name: 'RIGHT SLING' },
    { id: 75, name: 'OUTHOLE' },
    { id: 76, name: 'TROUGH 1' },
    { id: 77, name: 'TROUGH 2' },
    { id: 78, name: 'TROUGH 3' },
    
    { id: 81, name: 'WAY' },
    { id: 82, name: 'OUT' },
    { id: 83, name: 'OF' },
    { id: 84, name: 'CONTROL' },
    { id: 85, name: '2ND COTTAGE SW' },
  ],
  skipWmcRomCheck: true,
  initialise: {
    closedSwitches: [ 76, 77, 78 ],
    initialAction: [
      {
        delayMs: 1000,
        source: 'cabinetInput',
        value: 16
      }
    ],
  }
};
