<div class="container-fluid top-header">
   <div class="row top-row">
       <div class="col-md-12">
           <ul class="pull-right">
               <li>
                   <span class="contact-support">Contact & Support :</span>
                   <span class="contact-number">+1800 1234 5678</span>
               </li>
               <li>Contact Us</li>
               <li>Help</li>
           </ul>
       </div>
   </div>
   <div class="row cart-row">
       <div class="logo col-xs-12 col-sm-3 col-md-2">
           <div class="logo-img-wrapper col-xs-12"><img src="resources/img/logo.png" class="img-responsive" alt="Logo"></div>
       </div>
       <div class="visible-xs visible-sm clearfix"></div>
       <div class="search-cart col-xs-12 col-sm-9 col-md-10">
           <div class="row">
               <div class="col-xs-12 col-sm-12 col-md-7">
                   <form id="cart-search-form">
                       <select name="category">
                           <option value="-1">All Category</option>
                           <option value="1">Vegiatbles</option>
                           <option value="2">Fruits</option>
                       </select>
                       <span class="seprator"></span>
                       <input type="text" name="item" value="" />
                       <input type="submit" value="" class="search-btn btn btn-default">
                   </form>
               </div>
               <div class="visible-sm clearfix"></div>
               <div class="col-xs-12 col-sm-12 col-md-5">
                   <ul class="pull-right">
                   	 <!-- if user Logined -->
                       <%
                       	if(request.getAttribute("javax.servlet.forward.request_uri").toString().contains("login")== false){
                       %>
                       <li class="my-account"><span></span><a href="login">Login</a></li>
                       <% } %>
                       <li class="my-account"><span></span><a href="register">New User</a></li>
                       <li class="track-order"><span></span>Track Order</li>
                       
                   	<!-- if user not logined 
                   	<li class="login"><span></span>Login</li>  -->
                        
                        <li class="cart" ng-controller="CartCountController"><button ng-click="show()" class="btn">{{getItemCount()}}</button></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="row menu-row">
        <div class="main-menu col-md-12">
            <div class="navigations clearfix">
                <nav role="navigation" class="nav navbar-default topbar-corner" ng-controller="navController">
                    <div class="navbar-header">
                        <button type="button" ng-click="isCollapsed = !isCollapsed" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="nav-top-right collapse navbar-collapse" collapse="isCollapsed" id="navbarCollapse">
                        <ul class="nav navbar-nav pull-right">
                            <li><a href="#" class="msg"></a></li>
                            <li><a href="#" class="notification"></a></li>
                            <li><a href="#" class="settings"></a></li>
                            <li class="user-info dropdown" dropdown>
                                <a class="user dropdown-toggle" href="#" data-toggle="dropdown" dropdown-toggle>
                                    Welcome Manoj Kumar Sharma
                                <b class="caret"></b></a>
                                <ul class="dropdown-menu" dropdown-menu>
                                    <li><a href="/auth/logout">Logout</a></li>
                                    <li><a href="#" class="logout">Update Profile</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <div class="row facility-row">
        <div class="col-md-4 col-sm-6 col-xs-12">
            <img class="img-responsive" src="resources/img/free-shipping.png" alt="Free Shipping" />
            <div class="free-shipping-txt">
                <span class"upper-txt"> Free Shipping</span>
                In Order Min $200
            </div>
        </div>
        <div class="visible-xs clearfix"></div>
        <div class="col-md-4 col-sm-6 col-xs-12">
            <img class="img-responsive" src="resources/img/30-days.png" alt="30 Days Returns" />
            <div class="free-shipping-txt">
                <span class"upper-txt">30 Days Returns</span>
                Money Back Guarantee
            </div>
        </div>
        <div class="visible-sm clearfix"></div>
        <div class="visible-xs clearfix"></div>
        <div class="col-md-4 col-sm-12">
            <img class="img-responsive" src="resources/img/24-7-support.png" alt="24*7 Support" />
            <div class="free-shipping-txt">
                <span class"upper-txt">24*7 Support</span>
                Lifetime Support
            </div>
        </div>
        <div class="visible-sm clearfix"></div>
        <div class="visible-xs clearfix"></div>
    </div>
</div>