## Flutter框架結構
 1. 框架層Framework(Dart):
    why Dart(開發時JIT即時編譯/發布時AOT提前編譯)
    + Material/Cupertino
    + Widgets
    + Rendering
    + Animation/Painting/Gestures
 2. 引擎層Engine(C/C++)
 3. 嵌入層Platform-specific
## Flutter環境設置
  1. install flutter and revise bash path for flutter
     - code . ~/.bash_profile 編輯檔案新增下面那行指定路徑
     - export PATH="$PATH:/Users/florachen/flutter/bin"
     - echo $PATH 或是 which flutter 檢查路徑對不對
     - flutter doctor檢查開發環境
     - shift command P 創建 => Flutter:New Project
     - flutter run (要開模擬器即時更改要切debug模式)
  2. Xcode(IOS simulator)
     - sudo gem install xcode-install
     - 輸入xcversion會跳出apple認證如果認證失效可以輸入( rm $HOME/.fastlane/spaceship/*/cookie )
     - xcversion list 列出所有版本以及已有安裝的版本
     - xcversion install 13.4.1
     - xcversion installed
     - xcrun --version(確認有沒有安裝Xcode command line tool)
     - xcrun simctl list(列出所有可用的機型id)
     - xcrun simctl boot 5EE6154A-A997-46AF-811C-A95918878C43(在vscode中選取ios simulator)
     - xcrun simctl shutdown [device id]
  3. VScode 安裝 flutter & dart 
  4. android studio
     - brew install --cask android-studio
  5. firebase
  - curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  - nvm alias default {{ 預設版本號 }}  nvm list   nvm use {{ 版本號 }} 切換當前命令列所使用的 Node.js 版本
  - npm install -g firebase-tools (firebase需要nodejs14)
  - firebase login
  -  flutterfire configure連結現有data or 創建
  - initialize firebase 必須在一開始 
  - 若設置使用者可以用信箱跟密碼登入 必須在註冊後收驗證信再讓使用者登入才能取得已驗證的userCredential
## Dart 
 1. variable:可更改(var)但型別不能改
 2. const 不可
 3. final：不可更改的var//可以省略類型聲明
    final str = "hi world";=>final String str = "hi world"; 
    *late 現在還沒但之後會有的變數（？
 4. 空安全（null-safety）
    =>fun?.call() //fun 不为空时则会被调用
 5. dynamic和Object: dynamic與Object聲明的變量都可以賦值任意對象，且後期可以改變賦值的類型
 6. 函數
    - ex:String getName(String firstName,String lastName){return firstName+''+lastName;}   
    //其實就是把function加上型別
    - void user(String user){
	    if(user != null){
		  print('user is $user');
	    }else{
		  print('user is root');
	    }}
      ===>void user(String user){
          user ??= 'root';
          print('user is $user');
          }
 7. 集合
    - Lists(同義於array) 可在定義時帶入型別或是長度，常見的方法：reversed/contains/map/forEach/...
      + fold(用於Lists)
         - ex1
         final numbers=[1,2,3];
         final sum=numbers.fold(
            0,(
               int previousValue,
               int thisValue
               )=>reviousValue+thisValue)));
         =====>result is 6(起始值，作用的fun) 相似於reduce
               final numbers=[1,2,3];
         - ex2
      final names=['a','b','c']; 
      final result=names.fold(
         '',(
            result,
            str,
            )=>'$result ${str.toUpperCase()}');
      =====>result is " A B C"
      + Collection if & Collection for
      var isRoot = true
      var users = [
      'user1',
      'user2',
      'user3',
      if(isRoot) 'root'];
      const A=['a','b'];const B=['a','b'];===>A=B是ｔｒｕｅ
      + 如果要不能修改可以使用UnmodifiableListView(users)
    - Sets
      + Sets 是沒有索引值、！不可重複！的集合，以hashCode的值來決定是否相等。
      + var sets = <int>{1,2,3,4};//如果初始化未給定型別 dart會自動判斷
      + 範例：
      final person1=Person(age:10,name:'foo');
      final person2=Person(age:10,name:'foo');
      final persons={person1,person2};
      print (persons)=====>{Person:foo,10,Person:foo,10}
      此時若加上：bool operator==(Object other)=>
                identical(this,other)||other is Person &&name==other.name&&age==ther.age;
      print (persons)=====>{Person:foo,10}
    - Ｍaps
      + putIfAbsent()：當該key(height)無值時插入值170 /或是直接info['height']=180/remove(Object)：
        ex:info.putIfAbsent('height',()=>170)
      + update(key, value) containsKey(key) containsValue(value)
  8. enum 是一種型別，用於自定義 type，若用在 switch 上，IDE 會自動告訴我們有哪一個 enum 尚未考慮到。
  9. 宣告class時預設都是public 可加（_)變private，
  10. 使用operator來處理等價與否，
    ex:class Point{
      const Point(this.x,this.y);
      final int x;
      final int y;
      @override
      String toString()=>'Point($x.$y)';
      @override
      //    print(Point(0,0)==Point(0,0))//result is false so we need to do the next line
      bool operator==(Object other){
         if(other is Point){
           return x==other.x&&y==other.y;
         }
         return false;
      }
   =======>可以寫成這樣～
            bool operator==(covariant Point other){
               return x==other.x&&y==other.y;
               }
    }
  11. Iterable.generate(20,(i)=>getName(i))
   for (final name in iterable.take(2)){print(name)}
   ========>result 只會print i=0&i=1 因為Iterable是lazy的？
  12. 
  
## Widgets
 1. StatelessWidget:是一個不需要自己紀錄內部狀態的組件，需要的資料只能靠外部提供。
    (stl  or stf vscode打了就會自動生成)
 2. StatefulWidget:是有自己內部狀態的組件，可以建立自己的state也可以接受外部的prop，一個StatefulWidget會分開定義「widget」和「widget所使用的狀態」。
   - class MyHomePage extends StatefulWidget {
   const MyHomePage({super.key, required this.title});
   final String title; // 外部傳入的props
   @override
   State<MyHomePage> createState() => _MyHomePageState();
   }
   - class _MyHomePageState extends State<MyHomePage> {
   int _counter = 0; // state
   void _incrementCounter() {
      setState(() {
         _counter++; // 更動自己的state
      });
   }
   @override
   Widget build(BuildContext context) {
      return Scaffold(
         ......
3. WHY???由於Flutter 的widget創建後內部的資料是不能更動(immutable)的，要更改畫面必須重新創建，因此採用「創建widget」之後「注入state」方法，由state來掌管可變的狀態。
此外將state與widget拆分，也可以確保每次widget重製時，state可以獨立於widget之外仍然保留狀態。
4. 盡量只讓需要變動的組件採用StatefulWidget，而可以單純依照外部資料顯示的組件採用StatelessWidget，才能最有效地分配運算資源。

## 佈局約束策略
1. xConstraints go down.
Child Widget並不是長寬設為多少就會長成多少，必須接受來自上層的Parent Widget最大長寬度的限制。
2. Sizes go up.
各個Child Widget皆會將自身期望的長寬包含約束條件向上傳遞給Parent Widget。
3. Parent sets position.
Parent統整了所有Child Widget的尺寸資訊後，便開始在畫面上依照大小決定各自的位置

## Layout
1. Single Child Layout Widget
   Align：對齊
   AspectRatio：指定比例
   Center：置中
   ConstratinedBox：長寬限制
   Container：外框容器
   Expanded：盡可能佔據剩餘空間
   Padding：與外框的間隙:
   - fromLTRB(double left, double top, double right, double bottom)：分别指定四个方向的填充。
   - all(double value) : 所有方向均使用相同数值的填充。
   - only({left, top, right ,bottom })：可以设置具体某个方向的填充(可以同时指定多个方向)。
   - symmetric({ vertical, horizontal })：用於對稱方向的填充，vertical指top和bottom，horizontal指left和right。
     +   Padding(
            //上下各添加8像素补白
            padding: EdgeInsets.symmetric(vertical: 8),
            child: Text("I am Jack"),
         ),
#
   SingleChildScrollView：加上頁面捲軸
2. Multi Child Layout Widget
   Column：垂直排列
   GridView：網格式排列
   ListView：列表式排列
   Row：水平排列
   Stack：堆疊排列(後面元素在前)

3. Leaf Widget
   Widget樹的葉子節點，用於沒有子節點的widget，通常基礎組件都屬於這一類，如Image。
## 導頁 - navigation
route stack:進入新的頁面，頁面所在的路徑會依序被加入(push)到route stack，退出時也會從「最後進入的頁面」開始退出(pop)，從route stack刪除。
   - 返回上一頁
   要返回的頁面設置Navigation.pop()
   - 指定路徑 
   routes: {
      '/first': (context) => const FirstScreen(),
   },

## Future
當我們呼叫一個非同步函式時，會回傳一個「未完成的Future」來等待此函式的非同步行為執行完畢，並獲得結果，也可能在執行的過程中出現問題而回傳錯誤(promise感) 一樣會有.then .catchError 最後要做的事=> whenComplete 
延遲function (setTimeOut感)
Future.delayed(const Duration(seconds: 2), () => print('Here I come!')); 

## 事件處理
1. 原始指針(pointer):鼠標、觸控筆
  this.onPointerDown, //手指按下回调
  this.onPointerMove, //手指移动回调
  this.onPointerUp,//手指抬起回调
  this.onPointerCancel,//触摸事件取消回调
2. 手勢：拖拉、雙擊等等
GestureDetector是一個用於手勢識別的功能性組件，我們通過它可以來識別各種手勢。

print=console.log
command + .==>快速wrap或是unwrap
$變數 如果要印＄就要加\$ 
void是沒有return東西的function 有return就會在一開始宣告return的東西的型別
json==>dart modal
在main()的東西不會hot reload 需要restart
雙等號而已

### Flutter state management:
   ## Provider/Consumer (額外加入 類似redux)
   1. 設定一個「狀態管理組件」(ChangeNotifierProvider)，放在想要傳遞資料以及使用資料的組件(在專案中是指MainPage, FavoritePage)的上層。
   2. 接著，「狀態管理組件」會創建一筆「可訂閱的資料模型」(extends ChangeNotifier)，也就是我們這次指稱的app state，供各組件訂閱使用(Comsumer)或操作(Provider.of)。
   3. 當資料被修改，ChangeNotifier可以通知訂閱此資料模型的組件，依照最新的資料重繪。
   4. Consumer:在子組件中取用Provider/ChangeNotifierProvider提供的資料
