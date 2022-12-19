import { Client, Message } from '@stomp/stompjs';

//定义websocket client
let client: any = null;
// 连接配置文件
const _options = {
    // Typically login, passcode and vhost
    // 连接头信息，通常是认证登录信息
    connectHeaders: {
        login: "user",
        passcode: "password"
    },

    // 连接url，应该以 ws:// or wss:// 开头
    brokerURL: "",

    // debug
    debug: function (str) {
        console.log('STOMP: ' + str);
    },

    // 失败重连时间，200毫秒
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,

    onConnect: null
}

const _initOptions = (target) => {
  for (let i in target) {
    if (typeof target[i] === "object") {
      for (let j in target[i]) {
        _options[i][j] = target[i][j];
      }
    } else {
      _options[i] = target[i];
    }
  }
}

class StompClient {
  constructor(options){
    _initOptions(options)
    this.init()
  }
  init() {
    client = new Client({
      brokerURL: _options.brokerURL,
      connectHeaders: {
        login: _options.connectHeaders.login,
        passcode: _options.connectHeaders.passcode
      },
      debug: _options.debug,
      reconnectDelay: _options.reconnectDelay,
      heartbeatIncoming: _options.heartbeatIncoming,
      heartbeatOutgoing: _options.heartbeatOutgoing
    });

    client.onConnect = frame => {
      _options.onConnect()
    };

    client.onStompError = function (frame) {
      // Will be invoked in case of error encountered at Broker
      // Bad login/passcode typically will cause an error
      // Complaint brokers will set `message` header with a brief message. Body may contain details.
      // Compliant brokers will terminate the connection after any error
      console.log("Broker reported error: " + frame.headers["message"]);
      console.log("Additional details: " + frame.body);
    };

    client.activate();
  }

  // 订阅主题
  onsubscribe = (destination,callback) => {
    client.subscribe(destination, callback);
  }

  // 发送数据
  onpublish = (params) => {
    client.publish(params)
  }
}

export {StompClient};
