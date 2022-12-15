const products = [
  {
    "title": "Nem Rán",
    "price": 50000,
    "description": "Nem rán, còn gọi là chả cuốn, chả ram,chả nem là món ăn ngon nổi tiếng của người Việt và được chế biến từ những nguyên liệu dễ kiếm, cách thực hiện không phức tạp.Nem rán, cũng được gọi tắt là nem, là cách gọi phổ biến ở miền Bắc (một số nơi ở tỉnh Nam Định gọi là chả). Ở miền Trung, món ăn này thường gọi là chả cuốn (riêng ở Thanh Hóa gọi là chả), còn ở miền Nam, nó được gọi là chả giò. Loại nem gói theo kiểu miền Nam được người Bắc gọi là nem Sài Gòn.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666796658/Food%20Store/Vietnam/nem_ran_fprjv3.jpg",
    "category": "vietnam",
    "rating": {
      "rate": 5,
      "count": 100
    }
  },
  {
    "title": "Bún Chả",
    "price": 55000,
    "description": "Bún chả là một món ăn của Việt Nam, bao gồm bún, chả thịt lợn nướng trên than hoa và bát nước mắm chua cay mặn ngọt. Món ăn xuất xứ từ miền Bắc Việt Nam, là thứ quà có sức sống lâu bền nhất của Hà Nội, nên có thể coi đây là một trong những đặc sản đặc trưng của ẩm thực Hà thành.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666796658/Food%20Store/Vietnam/bun_cha_mbqxg8.jpg",
    "category": "vietnam",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Bún Bò Huế",
    "price": 50000,
    "description": "Bún bò là một trong những đặc sản của xứ Huế, mặc dù món bún này phổ biến trên cả ba miền ở Việt Nam và cả người Việt tại hải ngoại. Tại Huế, món này được gọi đơn giản là bún bò hoặc gọi cụ thể hơn là bún bò thịt bò. Các địa phương khác gọi là bún bò Huế, bún bò gốc Huế để chỉ xuất xứ của món ăn này. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666796657/Food%20Store/Vietnam/bun_bo_hue_pyug3w.jpg",
    "category": "vietnam",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cơm Tấm",
    "price": 45000,
    "description": "Cơm tấm, cơm sườn, hay Cơm tấm Sài Gòn là một món ăn Việt Nam có nguyên liệu chủ yếu từ gạo tấm. Dù có nhiều tên gọi ở các vùng miền khác nhau, tuy nhiên nguyên liệu và cách thức chế biến của món ăn trên gần như là giống nhau.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666796657/Food%20Store/Vietnam/com_tam_ihgclz.jpg",
    "category": "vietnam",
    "rating": {
      "rate": 5,
      "count": 10
    }
  },
  {
    "title": "Gỏi",
    "price": 30000,
    "description": "Nộm, trong phương ngữ miền Nam gọi là gỏi, là tên gọi chung cho các món rau trộn chua ngọt trong ẩm thực Việt Nam.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666796657/Food%20Store/Vietnam/goi_eb4ukj.jpg",
    "category": "vietnam",
    "rating": {
      "rate": 5,
      "count": 200
    }

  },
  {
    "title": "Gỏi Cuốn",
    "price": 55000,
    "description": "Gỏi cuốn hay còn được gọi là nem cuốn, là một món ăn khá phổ biến ở Việt Nam. Gỏi cuốn có xuất xứ từ Miền nam Việt Nam với tên gọi là gỏi cuốn - bằng các nguyên liệu gồm rau xà lách, húng quế, tía tô, tôm khô, rau thơm, thịt luộc, tôm tươi.. tất cả được cuộn trong vỏ bánh tráng.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666796657/Food%20Store/Vietnam/goi_cuon_izu49q.webp",
    "category": "vietnam",
    "rating": {
      "rate": 5,
      "count": 200
    }

  },
  {
    "title": "Bánh Mì",
    "price": 25000,
    "description": "Bánh mì Việt Nam là một món ăn Việt Nam, với lớp vỏ ngoài là một ổ bánh mì nướng có da giòn, ruột mềm, còn bên trong là phần nhân. Tùy theo văn hóa vùng miền hoặc sở thích cá nhân, người ta có thể chọn nhiều nhân bánh mì khác nhau. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666796656/Food%20Store/Vietnam/banh_mi_ky4ec5.jpg",
    "category": "vietnam",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Thịt kho Đông Pha",
    "price": 60000,
    "description": "Nói đến các món ăn truyền thống của Trung Quốc chắc chắn người ta sẽ không thể bỏ qua món thịt kho Đông Pha nức tiếng. Đây không phải là một món ăn nổi tiếng với vùng đất nào mà đơn giản chúng được đặt tên theo nhà thơ Tô Đông Pha – người đã chế biến ra món ăn này lần đầu tiên. Miếng thịt thơm ngon hấp dẫn với màu sắc và hương vị rất đặc trưng khiến nhiều người yêu thích.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798590/Food%20Store/China/thit-kho-dong-pha_u4qsyl.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Sủi cảo",
    "price": 40000,
    "description": "Sủi cảo là một món điểm tâm rất đặc trưng của Trung Quốc, được chế biến bằng phương pháp hấp. Đây là một loại bánh được người dân Trung Quốc làm món ăn chính trong dịp mừng năm mới, một loại bánh cổ truyền giống như bánh chưng của Việt Nam. Món bánh biểu trưng cho sự may mắn, sum họp đầu năm của tất cả thành viên trong gia đình.Bột làm bánh sủi cảo bao gồm hai loại là gạo nếp và gạo tẻ. Về phần nhân bánh, tùy vào sở thích khác nhau của từng người, người ta có thể chế biến nhân bánh từ thịt lợn hoặc thịt bò cùng các loại rau được băm nhuyễn và trộn đều. Bánh có hình bán nguyệt, dùng kèm theo nước sốt hoặc mì đều rất ngon và hấp dẫn.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798588/Food%20Store/China/sui-cao_qqkny1.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Vịt quay Bắc Kinh",
    "price": 350000,
    "description": "Vịt quay Bắc Kinh được biết đến là một trong những món ăn nổi tiếng nhất của vùng đất Bắc Kinh, chinh phục biết bao sự say mê của thực khách, chỉ cần một lần nếm qua thì không sao quên được hương vị nồng nàn của nó. Da vịt quay có màu nâu sậm, mỏng và giòn, lan tỏa một mùi hương nồng nàn hấp dẫn. Để chế biến món vịt quay ngon đúng chuẩn thì người ta phải lựa chọn những con vịt rất kỹ, phải nuôi dân dã để lúc đem quay thịt sẽ có mùi thơm, không bị hôi. Thịt vịt trước khi quay được làm sạch, ướp mạch gia, gia vị giấm đỏ, ngũ vị hương cùng đường, muối rồi nướng trên than hồng. Khi thưởng thức, tùy theo ý thích thì bạn có thể chọn riêng phần da hoặc phần thịt.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798586/Food%20Store/China/vit_quay_bac_kinh_r3shv7.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Đậu phụ Tứ Xuyên",
    "price": 40000,
    "description": "Ẩm thực Tứ Xuyên là một bộ phận cực kỳ quan trọng trong nền ẩm thực Trung Hoa, trong đó không thể không nhắc đến món đậu phụ cay Tứ Xuyên trứ danh, ai cũng đều biết đến. Đây là một món ngon có từ thời nhà Thanh, được chế biến từ các thành phần như đậu phụ non, thịt bằm, sa tế cùng nhiều loại gia vị đặc trưng của Tứ xuyên tạo nên một món ăn độc đáo đặc trưng. Đậu phụ Tứ Xuyên khi ăn có vị cay, nóng đặc biệt, một khi đã nếm qua thì không thể cưỡng lại, dùng để ăn kèm với cơm. Đây không chỉ là một món ăn phổ biến của người Trung Quốc mà còn rất được du khách yêu thích và không thể không nếm thử một khi đã đặt chân đến đây.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798580/Food%20Store/China/dau-phu-tu-xuyen_oolidf.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Bò cay Hồ Nam",
    "price": 60000,
    "description": "Cũng là một trong những món cay nổi tiếng nhất của Trung Quốc mà các tín đồ mê món cay không thể bỏ qua là bò cay Hồ Nam. Nguyên liệu chính của món ăn này là thịt bò được xào chung với rau củ, bông cải xanh, hành tây và thêm nước sốt gia vị. Điểm đặc biệt của món ăn này là trước khi chế biến thịt bò, người ta thái mỏng thịt ướp với nước sốt gia truyền thêm một ít tinh bột khoai tây rồi mới bắt lên chảo chiên với lửa nhỏ trong vài phút. Cuối cùng mới đem thịt xào chung với các nguyên liệu khác và trở thành món bò cay vô cùng hấp dẫn, vị cay đặc trưng.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798579/Food%20Store/China/bo-cay-ho-nam_ufxxxu.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Tôm xào hạt điều",
    "price": 30000,
    "description": "Một trong những món ăn nổi tiếng làm nên danh tiếng của Trung Hoa mà ai đã một lần thưởng thức đều không thể quên hương vị của nó là món tôm xào hạt điều. Nghe có vẻ đơn giản nhưng không thể không đánh giá cao tài hoa của người đầu bếp Trung Hoa khi đã sáng tạo ra một món tưởng chừng đơn giản lại trở thành một đặc sản hấp dẫn, khác lạ. Thịt tôm dai, ngọt, sóng sánh trong nền của nước sốt màu đỏ xen lẫn vị thơm bùi của hạt đều đã mang đến sự lạ miệng mà ngon không cưỡng. Bên cạnh đó, đây cũng là món ăn được các chuyên gia ẩm thực đánh giá cao vì có thể ngăn ngừa những bệnh liên quan đến tim mạch, tốt cho sức khỏe.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798586/Food%20Store/China/tom-xao-hat-dieu_ofbrwg.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  }, {
    "title": "Mì hoành thánh",
    "price": 35000,
    "description": "Mì hoành thánh không chỉ là một món ăn vô cùng độc đáo của Trung Quốc mà còn được nhiều người yêu thích và đem vào thực đơn hàng ngày cho gia đình. Món ăn là sự kết hợp tinh tế giữa mì và bánh hoành thánh thơm ngon, mang lại cảm giác mới lạ cho món ăn. Tuy nhiên, việc chế biến nên một tô mì hoành thánh ngon không phải là điều dễ dàng, buộc người đầu bếp phải tuân theo những tiêu chuẩn gắt gao. Chẳng hạn, bột bánh tuy mỏng nhưng không bị rách để có thể nhìn thấy rõ nhân bánh bên trong, nước dùng trong vắt, không lợn cợn và đảm bảo độ ngọt vừa miệng. Sợi mì có màu vàng, có độ dai nhưng phải mềm. Đó là tất cả những yếu tố để tạo nên nét hấp dẫn của một tô mì ngon.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798580/Food%20Store/China/mi-hoanh-thanh_izxivy.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Sủi cảo",
    "price": 40000,
    "description": "Sủi cảo là một món điểm tâm rất đặc trưng của Trung Quốc, được chế biến bằng phương pháp hấp. Đây là một loại bánh được người dân Trung Quốc làm món ăn chính trong dịp mừng năm mới, một loại bánh cổ truyền giống như bánh chưng của Việt Nam. Món bánh biểu trưng cho sự may mắn, sum họp đầu năm của tất cả thành viên trong gia đình.Bột làm bánh sủi cảo bao gồm hai loại là gạo nếp và gạo tẻ. Về phần nhân bánh, tùy vào sở thích khác nhau của từng người, người ta có thể chế biến nhân bánh từ thịt lợn hoặc thịt bò cùng các loại rau được băm nhuyễn và trộn đều. Bánh có hình bán nguyệt, dùng kèm theo nước sốt hoặc mì đều rất ngon và hấp dẫn.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798588/Food%20Store/China/sui-cao_qqkny1.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Lẩu cay Tứ Xuyên",
    "price": 400000,
    "description": "Lẩu cay Tứ Xuyên không chỉ là một món ăn mang thương hiệu Tứ Xuyên mà còn là tinh hoa của lẩu Trung Hoa nói chung. Món lẩu ngon nức mũi, có tiếng gần xa, chỉ cần nhìn thôi đã thấy cảm giác thèm ăn trong lòng, vị thơm, vị ngon và vị cay đọng ngay trên đầu lưỡi thật khó cưỡng. Hai yếu tố quyết định sự thành công của lẩu cay Tứ Xuyên là nước lẩu và nước chấm ăn lẩu.Để nấu được nước lẩu Tứ Xuyên ngon cần trải qua rất nhiều giai đoạn cầu kỳ như xương hầm kết hợp nhiều gia vị khác chỉ có ở vùng đất Tứ Xuyên. Nước lẩu ngon là nước lẩu đã thấm nhuần vị ngọt từ xương, vị chua thanh thao của giấm và vị thật cay vừa ăn vừa xuýt xoa của ớt thì mới đạt được yêu cầu. Thực phẩm ăn kèm với lẩu cũng khá đa dạng bao gồm thịt gà, thịt bò, rau củ tươi ngon. Tất cả đã tạo nên hương vị của món ngon số một Trung Quốc, chinh phục biết bao thực khách sành ăn.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798584/Food%20Store/China/lau-cay-tu-xuyen_etl0cs.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cơm chiên Dương Châu",
    "price": 40000,
    "description": "Trong nền ẩm thực đa dạng của Trung Quốc thì cơm chiên Dương Châu là một món ăn làm nên thương hiệu, ra đời vào những năm dưới triều đại Nhà Thanh. Đây không chỉ là món ăn dễ dàng chế biến mà còn giàu dinh dưỡng, tốt cho sức khỏe nên luôn được các bà nội trợ yêu thích và chế biến cho gia đình. Thành phần chính món ăn bao gồm cơm, trứng, cà rốt và một vào rau củ thái nhỏ. Một đĩa cơm chiên Dương Châu ngon là hạt cơm có màu vàng ươm, bóng bẩy và các nguyên liệu có độ mềm vừa phải. Vì vậy, với mùi hương nức mũi thì đây được đánh giá là một trong những món ngon không thể bỏ qua của đất nước Trung Hoa.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798580/Food%20Store/China/com-chien-duong-chau_zolfaf.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Gà Kung Pao",
    "price": 50000,
    "description": "Gà Kung Pao là một món ăn phổ biến nhất của tỉnh Tứ Xuyên mà còn là món ăn được nhiều người trên thế giới biết đến, một đặc sản có sức chinh phục bao tín đồ sành ăn. Nguyên liệu chính của món ăn là thịt gà kết hợp với đậu phộng và ớt hiểm để tạo nên hương vị đặc trưng khó cưỡng. Món gà Kung Pao ngon đúng điệu thì thịt gà vừa ngọt vừa mềm, đậu phộng béo ngậy bên cạnh vị cay nồng xộc lên cánh mũi của ớt tạo nên nét hấp dẫn và lạ miệng vô cùng.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798582/Food%20Store/China/ga-kung-pao_zufcob.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Thịt lợn chua ngọt",
    "price": 60000,
    "description": "Thịt lợn chua ngọt của Trung Quốc không chỉ cực kì nổi tiếng ở Trung Quốc mà còn nổi tiếng trên thế giới. Món thịt lợn chua ngọt xuất hiện nhiều ở Chiết Giang, Tứ Xuyên và Sơn Đông cũng như Quảng Đông của Trung Quốc. Thành phần chính của món thịt lợn chua ngọt là thịt lợn, lòng trắng của trứng và các gia vị như giấm, muối, tinh bột, rau mùi, cà chua và đường. Sau khi được nấu lên, thịt lợn chua ngọt sẽ có màu cam sáng và một hương vị chua ngọt hấp dẫn.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798584/Food%20Store/China/thit-lon-chua-ngot_g4agam.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Lẩu cừu",
    "price": 500000,
    "description": "Lẩu cừu là một trong những món ngon trong ẩm thực của Trung Quốc chắc chắn phải kể đến. Món lẩu cừu hảo hạng là một món ăn truyền thống và được dùng vào mỗi dịp lập đông. Nồi nước lẩu được ninh từ xương cừu chính vì vậy chúng có vị đặc biệt thơm ngon và rất ngọt. Thịt cừu thái lát mỏng ăn kèm với các loại rau khác. Thịt cừu có một mùi vị đặc trưng khác hẳn so với các món thịt khác, chính vì vậy mà chắc chắn bạn sẽ cảm thấy rất lạ miệng khi thưởng thức.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798582/Food%20Store/China/lau-cuu_hl8d3p.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Gà ăn mày",
    "price": 250000,
    "description": "Gà ăn mày thực chất chính là món gà nướng đất sét. Sở dĩ có tên gọi đặc biệt như vậy là bởi món ăn này xuất phát từ một câu chuyện được dân gian truyền miệng. Theo nhiều người, từ xưa có một gã ăn mày ăn trộm con gà và bị phát hiện hắn liền bọc gà vào trong lá sen sau đó bọc thêm một lớn bùn bên ngoài và ném vào trong bếp lửa. Chính vì vậy mà từ đó món gà ăn mày được ra đời. Gà được chế biến với những hương vị rất thơm ngon, nhất là khi được bọc bên ngoài một lớp lá sen dày càng làm tăng thêm hương thơm của thịt gà. Tại nhiều nhà hàng món ăn này còn được để nguyên trong đất sét, khi ăn người phục vụ sẽ bắt đầu tách phần đất sét này ra để bạn thưởng thức, vô cùng hấp dẫn.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1666798586/Food%20Store/China/ga-an-may_ijdubp.jpg",
    "category": "china",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cơm trộn Hàn Quốc Bibimbap",
    "price": 50000,
    "description": "Chắc hẳn không một bạn trẻ nào lại không biết đến món ăn Hàn Quốc quốc dân này. Bibimbap là món cơm trộn kết hợp với nhiều nguyên liệu đầy màu sắc như: màu trắng của cơm, màu vàng của trứng, màu đỏ của kim chi, màu cam của cà rốt, màu đen của rong biển… Tất cả sẽ được trộn đều với nước sốt làm từ ớt trước khi ăn tạo nên một hương vị ngon khó cưỡng.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140244/Food%20Store/Korean/M%C3%AC_h%E1%BA%A3i_s%E1%BA%A3n_cay_Jjambbong_o1hlet.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Kimbap",
    "price": 30000,
    "description": "Đây được xem là món ăn Hàn Quốc quen thuộc của các tín đồ đam mê ẩm thực Hàn. Nguyên liệu chính của Kimbap là rong biển và cơm trắng, sau đó sẽ thêm rau xào, thịt bò, trứng chiên, xúc xích,... rồi cuộn lại bên trong lá rong biển và cắt thành từng khoanh tròn vừa ăn. Món ăn này trông có vẻ đơn giản nhưng lại bắt miệng đến lạ, đó cũng là lý do khiến Kimbap trở thành một trong  những món ăn đặc trưng của xứ Hàn.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140243/Food%20Store/Korean/Kimbap_o4nuh2.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Kim Chi",
    "price": 20000,
    "description": "Nhắc đến Hàn Quốc thì không ai còn xa lạ với món Kim Chi nổi tiếng vang danh khắp thế giới. Cách chế biến kim chi cũng tương đối đơn giản bằng cách lên men cải thảo và ớt, cũng nhờ đó mà các món ăn có sắc đỏ siêu bắt mắt, khiến ai cũng muốn nếm thử ngay từ cái nhìn đầu tiên. Ăn một miếng Kim Chi cay nồng, chua chua ngọt ngọt cùng với cơm nóng thì còn gì bằng nữa đúng không nào? ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140242/Food%20Store/Korean/Kim_Chi_s4zxif.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Mì lạnh Naengmyeon",
    "price": 50000,
    "description": "Hàn Quốc luôn được xem là thiên đường của các loại mì, trong đó có món mì lạnh Naengmyeon rất khác biệt. Món ăn này được làm từ bột cùng với đó là sự kết hợp của các loại nguyên liệu khác nhau như kiều mạch, khoai tây, khoai lang, tinh bột cây dong và bột sắn dây, trong đó chiếm ưu thế hơn cả sẽ là kiều mạch để làm ra những sợi mì nhỏ dai dai. Chính sự mới lạ của món mì Hàn Quốc này đủ để gây thương nhớ cho những ai lần đầu thưởng thức đấy nhé!",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140244/Food%20Store/Korean/M%C3%AC_l%E1%BA%A1nh_Naengmyeon_fprj2s.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Canh bò Seolleongtang",
    "price": 40000,
    "description": "Một món ăn đặc sắc khác của xứ sở Kim Chi đó là canh bò Seolleongtang. Thực tế, đây là bản biến hóa của món canh bún thịt bò bên Hàn Quốc. Nước dùng của Seolleongtang được chế biến từ nước xương bò ninh rất kỹ, cùng với đó là các loại nguyên liệu đi kèm như mì trắng và thịt bò, mang đến hương vị đậm đà, thơm ngon. Nếu bạn muốn trải nghiệm một món ăn Hàn Quốc mới thì đừng ngần ngại với canh bò Seolleongtang nhé! ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140240/Food%20Store/Korean/Canh_b%C3%B2_Seolleongtang_jbmklf.webp",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Thịt bò nướng – Bulgogi",
    "price": 250000,
    "description": "Một món ăn khác mang đậm nét văn hóa xứ Hàn đó là Bulgogi. Xuất hiện xuyên suốt trên màn ảnh Hàn Quốc, Bulgogi dễ dàng thu hút ánh nhìn của người khác nhờ màu sắc bắt mắt, hấp dẫn. Những miếng thịt bò được thái mỏng và tẩm sốt đậu nành, dầu vừng, tỏi, đường, hành xanh, tiêu đen, sau đó đem nướng trên vỉ. Chính những loại gia vị ướp độc đáo này đã làm nên món ăn tuyệt hảo khiến ai nấy đều phát nghiện.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140249/Food%20Store/Korean/Th%E1%BB%8Bt_b%C3%B2_n%C6%B0%E1%BB%9Bng_Bulgogi_ewcq2x.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Bánh gạo Tokbokki",
    "price": 30000,
    "description": "Bánh gạo Tokbokki được xem là một món ăn biểu tượng trên đường phố Hàn Quốc,  có mặt ở hầu hết các hàng ăn ngoài các con phố Seoul. Chỉ đơn giản làm từ bột gạo, được nặn thành các thanh dài sau đó nấu chung với bột ớt nhưng lại tạo nên hương vị bạn không thể quên một khi đã thử. Dưới thời tiết se lạnh, ăn những miếng bánh gạo vừa cay nồng, vừa nóng hổi thì còn gì tuyệt vời hơn đúng không nào?",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140238/Food%20Store/Korean/B%C3%A1nh_g%E1%BA%A1o_Tokbokki_zydqda.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Súp đậu phụ kho - Sundubu Jjigae",
    "price": 40000,
    "description": "Nói đến các món ăn Hàn Quốc thì không thể bỏ qua cái tên Sundubu Jjigae - súp đậu phụ hầm cay. Đây được xem là một món ăn lý tưởng trong những ngày thời tiết se lạnh. Món ăn này là sự kết hợp của đậu hũ và rau đi kèm với một chút hải sản và tương ớt hoặc bột ớt hầm lên trong một chiếc nồi sứ, với màu sắc hấp dẫn, nghi ngút khói và tỏa hương ngào ngạt sẽ kích thích vị giác của bạn. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140248/Food%20Store/Korean/S%C3%BAp_%C4%91%E1%BA%ADu_ph%E1%BB%A5_kho_-_Sundubu_Jjigae_flazkv.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Canh đậu tương",
    "price": 20000,
    "description": "Được xem là món canh nổi tiếng nhất Hàn Quốc, canh đậu tương luôn được người Hàn sử dụng trong các bữa ăn hàng ngày. Hương vị của món ăn này được hòa quyện bởi tương đậu, đậu phụ, bí ngòi cùng một số các loại rau củ, nguyên liệu khác. Trong tiết trời se lạnh vừa húp canh đậu tương nóng hổi cay nồng, vừa trò chuyện với gia đình hay bè bạn thì còn gì tuyệt hơn đúng không nào?",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140242/Food%20Store/Korean/Canh_%C4%91%E1%BA%ADu_t%C6%B0%C6%A1ng_pqbckw.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Samgyetang - Canh gà hầm sâm",
    "price": 100000,
    "description": "Samgyetang còn gọi là món canh gà hầm sâm, được chế biến bằng cách hầm cả con gà tơ cùng các nguyên liệu khác như nhân sâm, rễ hedysarum, táo tàu,... Món ăn Hàn Quốc này được xem là lựa chọn lý tưởng nên thưởng thức trong đợt sambok (3 đợt nắng nóng lớn vào mùa hè âm lịch ở Hàn Quốc).",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140242/Food%20Store/Korean/Samgyetang_-_Canh_g%C3%A0_h%E1%BA%A7m_s%C3%A2m_j28hlc.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Canh khoai tây hầm Gamjatang",
    "price": 40000,
    "description": "Canh khoai tây hầm Gamjatang cũng là một món ăn Hàn Quốc truyền thống quen thuộc. Món canh khoai tây hầm gồm có khoai tây, hành lá, hạt tía tô và thịt heo nấu trong nước dùng ninh từ xương heo. Phần lớn các cửa hàng bán Gamjatang đều mở cửa suốt đêm, bởi vì người Hàn Quốc có xu hướng thèm món hầm này vào lúc nửa đêm hay đầu ngày mới. Món ăn được sử dụng như một phương pháp giải rượu hiệu quả. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140238/Food%20Store/Korean/Canh_khoai_t%C3%A2y_h%E1%BA%A7m_Gamjatang_gqxltm.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Hotteok - Bánh Pancake Hàn Quốc",
    "price": 20000,
    "description": "Được biến tấu từ những chiếc bánh pancake phương Tây, bánh rán Hotteok đang là món bánh Hàn Quốc nổi tiếng và được bày bán rộng rãi ở hầu khắp các khu chợ lớn nhỏ. Nguyên liệu chính của bánh là bột nếp được tạo thành những hình tròn nhỏ dẹt. Nhân bánh gồm có đậu phộng, đường nâu, quế, mật ong,... Sau khi được nướng chín, bạn sẽ ngất ngây với lớp vỏ vàng ươm, giòn rụm, nhưng bên trong lại mềm ngọt khó mà cưỡng lại được.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140237/Food%20Store/Korean/Hotteok_upkn9x.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Haemul Pajeon – Bánh kếp hải sản",
    "price": 150000,
    "description": "Một món ăn Hàn Quốc khác hứa hẹn sẽ không làm bạn thất vọng - Haemul Pajeon. Đây là bánh kếp hải sản nên phần nhân bánh sẽ đầy ắp các nguyên liệu đặc trưng như hàu, mực, tôm,... Bánh sau khi đã chiên vàng giòn, phần nhân hải sản đầy đặn, thưởng thức cùng với rượu gạo Makgeolli nữa là đúng chuẩn. Còn gì tuyệt hơn khi ăn món này vào những ngày mưa lạnh lạnh đúng không nào?",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140243/Food%20Store/Korean/Haemul_Pajeon_B%C3%A1nh_k%E1%BA%BFp_h%E1%BA%A3i_s%E1%BA%A3n_ttvptu.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cháo gà DakJuk",
    "price": 30000,
    "description": "Nếu bạn đã nhàm chán với những món ăn Hàn Quốc cay nóng, nhiều dầu mỡ thì hãy thử ngay món cháo gà DakJuk này nhé! Cháo được nấu từ gạo sushi mềm dẻo, thơm ngọt. Thịt gà cùng nhân sâm sẽ được ninh nhừ cùng với hành tây theo công thức rất riêng tạo nên một món ăn thanh đạm, bổ dưỡng, đảm bảo sẽ không làm bạn thất vọng. Nếu có dịp ghé đến xứ sở Kim Chi, đừng quên trải nghiệm món ăn này nhé!",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140237/Food%20Store/Korean/Ch%C3%A1o_g%C3%A0_DakJuk_qzrvxy.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Miến cuộn rong biển chiên giòn",
    "price": 30000,
    "description": "Miến cuộn rong biển chiên giòn là một món ăn Hàn Quốc mới lạ, độc đáo mà bạn nên thử trải nghiệm. Miến sau khi đã nấu chín, trộn chung với dầu mè và nước tương cho vừa ăn, sau đó sẽ được cuộn lại bên trong rong biển và chiên giòn. Đơn giản vậy thôi nhưng lại rất giòn, ngon. Đây cũng chính là món ăn vặt được nhiều bạn trẻ Hàn Quốc ưa chuộng. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140245/Food%20Store/Korean/Mi%E1%BA%BFn_cu%E1%BB%99n_rong_bi%E1%BB%83n_chi%C3%AAn_gi%C3%B2n_axv6wy.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Kongguksu - Mì đậu nành lạnh",
    "price": 30000,
    "description": "Kongguksu là tên một món mì lạnh có phần nước súp được làm từ đậu nành nguyên chất, thích hợp thưởng thức vào mùa hè. Món mì này có vị thanh, đơn giản nhưng vẫn mang theo vị béo của đậu nành. Ngoài ra, trong mì còn có thêm dưa chuột sợi dài, thêm trứng hoặc rắc chút hạt vừng. Đây là một lựa chọn món ăn Hàn Quốc bổ dưỡng mà bạn không nên bỏ qua.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140245/Food%20Store/Korean/Kongguksu_bzqmj5.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Miến trộn Hàn Quốc Japchae",
    "price": 25000,
    "description": "Miến trộn Japchae là món ăn quen thuộc đối với các tín đồ đam mê nền ẩm thực Hàn Quốc. Món miến trộn này khá dễ ăn và cung cấp đủ chất dinh dưỡng bởi các nguyên liệu đa dạng như cà rốt, hành tây, nấm kim châm, hành tây, mộc nhĩ, dưa chuột, trứng gà, thịt thăn bò, cải bó xôi hoặc rau cải ngọt,… Tất cả được hòa quyện với nhau cùng dầu mè và nước tương. Nếu bạn không muốn ăn những món Hàn quá cay thì đây sẽ là lựa chọn bạn không nên bỏ qua.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140251/Food%20Store/Korean/Mi%E1%BA%BFn_tr%E1%BB%99n_H%C3%A0n_Qu%E1%BB%91c_Japchae_wflxoe.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Gopchang lòng nướng",
    "price": 25000,
    "description": "Hàn Quốc nổi tiếng với nhiều món nướng đặc sắc, trong số đó phải kể đến Gopchang lòng nướng. Để ăn món này thì Gopchang (phần thịt lòng) sẽ được cắt thành từng đoạn nhỏ vừa ăn, nướng lên sẽ có độ dai vừa phải, mềm, béo ngậy. Tất nhiên món ngon này rất thích hợp để uống với rượu soju, là món ăn Hàn Quốc quen thuộc trong các bữa tiệc thịt nướng.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140241/Food%20Store/Korean/Gopchang_l%C3%B2ng_n%C6%B0%E1%BB%9Bng_bx4eab.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Samgyeopsal",
    "price": 250000,
    "description": "Nhắc đến Hàn Quốc không thể không nhắc đến món Samgyeopsal. Đây là món thịt ba chỉ nướng quốc dân của người dân xứ Hàn. Thịt sẽ không tẩm ướp gia vị gì cả mà nướng thẳng trên bếp. Trong thời gian đợi thịt chín vừa nhâm nhi chút rượu soju, vừa trò chuyện về những tất bật trong cuộc sống với hội bạn thì còn gì bằng. Thịt sau khi chín sẽ được chấm với nước sốt đặc trưng, vị ngọt của thịt hòa quyện cùng sốt cay vô cùng đậm đà.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140244/Food%20Store/Korean/Samgyeopsa_guxpxc.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cua ngâm tương",
    "price": 50000,
    "description": "Món cua ngâm tương bắt nguồn từ Hàn Quốc này cũng từng làm mưa làm gió suốt một thời gian dài trong cộng đồng ẩm thực tại việt Nam. Dù có vẻ ngoài bắt mắt, nhưng món ăn này lại khá kén người ăn. Bởi nhiều người sẽ cảm thấy hơi sợ khi nhìn những con cua còn tươi sống với mùi hơi ngai ngái mà chẳng qua một bước chế biến nào. Tuy nhiên, nếu bạn có thể ăn được thì chắc chắn sẽ “ghiền” ngay món này.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140245/Food%20Store/Korean/Cua_ng%C3%A2m_t%C6%B0%C6%A1ng_ipmxxl.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Mì hải sản cay Jjambbong",
    "price": 40000,
    "description": "Mì hải sản cay Jjambbong là một món ăn Hàn Quốc nổi tiếng trong giới ẩm thực tại Việt Nam bởi độ ngon miệng, vị cay đậm đà khó quên. Thông thường các nguyên liệu chủ yếu của món mì cay này gồm có củ cải trắng, kim chi, xúc xích, xương gà, tôm sú, mực ống, chả cá Hàn Quốc, nấm linh chi Hàn Quốc nấu kèm. Nếu bạn muốn thử thách khả năng ăn cay của mình với thật nhiều cấp độ thì đừng bỏ qua món ăn này nhé!",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667140244/Food%20Store/Korean/M%C3%AC_h%E1%BA%A3i_s%E1%BA%A3n_cay_Jjambbong_o1hlet.jpg",
    "category": "korean",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Sushi",
    "price": 25000,
    "description": "Sushi là món ăn kết hợp giữa gạo, giấm và hải sản (mặc dù đôi khi các thành phần khác cũng được sử dụng). Có một loại sushi lên men, được gọi là nare-zushi, nhưng loại sushi tiêu biểu nhất là nigirizushi và temakizushi. Thông thường, mọi người thường liên tưởng đến những miếng cá sống khi nhắc đến món ăn này, tuy nhiên vẫn còn rất nhiều loại khác cho những người không thích đồ sống như tôm luộc hay lươn (biển) nướng.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441908/Food%20Store/Japanese/sushi_d6qrjl.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Tempura",
    "price": 30000,
    "description": "Tempura là một món ăn trong đó hải sản, rau quả tươi và các thành phần khác được nhúng vào bột và bột trứng rồi đem chiên giòn. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441909/Food%20Store/Japanese/tempura-s645418474_rrqzhb.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Sukiyaki",
    "price": 200000,
    "description": "Sukiyaki là một món ăn trong đó thịt và rau được hầm trong nồi sắt. Nước sốt, được gọi là warishita, được làm từ nước tương và đường.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441908/Food%20Store/Japanese/sukiyaki-s775724272_v42nlk.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Mì Ramen",
    "price": 25000,
    "description": "Ramen là một món mì được phát triển trở nên vô cùng phổ biến và được coi là món ăn điển hình cho ẩm thực Nhật Bản. Ban đầu, nước mì được làm từ xương gà, nhưng trong những năm gần đây, thịt lợn, thịt bò và hải sản cũng được sử dụng trong món súp, tạo ra một loạt các hương vị đa dạng.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441908/Food%20Store/Japanese/ramen-s1156772548_ria5zm.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cơm cà ri",
    "price": 30000,
    "description": "Mặc dù cà ri có nguồn gốc từ Ấn Độ, nhưng cà ri chúng ta ăn ở Nhật Bản là một món ăn độc đáo, đã được Nhật Bản hóa dựa trên món cà ri được du nhập từ Anh Quốc. Được chế biến từ thịt và rau (cà rốt, khoai tây, hành tây, v.v.) kết hợp với hương thơm của bột cà ri, sau đó đem hầm, và ăn với cơm.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441905/Food%20Store/Japanese/curryrice-s227377714_pccpvy.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Tonkatsu",
    "price": 30000,
    "description": "Tonkatsu là món ăn gần giống với món thịt lợn cốt lết kiểu phương Tây, trong đó những lát thịt lợn dày được nhúng vào bột và đánh trứng, phủ trong vụn bánh mì và được chiên trong dầu.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441909/Food%20Store/Japanese/tonkatsu-s664729390_vzq04e.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Mì Soba",
    "price": 30000,
    "description": "Một món mì làm từ bột kiều mạch ăn với nước tương và nước sốt đường, và có đồ kèm như trứng, tempura,...",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441908/Food%20Store/Japanese/soba-s1716892303_x3e5va.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Mì Udon",
    "price": 25000,
    "description": "Một món mì này làm từ bột mì nhào, và ăn với nước sốt làm từ nước tương và đường, tương tự như mì soba.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441906/Food%20Store/Japanese/hot-udon-s1768735691_nccdgq.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Karaage",
    "price": 35000,
    "description": "Karaage là thịt gà được ướp với nước tương, muối và một số loại gia vị khác nhau, tẩm bột và chiên trong dầu.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441907/Food%20Store/Japanese/karaage-s736494154_x8lfrg.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Yakitori",
    "price": 30000,
    "description": "Yakitori là một món ăn trong đó thịt gà xiên được ướp với nước sốt ngọt hoặc nước tương và đem nướng lên. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441910/Food%20Store/Japanese/yakitori-s561317050_palvpm.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Yakiniku",
    "price": 15000,
    "description": "Yakiniku là một món ăn trong đó thịt bò được ướp với nước sốt, và nướng trực tiếp trên lửa. Độ tươi của thịt rất quan trọng đối với món ăn này. Bằng cách nướng nhẹ, bạn có thể thưởng thức hương vị mềm mại của thịt bò Nhật Bản.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441909/Food%20Store/Japanese/yakiniku-s696400678_eor4rd.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Sashimi",
    "price": 40000,
    "description": "Sashimi là một món ăn truyền thống của Nhật Bản với cá sống được cắt thành miếng nhỏ và ăn kèm với nước tương. Bằng cách thêm gia vị như wasabi hoặc gừng, sashimi sẽ ngon hơn.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441909/Food%20Store/Japanese/sashimi_s1633696672_suadgl.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cơm Gyudon",
    "price": 30000,
    "description": "Gyudon là món cơm phủ thịt bò, đã trở thành một món ăn phổ biến trên khắp thế giới. Tuy nhiên, món gyudon bạn ăn ở Nhật Bản có thể hơi khác với những món bạn đã thưởng thức ở những nơi khác. Đầu tiên là do chất lượng gạo là khác nhau. Trong các nhà hàng gyudon Nhật Bản, họ chú trọng đến hương vị hài hòa giữa thịt bò và gạo hơn là giá thành của chúng. Ngoài ra, khi thưởng thức bạn cũng có thể đập trứng lên trên món cơm này.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441906/Food%20Store/Japanese/gyudon-s1087462475_fa5q8g.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Chankonabe",
    "price": 200000,
    "description": "Một món ăn mà thịt và rau rất bổ dưỡng được luộc trong một cái nồi lớn, chankonabe nổi tiếng là món ăn được các đô vật sumo thường xuyên ăn để duy trì trọng lượng cơ thể của họ. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441906/Food%20Store/Japanese/chankonabe-s699811375_tuflma.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Lẩu Motsunabe",
    "price": 400000,
    "description": "Một món ăn nổi tiếng từ Fukuoka, trong đó nội tạng bò và lợn được nấu trong nồi với nhiều loại rau khác nhau, chẳng hạn như bắp cải và tỏi tây Trung Quốc, được gọi là nira (hẹ) trong tiếng Nhật. Bạn có thể thêm nhiều nguyên liệu khi bạn nấu nó, có nghĩa là bạn có thể ăn bao nhiêu tùy thích.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441906/Food%20Store/Japanese/motsunabe-s1214899360_tmdopz.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cơm nắm Onigiri",
    "price": 20000,
    "description": "Onigiri là cơm nắm có chút vị muối và thường nhân bên trong như umeboshi (mơ khô), cá hồi hoặc trứng cá tuyết, tất cả được bọc trong một tấm nori (rong biển khô). ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441907/Food%20Store/Japanese/onigiri-s1110742889_gmxcvt.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cua",
    "price": 500000,
    "description": "Cua là món ăn phổ biến ở khắp nơi trên thế giới, nhưng cua ở Nhật Bản thì vô cùng đặc biệt, trong đó phải kể đến món cua lông (kegani), với thịt ngon và hương vị là tinh tế. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441908/Food%20Store/Japanese/pixta_25944240_M__1_culxtx.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Thịt cừu nướng (Jingisukan)",
    "price": 300000,
    "description": "Đây là một món ăn địa phương từ Hokkaido và tỉnh Iwate. Một món ăn mà thịt cừu và rau được nấu trong một cái nồi đặc biệt trong đó phần trung tâm được nâng lên. Thịt được nấu ở phần trung tâm của nồi, cho phép nước ngọt từ thịt chảy xuống và ngấm vào rau ở hai bên nồi. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441906/Food%20Store/Japanese/jingisukan-s1618073422_qrsunr.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cơm Katsudon",
    "price": 40000,
    "description": "Một món ăn trong đó tonkatsu và hành tây được đun sôi trong nước sốt, sau đó cho thêm nước tương có phủ trứng đánh. Tonkatsu vừa được chiên xong ăn rất ngon, nhưng katsudon là một hương vị hoàn toàn mới. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441907/Food%20Store/Japanese/katsudon-s1039295812_pvlg5k.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Fugu",
    "price": 60000,
    "description": "Fugu, hay cá nóc trong tiếng Việt, là một loại cá độc chỉ có thể được chế biến hợp pháp tại các nhà hàng được cấp phép.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441905/Food%20Store/Japanese/fugu-sashimi-s209784100_vkzm1d.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Nikujaga",
    "price": 40000,
    "description": "Đây là một ví dụ về món ăn truyền thống tại nhà của Nhật Bản nơi khoai tây và thịt được luộc trong nước tương và nước sốt có đường. Cà rốt và shirataki (mì làm từ konnyaku) đôi khi cũng được thêm vào món ăn này. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441907/Food%20Store/Japanese/nikujaga-s718429702_lpz4tx.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Mì xào Yakisoba",
    "price": 35000,
    "description": "Một món gồm mì xào, thịt lợn, bắp cải, giá đỗ và các thành phần khác, và nước sốt Worcester phủ bên trên. Sốt yakisoba thường được trang trí với gừng đỏ, và rắc rong biển khô.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441910/Food%20Store/Japanese/yakisoba-s1014882166_t6b6as.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cơm trứng",
    "price": 60000,
    "description": "Một món ăn mà cơm, thịt gà và hành tây được chiên cùng nhau có hương vị với sốt cà chua, và sau đó được phủ một miếng trứng tráng mỏng lên trên. Bạn có thể ăn món này với sốt cà chua hoặc nước sốt demi-glace. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441908/Food%20Store/Japanese/omurice-s665668138_xz9shy.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Kamameshi",
    "price": 70000,
    "description": "Kamameshi là một món ăn mà các phần cơm riêng lẻ được nấu trong một chiếc nồi, được gọi là kama, với nước tương, mirin và các thành phần khác.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441906/Food%20Store/Japanese/kamameshi-s1484323196_i9mlvz.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Salad khoai tây",
    "price": 40000,
    "description": "Món salad khoai tây phiên bản Nhật này sử dụng mayonnaise Nhật Bản có hương vị hơi khác so với mayonnaise châu Âu, mang đến cho bạn một hương vị mới lạ và vô cùng độc đáo. Ngô, dưa chuột, cà rốt và hành tây cũng thường được thêm vào món ăn.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441905/Food%20Store/Japanese/japanese-potato-salad-s1846285570_yjnkh4.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Súp Miso",
    "price": 35000,
    "description": "Miso-shiru (súp miso) là món súp đặc trưng của Nhật Bản. Được làm bằng cách hòa tương miso vào nước dùng (được gọi là dashi) được làm từ vụn cá ngừ, tảo konbu và các thành phần khác. Thông thường, súp miso được nấu với đậu phụ, rong biển wakame và củ cải.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441908/Food%20Store/Japanese/pixta_42843189_M__1_kggejb.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Đậu phụ",
    "price": 30000,
    "description": "Đậu phụ đã trở nên nổi tiếng ở nước ngoài, nhưng nếu bạn đến Nhật Bản thì đây vẫn là một trong những món bạn không thể bỏ qua!",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441909/Food%20Store/Japanese/tofu-s1633600639_prlzjx.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cơm Tamagokake gohan",
    "price": 30000,
    "description": "Một món cơm mà trứng sống được trộn với nước tương và đổ lên cơm nóng.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441909/Food%20Store/Japanese/tamago-kake-gohan-s1406811143_dedel4.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Bánh mì ngọt (Kashipan)",
    "price": 40000,
    "description": "Đây là loại bánh ngọt bạn có thể tìm thấy khi ghé thăm một cửa hàng tiện lợi hoặc tiệm bánh với nhiều hương vị khác nhau. Bạn có thể lựa chọn các loại bánh như anpan (bánh mì nhân đậu đỏ) và bánh cà ri (với nước sốt cà ri ở giữa), hoặc melon pan (bánh mì có hương vị dưa lưới).",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667441908/Food%20Store/Japanese/Kashipan-p70745725_pufsja.jpg",
    "category": "japan",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Pizza",
    "price": 250000,
    "description": " Bánh pizza lúc nào cũng rất bắt mắt bởi phần nhân bên trên đầy màu sắc tươi sáng từ đủ loại nguyên liệu như rau củ, hải sản cùng lớp phủ phô mai vàng óng.Đế bánh mềm vừa phải khi ăn lại không bị ngán bởi chúng đã được nướng nóng giòn vô cùng, phần sốt cà chua đậm đà quyện với rau củ ngọt thanh cùng hải sản tươi, khi ăn rất ngọt thịt.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667447348/Food%20Store/European/piza_benob6.jpg",
    "category": "european",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Caesar salad",
    "price": 30000,
    "description": "Nhắc tới món Tây thì không thể thiếu salad được rồi, để Điện máy XANH mách bạn món Caesar salad nức tiếng trời Tây này nhé.Điểm nhấn của món ăn này chính là hai loại nguyên liệu đặc biệt gồm phô mai Parmesan và xà lách Roman có nguồn gốc từ nước Ý xa xôi.Phần xà lách tươi xanh, áo đều nước sốt chua chua, ngọt ngọt, trộn cùng hô mai béo ngậy, thịt xông khói thơm lừng và vụn bánh mì giòn tan vô cùng bắt miệng.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667447348/Food%20Store/European/salad_hu9mik.jpg",
    "category": "european",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {

    "title": "Khoai tây nghiền",
    "price": 40000,
    "description": "Nếu là tín đồ của ẩm thực Tây, đồ Âu chắc chắn bạn không thể bỏ qua món khoai tây nghiền thơm ngon, dễ ăn này rồi.Khoai tây nghiền dùng khi còn nóng là ngon nhất, hương thơm của khoai tây lẫn với vị mặn mặn, béo ngậy của bơ và sữa tươi giúp bạn không hề có cảm giác bị ngấy khi ăn.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667447346/Food%20Store/European/a3-800x450-1_gcqsyu.jpg",
    "category": "european",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Khoai tây đút lò",
    "price": 45000,
    "description": "Một món ngon mà từ khoai tây mà chúng mình muốn gợi ý cho bạn trong thực đơn buổi tiệc chính là khoai tây đút lò. Khoai tây được nướng lên cùng với phô mai, bơ nên có hương thơm cực kích thích và màu vàng ươm bắt mắt vô cùng.Lớp phô mai kẹp giữa các lát khoai tây khi nướng tan chảy, thêm lớp sữa chua trắng tinh phủ lên trên, vài lát thịt xông khói thơm lừng, một chút lá hương thảo xanh xanh.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667447347/Food%20Store/European/a4-800x450-1_vyizfp.jpg",
    "category": "european",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Hamburger bò phô mai",
    "price": 55000,
    "description": "Món bánh hamburger này chắc chắn không còn xa lạ gì với các bạn rồi đúng không? Lớp vỏ bánh mềm, ruột xốp bên trong ngập ngụa nhân thịt bò nhìn là muốn cắn ngay một phát.Phần nhân bánh với miếng thịt bò băm nhuyễn, ướp gia vị vừa ăn rồi mang đi chiên vàng, thơm nức mũi. Thêm cà chua, rau xà lách tươi ngon, phô mai béo ngậy, tương ớt cay cay, sốt mayonnaise ăn kèm tạo nên sự hòa quyện tuyệt vời.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667447348/Food%20Store/European/hamburger_uadpoc.jpg",
    "category": "european",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Bò hầm rau củ kiểu Pháp",
    "price": 65000,
    "description": "Mang hương vị của nhà hàng hạng sang về nhà bạn với món bò hầm rau củ kiểu Pháp độc đáo này thôi nào. Điểm nhấn của món bò hầm rau củ này chính là phần nước sốt, vị ngọt của nước sốt chính là sự kết hợp hài hòa của vị ngọt từ thịt bò và ngọt thanh từ các loại rau củ như cà rốt, nấm linh chi trắng, khoai tây, hành tây,... nấu cùng.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667447347/Food%20Store/European/bo-ham_bzbbit.jpg",
    "category": "european",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Mỳ Ý sốt cà chua bò bằm - Mì sốt spaghetti",
    "price": 55000,
    "description": "Những sợi mì vàng tươi, được luộc vừa chín ngập tràn trong sốt cà chua thịt băm đỏ sậm. Trộn đều và thưởng thức bạn sẽ cảm nhận được đội dai dai, mềm mềm của mì Ý, phần sốt chua chua, ngọt ngọt, béo béo, thịt bò vừa ăn, mềm thơm.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667447348/Food%20Store/European/sphageti_xvchr9.jpg",
    "category": "european",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cá hồi sốt chanh dây",
    "price": 70000,
    "description": "Cá hồi sốt chanh dây là món ăn vừa thơm ngon, vừa đầy dinh dưỡng. Phần thịt cá hồi áp chảo vàng thơm, pha thêm chút màu xanh tươi của măng tây và bông cải, màu đỏ của cà chua, cà rốt, màu vàng của khoai tây.Phần hình thức đã đẹp rồi thì phần hương vị lại không chê vào đâu được. Thịt cá được áp chảo với bơ nên vừa thơm, vừa béo, vừa giữ được độ ngọt tự nhiên.Nước sốt chanh dây chua chua, ngọt ngọt làm tăng thêm hương vị thơm ngon cho món ăn. Ngoài ra còn có thêm măng tây giòn ngọt, các loại rau củ tươi ngon ăn kèm, chống ngán.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667447347/Food%20Store/European/a8-800x450-1_kcghfn.jpg",
    "category": "european",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Nui đút lò phô mai",
    "price": 56000,
    "description": "Lớp phô mai kéo sợi bên ngoài khi nướng lên sẽ có mùi thơm rất cuốn hút. Phần nui bên dưới thấm nước sốt cà chua thịt bò vừa chua chua, ngọt ngọt vừa có vị béo của sữa tươi.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667447347/Food%20Store/European/a10-800x450-1_nweyqy.jpg",
    "category": "european",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Gà đút lò",
    "price": 500000,
    "description": "Không thể bỏ qua món gà đút lò cực thơm ngon, cuốn hút trong bữa tiệc các món Tây hôm nay được. Phần thịt gà với lớp da được áp chảo vàng ươm rồi mang đi đút lò nên có độ giòn và độ bóng, nhìn thôi là đã muốn ăn ngay.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667447347/Food%20Store/European/a11-800x450_jbix5q.jpg",
    "category": "european",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Khoai tây nướng phô mai",
    "price": 45000,
    "description": "Những lát khoai tây bào mỏng được nướng cùng các loại nguyên liệu như bơ, kem sữa và phô mai cho ra hương thơm khó cưỡng. Phần khoai mềm, thơm, bùi bùi quyện cùng với phô mai tan chảy, có vị béo đặc trưng. Nếu bạn là tín đồ của phô mai thì không thể bỏ lỡ món khoai tây nướng này đâu nhé.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667447347/Food%20Store/European/a12-800x450_yfmwgg.jpg",
    "category": "european",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Sò bơ Mỹ nướng",
    "price": 57000,
    "description": "Những con sò bơ to, cùi thịt cực dày được nướng cùng với sốt phô mai cực thơm, cuốn hút vô cùng.Nước sốt phô mai vừa có vị béo béo, ngọt thơm của phô mai và sữa, thêm một chút cay cay của ớt bột kích thích vị giác, chắc hẳn khi bạn ăn một miếng là sẽ mê ngay đấy.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667447347/Food%20Store/European/a13-800x450_n8wuhm.jpg",
    "category": "european",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Súp tỏi",
    "price": 40000,
    "description": "Một món ăn vô cùng độc đáo đến từ Ý và Tây Ban Nha chính là súp tỏi. Nghe có vẻ lạ và tạo cho nhiều người cảm giác khó ăn, nhưng bạn yên tâm hương vị của món ăn này không tệ chút nào.Phần súp với các nguyên liệu được xay nhuyễn mịn, màu trắng sữa rất hấp dẫn thêm phần bánh mì được chiên vàng rắc lên trên.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667447347/Food%20Store/European/a14-800x450_qfpfrv.jpg",
    "category": "european",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Thịt viên phô mai đút lò",
    "price": 100000,
    "description": "Thịt bò sẽ được rưới 1 lớp nước sốt cà chua, chua ngọt đậm đà, thêm 1 lớp phô mai siêu dày mà cho vào lò nướng. Mùi phô mai nướng tan chảy sẽ kích thích tất cả các giác quan của bạn.Nhìn những viên thịt đẫm sốt và ngập tràn phô mai là đã thấy mê mệt rồi. Hương vị của món thịt này đúng là cực phẩm bởi sự kết hợp giữa các loại nguyên liệu với nhau một cách rất hòa quyện.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667447347/Food%20Store/European/a15-800x450_o8xdrb.jpg",
    "category": "european",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Beef Wellington",
    "price": 1000000,
    "description": "Beef Wellington is a steak dish of English origin, made out of fillet steak coated with pâté (often pâté de foie gras) and duxelles, wrapped in puff pastry, then baked. Some recipes include wrapping the coated meat in a crêpe or parma ham to retain the moisture and prevent it from making the pastry soggy.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667448552/Food%20Store/European/Beef_Wellington_2019_lwfmjb.jpg",
    "category": "european",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Rượu Whishey Scotland",
    "price": 2500000,
    "description": "Đây là loại rượu được sản xuất tại Scotland & Ireland, là dòng rượu được nhiều khách hàng ưa chuộng. Rượu có nguyên liệu chính là nước, mạch nha cùng các phụ gia khác được chưng cất bằng hộp làm từ nguyên liệu đồng và chứa trong loại thùng gỗ sồi. Rượu gồm 2 loại là Whiskey và Whiskey Scotland – Ireland.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667452937/Food%20Store/Drink/protected_1547784088_ruou-whisky-scotland-monkey-shoulder_mhhlo4.jpg",
    "category": "drink",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Rượu Cognac",
    "price": 1000000,
    "description": "Đây là hãng rượu hàng đầu của Pháp, là những loại rượu ngoại nổi tiếng được nhiều khách hàng tìm mua nhất. Rượu Cognac có vẻ bề ngoài quyến rũ với các họa tiết tinh tế và mùi hương mạnh mẽ của gỗ sồi cùng những phức hợp hương vị khó có thể diễn tả được.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667452937/Food%20Store/Drink/ruou-hennessy-vsop-cognac-phap-compress_r2v9g1.jpg",
    "category": "drink",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Rượu nho Sherry",
    "price": 1000000,
    "description": "Rượu được sản xuất từ vùng Andalusia thuộc miền Nam của Tây Ban Nha. Rượu được chia làm 2 loại chính là Fino và Oloroso, được lên men thành rượu vang và được pha cùng với rượu mạnh. Sau cùng được trữ trong thùng là bằng gỗ sồi theo dây chuyền Solera.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667452938/Food%20Store/Drink/R%C6%B0%E1%BB%A3u-Vang-Lustau-Solera-Oloroso-Don-Nuno-Sherry-1_oo22b2.jpg",
    "category": "drink",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Rượu Chivas",
    "price": 2000000,
    "description": "Rượu Chivas cũng đến từ đất nước Scotland, là loại rượu Whisky phổ biến trên thế giới. Hầu hết các loại rượu Chivas đều được ủ trong thùng gỗ sồi ít nhất 12 năm trước khi bán ra thị trường.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667452937/Food%20Store/Drink/ruou-chivas-18-nam_l1cxwi.jpg",
    "category": "drink",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Rượu Hennsessi",
    "price": 1000000,
    "description": "Rượu cũng là một nhãn hiệu hàng đầu của Pháp sau hơn 200 năm tồn tại và phát triển. Hennsessi là loại rượu mạnh, được pha trộn của hơn 100 loại cồn, là một phức hợp với mùi hương đậm đà và hương thơm hoàn hảo biểu lộ sự đa dạng, chiều sâu, cân bằng tạo nên hương vị hoàn toàn khác biệt và ấn tượng.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667452937/Food%20Store/Drink/ruou-hennessy-vsop-cognac-phap-compress_r2v9g1.jpg",
    "category": "drink",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Rượu AB Solut",
    "price": 1000000,
    "description": "Nhãn hiệu rượu này lại đến từ đất nước Thụy Điển. Khác với những loại rượu trên, với hương thơm thanh nhã của lúa mì mạch nha quyện với mùi trái cây khô thật quyến rũ nên đã có mặt ở hơn 130 quốc gia trên thế giới và cũng rất được ưa chuộng tại Việt Nam. Rượu có nhiều vị khác nhau rất thích hợp cho các tiệc rượu hoặc giao lưu bạn bè, sẽ là lựa chọn ưa thích cho cả nam và nữ khi thưởng thức với nồng độ cồn vừa phải.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667452937/Food%20Store/Drink/ruou-Absolut-Elyx_cm7vdw.jpg",
    "category": "drink",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Rượu Johnnie Waker",
    "price": 1000000,
    "description": "Đây cũng là loại rượu Whisky nổi tiếng với logo ông già chống gậy. Rượu mang đến cho người thưởng thức những trải nghiệm tinh tế với sự êm dịu và thanh nhã cùng vị kem, tạo nên một niềm vui thích bất tận, một hỗn hợp đầy cảm hứng từ mạch nha Clynelish được hòa quyện cùng nước suối chảy qua vàng nguyên chất.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667452936/Food%20Store/Drink/johnnie-walker-gold-reserve-399_mzzadt.jpg",
    "category": "drink",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Rượu Remy Martin",
    "price": 2000000,
    "description": "Rượu Remy Martin cũng đến từ vùng Cognac – Pháp, không chỉ nổi tiếng là dòng rượu ngon mà còn có thiết kế độc đáo khiến người nhìn khó có thể rời mắt. Màu của rượu là màu vàng cũ, vị rượu nhẹ nhàng, đầm cộng thêm hương vị kết hợp giữa nho và men rượu mang đến sự hưng phấn mạnh mẽ cho bạn. Quá trình chưng chất rượu này cũng rất công phu, đòi hỏi sự tỉ mỉ từng chút để cho ra đời một loại rượu đặc trưng với sự kết hợp các hương vị khác nhau.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667452937/Food%20Store/Drink/remy-martin-finechampagne_kyowb6.jpg",
    "category": "drink",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Rượu Martell",
    "price": 1000000,
    "description": "Rượu ra đời năm 1715, là một trong những hãng rượu Cognac cổ xưa nhất chỉ sau Remy Martin. Hãng rượu Martell luôn cố gắng tạo ra dòng Cognac tinh khiết, mềm mại, không sử dụng lại cặn rượu để chưng cất. Từ đó tạo nên những sản phẩm cao cấp, hương thơm nổi trội mang phong cách cổ điển, một chút vị champagnes, vị gỗ già xứ Phần Lan.",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667452938/Food%20Store/Drink/martell-v-s-o-p-medaillon-cognac-france_jimkoc.jpg",
    "category": "drink",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Rượu Swing",
    "price": 1700000,
    "description": "Rượu là dòng Whisky pha trộn cao cấp của Scotland, được chứa đựng trong một thiết kế tinh xảo, là chai thon cổ duy nhất. Người thiết kế chính là ngài Alexander Walker – ông chủ của dòng rượu này và cũng là cháu trai của John Walker vào lúc đi du ngoạn vàng vào năm 1932. Mỗi người trong chúng ta luôn muốn được thưởng thức những dòng rượu ngon nhất thế giới này. ",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667452938/Food%20Store/Drink/Johnnie-Walker-Swing-Blended-Whisky-1260x1534_lglyke.jpg",
    "category": "drink",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Nước lọc Aqua",
    "price": 10000,
    "description": "",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667453745/Food%20Store/Drink/aqua_nubbsv.jpg",
    "category": "drink",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Pessi",
    "price": 20000,
    "description": "",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667453746/Food%20Store/Drink/pessi_mq89rl.webp",
    "category": "drink",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Coca Cola",
    "price": 20000,
    "description": "",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667453747/Food%20Store/Drink/cocacola_xjordh.png",
    "category": "drink",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "StrongBow",
    "price": 30000,
    "description": "",
    "image": "https://res.cloudinary.com/dxttukxhg/image/upload/v1667453746/Food%20Store/Drink/strong_vpvcgu.jpg",
    "category": "drink",
    "rating": {
      "rate": 5,
      "count": 200
    }
  }
]


module.exports = products;


