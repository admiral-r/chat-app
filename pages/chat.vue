<template>
  <div class="chat">
    <div class="chat-header d-flex align-items-center justify-content-between text-white">
      <div class="d-flex align-items-center">
        <button class="btn px-0" @click="this.$router.push('/')">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg>
        </button>
        <img class="chat-nav-avatar" src="../src/assets/images/avatar.png" alt="avatar">
        <h6 class="mb-0">rajabzadeh</h6>
      </div>
      <div class="d-flex align-items-center">
        <button class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-shop" viewBox="0 0 16 16">
  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
</svg>
        </button>
        <button class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-telephone-plus" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
  <path fill-rule="evenodd" d="M12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z"/>
</svg>
        </button>
        <button class="btn"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg></button>
      </div>
  </div>
    <div class="chat-main">
    <div class="chat-text-content">
      <div v-for="(item, index) in chatText" :key="index">
        <div class="chat-text m-3 my-2 break-word" :class="{'chat-text-bg-color' : item.userId === '1'}">
          <div class="chat-text-message text-white">{{ item.message }}</div>
          <span class="chat-text-time">{{ item.time }}</span>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center">
    <div class="chat-input-content d-flex align-items-center">
      <button class="chat-icon btn">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#808d94" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
</svg>
      </button>
      <input v-on:keyup.enter="sendMessage()" v-model="messageText" type="text" class="chat-input"
        placeholder="Message" />
        <button class="chat-icon btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#808d94" class="bi bi-paperclip" viewBox="0 0 16 16">
  <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
</svg>
        </button>
        <button class="chat-icon btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#808d94" class="bi bi-camera-fill" viewBox="0 0 16 16">
  <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
</svg>
        </button>
    </div>
          <button @click="sendMessage()" class="chat-btn rounded-circle mx-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-caret-right-fill"
          viewBox="0 0 16 16">
          <path
            d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      </button>
    </div>
   </div>
  </div>
</template>
  
<script scoped>
export default {
  name: "chat",
  data() {
    return {
      messageText: null,
      chatText: [],
      username: null,
      userId: null,
    };
  },
  methods: {
    sendMessage() {
      if (this.messageText) {
        this.chatText.push({
          message: this.messageText,
          time: new Date().getHours() + ":" + new Date().getMinutes(),
          userId: this.userId,
        });
        this.messageText = null;
        this.postChatText();
      }
    },
    getUserData() {
      this.username = localStorage.getItem("username");
      this.userId = localStorage.getItem("userId");
    },
    postChatText() {
      localStorage.setItem("chatText", JSON.stringify(this.chatText));
    },
    getChatText() {
      var data = localStorage.getItem("chatText");
      if (data !== null) {
        this.chatText = JSON.parse(data);
      }
    },
  },
  mounted() {
    this.getUserData();
    this.getChatText();
  },
};
</script>
  
  
<style scoped>
.chat {
  height: 100%;
}
.chat-header {
  height: 10% ;
  background-color: #323b40;
}
.chat-nav-avatar {
  width: 8vh;
  margin-right: .3rem;
}

.chat-main {
  height: 90% ;
  background: url("../src/assets/images/background.png");
  background-size: 30%;
}

.chat-text-content {
  overflow-y: scroll;
  height: 93%;
  margin: 0 .8vw;
}

.chat-text {
  background: #1f2c34;
  padding: 0.5rem 1rem 0.5rem 1rem;
  box-shadow: #000000 0px 1px 10px;
  border-radius: .8rem;
}

.chat-text-bg-color {
  background-color: #003a35;
}

.chat-text-time {
  font-size: 0.9rem;
  color: #8798a3;
}

.chat-text-username {
  color: #1ca884;
}

.chat-text-message {
  font-size: 1.1rem;
  padding: .3rem 0;
}

.chat-input-content {
  width: 100%;
  padding: .6rem;
  border-radius: 3rem;
  background-color: #1f2c34;
  font-size: 1.1rem;
  margin-left: .5rem;
}

.chat-icon {
  z-index: 1;
  padding: 0 5px !important;
}

.chat-input {
  border: none;
  width: 93%;
  background-color: #1f2c34;
  color: #e4e4e4;
  padding-top: .4rem;
}

.chat-input:focus {
  outline: none !important;
}

.chat-btn {
  background-color: #03a986;
  padding: 11px 12px;
  border: none !important;
}

@media only screen and (max-width: 600px) {
  .chat-text-content {
  height: 81vh !important;
  margin: 0 1.8vw !important;
}
  .chat {
    background-size: 100%;
}
}

@media only screen and (min-width: 600px) {
  ::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #1f2c34; 
  border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
  background: #1f2c34; 
  border-radius: 10px;
}
}

.break-word {
  word-wrap: break-word;
}
::placeholder {
  color: #a2a6a9;
  opacity: 1;
}

</style>
  