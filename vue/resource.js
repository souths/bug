/*
vue-resource新版jsonp传递参数和callback修改如下
this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
    {params:{
        wd:this.t1
    },
        jsonp:'cb'
    }).then(function(res){
    this.myData=res.data.s;
},function(){

});*/
