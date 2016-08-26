core.html.easyui.layout.Tabs = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.easyui.layout.Tabs.superClass.constructor.call(this, id || "coreHtmlEasyuiLayoutTabs" + count);

		/**
		 * 属性
		 */
		var plain = false;
		var scrollIncrement = 100;
		var scrollDuration = 400;
		var toolPosition = "right";
		var tabPosition = "top";
		var headerWidth = 150;
		var tabWidth = undefined;
		var tabHeight = 27;
		var selected = 0;
		var showHeader = true;
		var justified = false;
		var narrow = false;
		var pill = false;

		/**
		 * 事件
		 */
		var onSelect = function(title, index) {

		};
		var onUnselect = function(title, index) {

		};
		var onAdd = function(title, index) {

		};
		var onUpdate = function(title, index) {

		};
		var onContextMenu = function(e, title, index) {

		};

		/**
		 * 获取/设置
		 * 
		 * @param plain
		 */
		this.plain = function() {

			switch (arguments.length) {
			case 0:
				return plain;
			default:
				plain = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param scrollIncrement
		 */
		this.scrollIncrement = function() {

			switch (arguments.length) {
			case 0:
				return scrollIncrement;
			default:
				scrollIncrement = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param scrollDuration
		 */
		this.scrollDuration = function() {

			switch (arguments.length) {
			case 0:
				return scrollDuration;
			default:
				scrollDuration = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param toolPosition
		 */
		this.toolPosition = function() {

			switch (arguments.length) {
			case 0:
				return toolPosition;
			default:
				toolPosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param tabPosition
		 */
		this.tabPosition = function() {

			switch (arguments.length) {
			case 0:
				return tabPosition;
			default:
				tabPosition = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param headerWidth
		 */
		this.headerWidth = function() {

			switch (arguments.length) {
			case 0:
				return headerWidth;
			default:
				headerWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param tabWidth
		 */
		this.tabWidth = function() {

			switch (arguments.length) {
			case 0:
				return tabWidth;
			default:
				tabWidth = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param tabHeight
		 */
		this.tabHeight = function() {

			switch (arguments.length) {
			case 0:
				return tabHeight;
			default:
				tabHeight = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param selected
		 */
		this.selected = function() {

			switch (arguments.length) {
			case 0:
				return selected;
			default:
				selected = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param showHeader
		 */
		this.showHeader = function() {

			switch (arguments.length) {
			case 0:
				return showHeader;
			default:
				showHeader = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param justified
		 */
		this.justified = function() {

			switch (arguments.length) {
			case 0:
				return justified;
			default:
				justified = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param narrow
		 */
		this.narrow = function() {

			switch (arguments.length) {
			case 0:
				return narrow;
			default:
				narrow = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param pill
		 */
		this.pill = function() {

			switch (arguments.length) {
			case 0:
				return pill;
			default:
				pill = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onSelect
		 */
		this.onSelect = function() {

			switch (arguments.length) {
			case 0:
				return onSelect;
			default:
				onSelect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onUnselect
		 */
		this.onUnselect = function() {

			switch (arguments.length) {
			case 0:
				return onUnselect;
			default:
				onUnselect = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onAdd
		 */
		this.onAdd = function() {

			switch (arguments.length) {
			case 0:
				return onAdd;
			default:
				onAdd = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onUpdate
		 */
		this.onUpdate = function() {

			switch (arguments.length) {
			case 0:
				return onUpdate;
			default:
				onUpdate = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置
		 * 
		 * @param onContextMenu
		 */
		this.onContextMenu = function() {

			switch (arguments.length) {
			case 0:
				return onContextMenu;
			default:
				onContextMenu = arguments[0];
				return this;
			}
		};
	};
	// 继承Panel面板模板
	core.lang.Class.extend(Constructor, core.html.easyui.layout.Panel);

	Constructor.prototype.init = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 判断ID是否存在
		if ($jQuery.length === 0) {
			new core.lang.Exception(this, "core.html.easyui.layout.Tabs", "方法异常", "div(id:" + this.id() + ")不存在.");
		}

		// 参数配置
		$jQuery.tabs({
			// 属性
			id : this.id(),
			title : this.title(),
			iconCls : this.iconCls(),
			width : this.width(),
			height : this.height(),
			left : this.left(),
			top : this.top(),
			cls : this.cls(),
			headerCls : this.headerCls(),
			bodyCls : this.bodyCls(),
			style : this.style(),
			fit : this.fit(),
			border : this.border(),
			doSize : this.doSize(),
			noheader : this.noheader(),
			content : this.content(),
			collapsible : this.collapsible(),
			minimizable : this.minimizable(),
			maximizable : this.maximizable(),
			closable : this.closable(),
			tools : this.tools(),
			header : this.header(),
			footer : this.footer(),
			openAnimation : this.openAnimation(),
			openDuration : this.openDuration(),
			closeAnimation : this.closeAnimation(),
			closeDuration : this.closeDuration(),
			collapsed : this.collapsed(),
			minimized : this.minimized(),
			maximized : this.maximized(),
			closed : this.closed(),
			href : this.href(),
			cache : this.cache(),
			loadingMessage : this.loadingMessage(),
			extractor : this.extractor(),
			method : this.method(),
			queryParams : this.queryParams(),
			loader : this.loader(),
			plain : this.plain(),
			scrollIncrement : this.scrollIncrement(),
			scrollDuration : this.scrollDuration(),
			toolPosition : this.toolPosition(),
			tabPosition : this.tabPosition(),
			headerWidth : this.headerWidth(),
			tabWidth : this.tabWidth(),
			tabHeight : this.tabHeight(),
			selected : this.selected(),
			showHeader : this.showHeader(),
			justified : this.justified(),
			narrow : this.narrow(),
			pill : this.pill(),

			// 事件
			onBeforeLoad : this.onBeforeLoad(),
			onLoad : this.onLoad(),
			onLoadError : this.onLoadError(),
			onBeforeOpen : this.onBeforeOpen(),
			onOpen : this.onOpen(),
			onBeforeClose : this.onBeforeClose(),
			onClose : this.onClose(),
			onBeforeDestroy : this.onBeforeDestroy(),
			onDestroy : this.onDestroy(),
			onBeforeCollapse : this.onBeforeCollapse(),
			onCollapse : this.onCollapse(),
			onBeforeExpand : this.onBeforeExpand(),
			onExpand : this.onExpand(),
			onResize : this.onResize(),
			onMove : this.onMove(),
			onMaximize : this.onMaximize(),
			onRestore : this.onRestore(),
			onMinimize : this.onMinimize()
		});

		return this;
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.options = function() {

		return $("#" + this.id()).tabs("options");
	};

	/**
	 * 
	 * @returns
	 */
	Constructor.prototype.panel = function() {

		return $("#" + this.id()).tabs("panel");
	};

	Constructor.prototype.header = function() {

		return $("#" + this.id()).tabs("header");
	};

	Constructor.prototype.footer = function() {

		return $("#" + this.id()).tabs("footer");
	};

	Constructor.prototype.body = function() {

		return $("#" + this.id()).tabs("body");
	};

	Constructor.prototype.setTitle = function(title) {

		return $("#" + this.id()).tabs("setTitle", title);
	};

	Constructor.prototype.open = function(forceOpen) {

		return $("#" + this.id()).tabs("open", forceOpen);
	};

	Constructor.prototype.destroy = function(forceDestroy) {

		return $("#" + this.id()).tabs("destroy", forceDestroy);
	};

	Constructor.prototype.clear = function() {

		return $("#" + this.id()).tabs("clear");
	};

	Constructor.prototype.refresh = function(href) {

		return $("#" + this.id()).tabs("refresh", href);
	};

	Constructor.prototype.doLayout = function() {

		return $("#" + this.id()).tabs("doLayout");
	};

	Constructor.prototype.move = function(options) {

		return $("#" + this.id()).tabs("move", options);
	};

	Constructor.prototype.maximize = function() {

		return $("#" + this.id()).tabs("maximize");
	};

	Constructor.prototype.minimize = function() {

		return $("#" + this.id()).tabs("minimize");
	};

	Constructor.prototype.restore = function() {

		return $("#" + this.id()).tabs("restore");
	};

	Constructor.prototype.collapse = function(animate) {

		return $("#" + this.id()).tabs("collapse", animate);
	};

	Constructor.prototype.expand = function(animate) {

		return $("#" + this.id()).tabs("expand", animate);
	};

	Constructor.prototype.tabs = function() {

		return $("#" + this.id()).tabs("tabs");
	};

	Constructor.prototype.resize = function() {

		return $("#" + this.id()).tabs("resize");
	};

	Constructor.prototype.add = function(options) {

		return $("#" + this.id()).tabs("add", options);
	};

	Constructor.prototype.close = function(which) {

		return $("#" + this.id()).tabs("close", which);
	};

	Constructor.prototype.getTab = function(which) {

		return $("#" + this.id()).tabs("getTab", which);
	};

	Constructor.prototype.getTabIndex = function(tab) {

		return $("#" + this.id()).tabs("getTabIndex", tab);
	};

	Constructor.prototype.getSelected = function() {

		return $("#" + this.id()).tabs("getSelected");
	};

	Constructor.prototype.select = function(which) {

		return $("#" + this.id()).tabs("select", which);
	};

	Constructor.prototype.unselect = function(which) {

		return $("#" + this.id()).tabs("unselect", which);
	};

	Constructor.prototype.showHeader = function() {

		return $("#" + this.id()).tabs("showHeader");
	};

	// 返回构造函数
	return Constructor;
})();