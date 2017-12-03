module.exports = {
  apps : [
    // First application
    {
      name      : 'blog.wei_xiaoyi.com',
      script    : './blog.wei_xiaoyi.com/bin/www',
      env: {
        NODE_ENV: "development"
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },

    // Second application
    {
      name      : 'wei_xiaoyi.com',
      script    : './wei_xiaoyi.com/bin/www'
    }
  ]
};
