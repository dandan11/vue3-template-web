<template>
  <el-config-provider :locale="currentLocale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";

// import { Client, Message } from "@stomp/stompjs";
import { func } from "vue-types";
import { StompClient } from "@/utils/stompMQ";
export default defineComponent({
  name: "app",
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  computed: {
    currentLocale() {
      return zhCn;
    }
  },
  data() {
    return {
      client: null
    };
  },
  mounted() {
    this.client = new StompClient({
      brokerURL: "ws://192.168.1.75:61614",
      connectHeaders: {
        login: "admin",
        passcode: "password"
      },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: this.onConnect
    });
    // this.client = new Client({
    //   brokerURL: "ws://192.168.1.75:61614",
    //   connectHeaders: {
    //     login: "user",
    //     passcode: "password"
    //   },
    //   debug: function (str) {
    //     console.log(str);
    //   },
    //   reconnectDelay: 5000,
    //   heartbeatIncoming: 4000,
    //   heartbeatOutgoing: 4000
    // });

    // const payLoad = { user: "wdd", message: "hello everyone" };

    // this.client.onConnect = frame => {
    //   // Do something, all subscribes must be done is this callback
    //   // This is needed because this will be executed after a (re)connect
    //   this.client.publish({
    //     destination: "/queue/test",
    //     body: JSON.stringify(payLoad)
    //   });
    //   this.client.subscribe("/queue/test", function (data) {
    //     console.log(data.body);
    //   });
    // };

    // this.client.onStompError = function (frame) {
    //   // Will be invoked in case of error encountered at Broker
    //   // Bad login/passcode typically will cause an error
    //   // Complaint brokers will set `message` header with a brief message. Body may contain details.
    //   // Compliant brokers will terminate the connection after any error
    //   console.log("Broker reported error: " + frame.headers["message"]);
    //   console.log("Additional details: " + frame.body);
    // };

    // this.client.activate();
  },
  methods: {
    onConnect() {
      const payLoad = { user: "wdd", message: "hello everyone" };

      this.client.onpublish({
        destination: "/queue/test",
        body: JSON.stringify(payLoad)
      });
      this.client.onsubscribe("/queue/test", function (data) {
        console.log(data.body);
      });
    }
  }
});
</script>

<style>
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(16, 31, 28, 0.25);
  background-clip: padding-box;
  min-height: 28px;
  border-radius: 2em;
}
[data-v-7058fcb5]::-webkit-scrollbar-track {
  width: 8px;
  background: rgba(16, 31, 28, 0.1);
  border-radius: 2em;
}
</style>
