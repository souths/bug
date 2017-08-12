
/*模拟mock
在build文件夹下dev - server.js文件里面写
var appData = require('../src/data/cartData.json');
var seller = appData.seller;   得到carData.json中的个数据

var apiRoutes = express.Router();

apiRoutes.get('/seller', function (req, res) {
    res.json({
        errno: 0,
        data: seller
    });
});
app.use('/api', apiRoutes);*/


/*这个是cartData.json文件的部分数据
* {
 "seller":{...},

 }
* */


/*浏览器访问
* http://localhost:8080/api/seller*/
