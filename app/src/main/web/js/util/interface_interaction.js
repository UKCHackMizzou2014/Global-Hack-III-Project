    $(function(){
      var container = $("#swipe-container");

      container.dragend({
        minTouchDistance  : "60",
        keyboardNavigation: true,
        pageClass         : "page"
      });

	   #dragend {
	      position: absolute;
	      bottom: 50px;
	      right: 50px;
	      background: #345;
	      padding: 18px;
	      color: #fff;
	      border-radius: 3px;
	      width: 150px;
	      font-size: 15px;
	    }

	    #dragend h1 {
	      font-size: 15px;
	      font-weight: normal;
	      margin-bottom: 12px;
	    }

	    #dragend a {
	      text-decoration: underline;
	      color: #fff
	    }


