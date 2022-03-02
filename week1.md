#20220302學習進度＆心得：
##Markdown:
1. 標題：＃＝<h1> ; ##=<h2>…
2. 引用：>XXX
3. 清單項目：-、+、*後加一個空白，下一層多一縮排
4. 數字列表直接數字+.(2019\. 避免 `數字.` 轉為數字型清單的方法)
5. 區塊程式碼：程式碼段落前後加入連續三個反引號```
6. 分隔線：可以使用三個連續符號表示 ex: - *
7. 連結：[Google](https://www.google.com.tw/)
8. 圖片：![unsplash 圖片name]（網址）

##Git:
###觀看六角學院的Git課程

1. 用cmd 去到要執行的資料夾 輸入 git unit 做初始化
就會在隱藏資料夾看到.git
（按住鍵盤的「Shift」+「Command」+「.」鍵即可查看隱藏資料夾）

2. 設定資料（姓名、電話）
git config --global user.email "信箱"
完成後 打 git config list 可以check 

![git架構](https://i.imgur.com/9Jk7Tql.png)
* git status 看目前狀態
* Git  add . 把檔案丟到索引
* git commit -m "新增ＸＸＸ" 把索引檔案變成新的commit
* Git log  看歷史紀錄
* 上傳到遠端數據庫
*  git remote add origin https://github.com/SheepyChen/XXX.git
*  git branch -M main
*  git push -u origin main

可以去.git 裏面的config 看［remote “origin “]是否有綁定到git repository 