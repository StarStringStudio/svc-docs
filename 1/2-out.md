# 疑难解答

## 苦逼广电用户, 在线寻找出路

:::tip
如果本教程仍未解决垃圾广电的问题, 你可以提着光猫去把广电解决了
:::

### torch 轮子

右上角进群

![](env/14.png)

![](env/15.png)

将 `torch.zip` 下面的所有 `.whl` 文件解压到 `diff-svc-main` 文件夹下面

去终端运行

```sh
pip install torch-1.12.0+cu113-cp38-cp38-win_amd64.whl torchaudio-0.12.0+cu113-cp38-cp38-win_amd64.whl torchvision-0.13.0+cu113-cp38-cp38-win_amd64.whl
```

如果你看到下方三张图轮流出现 那么恭喜你与广电的破网络斗争成功了

![](env/16.png)

![](env/17.png)

![](env/18.png)

## 什么** OpenSSL for Windows

你的 OpenSSL 炸了

可以考虑重装环境或者将运行命令中的 

```txt
-i https://pypi.douban.com/simple/
```

替换成

```txt
-i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
```

:::tip
替换命令并不能完全解决问题, 后续问题可能更加严重
:::

## MSVC, I *\*** u

右上角加群 直接往群里发送

```txt
msvc安装
```

机器人将会回答你的问题