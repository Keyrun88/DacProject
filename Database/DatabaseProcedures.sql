create procedure c_creatUser(
    FirstName varchar(20),
    LastName varchar(20),
    Email varchar(20),
    SecurityQ varchar(50),
    Answer varchar(50),
    Password varchar(20)
) begin
insert into
    METCanteenSys.users(
        FirstName,
        LastName,
        Email,
        Password,
        SecurityQ,
        Answer
    )
values
    (
        inFirstName,
        inLastName,
        inEmail,
        inPassword,
        inSecurityQ,
        inAnswer
    );

end;



create procedure c_logineUser(inEmail varchar(20), inpassword varchar(20)) begin
select
    *
from
    METCanteenSys.users
where
    Email = inEmail
    and Password = inpassword
    and isCanteenManager = false;

end;



create procedure c_forgotPassword(inSecurityQ varchar(50), inAnswer varchar(50)) begin
select
    *
from
    METCanteenSys.users
where
    securityQ = inSecurityQ
    and Answer = inAnswer;

end;



create procedure c_updateProfile(
    inFirstName varchar(20),
    inLastName varchar(20),
    inEmail varchar(20),
    inUserId varchar(20),
    imageURL varchar(100)
) begin
update
    METCanteenSys.users
set
    FirstName = ifnull(inFirstName, FirstName),
    LastName = ifnull(inLastName, LastName),
    Email = ifnull(inPassword, Password),
    imageURL = ifnull (inImageURL, imageURL)
where
    UserID = inUserID;

end;



create procedure c_deleteFoodItem(itemId int) begin
delete from
    METCanteen.FoodItems
where
    itemID = initemId;

end;



create procedure c_addFoodItem(
    itemId int,
    Name varchar(100),
    category varchar(100),
    price int,
    imageURL varchar(100)
) begin
insert into
    METCanteenSys.FoodItems (itemId, Name, category, price, imageURL)
values
    (
        initemId,
        inname,
        incategory,
        inprice,
        inimageURL
    );

end;



CREATE PROCEDURE `metcanteensys`.`c_addFeedback`(
    inFeedbackID int,
    inFeedback varchar(100),
    inRating int,
    inOrderID int
) begin
insert into
    metcanteensys.Feedbacks(
        FeedbackID,
        Feedback,
        Rating,
        OrderID
    )
values
    (
        inFeedbackID,
        inFeedback,
        inRating,
        inOrderID
    );

end;



CREATE PROCEDURE metcanteensys.c_deleteFeedback(inFeedbackID int) begin
delete from
    metcanteensys.feedbacks
where
    FeedbackID = inFeedbackID;

END;

/ / create procedure c_updateDiscount (
    DiscountID int,
    StudentDiscount float,
    StaffDiscount float
) begin
update
    METCanteenSys.Discount
set
    StudentDiscount = ifnull(inStudentDiscount, StudentDiscount),
    StaffDiscount = ifnull(inStaffDiscount, StaffDiscount)
where
    Discount = inDiscountID;

end;

/ / CREATE DEFINER = `root` @`localhost` PROCEDURE `metcanteensys`.`c_addOrder`(
    inOrderID int,
    inFoodItem varchar(100),
    inBillAmount int,
    inDateAndTime DATETIME,
    inStatus varchar(100),
    inDiscountID int,
    inUserID int
) begin
insert into
    metcanteensys.Orders(
        OrderID,
        FoodItem,
        BillAmount,
        DateAndTime,
        Status,
        DiscountID,
        UserID
    )
values
    (
        inOrderID,
        inFoodItem,
        inBillAmount,
        inDateAndTime,
        inStatus,
        inDiscountID,
        inUserID
    );

END;

/ / 2.c_getAllOrders CREATE DEFINER = `root` @`localhost` PROCEDURE `metcanteensys`.`c_getAllOrders`(
    inOrderID int,
    inFoodItem varchar(100),
    inBillAmount int,
    inDateAndTime DATETIME,
    inStatus varchar(100),
    inDiscountID int,
    inUserID int
) begin
select
    *
from
    metcanteensys.Orders;

END;

/ / 3.c_getOrderByID CREATE DEFINER = `root` @`localhost` PROCEDURE `metcanteensys`.`c_getOrderByID`(
    inOrderID int,
    inFoodItem varchar(100),
    inBillAmount int,
    inDateAndTime DATETIME,
    inStatus varchar(100),
    inDiscountID int,
    inUserID int
) begin
select
    *
from
    metcanteensys.users
where
    UserID = inUserID;

END;

/ / 4.c_UpdateOrderStatus CREATE PROCEDURE metcanteensys.c_updateOrderStatus(inStatus varchar(100), inUserID int) begin
update
    metcanteensys.users
set
    Status = ifnull(inStatus, Status)
where
    ID = inUserID;

END;

/ / create procedure metcanteensys.c_updatefooditems(
    inItemID int,
    inName varchar(100),
    inCategory varchar(100),
    inPrice int,
    inImageURL varchar(100)
) begin
update
    metcanteensys.fooditems
set
    itemId = ifnull(inItemID, itemId),
    name = ifnull(inName, name),
    category = ifnull(inCategory, category),
    price = ifnull(inPrice, price),
    imageurl = ifnull(inImageURL, imageurl)
where
    itemId = inItemID;

end;

/ / create procedure metcanteensys.c_getfooditems(
    inItemID int,
    inName varchar(100),
    inCategory varchar(100),
    inPrice int,
    inImageURL varchar(100)
) begin
select
    *
from
    metcanteensys.FoodItems
where
    itemId = inItemID
    and name = inName
    and category = inCategory
    and price = inPrice
    and imageurl = inImageURL;

end;

/ / create procedure metcanteensys.c_getDiscount(
    inDiscountID int,
    inStudentDiscount float,
    inStaffDiscount float
) begin
select
    *
from
    metcanteensys.Discount
where
    discountid = inDiscountID
    and studentdiscount = inStudentDiscount
    and staffdiscount = inStaffDiscount;

end;

/ / 