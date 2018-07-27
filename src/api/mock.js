import mobile from './mobile';

// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const NewsList = () => {
  const articles = [];
  for (let i = 0; i < 20; i += 1) {
    const newArticleObject = {
      desc: Random.csentence(5, 15), //  Random.csentence( min, max )
      src: Random.dataImage('300x300', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      title: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: `${Random.date()}${Random.time()}`, // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    };
    articles.push(newArticleObject);
  }

  return articles;
};

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(mobile.path.getData, 'post', {
  status: 200,
  code: 0,
  message: null,
  first: '@FIRST',
  result: { NewsList },
});
