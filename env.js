var config = require('./lib/common/config.js');
var pre = require('./lib/common/pre.js');

module.exports = (function(){
  var env = {};

  // The host to announce for this node
  env.host = config.fromEnvironment('ANNOUNCE_HOST');
  
  // The port to listen on
  env.port = config.fromEnvironment('PORT', 8082);

  env.discovery = {}

  // FQDN of host to use for discovery.  
  // This is often a load balancer that fronts all coordinators
  env.discovery.host = config.fromEnvironment('DISCOVERY_HOST');

  // The duration to wait between heartbeats in milliseconds.
  env.discovery.heartbeatInterval = config.fromEnvironment('DISCOVERY_HEARTBEAT_INTERVAL', 60000);

  // The number of heartbeats that can be missed before a listing is reaped
  env.discovery.missedHeartbeatsAllowed = config.fromEnvironment('MISSED_HEARTBEATS_ALLOWED', 3);

  // Amount of time to wait between resynchronization of the coordinators in milliseconds
  // This determines how often the coordinators attempt to discover "new"
  // coordinators by asking discovery.host for the current set of coordinators
  env.discovery.resyncPollInterval = config.fromEnvironment('RESYNC_POLL_INTERVAL', null);

  return env;
})();