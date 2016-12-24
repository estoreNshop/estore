<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<!DOCTYPE html>
<html lang="en" class="no-js" ng-app="grocery">
	<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="author" content="Shahid Yousuf" />
        <meta name="company" content="FrameworkOnly" />
        <meta name="abstract" content="Connecting Problems & Solutions." />
 
        <title><tiles:insertAttribute name="title" ignore="true" /></title>
        <tiles:insertAttribute name="scriptjs" />
        <tiles:insertAttribute name="stylecss" />
	</head>
	<body>
    	<div class="page">
        	<div class="main-wrapper container container-fluid">
       			<header id="header" class="header">
   					<tiles:insertAttribute name="header" />
       			</header>
       			<div class="main-content-wrapper container-fluid">
                	<div class="main-contens row">
                    	<div class="sidebar col-md-3 col-sm-4 col-xs-12">
                        	<tiles:insertAttribute name="sidebar" />
                        </div>
                        <div class="visible-xs clearefix"></div>
                        <div class="main-content col-md-9 col-sm-8 col-xs-12">
                        	<div class="content-wrapper">
                            	<tiles:insertAttribute name="body" />
                           	</div>
                      	</div>
                    </div>
               	</div>
               	<footer id="footer">
               		<tiles:insertAttribute name="footer" />
               	</footer>
           	</div>
       	</div> 
	</body>
</html>