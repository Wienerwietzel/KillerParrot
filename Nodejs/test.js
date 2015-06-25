/*
 * Code taken from: http://www.instructables.com/member/Patrick+S/
 * at: http://www.instructables.com/id/Autonomous-AR-Parrot-Drone-20-Flying/step8/Streaming-Video/
*/

var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.takeoff();

client
  .after(5000, function() {
    this.clockwise(0.5);
  })
  .after(3000, function() {
    this.animate('flipLeft', 15);
  })
  .after(1000, function() {
    this.stop();
    this.land();
  });
