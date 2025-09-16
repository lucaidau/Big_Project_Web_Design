# 📘 Style Guide - Fashion Store Web

## 1. Quy tắc đặt tên Class

- **Ngôn ngữ**: Tiếng Anh, viết thường, nôi bằng dấu '-'
- **Cấu trúc**: Theo BEM(Block\_\_Element--Modifier).

* "Block": Khối chính
* "Element": Phần tử con
* "Modifier": Trạng thái

- **Để hiểu thêm về quy tắc mọi người research lại trên gg để tránh xung đột khi tạo class nha**

## 2.Quy tắc chia theo trang

| Trang      | File           | Prefix     | Ví dụ class            |
| ---------- | -------------- | ---------- | ---------------------- |
| Trang chủ  | `index.html`   | `home-`    | `.home-banner__title`  |
| Sản phẩm   | `product.html` | `prod-`    | `.prod-card__image`    |
| Giới thiệu | `about.html`   | `about-`   | `.about-team__member`  |
| Liên hệ    | `contact.html` | `contact-` | `.contact-form__input` |
| Đăng nhập  | `login.html`   | `auth-`    | `.auth-form__button`   |
| Giỏ hàng   | `cart.html`    | `cart-`    | `.cart-item__quantity` |

## 3. Quy tắc CSS dùng chung

# Layout chung:

- **.container** -> Khung cố định (max-width, margin auto)

# font và đơn vị

- Không dùng đơn vị px mà thay vào đó là rem, em, vh
- **1rem**: 10px

# Khoảng cách

- **.mt-1**: margin-top: 0.5rem (5px)
- **.mt-2**: margin-top: 1rem (10px)
- **.mt-3**: margin-top 1.5rem (15px)
- **.mt-4**: margin-top: 2rem (20px)

- **.mb-1**: margin-bottom: 0.5rem (5px)
- **.mb-2**: margin-bottom: 1rem (10px)
- **.mb-3**: margin-bottom: 1.5rem (15px)
- **.mb-4**: margin-bottom: 2rem (20px)

# Căn chữ:

- **.text-center**: căn chữ giữa
- **.text-right**: căn chữ phải
- **.text-left**: căn chữ trái

- **LƯU Ý:** với những quy tắc có kiểu **.** thì không cần định nghĩa lại trong CSS mà chỉ cần dùng trực tiếp trong khi tạo class như 1 framework và tất cả file **CSS** đều để trong thư mục **access/css**

- Để sử dụng file **base.css** thì cần import trước file CSS của trang hiện tại đang làm.
- **Ví dụ:**<link rel="stylesheet" href="accsess/css/base.css">
  <link rel="stylesheet" href="access/css/index.css">

- **VÍ DỤ:** không cần phải định nghĩa **text-align: center** mà chỉ cần tạo **class = "block\_\_element--modifier text-center** và vẫn cần tuân theo quy tắc **BEM** khi tạo class.

- Sẽ có 1 file **base.css** để nhúng vào làm sườn và chỉ cần định dạng thêm theo tính năng hiện tại đang làm thôi.
