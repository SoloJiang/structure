/*
这是在一个群里看到的问题
我有个数组，例如['aaa','bbb','ccc','abc','bbb','ccc','abc','bbb']
求数组里出现最多的一项。如果有几项数量一样，也不是问题,
因为会以数组的形式返回那个值
 */

export default Array.prototype.findMost = function() {
    let self = this;
    let data = [];
    let datas = [];
    let func = self => self.sort().reduce((pre, cur, index) => {
        let info = {};
        if (index == 1) {
            info.key = pre;
            info.num = 1;
            datas.push(info);
            info = {}
        }       
        if (pre != cur ) {
            info.key = cur;
            info.num = 1;
            datas.push(info)
        } else {
            datas.forEach(item => {
                if (item.key == cur) item.num++;
            })
        }
        return cur
    })
    if(self.length != 1) {
        func(self);
        datas.sort((a, b) => {return a.num-b.num});
        function check(n, a = datas[n-1], b = datas[n-2]) {
            data.push(a.key);
            return n >=2 ? data : a.num > b.num ? data : check(n-1, b, datas[n-2]);
        }
        check(datas.length)
        return data;
    }else {
        return self;
    }
}