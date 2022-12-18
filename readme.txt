	CÁC BƯỚC ĐỂ CHẠY THỬ DỰ ÁN

1. Mở cửa sổ dòng lệnh (Terminal hoặc Command Prompt hoặc PowerShell) 
2. Đến thư mục của dẫn của dự án Gõ lệnh "docker-compose up -d" để kích hoạt docker
3. Sau khi chạy thành công, truy cập :
	- http://localhost:8888 để vào phpMyAdmin sau đó import file database.sql ở đường dẫn 52100936_52100917_52100813_52000752_51800016\mysql\sql
4. Sau tất cả các thao tác trên , truy cập vào đường dẫn :
	Cách 1 :  Do dự án đã được deploy trên internet nên có thể truy cập vào đường dẫn
			  https://final-exam-web.vercel.app/ để chạy thử dự án
	
	Cách 2 :  52100936_52100917_52100813_52000752_51800016\source\www  =>  sau đó nháy chuột vào file index.html để có thể chạy thử dự án.

5 . Truy cập : https://github.com/DangTinh422003/FinalExam-WEB để có thể kiểm tra mã nguồn của toàn bộ trang web 
	



Mô tả cấu trúc project:
	1. Thư mục mysql
		1.1 Thư mục sql: chứa tập tin database.sql dùng để import vào database khi chạy docker 
		1.2 data: chứa dữ liệu do mysql tự phát sinh ra, nó bao gồm tất cả database mà mysql đang có 
	2. Thư mục www
		admin : chứa các file php để thao tác với cơ sở dữ liệu và trả ra JSON
		font-awesome-pro-5 : thư mục chứa các tệp tin được css sẵn (dùng để làm các icon trong trang web)
		image : chứa các hình ảnh của trang chủ (Trang khám phá)
		music : chứa các file audio 
		pages : chứa các trang khác ngoài trang chủ (Trang khám phá)
			Mỗi trang con thì cấu trúc sẽ gồm có tối thiểu 3 file : index.html , index.css, Base.css
		index.html : chứa mã nguồn html của trang chủ (trang khám phá)
		index.css : chứa mã nguồn css của các thành phần trong trang chủ
		Base.css  : chứa mã nguồn css chung của tất cả các trang
		index.js : chứa mã nguồn javascript nhằm để xử lý render dữ liệu từ API trả về và tạo ra các chức năng trong trang chủ (TrangKhamPha)

	3. Tập tin docker-compose.yml: thiết lập Docker Compose (không được chỉnh)