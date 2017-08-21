$(function() {
	var template_top = $('#lefang_top').text();
	var templateFn_top = _.template(template_top);
	$('#lefangtex-top').append(templateFn_top);

	var template_nav = $('#lefang_nav').text();
	var templateFn_nav = _.template(template_nav);
	$('#lefangtex-nav').append(templateFn_nav);

	// var template_payment = $('#lefang_payment').text();
	// var templateFn_payment = _.template(template_payment);
	// $('#lefangtex-payment').append(templateFn_payment);
  var template_payment= $('#lefang_qygl_right').text();
  var templateFn_payment = _.template(template_payment);
  $('.qygl-right').append(templateFn_payment);

	var template_foot = $('#lefang_foot').text();
	var templateFn_foot = _.template(template_foot);
	$('#lefangtex-foot').append(templateFn_foot);

  /*定义全局变量----相关时间*/
  var nowTime=new Date();//当前时间
  var nowtime=show(nowTime);//将当前时间转为正常日期
  var now=((new Date(nowtime.replace(new RegExp('-','gm'),'/'))).getTime());//将正常日期转为s




        //接口调用
        var uBuyer = store.get('usercode');
        var Payment = new MilkT(payment, 3);
        Payment.send({ buyers: uBuyer })
          .done(function(data) {
            console.log(data);
            var PayData = data.pay;
            console.log(PayData);
            var compiled = _.template('<% _.forEach(PayData, function(pData) { %>\
            <ul class="supplier">\
            <li>\
              <a href="javascript:;">\
                    供应商\
              </a>\
            </li>\
            <li>\
              <a href="javascript:;">\
                    江苏中添纺织科技有限公司\
              </a>\
            </li>\
            <li>\
                    共计：￥<em>￥<%= pData.pay_money%>元</em>\
            </li>\
            </ul>\
            <ul class="supplier_detail">\
            <li>\
              <%= pData.order_id%>\
            </li>\
            <li>\
                   <%= pData.name%>\
            </li>\
            <li>\
                   <%= pData.usercode%>\
            </li>\
            <li>\
                   <%= pData.buyers%>\
            </li>\
            <li>\
                   <%= pData.pay_money%>\
            </li>\
            <li>\
                   <a href="javascript:;">\
                    查看合同\
                    </a>\
                    <a href="javascript:;">\
                          查看详情\
                    </a>\
            </li>\
            </ul>\
        <% }); %>');

            var templatePay = compiled({ 'PayData': PayData });
            $('#lefangtex-payment').append(templatePay);

          })



        var uBuyer = store.get('usercode');
        //订单号的查询----------------修改中
        $('#SerachBtn').on('click',function () {
          var cont = $('#serach').val();
          console.log(cont);
          var Payment = new MilkT(payment, 3);
          Payment.send({
              buyers: uBuyer,
              // order_id:'139'
            })
            .done(function(data) {
              console.log(data);
              var PayData = data.pay;
              for(var i = 0; i < PayData.length; i++) {
                if(PayData[i].order_id == cont) {
                  var PayData = data.pay;
                  var compiled = _.template('\
            <ul class="supplier">\
            <li>\
              <a href="javascript:;">\
                    供应商\
              </a>\
            </li>\
            <li>\
              <a href="javascript:;">\
                    江苏中添纺织科技有限公司\
              </a>\
            </li>\
            <li>\
                    共计：￥<em>￥<%= pData.pay_money%>元</em>\
            </li>\
            </ul>\
            <ul class="supplier_detail">\
            <li>\
              <%= pData.order_id%>\
            </li>\
            <li>\
                   <%= pData.name%>\
            </li>\
            <li>\
                   <%= pData.usercode%>\
            </li>\
            <li>\
                   <%= pData.buyers%>\
            </li>\
            <li>\
                   <%= pData.pay_money%>\
            </li>\
            <li>\
                   <a href="javascript:;">\
                    查看合同\
                    </a>\
                    <a href="javascript:;">\
                          查看详情\
                    </a>\
            </li>\
            </ul>');

                  var templatePay = compiled({ 'PayData': PayData[i] });
                  $('#lefangtex-payment').append(templatePay);
                }
              }

            })
        })

        //查询按钮
          $('#Cbtn').on('click',function () {
            var startTime = $('#SDate').val();
            var endTime = $('#EDate').val();
            var start=(new Date(startTime.replace(new RegExp('-','gm'),'/'))).getTime();
            var end=(new Date(endTime.replace(new RegExp('-','gm'),'/'))).getTime();
            alert(start,end);
            var Date = new MilkT(payment, 3);
            Date.send({ buyers: uBuyer })
              .done(function(data) {
                console.log(data);
                var AllDate = data.PayEntity;
                for(var i = 0; i < AllDate.length; i++) {
                  var middleTime=AllDate[i].pay_time;
                  var middle=(new Date(middleTime.replace(new RegExp('-','gm'),'/'))).getTime();
                  if(start <= middle && end >= middle) {
                    var PayData = data.PayWaterEntity;
                    var compiled = _.template('\
                <ul class="supplier">\
                <li>\
                  <a href="javascript:;">\
                        供应商\
                  </a>\
                </li>\
                <li>\
                  <a href="javascript:;">\
                        江苏中添纺织科技有限公司\
                  </a>\
                </li>\
                <li>\
                        共计：￥<em>￥<%= pData.pay_money%>元</em>\
                </li>\
                </ul>\
                <ul class="supplier_detail">\
                <li>\
                  <%= pData.order_id%>\
                </li>\
                <li>\
                       <%= pData.name%>\
                </li>\
                <li>\
                       <%= pData.usercode%>\
                </li>\
                <li>\
                       <%= pData.buyers%>\
                </li>\
                <li>\
                       <%= pData.pay_money%>\
                </li>\
                <li>\
                       <a href="javascript:;">\
                        查看合同\
                        </a>\
                        <a href="javascript:;">\
                              查看详情\
                        </a>\
                </li>\
                </ul>');
                    var templatePay = compiled({ 'PayData': PayData });
                    $('#lefangtex-payment').append(templatePay);
                  } else {
                    alert('抱歉，您没有所对应的订单')
                  }
                }

              })
          })


        //查询一个月时间
         $('#OMonth').on('click',function () {
           var ts=2592000,//30天
               tos=2678400,//31天
               tf=2419200,//28天
               tj=2505600;//29天
            var odate = new MilkT(payment, 3);
            odate.send({ buyers: uBuyer })
              .done(function(data) {
                console.log(data);
                var AllDate = data.PayEntity;
                for(var i = 0; i < AllDate.length; i++) {
                  var OTime = AllDate[i].pay_time;
                  var otime=(new Date(OTime.replace(new RegExp('-','gm'),'/'))).getTime();
                  if(now-otime==ts || now-otime==tos || now-otime==tf || now-otime==tj) {
                    // var PayData=data.PayWaterEntity;
                    var compiled = _.template('\
                <ul class="supplier">\
                <li>\
                  <a href="javascript:;">\
                        供应商\
                  </a>\
                </li>\
                <li>\
                  <a href="javascript:;">\
                        江苏中添纺织科技有限公司\
                  </a>\
                </li>\
                <li>\
                        共计：￥<em>￥<%= pData.pay_money%>元</em>\
                </li>\
                </ul>\
                <ul class="supplier_detail">\
                <li>\
                  <%= pData.order_id%>\
                </li>\
                <li>\
                       <%= pData.name%>\
                </li>\
                <li>\
                       <%= pData.usercode%>\
                </li>\
                <li>\
                       <%= pData.buyers%>\
                </li>\
                <li>\
                       <%= pData.pay_money%>\
                </li>\
                <li>\
                       <a href="javascript:;">\
                        查看合同\
                        </a>\
                        <a href="javascript:;">\
                              查看详情\
                        </a>\
                </li>\
                </ul>');

                    var templatePay = compiled({ 'PayData': PayData });
                    $('#lefangtex-payment').append(templatePay);
                  } else {
                    alert('您最近一个月没有订单！')
                  }
                }

              })
          })


        //查询三个月的订单
         $('#TMonth').on('click',function () {
            var odate = new MilkT(payment, 3);
            odate.send({ buyers: uBuyer })
              .done(function(data) {
                console.log(data);
                var AllDate = data.PayEntity;
                for(var i = 0; i < AllDate.length; i++) {
                  var TTime =AllDate.pay_time;
                  var ttime=(new Date(TTime.replace(new RegExp('-','gm'),'/'))).getTime();
                  if(now-ttime==7689600 || now-ttime==7776000 || now-ttime==7862400 || now-ttime==7948800) {
                    var compiled = _.template('\
                <ul class="supplier">\
                <li>\
                  <a href="javascript:;">\
                        供应商\
                  </a>\
                </li>\
                <li>\
                  <a href="javascript:;">\
                        江苏中添纺织科技有限公司\
                  </a>\
                </li>\
                <li>\
                        共计：￥<em>￥<%= pData.pay_money%>元</em>\
                </li>\
                </ul>\
                <ul class="supplier_detail">\
                <li>\
                  <%= pData.order_id%>\
                </li>\
                <li>\
                       <%= pData.name%>\
                </li>\
                <li>\
                       <%= pData.usercode%>\
                </li>\
                <li>\
                       <%= pData.buyers%>\
                </li>\
                <li>\
                       <%= pData.pay_money%>\
                </li>\
                <li>\
                       <a href="javascript:;">\
                        查看合同\
                        </a>\
                        <a href="javascript:;">\
                              查看详情\
                        </a>\
                </li>\
                </ul>');

                    var templatePay = compiled({ 'PayData': PayData });
                    $('#lefangtex-payment').append(templatePay);
                  } else {
                    alert('您最近三个月没有订单！')
                  }
                }
              })
          })


        //查询全部
          $('#AllMonth').on('click',function () {
            var Payment = new MilkT(payment, 3);
            Payment.send({ buyers: uBuyer })
              .done(function(data) {
                console.log(data);
                var PayData = data.PayWaterEntity;
                var compiled = _.template('<% _.forEach(PayData, function(pData) { %>\
                <ul class="supplier">\
                <li>\
                  <a href="javascript:;">\
                        供应商\
                  </a>\
                </li>\
                <li>\
                  <a href="javascript:;">\
                        江苏中添纺织科技有限公司\
                  </a>\
                </li>\
                <li>\
                        共计：￥<em>￥<%= pData.pay_money%>元</em>\
                </li>\
                </ul>\
                <ul class="supplier_detail">\
                <li>\
                  <%= pData.order_id%>\
                </li>\
                <li>\
                       <%= pData.name%>\
                </li>\
                <li>\
                       <%= pData.usercode%>\
                </li>\
                <li>\
                       <%= pData.buyers%>\
                </li>\
                <li>\
                       <%= pData.pay_money%>\
                </li>\
                <li>\
                       <a href="javascript:;">\
                        查看合同\
                        </a>\
                        <a href="javascript:;">\
                              查看详情\
                        </a>\
                </li>\
                </ul>\
            <% }); %>');

                var templatePay = compiled({ 'PayData': PayData });
                $('#lefangtex-payment').append(templatePay);

              })

          })


})
/*将当前标准时间转换为正常日期显示---年---月---日*/
function show() {
  var mydate = new Date();
  var str = '' + mydate.getFullYear() + '年';
  str += (mydate.getMonth() + 1) + '月';
  str += mydate.getDate() + '日';
  return str;
}
