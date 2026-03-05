let dataCategories = [
  {
    "id": 1,
    "name": "Electronics",
    "slug": "electronics",
    "image": "https://example.com/electronics.jpg",
    "isDeleted": false,
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  },
  {
    "id": 2,
    "name": "Clothing",
    "slug": "clothing",
    "image": "https://example.com/clothing.jpg",
    "isDeleted": false,
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  }
]

let dataProducts = [
  {
    "id": 1,
    "title": "Laptop",
    "slug": "laptop",
    "price": 1000,
    "description": "A powerful laptop",
    "images": ["https://example.com/laptop.jpg"],
    "isDeleted": false,
    "category": {
      "id": 1,
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://example.com/electronics.jpg"
    },
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  },
  {
    "id": 2,
    "title": "T-Shirt",
    "slug": "t-shirt",
    "price": 20,
    "description": "A comfortable t-shirt",
    "images": ["https://example.com/tshirt.jpg"],
    "isDeleted": false,
    "category": {
      "id": 2,
      "name": "Clothing",
      "slug": "clothing",
      "image": "https://example.com/clothing.jpg"
    },
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  }
]

let dataRole = [
  {
    "id": 1,
    "name": "Quản trị viên",
    "description": "Toàn quyền quản lý hệ thống",
    "isDeleted": false,
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  },
  {
    "id": 2,
    "name": "Biên tập viên",
    "description": "Quản lý nội dung và dữ liệu",
    "isDeleted": false,
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  },
  {
    "id": 3,
    "name": "Người dùng",
    "description": "Tài khoản người dùng thông thường",
    "isDeleted": false,
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  }
]
let dataUser = [
  {
    "id": 1,
    "username": "nguyenvana",
    "password": "123456",
    "email": "vana@gmail.com",
    "fullName": "Nguyễn Văn A",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 15,
    "isDeleted": false,
    "role": {
      "id": 1,
      "name": "Quản trị viên",
      "description": "Toàn quyền quản lý hệ thống"
    },
    "creationAt": "2026-03-04T08:10:00.000Z",
    "updatedAt": "2026-03-04T08:10:00.000Z"
  },
  {
    "id": 2,
    "username": "tranthib",
    "password": "123456",
    "email": "thib@gmail.com",
    "fullName": "Trần Thị B",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 7,
    "isDeleted": false,
    "role": {
      "id": 2,
      "name": "Biên tập viên",
      "description": "Quản lý nội dung và dữ liệu"
    },
    "creationAt": "2026-03-04T08:11:00.000Z",
    "updatedAt": "2026-03-04T08:11:00.000Z"
  },
  {
    "id": 3,
    "username": "levanc",
    "password": "123456",
    "email": "vanc@gmail.com",
    "fullName": "Lê Văn C",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 3,
    "isDeleted": false,
    "role": {
      "id": 3,
      "name": "Người dùng",
      "description": "Tài khoản người dùng thông thường"
    },
    "creationAt": "2026-03-04T08:12:00.000Z",
    "updatedAt": "2026-03-04T08:12:00.000Z"
  },
  {
    "id": 4,
    "username": "phamthid",
    "password": "123456",
    "email": "thid@gmail.com",
    "fullName": "Phạm Thị D",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": false,
    "loginCount": 0,
    "isDeleted": false,
    "role": {
      "id": 3,
      "name": "Người dùng",
      "description": "Tài khoản người dùng thông thường"
    },
    "creationAt": "2026-03-04T08:13:00.000Z",
    "updatedAt": "2026-03-04T08:13:00.000Z"
  },
  {
    "id": 5,
    "username": "hoanganh",
    "password": "123456",
    "email": "anh@gmail.com",
    "fullName": "Hoàng Anh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 2,
    "isDeleted": false,
    "role": {
      "id": 3,
      "name": "Người dùng",
      "description": "Tài khoản người dùng thông thường"
    },
    "creationAt": "2026-03-04T08:14:00.000Z",
    "updatedAt": "2026-03-04T08:14:00.000Z"
  },
  {
    "id": 6,
    "username": "dangminh",
    "password": "123456",
    "email": "minh@gmail.com",
    "fullName": "Đặng Minh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 9,
    "isDeleted": false,
    "role": {
      "id": 2,
      "name": "Biên tập viên",
      "description": "Quản lý nội dung và dữ liệu"
    },
    "creationAt": "2026-03-04T08:15:00.000Z",
    "updatedAt": "2026-03-04T08:15:00.000Z"
  },
  {
    "id": 7,
    "username": "phamkhoa",
    "password": "123456",
    "email": "khoa@gmail.com",
    "fullName": "Phạm Quốc Khoa",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 1,
    "isDeleted": false,
    "role": {
      "id": 3,
      "name": "Người dùng",
      "description": "Tài khoản người dùng thông thường"
    },
    "creationAt": "2026-03-04T08:16:00.000Z",
    "updatedAt": "2026-03-04T08:16:00.000Z"
  },
  {
    "id": 8,
    "username": "truonglinh",
    "password": "123456",
    "email": "linh@gmail.com",
    "fullName": "Trương Linh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": false,
    "loginCount": 0,
    "isDeleted": false,
    "role": {
      "id": 3,
      "name": "Người dùng",
      "description": "Tài khoản người dùng thông thường"
    },
    "creationAt": "2026-03-04T08:17:00.000Z",
    "updatedAt": "2026-03-04T08:17:00.000Z"
  },
  {
    "id": 9,
    "username": "doquang",
    "password": "123456",
    "email": "quang@gmail.com",
    "fullName": "Đỗ Quang",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 4,
    "isDeleted": false,
    "role": {
      "id": 2,
      "name": "Biên tập viên",
      "description": "Quản lý nội dung và dữ liệu"
    },
    "creationAt": "2026-03-04T08:18:00.000Z",
    "updatedAt": "2026-03-04T08:18:00.000Z"
  },
  {
    "id": 10,
    "username": "ngocanh",
    "password": "123456",
    "email": "ngocanh@gmail.com",
    "fullName": "Ngọc Anh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 6,
    "isDeleted": false,
    "role": {
      "id": 1,
      "name": "Quản trị viên",
      "description": "Toàn quyền quản lý hệ thống"
    },
    "creationAt": "2026-03-04T08:19:00.000Z",
    "updatedAt": "2026-03-04T08:19:00.000Z"
  }
]

module.exports = {
    dataCategories,
    dataProducts,
    dataRole,
    dataUser
}