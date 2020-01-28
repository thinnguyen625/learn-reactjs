#NOTE: 

Có 4 cách định nghĩa component: 
+ kiểu hàm bình thường: function One()
+ kiểu anony’mous function\: function(){}
+ kiểu arrow function (es6): () =>
+ kiểu class: 

- JSX là javascript extension: là 1 file mở rộng cho phép viết mã html trong file javascript
- Component giúp cắt giao diện thành các thành phần độc lập có thể sử dụng lại nhiều lần.
- Component được xây dụng cô lập để có thể quản lý và sử dụng hiệu quả khi cần thiết

```
“Giới thiệu vể React JS – thư viện javascript phát triển bởi Facebook.
– Sức mạnh khủng khiếp mà Facebook mang đến trong React, đó chính là mô hình DOM, làm tăng khả năng trình diễn các đối tượng trên nền web một cách hiệu quả & tốc độ mượt hơn bất kì Java Script Framework nào trước đây.
– Mục đích mà Facebook nhắm đến trong React là “”Learn Once, Write Anywhere”” – Có nghĩa là sau khi hoàn tất khóa học React JS, ngoài việc bạn thiết kế được layout web, bạn còn sẽ có nền tảng vững chắc để tiếp cận React Native (Mobile App) mà không cần phải mất nhiều thời gian.
Đối tượng học khóa học :
– React cực kì thân thiện đối với bạn nào đã từng học qua JavaScript, CSS hoặc HTML.
– Sinh viên học lập trình web, muốn tối ưu tốc độ xử lý của website.
– Những người muốn tiếp cận công nghệ lập trình web bằng React JS nhanh nhất qua bài thực hành.
– Người muốn tìm hiểu về lập trình frontend bằng React JS một cách bài bản nhưng chưa biết bắt đầu từ đâu.
– Các lập trình viên front-end đang sử dụng các framework khác, nay muốn nâng cao tay nghề thông qua việc học ReactJS
– Các lập trình viên back-end, mobile muốn chuyển sang phát triển các ứng dụng front-end trong thời gian ngắn nhất
– Các lập trình viên đang băn khoăn, muốn lựa chọn một framework tốt cho phát triển ứng dụng front-end
LỢI ÍCH TỪ KHÓA HỌC
“Với khoá học này bạn sẽ
– Nắm được kiến thức bài bản từ đầu về thư viện Javascrispt nổi tiếng phát triển bởi facebook – React JS
– Nắm được logic hoạt động, các khái niệm, cách thao tác, lập trình chức năng và cách kết hợp Redux và React JS
– Học từ đầu về cách thao tác với cơ sở dữ liệu PostgreSQL
– Hiểu cách xử lý Router trong lập trình React JS
– Học cách tích hợp React JS với LocalStorage.
– Học các tích hợp React JS với Firebase
– Đưa bạn từng bước đi từ chưa biết gì cho đến lúc bạn có thể tự tin apply vào các công ty lập trình React
– Khóa học sẽ giúp bạn có thể thiết kế những trang web dựa trên nền tảng React một cách chuyên nghiệp nhất
– Hoàn tất khóa học, bạn có thể apply vào các công ty lập trình Web có yêu cầu React.
NỘI DUNG KHÓA HỌC
Phần 01 – Giới thiệu – cài đặt – và chạy chương trình React JS đầu tiên
002 – Giới thiệu React JS
003 – Cài đặt công cụ
004 – Chạy app react js đầu tiên
Phần 02 – Khái niệm và 4 cách định nghĩa component trong React JS
005 – Khái niệm component
006 – Định nghĩa component cách số 1
007 – Định nghĩa component bằng Anonymous function và Arrow Function
008 – Định nghĩa component bằng Class
Phần 03 – Khái niệm và cách truyền thông tin qua Props trong Component
009 – Khái niệm props trong component
010 – Phương pháp số 2 thao tác với props trong component
Phần 04 – Thực hành JSX và hàm ‘Map’ thông dụng
011 – Cách viết JSX
012 – Cách sử dụng hàm map trong react js
Phần 05 – Thực hành kiến thức Component qua bài tập chuyển đổi giao diện từ bootstrap 4 sang React JS
013 – Thực hành ‘component hoá’ giao diện HTML bằng React JS
014 – Sử dụng Public_URL
015 – Sử dụng phím tắt cho việc tạo component
016 – Hoàn thiện phần giao diện từ bootstrap sang React js Component
Phần 06 – Hai cách viết tương tác trong React JS
017 – Cách viết tương tác với hàm ko có tham số trong React js
018 – Cách viết tổng quát tương tác trong React js
Phần 07 – Khái niệm State – thao tác với state
019 – Hiểu về State trong React js
020 – Thực hành với State trong React JS – Tạo hàm render
Phần 08 – Thay đổi state và sử dụng thuộc tính Default Value
021 – Thực hành với State trong React JS – Thay đổi State
022 – Sử dụng thuộc tính defaultValue trong JSX
Phần 09 – Học về LifeCycle của React Component
023 – LifeCycle trong React JS
024 – Sử dụng thuộc tính Ref trong JSX
025 – Sử dụng LifeCycle cơ bản với Mounting
026 – Sử dụng 4 hàm trong LifeCycle updation
027 – Sử dụng các hàm Update cho Props trong LifeCycle – phần 1
028 – Sử dụng các hàm Update cho Props trong LifeCycle – phần 2
Phần 10 – Học về React Router và thực hành tạo giao diện
029 – Giới thiệu React Router
030 – Tạo giao diện trang chủ
031 – Tạo giao diện chức năng tin tức
032 – Tạo giao diện trang liên hệ
Phần 11 – Chuyển đổi từ giao diện thành React Component
033 – Tạo component Home, Footer, Nav
034 – Chuyển 4 trang HTML thành 6 Component React js
Phần 12 – Tích hợp React Router để thao tác không cần load lại trang
035 – Cài đặt React Router và sử dụng điều hướng cơ bản
036 – Xử lý điều hướng bằng Router không cần load lại trang
037 – Đặt trạng thái cho thanh điều hướng như Gmail bằng activeClassName
Phần 13 – Tạo dữ liệu và load dữ liệu Json trong React JS
038 – Tạo file dữ liệu Json chuẩn bị cho xử lý URL
039 – Load dữ liệu và tạo NewsItem
Phần 14 – Ánh xạ dữ liệu vào Component và tạo đường dẫn SEO
040 – Mapping dữ liệu vào component
041 – Tạo đường dẫn thân thiện với SEO trong React JS
Phần 15 – Cách truyền tham số thông qua URL và nhận dữ liệu từ tham số truyền vào
042 – Cách nhận tham số truyền vào thông qua URL Parameter
043 – Cách phun dữ liệu ra giao diện dựa trên tham số truyền vào từ URL
Phần 16 – Hoàn thiện chức năng tin liên quan cho demo
044 – Xử lý phần NewsRelated component
045 – Hoàn thiện phần tin liên quan
Phần 17 – Cách gửi nhận dữ liệu bằng Form trong React JS
046 – Bắt đầu xử lý form gửi nhận dữ liệu với Redirect
047 – Cách nhận dữ liệu dưới dạng mảng trong react js form
048 – Tối ưu hoá code React JS
049 – Xử lý phần thẻ select trong React form
050 – Xử lý phần nhận thông tin file trong React form
Phần 18 – Project thiết kế backend với dữ liệu LocalStorage
051 – Giới thiệu Project làm giao diện backend quản lý User bằng React js
052 – Download giao diện Bootstrap Admin
Phần 19 – Thiết kế UX và cắt HTML CSS
053 – Thiết kế giao diện UX demo chức năng trước khi code
054 – Code HTML phần giao diện quản lý theo thiết kế phác thảo
055 – Hoàn thiện giao diện quản lý demo trực tiếp trên chrome
Phần 20 – Tạo Project React và chuyển đổi từ giao diện HTML sang React
056 – Tạo project
057 – Chuyển đổi giao diện thành 4 component
058 – Thanh lọc các warning cho project
Phần 21 – Xử lý các tương tác cơ bản
059 – Xử lý các tương tác cơ bản trên Frontend bằng React Js
060 – Xử lý hiển thị Form thông báo ứng với trường hợp chung component
Phần 22 – Thực hành kết nối các component cha con và component ngang cấp
061 – Cách kết nối từ component con sang component bố trong React Js
062 – Cách kết nối giữa hai component ngang cấp
063 – Hoàn thiện phần thực hành thao tác giữa các component ngang cấp
Phần 23 – Tạo dữ liệu cho project và đẩy dữ liệu ra giao diện
064 – Tạo dữ liệu cho project và in test
065 – Đẩy dữ liệu ra bảng sử dụng Map
Phần 24 – Logic các bước làm và cách lập trình chức năng tìm kiếm
066 – Tự động co dãn giao diện sử dụng col
067 – Kết nối component bố và con thông qua props
068 – Lấy text tìm kiếm trong Search Component đẩy về App Component
Phần 25 – Lập trình chức năng thêm mới thành viên bằng React JS
071 – Logic các bước thực hiện chức năng thêm mới thành viên
072 – Lấy dữ liệu thành viên được thêm mới bằng sự kiện onChange
073 – Đẩy dữ liệu vào state
074 – Lấy nội dung gửi lên App và đóng gói đối tượng
075 – Cập nhật thông tin thành viên mới vào dữ liệu Json
Phần 26 – Hoàn thiện chức năng thêm mới bằng cách tự sinh ID khi tạo mới dữ liệu
076 – Xoá trắng nội dung sau khi thêm mới
077 – Tự tạo id không trùng lặp bằng UUID
Phần 27 – Phân tích logic thực hiện chức năng sửa thông tin
078 – Chức năng sửa thông tin thành viên
079 – Kết nối component để truyền dữ liệu
080 – Truyền thông tin user cần sửa từ tableDataRow lên App
Phần 28 – Tạo Form sửa dữ liệu và load nội dung khi được kích hoạt
081 – Tạo form sửa thông tin của người dùngXem trước
082 – Tạo hàm thay đổi trạng thái hiển thị của form
083 – Load nội dung cần sửa vào form
Phần 29 – Hoàn thiện chức năng sửa thông tin thành viên
084 – Sử dụng state lưu trữ thông tin trong quá trình sửa thông tin
085 – Chuyển dữ liệu đã sửa lên Component App
086 – Hoàn thiện chức năng sửa dữ liệu
Phần 30 – Lập trình chức năng xóa thông tin thành viên
087 – Gửi dữ liệu xoá lên component cha
088 – Xoá thông tin người dùng sử dụng hàm filter trong ES2015
Phần 31 – Dữ liệu hóa ứng dụng với LocalStorage
089 – Bộ 3 hàm thao tác với localStorage – set – get – remove
090 – Lưu trữ dữ liệu vào localStorage và hoàn thiện ứng dụng
Phần 32 – Cách đóng gói ứng dụng và chạy ứng dụng trên Xamp server
091 – Đóng gói ứng dụng chạy trên server với npm run build
092 – Cách chạy ứng dụng react app trên Xamp
093 – Cách chạy React App băng cách sử dụng dòng lệnh
Phần 33 – Cách đồng bộ code, download code, chạy code và quản lý bằng Github
094 – Cách đồng bộ code, download code và quản lý code với Git trên Visual studio code – Tạo tài khoản github
095 – Cách tạo tài khoản, tạo repo, upload lên github
096 – Cách tải code và chạy code
Phần 34 – Bắt đầu với Redux – what & why
098 – Giới thiệu Redux
099 – Sử dụng toán tử 3 chấm
100 – Cách viết tắt ghi đè và thêm mới với toán tử 3 chấm
Phần 35 – Phân tích cấu trúc một ứng dụng Redux
101 – Cấu trúc của một store Redux
102 – Chạy thử cấu trúc redux cơ bản để hiểu cách hoạt động của store – reducer – action
Phần 36 – Thực hành với Redux và hàm Subscribe
103 – Thực hành với Redux Store
104 – Thực hành với Redux Store với chỉ thị xoá bằng filter
105 – Hàm Subscribe trong store
Phần 37 – Tạo ứng dụng kết hợp React – Redux
106 – Cài đặt plugin React-redux ES6 snippet
107 – Tạo ứng dụng kết hợp React – Redux
Phần 38 – Cách sử dụng hàm MapDispatchToProps
108 – Truy xuất dữ liệu trong store từ component con
109 – Cách chia tách Reducer thành từng file
110 – Cách gọi hàm trong Store từ component con
111 – Hàm mapDispatchToProps
Phần 39 – Giới thiệu Project mới với Redux và Firebase
112 – Tổng kết phần cơ bản về cách viết code với redux
113 – Bước 1 – Tạo giao diện ứng dụng trong 5 phút
Phần 40 – Học cách sử dụng Firebase trong 30 phút
115 – Học nhanh cách sử dụng cơ sở dữ liệu FireBase
116 – Thực hành thao tác dữ liệu với Firebase
Phần 41 – Thực hành thêm sửa xóa dữ liệu Firebase từ React JS
117 – Kết nối React js – Firebase
118 – Lấy dữ liệu của bảng dữ liệu thông qua DataSnapshot
119 – Sửa dữ liệu trong Firebase
120 – Thêm dữ liệu vào Firebase bằng 2 cách
Phần 42 – Cài đặt redux – khởi tạo store – khởi tạo reducer
122 – Bắt đầu xử lý dữ liệu cho ứng dụng quản lý ghi chú
123 – Bước số 2 – click vào nút lấy được dữ liệu
124 – Bước 3 – Đẩy dữ liệu lên firebase sử dụng React js thuầnXem trước
125 – Cài đặt redux – khởi tạo store – khởi tạo reducer
Phần 43 – Thực hành kết nối Store và Component hoàn thiện chức năng thêm mới dữ liệu vào Firebase
126 – Ba bước cơ bản kết nối store và component
127 – Truyền tham số vào xử lý trong Store
Phần 44 – Chức năng in dữ liệu ra danh sách
128 – Hoàn thiện chức năng thêm mới dữ liệu vào firebase với redux
129 – Xử lý gọi dữ liệu ra danh sách bằng redux – bước 1
130 – Xử lý gọi dữ liệu ra danh sách bằng redux – bước 2
Phần 45 – Thực hành kết nối App và NoteItem với Redux Store
131 – Kết nối App với Store
132 – Kết nối NoteItem với Store
Phần 46 – Chức năng sửa dữ liệu
133 – Thực hành chức năng sửa ghi chú với redux
134 – Đẩy dữ liệu cần sửa lên trên Store và theo dõi với hàm subscribe
135 – Đẩy dữ liệu cần sửa hiện thị lên Form
136 – Lấy dữ liệu ban đầu bằng cách áp dụng React lifeCycle
137 – Đẩy dữ liệu lên trên store khi click vào nút ‘Lưu’
138 – Hoàn thiện chức năng sửa ghi chú của ứng dụng
Phần 47 – Chức năng xoá dữ liệu
139 – Hoàn thiện chức năng xoá ghi chú
Phần 48 – Xử lý điều hướng sử dụng Store
140 – Xử lý điều hướng sử dụng Store
141 – Hoàn thiện chức năng điều hướng thêm mới ghi chú ko cần load lại trang
Phần 49 – Tuỳ biến tiêu đề theo chức năng
142 – Luyện tập Redux Store qua trường hợp tuỳ biến tiêu đề theo chức năng
143 – Hiển thị thông báo các thao tác bằng plugin của React js
Phần 50 – Lập trình phần hiển thị thông báo cho các thao tác chức năng
144 – Định nghĩa state trong Store qui định việc hiển thị của thông báo
145 – Bật tắt thông báo tương ứng với thao tác chức năng trong ứng dụng
146 – Xử lý tắt thông báo bằng hai cách
Phần 51 – Tổng kết
147 – Truyền tham số nội dung vào thông báo thông qua state
148 – Hoàn thiện chức năng thông báo – bài tập – và tổng kết
Phần 52 – Cài đặt và tạo cơ sở dữ liệu PostgreSQL
149 – Giới thiệu phần Node JS kết hợp với React JS
150 – Cài đặt cơ sở dữ liệu PostgreSQL version 10
151 – Thực hành tạo cơ sở dữ liệu – Tạo bảng – Insert dữ liệu với PostgreSQL
Phần 53 – Khởi tạo project
152 – Cài đặt các phần mềm cần sử dụng – Khởi tạo project
153 – Khởi tạo frontend React Js
Phần 54 – Kết nối Node js và PostgreSql
154 – Đổi cổng kết nối của node js
155 – Kết nối Node js và cơ sở dữ liệu
Phần 55 – Phân tích logic của một ứng dụng
156 – Lấy dữ liệu từ postgreSql thông qua Node js
157 – Phân tích logic của một ứng dụng Javascript Fullstack
Phần 56 – Dựng frontend bằng React js
158 – Tạo giao diện frontend sử dụng bootstrap 4
159 – Sử dụng React JS làm frontend
160 – Kết nối các Component trong React JS
Phần 57 – Giao tiếp dữ liệu từ Node js sang React JS
161 – Kết nối Node JS và React JS thông qua axios
162 – Cách hứng dữ liệu từ NoteJS trong React JS
Phần 58 – Giao tiếp dữ liệu từ React js sang Node JS
163 – Gửi dữ liệu từ React JS lên Node JS
164 – Xử lý thêm dữ liệu trong Node JS
165 – Hoàn thiện thao tác thêm dữ liệu trong React JS
166 – Tạo form nhập liệu với React JS
167 – Lấy dữ liệu trong React JS
168 – Chuyển dữ liệu từ React JS về Node JS
169 – Setup proxy cho kết nối riêng của backend và frontend
170 – Tự động update nội dung khi thêm mới – phần 1
171 – Tự động update nội dung khi thêm mới – phần 2
Phần 59 – Tổng kết ứng dụng
172 – Cách quản lý code bằng github – download và chạy file project
173 – Tổng kết ứng dụng Node React
```

 
