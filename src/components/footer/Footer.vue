<template>
  <div>
<footer class="footer">
    <div class="container">
        <div class="row">
        <div class="col-sm-3">
            <h4 class="title">About us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit, libero a molestie consectetur, sapien elit lacinia mi.</p>
            <ul class="social-icon">
                <a href="#" class="social"><i class="fab fa-facebook" aria-hidden="true"></i></a>
                <a href="#" class="social"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                <a href="#" class="social"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                <a href="#" class="social"><i class="fab fa-youtube" aria-hidden="true"></i></a>
                <a href="#" class="social"><i class="fab fa-google" aria-hidden="true"></i></a>
                <a href="#" class="social"><i class="fab fa-dribbble" aria-hidden="true"></i></a>
            </ul>
        </div>
        <div class="col-sm-3">
            <h4 class="title">My Account</h4>
            <span class="acount-icon">          
            <a href="#"><i class="fa fa-heart" aria-hidden="true"></i> List</a>
            <a href="#"><i class="fa fa-users" aria-hidden="true"></i>Group</a>
            <a href="#"><i class="fa fa-user" aria-hidden="true"></i> Profile</a>
            <a href="#"><i class="fa fa-globe" aria-hidden="true"></i> Language</a>           
            </span>
        </div>
        <div class="col-sm-3">
            <h4 class="title">Category</h4>
            <div class="category">
                <a href="#">men</a>
                <a href="#">women</a>
                <a href="#">boy</a>
                <a href="#">girl</a>
                <a href="#">Car</a>
                <a href="#">teshart</a>
                <a href="#">top</a>
                <a href="#">glass</a>
                <a href="#">baby dress</a>          
            </div>
        </div>
        <div class="col-sm-3">
            <h4 class="title">Payment</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <ul class="payment">
                <li><a href="#"><i class="fab fa-cc-amex" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-credit-card" aria-hidden="true"></i></a></li>            
                <li><a href="#"><i class="fab fa-cc-paypal" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fab fa-cc-visa" aria-hidden="true"></i></a></li>
            </ul>
            </div>
        </div>
        <hr>
        <div class="row text-center"><a href="http://lacodeid.com/" style="color: #fff;">Copyright © DressMe 2019</a></div>
    </div>  
</footer>
</div>
</template>
<style type="text/css">
  .footer {
    padding: 50px 0 20px 0;
    background-color: #090c14;
    color: #878c94;
    margin-top: 15px;
}
.footer .title{
  text-align: left;
  color:#fff;
  font-size:25px;
}
.footer .social-icon{
  padding:0px;
  margin:0px;
}
.footer .social-icon a{
  display:inline-block;
  color:#fff;
  font-size:25px;
  padding:5px;
}
.footer .acount-icon a{
  display:block;
  color:#fff;
  font-size:18px;
  padding:5px;
  text-decoration:none;
}
.footer .acount-icon .fa{
  margin-right:25px;
}
.footer .category a {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    padding: 5px 20px;
    margin: 1px;
    border-radius:4px;
    margin-top: 6px;
    background-color: black;
    border: solid 1px #fff;
}
.footer .payment{
  margin:0px;
  padding:0px;
  list-style-type:none
}
.footer .payment li{
  list-style-type:none
}
.footer .payment li a {
    text-decoration: none;
    display: inline-block;
    color: #fff;
    float: left;
    font-size: 25px;
    padding: 10px 10px;
}
</style>