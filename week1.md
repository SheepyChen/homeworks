# Week1 學習重點紀錄
## Markdown:
1. 標題：＃＝h1 ; ##=h2…
2. 引用：>XXX
3. 清單項目：-、+、*後加一個空白，下一層多一縮排
4. 數字列表直接數字+.(2019\. 避免 `數字.` 轉為數字型清單的方法)
5. 區塊程式碼：程式碼段落前後加入連續三個反引號```
6. 分隔線：可以使用三個連續符號表示 ex: - *
7. 連結：[Google](https://www.google.com.tw/)
8. 圖片：![unsplash 圖片name]（網址）
9. code (4 spaces indent) 或是 前後加入`

## Git:做版本控制
#### 觀看六角學院的Git課程
* 如何使用：
1. 用cmd 去到要執行的資料夾 輸入 `git unit` 做初始化
就會在隱藏資料夾看到.git
（按住鍵盤的「Shift」+「Command」+「.」鍵即可查看隱藏資料夾）
2. 設定資料（姓名、電話）
`git config --global user.email "信箱"`
完成後 打 `git config list` 可以check 
![git架構](https://i.imgur.com/9Jk7Tql.png)
* `git status` 看目前狀態
* `git  add .` 把檔案丟到索引
* `git commit -m "新增ＸＸＸ"` 把索引檔案變成新的commit
* `git log`  看歷史紀錄

### * 上傳到遠端數據庫(Repository)
1. 註冊遠端儲存庫，並 `git remote add origin https://github.com/SheepyChen/XXX.git`
2. `git branch -M main`
3. `git push -u origin main 更新資料到遠端`
（-u 是指他預設會推到哪個遠端數據庫服務，可不寫//origin 可以改它的遠端數據庫名稱，例如 `git push -u XXXX master`）
> (可以去.git 裏面的config 看［remote “origin “]是否有綁定到git repository)
> 目前password需要至個人github產生token
> 其他熱門遠端儲存庫(Bitbucket)做法大同小異

### * 開分支流程(why 分支：讓 master 都是正式版資料，開分支來做測試或開發)
1. 新增分支：`git branch 分支名稱`
2. 查看分支：`git branch` (可查看現在head在哪個分支上)
3. 切換分支：`git checkout 分支名稱`
4. 刪除分支：`git branch -d 分支名稱` 、-D 是強制刪除
5. 還原上個版本：`git reset HEAD^`
6. 合併分支：`git merge 分支名稱`
7. 取消快轉：`git merge 分支名稱 --no-ff`


## HW3：
### 什麼是 command line 以及如何使用?
command line 也被稱作 命令行 或 命令行介面 
純文字的應用程式，可查看及處理電腦裡的檔案，我們平常用的是圖形使用者介面（Graphical User Interface，GUI），
背後也是這些命令列介面（Command Line Interface，CLI）所構成的。
* 常見指令：(有-i -r 等flags，可以輸入man 看manual page)
1. `ls` 列出目前所在位子的所有檔案//`ls -a` 可以看出隱藏的資料
2. `pwd` 顯示目前路徑
3. `cd` 後接子目錄 或是 絕對路徑 //`cd ..`回上一層
4. `mkdir` 後接資料夾名稱
5. `touch` 後接檔名，若不存在則會幫你創建
6. `rm` (remove) `rmdir`刪除空資料夾 `rm -rf`強制刪除資料夾 
7. `mv` (move) `mv 檔名 路徑` ＃要注意相對路徑跟絕對路徑的差異

## HW5
1. 後端與前端的差異
![前後端差異](https://ithelp.ithome.com.tw/upload/images/20200420/20124548MtMDOLDe86.png)
### 前端
泛指「將資料呈現給使用者、搜集使用者資料的部分」，直接影響使用者體驗。
### 後端
泛指「儲存、處理資料 和 實作服務功能的部分」，保障資料、服務正確且穩定。
> 假設今天一個人走去甜點店，買了架上現有的蛋糕以及點了一個現烤的麵包，店面就是前端，後台就是後端，負責處理其他需求，可能還會到倉庫(database)拿東西。

2. 去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter//請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情



