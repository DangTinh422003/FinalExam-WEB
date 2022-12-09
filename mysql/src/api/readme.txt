copy toàn bộ lệnh trong file database.sql,
dán và chạy ở console của phpmyadmin
http://localhost/phpmyadmin/

load_full_music.php trả về toàn bộ bản ghi bài hát trong database
get_music_by_id.php trả về bài hát theo id / id có thể truyền = post hoặc get
search_music.php trả về các bài hát có tên gần giống từ khóa người dùng truyền lên // từ khóa có thể truyền = post hoặc get
get_top_new_music.php trả về n bài hát mới nhất // n truyền lên qua biến $_request
sign_up.php nhận 4 tham số qua post và trả về kết quả của việc đăng ký // chưa viết phần set session
login.php nhận 2 tham số qua post và trả về kết quả của việc đăng nhập // chưa viết phần set session
