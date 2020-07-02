import Peer from 'simple-peer'
// REACT_APP_SIGNALING_SERVER = http://localhost:3010
var REACT_APP_STUN_SERVERS = 'stun: numb.viagenie.ca'
var REACT_APP_TURN_SERVERS = 'turn: numb.viagenie.ca'

// # You can create your turn account here: http://numb.viagenie.ca/cgi-bin/numbacct
var REACT_APP_TURN_USERNAME = 'medicalapp331@gmail.com'
var REACT_APP_TURN_CREDENCIAL = 'Rajat@1993'
export default class VideoCall {
    
    peer = null 
    init = (stream, initiator) => {
        this.peer = new Peer({
            initiator: initiator,
            stream: stream,
            trickle: false,
            reconnectTimer: 1000,
            iceTransportPolicy: 'relay',
            config: {
                iceServers: [
                    { urls:REACT_APP_STUN_SERVERS.split(',') },
                    {
                        urls: REACT_APP_TURN_SERVERS.split(','),
                        username: REACT_APP_TURN_USERNAME,
                        credential: REACT_APP_TURN_CREDENCIAL
                    },
                ]
            }
        })
        return this.peer
    }
    connect = (otherId) => {
        this.peer.signal(otherId)
    }  
} 