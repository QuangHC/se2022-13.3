# se2022-13.3

## **Blockchain là gì? Hoạt động của Blockchain như thế nào? Ứng dụng ra sao?**

### **1. Blockchain là gì? (khái niệm, phân loại, phiên bản mới nhất)**

#### **Khái niệm**
Blockchain là công nghệ chuỗi – khối, cho phép truyền tải dữ liệu một cách an toàn dựa trên hệ thống mã hóa vô cùng phức tạp, tương tự như cuốn sổ cái kế toán của một công ty, nơi mà tiền được giám sát chặt chẽ và ghi nhận mọi giao dịch trên mạng ngang hàng. 
Mỗi khối (block) đều chứa thông tin về thời gian khởi tạo và được liên kết với khối trước đó, kèm theo đó là một mã thời gian và dữ liệu giao dịch. Dữ liệu khi đã được mạng lưới chấp nhận thì sẽ không có cách nào thay đổi được. Blockchain được thiết kế để **chống lại việc gian lận, thay đổi của dữ liệu.**

![image](https://user-images.githubusercontent.com/106605829/204236125-22e718d2-5235-4c0b-88d9-3699b461d91c.png)

#### **Công nghệ Blockchain – sự kết hợp giữa 3 loại công nghệ:**
- **Mật mã học**: để đảm bảo tính minh bạch, toàn vẹn và riêng tư thì công nghệ Blockchain đã sử dụng public key và hàm hash function.
- **Mạng ngang hàng**: Mỗi một nút trong mạng được xem như một client và cũng là server để lưu trữ bản sao ứng dụng.
- **Lý thuyết trò chơi**: Tất cả các nút tham gia vào hệ thống đều phải tuân thủ luật chơi đồng thuận (giao thức PoW, PoS,…) và được thúc đẩy bởi động lực kinh tế.

#### **Hệ thống Blockchain chia thành 3 loại chính:**
- **Public**: Bất kỳ ai cũng có quyền đọc và ghi dữ liệu trên Blockchain. Quá trình xác thực giao dịch trên Blockchain này đòi hỏi phải có rất nhiều nút tham gia. Vì vậy, muốn tấn công được vào hệ thống Blockchain này cần chi phí rất lớn và thực sự không khả thi. Ví dụ: Bitcoin, Ethereum,…
- **Private**: Người dùng chỉ được quyền đọc dữ liệu, không có quyền ghi vì điều này thuộc về bên tổ chức thứ ba tuyệt đối tin cậy. Vì đây là một Private Blockchain, cho nên thời gian xác nhận giao dịch khá nhanh vì chỉ cần một lượng nhỏ thiết bị tham gia xác thực giao dịch. Ví dụ: Ripple là một dạng Private Blockchain, hệ thống này cho phép 20% các nút là gian dối và chỉ cần 80% còn lại hoạt động ổn định là được.
- **Permissioned (hay còn gọi là Consortium)**: một dạng của Private nhưng bổ sung thêm 1 số tính năng khác, đây là sự kết hợp giữa Public và Private. Ví dụ: Các ngân hàng hay tổ chức tài chính liên doanh sẽ sử dụng Blockchain cho riêng mình.
- 
![image](https://user-images.githubusercontent.com/106605829/204236174-74672f6b-c2cd-4792-b088-681d8575f5ab.png)

#### **Các phiên bản của công nghệ Blockchain**
- **Công nghệ Blockchain 1.0** – Tiền tệ và Thanh toán: Ứng dụng chính của phiên bản này là tiền mã hoá: bao gồm việc chuyển đổi tiền tệ, kiều hối và tạo lập hệ thống thanh toán kỹ thuật số. Đây cũng là lĩnh vực quen thuộc với chúng ta nhất mà đôi khi khá nhiều người lầm tưởng Bitcoin và Blockchain là một.
- **Công nghệ Blockchain 2.0** – Tài chính và Thị trường: Ứng dụng xử lý tài chính và ngân hàng: mở rộng quy mô của Blockchain, đưa vào các ứng dụng tài chính và thị trường. Các tài sản bao gồm cổ phiếu, chi phiếu, nợ, quyền sở hữu và bất kỳ điều gì có liên quan đến thỏa thuận hay hợp đồng.
- **Công nghệ Blockchain 3.0** – Thiết kế và Giám sát hoạt động:  Đưa Blockchain vượt khỏi biên giới tài chính, và đi vào các lĩnh vực như giáo dục, chính phủ, y tế và nghệ thuật. 
- 
![image](https://user-images.githubusercontent.com/106605829/204236267-2cb87e85-589d-4afa-b6e8-f838319354b1.png)

### **2. Các đặc điểm nổi bật của Blockchain**

#### **Blockchain có các đặc điểm nổi bật sau:**

- **Không thể làm giả, không thể phá hủy các chuỗi Blockchain:** theo như lý thuyết thì chỉ có máy tính lượng tử mới có thể giải mã Blockchain và công nghệ Blockchain biến mất khi không còn Internet trên toàn cầu.
- **Bất biến:** dữ liệu trong Blockchain không thể sửa (có thể sửa nhưng sẽ để lại dấu vết) và sẽ lưu trữ mãi mãi.
- **Bảo mật:** Các thông tin, dữ liệu trong Blockchain được phân tán và an toàn tuyệt đối.
- **Minh bạch:** Ai cũng có thể theo dõi dữ liệu Blockchain đi từ địa chỉ này tới địa chỉ khác và có thể thống kê toàn bộ lịch sử trên địa chỉ đó.
- **Hợp đồng thông minh:** là hợp đồng kỹ thuật số được nhúng vào đoạn code if-this-then-that (IFTTT), cho phép chúng tự thực thi mà không cần bên thứ ba.

### **3. Blockchain hoạt động như thế nào**

Ứng dụng được biết đến và thảo luận nhiều nhất về công nghệ Blockchain chính là **đồng tiền điện tử**. Bitcoin là một đơn vị tiền tệ kỹ thuật số với mã là BTC, cũng giống như đô la Mỹ bản thân nó không mang giá trị, nó chỉ có giá trị bởi vì có một cộng đồng đồng ý sử dụng nó làm đơn vị giao dịch hàng hóa và dịch vụ.

Để theo dõi số lượng Bitcoin mà mỗi người sở hữu trong các tài khoản nhất định và theo dõi các giao dịch phát sinh từ đó thì chúng ta cần đến một **cuốn sổ kế toán**, trong trường hợp này nó chính là Blockchain và đây thực tế là một tệp kỹ thuật số theo dõi tất cả các giao dịch Bitcoin.

![image](https://user-images.githubusercontent.com/106605829/204236434-fb436a6c-c76f-432e-ad36-7e3524f8e5df.png)

Tệp sổ cái này không được lưu trữ trong một máy chủ trung tâm, như trong một ngân hàng hoặc trong một trung tâm dữ liệu mà ngược lại nó được phân phối trên toàn thế giới thông qua một mạng lưới các máy tính ngang hàng với vai trò lưu trữ dữ liệu và thực thi các tính toán. Mỗi máy tính này đại diện cho một “nút” của mạng lưới Blockchain và mỗi nút đều có một bản sao của tệp sổ cái này.

![image](https://user-images.githubusercontent.com/106605829/204236515-b8cf3aec-0c9e-429c-84b2-018a4722e038.png)

#### **Nguyên lý mã hoá**

Trên thực tế, cuốn sổ cái luôn được duy trì bởi các máy tính trong **mạng ngang hàng** được kết nối với nhau. Vì thế, nó sẽ có một số điểm khác biệt:

  - Trong hệ thống ngân hàng, chúng ta chỉ biết các giao dịch và số dư tài khoản của riêng mình thì trên Blockchain của bitcoin bạn có thể xem các giao dịch của tất cả mọi người.
  - Mạng lưới Bitcoin là mạng lưới phân tán không cần **bên thứ ba đóng vai trò trung gian** xử lý giao dịch.
  - Hệ thống Blockchain được thiết kế theo cách không yêu cầu sự tin cậy và bảo đảm bởi độ tin cậy có được thông qua các hàm mã hóa toán học đặc biệt.

Để có thể thực hiện các giao dịch trên Blockchain, bạn cần một phần mềm sẽ cho phép bạn lưu trữ và trao đổi các đồng Bitcoin của bạn gọi là ví tiền điện tử. Ví tiền điện tử này sẽ được bảo vệ bằng một phương pháp mã hóa đặc biệt đó là sử dụng một cặp khóa bảo mật duy nhất: **khóa riêng tư (private key) và khóa công khai (public key)**.

Nếu một thông điệp được mã hóa bằng một khóa công khai cụ thể thì chỉ chủ sở hữu của khóa riêng tư là một cặp với khóa công khai này mới có thể giải mã và đọc nội dung thông điệp.

Khi mã hóa một yêu cầu giao dịch bằng khóa riêng tư, có nghĩa là bạn đang tạo ra một chữ ký điện tử được các máy tính trong mạng lưới Blockchain sử dụng để kiểm tra chủ thể gửi và tính xác thực của giao dịch. Chữ ký này là một chuỗi văn bản và là sự kết hợp của yêu cầu giao dịch và khóa riêng tư của bạn.
Nếu một ký tự đơn trong thông điệp yêu cầu giao dịch này bị thay đổi thì chữ ký điện tử sẽ thay đổi theo. Vì thế, hacker khó có thể thay đổi yêu cầu giao dịch của bạn hoặc thay đổi số lượng Bitcoin mà bạn đang gửi.

Để gửi Bitcoin (BTC), bạn cần chứng minh rằng bạn sở hữu khóa riêng tư của một chiếc ví điện tử cụ thể bởi bạn cần sử dụng nó để mã hóa thông điệp yêu cầu giao dịch. Sau khi tin nhắn của bạn đã được gửi đi và được mã hóa thì bạn không cần phải tiết lộ khóa riêng tư của bạn nữa.

#### **Quy tắc của sổ cái**

Mỗi nút trong Blockchain đều đang **lưu giữ một bản sao** của sổ kế toán. Do vậy, mỗi nút đều biết số dư tài khoản của bạn là bao nhiêu. Hệ thống Blockchain chỉ ghi lại mỗi giao dịch được yêu cầu chứ không hề theo dõi số dư tài khoản của bạn.

Để biết số dư trên ví điện tử của mình thì bạn cần xác thực và xác nhận tất cả các giao dịch đã diễn ra trên mạng lưới mà có liên quan tới ví điện tử của bạn.

Việc xác minh "số dư" này được thực hiện nhờ các tính toán dựa vào liên kết đến các giao dịch trước đó. Nhìn vào hình trên, để gửi 10 BTC cho John, Mary cần tạo yêu cầu giao dịch bao gồm các liên kết đến các giao dịch đã diễn ra trước đó với tổng số dư bằng hoặc vượt quá 10 BTC.

![image](https://user-images.githubusercontent.com/106605829/204236682-eee96eaa-43d2-40e7-bcd9-a1087d7ba689.png)

Các liên kết này được xem như là giá trị đầu vào, các nút trong mạng lưới sẽ xác minh xem tổng số tiền của các giao dịch này bằng hoặc vượt quá 10 BTC không. Tất cả điều này được thực hiện tự động trong ví điện tử của Mary và được kiểm tra bởi các nút trên mạng lưới Bitcoin, Mary chỉ gửi một giao dịch 10 bitcoin tới ví của John bằng khóa công khai của John.

![image](https://user-images.githubusercontent.com/106605829/204236722-827554be-a826-4216-a6a2-c3ffd75e7d54.png)

Thực tế là các nút sẽ kiểm tra tất cả các giao dịch có liên quan đến ví tiền điện tử bạn sử dụng trước đó để gửi Bitcoin (BTC) thông qua việc tham chiếu các lịch sử giao dịch. Có một bản ghi sẽ lưu trữ số BTC chưa được dùng và được các nút mạng lưu giữ giúp đơn giản hóa và tăng tốc quá trình xác minh. Vì thế, các ví tiền điện tử tránh được tình trạng chi tiêu đúp giao dịch.

Mã nguồn trên mạng lưới Bitcoin là nguồn mở, có nghĩa là bất kỳ ai có máy tính kết nối được internet đều có thể tham gia vào mạng lưới và thực hiện giao dịch.

Tuy nhiên, nếu có bất kỳ một **lỗi nào trong mã nguồn** được sử dụng để phát thông báo yêu cầu giao dịch thì các Bitcoin liên quan sẽ bị mất vĩnh viễn.

Hãy nhớ rằng, sẽ không có bộ phận hỗ trợ khách hàng hoặc không hề có bất cứ ai có thể giúp bạn khôi phục lại một giao dịch bị mất hoặc quên mật khẩu ví tiền điện tử của bạn vì đây là mạng phân tán. Vì thế, bạn cần phải lưu trữ mật khẩu hoặc khóa riêng tư của ví của bạn cực kỳ **cẩn thận và an toàn**.

#### **Nguyên lý tạo khối**

Các giao dịch sau khi được gửi lên trên mạng lưới Blockchain sẽ được nhóm vào các khối và các giao dịch trong cùng 1 khối (block) được coi là đã xảy ra cùng thời điểm. Các giao dịch chưa được thực hiện trong 1 khối được coi là chưa được xác nhận.
Mỗi nút có thể nhóm các giao dịch với nhau thành một khối và gửi nó vào mạng lưới như một hàm ý cho các khối tiếp theo được gắn vào sau đó. Bất kỳ nút nào cũng có thể tạo ra một khối mới. Vậy, câu hỏi đặt ra là: hệ thống sẽ đồng thuận với khối nào? khối nào sẽ là khối tiếp theo?

Để được thêm vào Blockchain, mỗi khối phải chứa một đoạn mã đóng vai trò như một đáp án cho một vấn đề toán học phức tạp được tạo ra bằng **hàm mã hóa băm không thể đảo ngược.**

Cách duy nhất để giải quyết vấn đề toán học như vậy là **đoán các số ngẫu nhiên**, những số khi mà kết hợp với nội dung khối trước tạo ra một kết quả đã được hệ thống định nghĩa. Điều này nhiều khi có thể mất khoảng một năm cho một máy tính điển hình với một cấu hình cơ bản có thể đoán đúng các con số đáp án của vấn đề toán học này.
Mạng lưới quy định mỗi khối được tạo ra sau một quãng thời gian là 10 phút một lần, bởi vì trong mạng lưới luôn có một số lượng lớn các máy tính đều tập trung vào việc đoán ra dãy số này. Nút nào giải quyết được vấn đề toán học như vậy sẽ được quyền gắn khối tiếp theo lên trên chuỗi và gửi nó tới toàn bộ mạng lưới.

Vậy điều gì sẽ xảy ra nếu hai nút giải quyết cùng một vấn đề cùng một lúc và truyền các khối kết quả của chúng đồng thời lên mạng lưới? Trong trường hợp này, cả hai khối được gửi lên mạng lưới và mỗi nút sẽ xây dựng các khối kế tiếp trên khối mà nó nhận được trước tiên.

Tuy nhiên, hệ thống Blockchain luôn yêu cầu mỗi nút phải xây dựng trên chuỗi khối dài nhất mà nó nhận được. Vì vậy, nếu có sự mơ hồ về việc block nào là khối cuối cùng thì ngay sau khi khối tiếp theo được giải quyết thì mỗi nút sẽ áp dụng vào chuỗi dài nhất.
Do xác suất việc xây dựng các block đồng thời là rất thấp nên hầu như không có trường hợp nhiều khối được giải quyết cùng một lúc và nhiều lần tạo ra các khối nối đuôi khác nhau. Do đó, toàn bộ chuỗi-khối sẽ nhanh chóng ổn định và hợp nhất lại khi mà mọi nút đều đồng thuận.

### **4. Ứng dụng thực tiễn của công nghệ Blockchain trong cuộc sống**

Một số ngành công nghiệp mà công nghệ Blockchain có thể **tác động** đến như:

  - Công nghệ ô tô Automotive (Automotive)
  - Chế tạo (Manufacturing)
  - Công nghệ, truyền thông và viễn thông (Tech, media & Telecommunications)
  - Dịch vụ tài chính (Financial Services)
  - Nghệ thuật & Giải trí (Art & Recreation)
  - Chăm sóc sức khỏe (Healthcare)
  - Bảo hiểm (Insurance)
  - Bán lẻ (Retail)
  - Khu vực công (Public Sector)
  - Bất động sản (Property)
  - Nông nghiệp (Agricultural)
  - Khai thác (Mining)
  - Vận tải và Logistics (Transport & Logistics)
  - Công trình hạ tầng kỹ thuật (Utility)




























