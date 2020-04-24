<template>
  <div>
    <div class="footer">
      <div class="msg">
        <div>关于我们</div>|
        <div>产品服务</div>|
        <div>优势特色</div>|
        <div>招聘流程</div>|
        <div>收费标准</div>|
        <div>付款方式</div>|
        <div>网站声明</div>|
        <div>求职警惕</div>|
        <div>联系我们</div>
      </div>
      <div class="telnumber">
        <span>客服热线：0871 - 65700007</span>
        <span>投诉：0871 - 66310588</span>
        <span>传真：0871 - 65651234</span>
        <span>投诉QQ <button class="qqbtn"><span>QQ交谈</span></button></span>
      </div>
      <div class="ewm">
        <img src="~@/assets/img/icon_wechat@2x.png" class="ewmimg"><br>
        <span>微信公众号</span>
        <img src="../../assets/img/label_sm_-1.png" alt="">
        <img src="../../assets/img/bottom_large_img.png" alt="">
      </div>
      <div class="beian">
        <div class="message">
          <span>人力资源服务许可证编号：云人43号</span>
          <span>备案/许可证编号：滇ICP备10000168号—20</span>
          <span>滇公网安备：53010302000228号</span>
          <div class="url">
            <span>云南人才网</span>
            <span>昆明招聘网</span>
            <span>昆明招聘</span>
            <span>昆明招聘信息</span>
            <span>昆明人才</span>
            <span>网昆明最新</span>
            <span>招聘信息</span>
          </div>
          <div class="state">
            <span>未经云南云才人力咨源咨询有限公司书面同意，不得转载本网站之所有招聘信息及作品</span>|
            <span>云南招聘网· 版权所有©2004—2019</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReFooter"
};
</script>

<style scoped>
.footer {
  width: 1100px;
  border-top: 5px solid #f37d06;
  height: 250px;
  margin: 0 auto;
  margin-top: 20px;
  font-family: '黑体';
}

.msg {
  margin: 30px auto;
  text-align: center;
}

.msg div {
  display: inline;
  font-weight: 500;
  
  font-size: 14px;
  margin: 0 10px;
}

.telnumber {
  text-align: center;
}

.telnumber span {
  color: #f37d06;
  font-size: 16px;
  font-weight: 500;
  margin: 0 5px;
}

.qqbtn {
  border: none;
  border-radius: 5px;
  background: #eeeeee url(../../assets/img/icon_qq.png) no-repeat 5% ;
  text-align: center;
  width: 100px;
  height: 35px;
}

.qqbtn span {
  margin-left: 30%;
  color: #A0A0A0;
  font-size: 14px;
}

.ewm {
  text-align: center;
  margin-top: 50px;
}

.ewm .ewmimg {
  width: 100px;
  height: 100px;
}

.ewm span {
  display: block;
  font-size: 14px;
}

.ewm img {
  margin: 10px 5px;
}

.beian {
  text-align: center;
  font-size: 14px;
}

.beian .message span {
  margin: 0 10px 0 0;
}

.beian .message .url {
  margin: 10px 0;
}
</style>