# a-tech-client

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.


## 项目启动

1. 需要安装nodejs、git、grunt、bower、ruby([安装包地址](http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.3.0-x64.exe))
2. 需要替换gem源
  ```
  $ gem sources --remove https://rubygems.org/
  $ gem sources -a http://ruby.sdutlinux.org/
  $ gem sources -l
  *** CURRENT SOURCES ***

  http://ruby.sdutlinux.org
  # 请确保只有 ruby.sdutlinux.org
  ```
### 步骤

  1. npm install
  2. npm install -g grunt-cli
  3. npm install -g bower
  4. bower install
  5. grunt serve --force
