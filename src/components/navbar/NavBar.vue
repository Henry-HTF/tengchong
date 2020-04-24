<template>
  <div class="navbar">
    <div class="topDiv">
      <div class="mainWarp">
        <div class="topLeft">
          <span>您好，欢迎来到腾冲招聘网</span>
        </div>
        <div class="topRight">
          <span>注册简历</span>&nbsp;|
          <span>手机版</span>&nbsp;|
          <span>微信关注</span>
        </div>
      </div>
    </div>
    <div class="loginDiv">
      <div class="loginL">
        <span>腾&nbsp;冲&nbsp;市&nbsp;招&nbsp;聘&nbsp;网</span>
      </div>
      <div class="loginC">
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search">
          <el-select v-model="select" slot="append" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
        </el-input>
        <el-button type="primary">搜索</el-button>
        <br />
        <span>热门岗位：</span>
      </div>
      <div class="loginR">
        <span>登记简历</span>&nbsp;&nbsp;|&nbsp;
        <span>发布招聘</span>
      </div>
    </div>
    <div class="menu">
      <div class="menuDiv">
        <div
          @mouseover="addStyle(index)"
          @mouseleave="removeStyle(index)"
          :class="{active : index===currentIndex}"
          v-for="(item,index) in menuInfo"
          :key="index"
          @click="menuClick(index)"
        >{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      select: "",
      menuInfo: [
        "首页",
        "招聘信息",
        "微招聘",
        "求职信息",
        "招聘会报名",
        "招考公告",
        "政策资讯"
      ],
      currentIndex: 0,
      clickIndex: 0
    };
  },
  methods: {
    addStyle(index) {
      this.currentIndex = index;
    },
    removeStyle(index) {
      this.currentIndex = index;
    },
    menuClick(index) {
      this.currentIndex = index;
      this.clickIndex = index;
      if ((this.clickIndex === 0)) {
        this.$router.replace("/index");
      } else if ((this.clickIndex === 1)) {
        this.$router.replace("/recruit");
      } else if ((this.clickIndex === 2)) {
        this.$router.replace("/minirecruit");
      } else if ((this.clickIndex === 3)) {
        this.$router.replace("/wantjob");
      } else if ((this.clickIndex === 4)) {
        this.$router.replace("/jobfair");
      } else if ((this.clickIndex === 5)) {
        this.$router.replace("/testnotice");
      } else if ((this.clickIndex === 6)) {
        this.$router.replace("/policynews");
      }
    }
  }
};
</script>

<style scoped>
/*topDiv*/
.topDiv {
  width: 100%;
  height: 32px;
  background-color: #eeeeee;
}
.topDiv .topLeft {
  float: left;
  width: 200px;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  margin-left: 15%;
}
.topDiv .topLeft span {
  color: #8f8f8f;
}

.topDiv .topRight {
  float: right;
  width: 200px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  margin-right: 15%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #8f8f8f;
}

.topDiv .topRight a {
  color: #8f8f8f;
}

/*loginDiv*/
.loginDiv {
  width: 1100px;
  height: 54px;
  margin: 0 auto;
  padding: 11px 0 10px 0;
}
.loginDiv .loginL {
  float: left;
  width: 227px;
  height: 41px;
  line-height: 41px;
  margin-top: 9px;
  margin-left: 8px;
  font-size: 30px;
  font-weight: 600;
  font-family: SourceHanSansSC-regular;
  color: #f37d06;
}

.loginDiv .loginC {
  float: left;
  width: 604px;
  height: 54px;
  margin-left: 50px;
}

.loginDiv .loginC span {
  color: #f37d06;
  margin-top: 5px;
}

.el-input {
  width: 470px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.el-select {
  width: 120px;
}

.el-button {
  background-color: #f37d06;
  border: 1px solid #f37d06;
}

.loginDiv .loginR {
  float: left;
  margin-left: 40px;
  margin-top: 5px;
  max-width: 200px;
  color: #f37d06;
  font-size: 16px;
  font-weight: 600;
  line-height: 54px;
}

/*menuDiv*/
.menu {
  width: 100%;
  background-color: #f37d06;
  height: 43px;
}

.menuDiv {
  width: 1100px;
  margin: 15px auto;
}

.menuDiv div {
  color: #fff;
  float: left;
  cursor: pointer;
  width: 145px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  height: 43px;
  line-height: 43px;
  font-family: "微软雅黑";
}

.menuDiv .active {
  background-color: #ebc014;
}

.menuDiv a.mobile {
  /* background: url(../images/home_mobile.gif) -2px -2px no-repeat; */
  width: 99px;
  height: 30px;
  padding-left: 10px;
}
</style>