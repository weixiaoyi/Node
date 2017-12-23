const path = require('path')
global.PATH = {
   controllers: path.resolve(__dirname+'/wei_xiaoyi.com/controllers'),
   models: path.resolve(__dirname+'../../wei_xiaoyi.com/models'),
   commonControllers: path.resolve(__dirname+'/commonControllers'),
   commonComponents: path.resolve(__dirname+'/commonComponents'),
   commonUtils: path.resolve(__dirname+'/commonUtils'),
   commonMiddlewares:path.resolve(__dirname+'/commonMiddlewares')
}