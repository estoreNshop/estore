<div style="position: replative;" id="promoContainer" class="row">
	<div id="slider" class="col-md-12" ng-controller="slideController">
		<ul style="position: relative;">
			<li ng-repeat="slide in slides" data-speed="1000" class="promoSlide">
				<img src="{{slide.image}}" alt="{{slide.heading}}" />
				<div class="sb-description">
					<h3>{{slide.heading}}</h3>
					<p>{{slide.text}}</p>
				</div>
				<div class="controls">
					<a href="javascript:void(0);" data-target="prev"
						class="customLink prev">&#x2039;</a> <a href="javascript:void(0);"
						data-target="next" class="customLink next">&#x203a;</a>
				</div>
			</li>
		</ul>
	</div>
</div>
<div class="items-container" ng-controller="CartController">
	<div style="position: relative;" class="row">
		<div id="newProducts" class="col-md-12" data-ride="carousel">
			<ul>
				<li ng-repeat="slide in newArivals" data-speed="1000" class="product">
					<div class="col-md-12" >
					<div class="thumbnail product_thumbnail">
						<div class="product_imgWrapper">
							<img src="{{slide.product_image}}" data-target="#product_display" alt="{{slide.product_alt}}"
								>
							<div class="product_overlay" productoverlaydir="">
								<div class="text-center product_overlayIncrementBtn">
									<button class="btn btn-success product_overlayDecBtn" ng-click="removeItem(slide.id)">
										<i class="fa fa-minus"></i>
									</button>
									<button class="btn btn-success product_overlayAddBtn" ng-click="addItem(slide)">
										<i class="fa fa-plus"></i>
									</button>
								</div>
							</div>
						</div>
						<div class="caption">
							<p class="product_title ng-binding">{{slide.product_title}}</p>
			
							<p class="product_attribute ng-binding">
								{{slide.product_qty}}
							</p>
			
							<p class="product_priceRow">
								<i class="fa fa-rupee product_sp"><b class="ng-binding">{{slide.product_sp}}</b></i>
								<span class="product_mrp">MRP</span> <i
									class="fa fa-rupee product_mrp"> <del class="ng-binding">{{slide.product_mrp}}</del>
								</i>
							</p>
						</div>
					</div>
				</div>
				</li>
			</ul>
		</div>
		<div class="controls">
			<a href="javascript:void(0);" data-target="prev"
				class="customLink prevBtn">&#x2039;</a> 
			<a href="javascript:void(0);"
				data-target="next" class="customLink nextBtn">&#x203a;</a>
		</div>
	</div>
	<div class="row" style="postion: relative">
		<div class="container-fluid">
			<div class="row" id="products">
				<div class="col-md-4 col-sm-6 col-xs-12 product" ng-repeat-start = "product_model in product_collection">
					<div class="thumbnail product_thumbnail">
						<div class="product_imgWrapper">
							<img src="{{product_model.product_image}}" data-target="#product_display" alt="{{product_model.product_alt}}"
								>
							<div class="product_overlay" productoverlaydir="">
								<div class="text-center product_overlayIncrementBtn">
									<button class="btn btn-success product_overlayDecBtn" ng-click="removeItem(product_model.id)">
										<i class="fa fa-minus"></i>
									</button>
									<button class="btn btn-success product_overlayAddBtn" ng-click="addItem(product_model)">
										<i class="fa fa-plus"></i>
									</button>
								</div>
							</div>
						</div>
						<div class="caption">
							<p class="product_title ng-binding">{{product_model.product_title}}</p>
			
							<p class="product_attribute ng-binding">
								{{product_model.product_qty}}
							</p>
			
							<p class="product_priceRow">
								<i class="fa fa-rupee product_sp"><b class="ng-binding">{{product_model.product_sp}}</b></i>
								<span class="product_mrp">MRP</span> <i
									class="fa fa-rupee product_mrp"> <del class="ng-binding">{{product_model.product_mrp}}</del>
								</i>
							</p>
						</div>
					</div>
				</div>
				<div ng-if="$odd" class="clearfix visible-sm-block"></div>
				<div ng-if="$even" class="clearfix visible-xs-block"></div>
				<div ng-if="($index+1)%3 === 0 && $index !== 0" class="clearfix visible-md-block visible-lg-block"></div>
				<div ng-repeat-end></div>
			</div>
		</div>
	</div>
</div>
