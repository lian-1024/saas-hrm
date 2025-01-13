import gh from 'gh-pages';

gh.publish('dist', {
},()=>{
  console.log('发布成功');
});

  