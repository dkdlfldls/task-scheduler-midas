//member
//exports.login = "SELECT * FROM member WHERE email = $email AND password = $password";
exports.login = "SELECT * FROM member WHERE email = $email";

exports.member_regist = "INSERT INTO member(email, password, name) VALUES($email, $password, $name)"

exports.get_todo = "SELECT todo.*, member.name,category.title,category.content FROM todo " +
    "JOIN member ON todo.member_id = member.member_id " +
    "JOIN category ON category.category_id = todo.category_id " +
    "WHERE todo_id = $todo_id ";

exports.add_todo = "INSERT INTO todo(title, content, member_id, start_time, end_time, category_id) " +
    "VALUES ($title, $content, $member_id, $start_time, $end_time, $category_id) ";

/*
exports.update_todo = "UPDATE todo SET title = $title, content = $content,start_time = $start_time, " +
    "end_time = $end_time, category_id = $category_id where todo_id = $todo_id";
*/

exports.update_todo = "UPDATE todo SET title = $title, content = $content,start_time = $start_time, " +
    "end_time = $end_time, category_id = $category_id " +
    "WHERE category_id IN (SELECT category_id FROM category_member where member_id = $member_id) " +
    "AND todo_id =  $todo_id";

exports.update_todo_time = "UPDATE todo SET start_time = $start_time, end_time = $end_time " +
    "WHERE category_id IN (SELECT category_id FROM category_member where member_id = $member_id) " +
    "AND todo_id =  $todo_id";

exports.delete_todo = "UPDATE todo SET del = 1 where todo_id = $todo_id";

exports.get_todo_list_all_category =
    "SELECT C.title,C.category_id,T.*,M.name,M.email FROM category_member CM " +
    "JOIN category C ON CM.category_id = C.category_id " +
        "JOIN todo T ON T.category_id = CM.category_id " +
        "JOIN member M ON M.member_id = T.member_id " +
        "WHERE CM.member_id = $member_id " +
        "AND C.del = 0 " +
        "AND T.del = 0";

exports.get_todo_list =
    "SELECT C.title,C.category_id,T.*,M.name,M.email FROM category_member CM " +
    "JOIN category C ON CM.category_id = C.category_id " +
    "JOIN todo T ON T.category_id = CM.category_id " +
    "JOIN member M ON M.member_id = T.member_id " +
    "WHERE CM.member_id = $member_id " +
    "AND CM.category_id = $category_id " +
    "AND C.del = 0 " +
    "AND T.del = 0";


//카테고리 소속된 todo 비활성
exports.delete_todo_under_category = "UPDATE todo SET del = 1 WHERE category_id = $category_id"





//category && category_member
exports.create_category = "INSERT INTO category(title,content) VALUES($title,$content)";

exports.add_member = "INSERT INTO category_member(category_id,member_id) VALUES($category_id,$member_id)";

exports.update_category = "UPDATE category SET title = $title , content = $content WHERE category_id = $category_id";

exports.delete_category = "UPDATE category SET del = 1 WHERE category_id = $category_id";

exports.get_category_list = "SELECT C.title, C.category_id " +
    " FROM category C INNER JOIN category_member CM " +
    " where C.category_id = CM.category_id AND CM.member_id = $member_id";

//calendar
exports.calendar_list =
    "SELECT T.title, T.todo_id,T.start_time,T.end_time, M.name FROM todo T " +
    "JOIN category C ON C.category_id = T.category_id " +
    "JOIN category_member CM ON CM.category_id = T.category_id " +
    "JOIN member M ON M.member_id = CM.member_id " +
    "WHERE M.member_id = $member_id";

exports.calendar_list_month =
    "SELECT T.title, T.todo_id,T.start_time,T.end_time, M.name FROM todo T " +
    "JOIN category C ON C.category_id = T.category_id " +
    "JOIN category_member CM ON CM.category_id = T.category_id " +
    "JOIN member M ON M.member_id = CM.member_id " +
    "WHERE M.member_id = $member_id " +
    "AND ( $target_time = DATE_FORMAT(T.start_time,'%Y-%m') "+
    "OR $target_time = DATE_FORMAT(T.end_time,'%Y-%m')) ";


exports.calendar_list_year_with_category =
    "SELECT T.title, T.todo_id,T.start_time,T.end_time, M.name FROM todo T " +
    "JOIN category C ON C.category_id = T.category_id " +
    "JOIN category_member CM ON CM.category_id = T.category_id " +
    "JOIN member M ON M.member_id = CM.member_id " +
    "WHERE M.member_id = $member_id " +
    "AND C.category_id = $category_id " +
    "AND ( $target_time = DATE_FORMAT(T.start_time,'%Y-%m') "+
    "OR $target_time = DATE_FORMAT(T.end_time,'%Y-%m')) ";


exports.calendar_list_year =
    "SELECT T.title, T.todo_id,T.start_time,T.end_time, M.name FROM todo T " +
    "JOIN category C ON C.category_id = T.category_id " +
    "JOIN category_member CM ON CM.category_id = T.category_id " +
    "JOIN member M ON M.member_id = CM.member_id " +
    "WHERE M.member_id = $member_id " +
    "AND ( $target_time = DATE_FORMAT(T.start_time,'%Y') "+
    "OR $target_time = DATE_FORMAT(T.end_time,'%Y')) ";

exports.calendar_list_month_with_category =
    "SELECT T.title, T.todo_id,T.start_time,T.end_time, M.name FROM todo T " +
    "JOIN category C ON C.category_id = T.category_id " +
    "JOIN category_member CM ON CM.category_id = T.category_id " +
    "JOIN member M ON M.member_id = CM.member_id " +
    "WHERE M.member_id = $member_id " +
    "AND C.category_id = $category_id " +
    "AND ( $target_time = DATE_FORMAT(T.start_time,'%Y') "+
    "OR $target_time = DATE_FORMAT(T.end_time,'%Y')) ";


exports.todo_search = "SELECT todo.*, member.name, category.title, category.content FROM todo" +
    " JOIN member ON todo.member_id = member.member_id" +
    " JOIN category ON category.category_id = todo.category_id" +
    " WHERE category.category_id = $category_id AND (todo.title LIKE $keyword OR todo.content LIKE $keyword)";

