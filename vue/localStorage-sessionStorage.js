/*localStorage的API
获取键值对数量
localStorage.length
读取
localStorage.getItem('name'), localStorage.key(i)
添加/修改
localStorage.setItem('name','xuanyuan')
删除对应键值
localStorage.removeItem('name')
删除所有数据
localStorage.clear()
存储：localStorage.setItem('data',JSON.stringify(data.body.data));
获取：JSON.parse(localStorage.getItem('data'));

例子:var pTubiao = Util.StorageGetter('pTubiao')
Util.StorageSetter('pTubiao', cur2)



sessionStorage的API
JSON.parse(sessionStorage.getItem('user'))
sessionStorage.setItem('user', JSON.stringify(from))
localStorage.removeItem('user')*/
