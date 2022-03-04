## Week4 網路基礎-HTTP、Request、Response
### HTTP 
全名 HyperText Transfer Protocol，中文為超文本傳輸協定。   
(HTTPS 就是基於 HTTP 並利用 SSL/TLS 將資訊加密封包的另一種更安全的協定。)
1. 標準化內容格式
2. 分為 header 跟 body
3. 用狀態碼標準化結果 （Http status code）
4. 用動詞標準化請求方法 （Http Request Method）
   
* Http Request Method
1. Get
* 單純的跟 server 要一個連結或圖片，通常網頁都是 Get 的 request 比較多
* 例如：要去某個網址、看某張圖片
* 傳送的資料會以 Query String 的方式加在 url 上
2. Post
* 需要執行一些動作時，會傳送 Post request
* 例如：登入會員、送出表單
* 獲取「指定的」資訊，放在 request body（Form data）裡面
3. Put ：取代掉整個 request。
4. Patch：修改部分 request。
5. Delete：刪除資源。
6. Head：只要獲取 request 的 header，不要 body。
7. Option：可以了解 server 提供哪些溝通方法。

* HTTP status code
1XX 訊息類 (收到請求，請求者繼續執行操作)
2XX 成功類 (操作被成功接受並處理)，例如：200 成功回應
3XX 重定向類 (需進一步操作才能完成)，例如：301 成功轉向
4XX 客戶端錯誤類 (請求語法錯誤或無法完成請求)，例如：404 找不到資源
5XX 伺服器錯誤類 (後端的問題)，例如：500 伺服器錯誤

### DNS 
全名 Domain Name System，中文為用網域名稱系統
將「域名（Domain）」就是「網址」轉換成實際的 IP Adress
![OSI模型、TCP/IP](https://miro.medium.com/max/1400/0*hcJ3AMXzr3ZmNg7Q)
![TCP/IP四層模型](https://miro.medium.com/max/1400/1*BFde4y9sPtLllTZ6OjoKEg.png)
1. Port
中文為連接埠，常見的連接埠為：HTTP 80、HTTPS 443、FTP 21 、監聽 5000 、測試 3000 4000 8000 8080。
2. UDP
全名 User Datagram Protocol。
適用於不需要或在程式中執行錯誤檢查和糾正的應用，例如：串流媒體、即時多人遊戲和IP語音（VoIP）
3. TCP
全名 Transmission Control Protocol。
大部分的網路協定都是建立在 TCP 上面，因為是比較「可靠」的方式。
* TCP 三次握手:TCP 可靠的原因在於，正式傳遞之前會進行三次的前置作業，而專有名詞叫Three-way handshake。
4. IP:
* IPv4：使用32位元位址，由四個數字組成，範圍是 0~255。
* IPv6：一個64位元的網路前綴和一個64位元的主機位址。

## API
讓製造商與消費者溝通的介面，類似販賣機的概念，可以決定要提供什麼服務（選項）給消費者。
必須具備：如何使用
* Restful api:URL定位resources，用HTTP動詞（GET,POST,DELETE...）描述操作。

HW5
請以自己的話解釋 API 是什麼？

請找出三個課程沒教的 HTTP status code 並簡單介紹

假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。