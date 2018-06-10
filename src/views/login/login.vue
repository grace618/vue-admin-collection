<template>
  <div class="login-wrap">
  	<el-form label-width="0px" class='demo-ruleForm login-form' ref='ruleForm' :rules=
  	'rules' :model='ruleForm'>
  		<h3 class="title">login-form</h3>
  	   <el-form-item prop="name">
  	   	  <svg-icon icon-class='username' class='svg-color'></svg-icon>
  	   	  <el-input v-model='ruleForm.name' placeholder='username' value='admin' ></el-input>
  	   </el-form-item>
  	   <el-form-item prop="password">
  	   	  <svg-icon icon-class='password' class='svg-color'></svg-icon>
  	   	  <el-input v-model='ruleForm.password' placeholder='password' value='admin' :type='pwd'></el-input>
  	   	  <span  @click='showpwd' > <svg-icon :icon-class='svgPwd' class='svg-color'></svg-icon></span>
  	   </el-form-item>
  	    <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;">提交</el-button>
  		</el-form-item>
  		 <div class="tips">
            <span style="margin-right:20px;">username: admin</span>
            <span> password: admin</span>
        </div>
  	</el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "admin",
        password: "admin"
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 9, message: "长度在3到9个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      svgPwd: "openeye", //是否可见
      pwd: "password"   //input type类型
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //如果前台判断通过
          this.$store.dispatch('gettoken',this.ruleForm).then(()=>{
            alert("submit");
            this.$router.push({path:'/'})
          })
        } else {
          alert("error submit!!");
          return false;
        }
      });
    },
    showpwd() {
      if (this.pwd === "password") {
        (this.pwd = "text"), (this.svgPwd = "closeeye");
      } else {
        this.pwd = "password";
        this.svgPwd = "openeye";
      }
    }
  }
};
</script>
<style >
.login-wrap {
  background: #2d3a4b;
  width: 100%;
  height: 100%;
  position: fixed;
}
.login-form {
  position: absolute;
  left: 0;
  right: 0;
  width: 400px;
  padding: 35px 35px 15px 35px;
  margin: 120px auto;
}
.login-wrap input {
  background: transparent;
  border: 0px;
  -webkit-appearance: none;
  border-radius: 0px;
  padding: 12px 5px 12px 15px;
  color: #eee;
  height: 47px;
}
.login-wrap .el-input {
  display: inline-block;
  height: 47px;
  width: 85%;
}
.login-wrap .el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
}
.title {
  font-size: 26px;
  font-weight: 400;
  color: white;
  margin: 0px auto 40px auto;
  text-align: center;
  font-weight: bold;
}
.svg-color {
  fill: white !important;
  margin-left: 5px;
  display: inline-block;
}
.tips {
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;
}
</style>